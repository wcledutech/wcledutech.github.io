import json
import os
import sys
import time
import traceback
from datetime import datetime, timezone
from multiprocessing import Process, Queue
from pathlib import Path
from queue import Empty

try:
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")
except AttributeError:
    pass

RESULTS_DIR = Path("results")
GS_DATA_PATH = RESULTS_DIR / "gs_data.json"
SHIELDS_DATA_PATH = RESULTS_DIR / "gs_data_shieldsio.json"
MONOTONIC_METRIC_KEYS = (
    "citedby",
    "citedby5y",
    "hindex",
    "hindex5y",
    "i10index",
    "i10index5y",
)


def utc_now():
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def parse_utc_datetime(value):
    if not value:
        return None
    try:
        normalized = str(value).replace("Z", "+00:00")
        parsed = datetime.fromisoformat(normalized)
    except ValueError:
        return None
    if parsed.tzinfo is None:
        return parsed.replace(tzinfo=timezone.utc)
    return parsed.astimezone(timezone.utc)


def int_or_none(value):
    if value is None:
        return None
    cleaned = str(value).replace(",", "").strip()
    if not cleaned:
        return None
    return int(cleaned)


def metric_int(author, key):
    if not author:
        return None
    try:
        return int_or_none(author.get(key))
    except (TypeError, ValueError):
        return None


def normalize_author(author, scholar_id, source):
    author["scholar_id"] = scholar_id
    author["source"] = source
    author["updated"] = utc_now()
    author["update_status"] = "fresh"
    publications = author.get("publications") or []
    if isinstance(publications, list):
        author["publications"] = {
            item.get("author_pub_id"): item
            for item in publications
            if item.get("author_pub_id")
        }
    return author


def write_outputs(author):
    RESULTS_DIR.mkdir(exist_ok=True)
    with GS_DATA_PATH.open("w", encoding="utf-8") as outfile:
        json.dump(author, outfile, ensure_ascii=False)

    shieldio_data = {
        "schemaVersion": 1,
        "label": "citations",
        "message": f"{author.get('citedby', '')}",
    }
    with SHIELDS_DATA_PATH.open("w", encoding="utf-8") as outfile:
        json.dump(shieldio_data, outfile, ensure_ascii=False)


def fetch_with_scholarly_worker(scholar_id, queue):
    try:
        from scholarly import scholarly

        author = scholarly.search_author_id(scholar_id)
        scholarly.fill(author, sections=["basics", "indices", "counts", "publications"])
        queue.put({"ok": True, "author": normalize_author(author, scholar_id, "scholarly")})
    except Exception:
        queue.put({"ok": False, "error": traceback.format_exc()})


def fetch_with_scholarly(scholar_id, timeout_seconds):
    queue = Queue()
    process = Process(target=fetch_with_scholarly_worker, args=(scholar_id, queue))
    process.start()
    process.join(timeout_seconds)
    if process.is_alive():
        process.terminate()
        process.join(10)
        raise TimeoutError(f"scholarly fetch exceeded {timeout_seconds} seconds")

    try:
        result = queue.get_nowait()
    except Empty as exc:
        raise RuntimeError("scholarly fetch exited without returning data") from exc

    if not result.get("ok"):
        raise RuntimeError(result.get("error", "unknown scholarly fetch error"))
    return result["author"]


def fetch_metrics_from_profile_page(scholar_id, timeout_seconds):
    import requests
    from bs4 import BeautifulSoup

    url = f"https://scholar.google.com/citations?user={scholar_id}&hl=en"
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/126.0 Safari/537.36"
        )
    }
    response = requests.get(url, headers=headers, timeout=timeout_seconds)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")

    metrics = {}
    for row in soup.select("#gsc_rsb_st tr"):
        cells = [cell.get_text(" ", strip=True) for cell in row.find_all(["td", "th"])]
        if len(cells) < 3:
            continue
        label = cells[0].lower()
        total = int_or_none(cells[1])
        recent = int_or_none(cells[2])
        if "citation" in label:
            metrics["citedby"] = total
            metrics["citedby5y"] = recent
        elif "h-index" in label:
            metrics["hindex"] = total
            metrics["hindex5y"] = recent
        elif "i10-index" in label:
            metrics["i10index"] = total
            metrics["i10index5y"] = recent

    required = ["citedby", "hindex", "i10index"]
    missing = [key for key in required if metrics.get(key) is None]
    if missing:
        raise RuntimeError(f"profile page did not expose metrics: {', '.join(missing)}")

    name_element = soup.select_one("#gsc_prf_in")
    author = {
        "container_type": "Author",
        "filled": ["basics", "indices"],
        "scholar_id": scholar_id,
        "name": name_element.get_text(" ", strip=True) if name_element else "",
        "publications": {},
        **metrics,
    }
    return normalize_author(author, scholar_id, "profile-page")


def load_previous_data(path, mark_as_fallback=False, max_age_days=None):
    if not path:
        return None
    previous_path = Path(path)
    if not previous_path.exists():
        return None
    with previous_path.open("r", encoding="utf-8") as infile:
        author = json.load(infile)

    if mark_as_fallback:
        author["update_status"] = "previous-data-fallback"
        author["last_attempted"] = utc_now()
        updated_at = parse_utc_datetime(author.get("updated"))
        if updated_at and max_age_days is not None:
            age_days = (datetime.now(timezone.utc) - updated_at).total_seconds() / 86400
            author["fallback_age_days"] = round(age_days, 2)
            author["fallback_max_age_days"] = max_age_days
            if age_days > max_age_days:
                author["update_status"] = "stale-previous-data-fallback"
    return author


def preserve_previous_context(author, previous_author):
    if not previous_author:
        return author

    if not author.get("publications") and previous_author.get("publications"):
        author["publications"] = previous_author["publications"]
        author["publication_data_status"] = "previous-data-preserved"

    for key in (
        "name",
        "url_picture",
        "affiliation",
        "organization",
        "interests",
        "email_domain",
        "homepage",
    ):
        if not author.get(key) and previous_author.get(key):
            author[key] = previous_author[key]

    return author


def guard_metric_regression(author, previous_author):
    if not previous_author:
        return author

    guarded_metrics = {}
    for key in MONOTONIC_METRIC_KEYS:
        current_value = metric_int(author, key)
        previous_value = metric_int(previous_author, key)
        if previous_value is None:
            continue
        if current_value is None or current_value < previous_value:
            author[key] = previous_value
            guarded_metrics[key] = {
                "fetched": current_value,
                "previous": previous_value,
                "published": previous_value,
            }

    if guarded_metrics:
        author["metric_regression_guard"] = guarded_metrics
        if author.get("update_status") == "fresh":
            author["update_status"] = "fresh-guarded"

    return author


def fetch_fresh_data(scholar_id, attempts, scholarly_timeout, page_timeout):
    last_error = None
    for attempt in range(1, attempts + 1):
        print(f"Attempt {attempt}/{attempts}: fetching Google Scholar profile with scholarly")
        try:
            return fetch_with_scholarly(scholar_id, scholarly_timeout)
        except Exception as exc:
            last_error = exc
            print(f"scholarly fetch failed: {exc}", file=sys.stderr)

        print(f"Attempt {attempt}/{attempts}: fetching lightweight metrics page")
        try:
            return fetch_metrics_from_profile_page(scholar_id, page_timeout)
        except Exception as exc:
            last_error = exc
            print(f"profile page fetch failed: {exc}", file=sys.stderr)

        if attempt < attempts:
            time.sleep(min(30, attempt * 10))

    raise RuntimeError(f"all Google Scholar fetch attempts failed: {last_error}")


def main():
    scholar_id = os.environ["GOOGLE_SCHOLAR_ID"]
    attempts = int(os.environ.get("SCHOLAR_FETCH_ATTEMPTS", "3"))
    scholarly_timeout = int(os.environ.get("SCHOLARLY_TIMEOUT_SECONDS", "150"))
    page_timeout = int(os.environ.get("PROFILE_PAGE_TIMEOUT_SECONDS", "30"))
    max_previous_age_days = float(os.environ.get("MAX_PREVIOUS_DATA_AGE_DAYS", "3"))
    previous_data_path = os.environ.get("PREVIOUS_GS_DATA_PATH")
    previous_author = load_previous_data(previous_data_path)

    try:
        author = fetch_fresh_data(scholar_id, attempts, scholarly_timeout, page_timeout)
        author = preserve_previous_context(author, previous_author)
        author = guard_metric_regression(author, previous_author)
    except Exception as exc:
        print(f"fresh fetch failed: {exc}", file=sys.stderr)
        author = load_previous_data(
            previous_data_path,
            mark_as_fallback=True,
            max_age_days=max_previous_age_days,
        )
        if author is None:
            raise
        print("Using previous published Google Scholar stats as fallback", file=sys.stderr)

    write_outputs(author)
    summary = {
        "update_status": author.get("update_status"),
        "source": author.get("source"),
        "updated": author.get("updated"),
        "last_attempted": author.get("last_attempted"),
        "fallback_age_days": author.get("fallback_age_days"),
        "fallback_max_age_days": author.get("fallback_max_age_days"),
        "metric_regression_guard": author.get("metric_regression_guard"),
        "citedby": author.get("citedby"),
        "citedby5y": author.get("citedby5y"),
        "hindex": author.get("hindex"),
        "hindex5y": author.get("hindex5y"),
        "i10index": author.get("i10index"),
        "i10index5y": author.get("i10index5y"),
    }
    print(json.dumps(summary, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
