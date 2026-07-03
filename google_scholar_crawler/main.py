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
    from bs4 import BeautifulSoup

    url = f"https://scholar.google.com/citations?user={scholar_id}&hl=en"
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/126.0 Safari/537.36"
        ),
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
    }

    html = None
    errors = []
    for backend_name, fetcher in (
        ("curl_cffi", fetch_profile_html_with_curl_cffi),
        ("requests", fetch_profile_html_with_requests),
    ):
        try:
            html = fetcher(url, headers, timeout_seconds)
            print(f"Fetched lightweight metrics page with {backend_name}")
            break
        except Exception as exc:
            errors.append(f"{backend_name}: {exc}")
            print(f"{backend_name} profile fetch failed: {exc}", file=sys.stderr)

    if html is None:
        raise RuntimeError("profile page fetch failed with all backends: " + " | ".join(errors))

    soup = BeautifulSoup(html, "html.parser")

    metrics = {}
    for row in soup.select("#gsc_rsb_st tr"):
        cells = [cell.get_text(" ", strip=True) for cell in row.find_all(["td", "th"])]
        if len(cells) < 3:
            continue
        label = cells[0].lower().replace(" ", "")
        total = int_or_none(cells[1])
        recent = int_or_none(cells[2])
        if "citation" in label or "引用" in label:
            metrics["citedby"] = total
            metrics["citedby5y"] = recent
        elif "h-index" in label or "h指数" in label or "h指數" in label:
            metrics["hindex"] = total
            metrics["hindex5y"] = recent
        elif "i10-index" in label or "i10指数" in label or "i10指數" in label:
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


def first_non_all_metric_value(values):
    if not isinstance(values, dict):
        return None
    for key, value in values.items():
        if str(key).lower() != "all":
            return value
    return None


def metric_values_from_serpapi_table(table):
    metrics = {}
    for row in table or []:
        if not isinstance(row, dict):
            continue
        for raw_name, values in row.items():
            name = str(raw_name).lower().replace("-", "_").replace(" ", "_")
            if not isinstance(values, dict):
                continue
            total = int_or_none(values.get("all"))
            recent = int_or_none(first_non_all_metric_value(values))

            if "citation" in name:
                metrics["citedby"] = total
                metrics["citedby5y"] = recent
            elif name in {"h_index", "hindex", "indice_h"} or name.endswith("_h"):
                metrics["hindex"] = total
                metrics["hindex5y"] = recent
            elif "i10" in name:
                metrics["i10index"] = total
                metrics["i10index5y"] = recent
    return metrics


def serpapi_article_to_publication(article):
    citation_id = article.get("citation_id")
    if not citation_id:
        return None, None

    cited_by = article.get("cited_by") or {}
    link = cited_by.get("link") or ""
    cites_id = []
    if "cites=" in link:
        cites_id = [link.split("cites=", 1)[1].split("&", 1)[0]]

    publication = {
        "container_type": "Publication",
        "source": "SERPAPI_AUTHOR_ARTICLE",
        "bib": {
            "title": article.get("title", ""),
            "author": article.get("authors", ""),
            "citation": article.get("publication", ""),
            "pub_year": str(article.get("year", "")),
        },
        "filled": False,
        "author_pub_id": citation_id,
        "num_citations": int_or_none(cited_by.get("value")) or 0,
    }
    if link:
        publication["citedby_url"] = link
    if cites_id:
        publication["cites_id"] = cites_id
    return citation_id, publication


def parse_serpapi_author_response(data, scholar_id):
    if data.get("error"):
        raise RuntimeError(data["error"])

    author_data = data.get("author") or {}
    cited_by = data.get("cited_by") or {}
    metrics = metric_values_from_serpapi_table(cited_by.get("table"))
    required = ["citedby", "hindex", "i10index"]
    missing = [key for key in required if metrics.get(key) is None]
    if missing:
        raise RuntimeError(f"SerpApi response did not expose metrics: {', '.join(missing)}")

    publications = {}
    for article in data.get("articles") or []:
        citation_id, publication = serpapi_article_to_publication(article)
        if citation_id and publication:
            publications[citation_id] = publication

    interests = []
    for interest in author_data.get("interests") or []:
        if isinstance(interest, dict) and interest.get("title"):
            interests.append(interest["title"])
        elif isinstance(interest, str):
            interests.append(interest)

    cites_per_year = {}
    for item in cited_by.get("graph") or []:
        year = item.get("year")
        citations = int_or_none(item.get("citations"))
        if year and citations is not None:
            cites_per_year[str(year)] = citations

    author = {
        "container_type": "Author",
        "filled": ["basics", "indices", "counts", "publications"],
        "scholar_id": scholar_id,
        "name": author_data.get("name", ""),
        "url_picture": author_data.get("thumbnail", ""),
        "affiliation": author_data.get("affiliations", ""),
        "interests": interests,
        "email_domain": author_data.get("email", ""),
        "publications": publications,
        "cites_per_year": cites_per_year,
        "serpapi_search_metadata": data.get("search_metadata", {}),
        **metrics,
    }
    return normalize_author(author, scholar_id, "serpapi")


def fetch_with_serpapi(scholar_id, api_key, timeout_seconds):
    if not api_key:
        raise RuntimeError("SERPAPI_KEY is not configured")

    import requests

    response = requests.get(
        "https://serpapi.com/search.json",
        params={
            "engine": "google_scholar_author",
            "author_id": scholar_id,
            "hl": "en",
            "num": "100",
            "api_key": api_key,
        },
        timeout=timeout_seconds,
    )
    response.raise_for_status()
    return parse_serpapi_author_response(response.json(), scholar_id)


def fetch_profile_html_with_requests(url, headers, timeout_seconds):
    import requests

    response = requests.get(url, headers=headers, timeout=timeout_seconds)
    response.raise_for_status()
    return response.text


def fetch_profile_html_with_curl_cffi(url, headers, timeout_seconds):
    from curl_cffi import requests as curl_requests

    response = curl_requests.get(
        url,
        headers=headers,
        timeout=timeout_seconds,
        impersonate="chrome124",
    )
    response.raise_for_status()
    return response.text


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


def fetch_fresh_data(scholar_id, attempts, scholarly_timeout, page_timeout, serpapi_key, serpapi_timeout):
    last_error = None
    for attempt in range(1, attempts + 1):
        if serpapi_key:
            print(f"Attempt {attempt}/{attempts}: fetching Google Scholar profile with SerpApi")
            try:
                return fetch_with_serpapi(scholar_id, serpapi_key, serpapi_timeout)
            except Exception as exc:
                last_error = exc
                print(f"SerpApi fetch failed: {exc}", file=sys.stderr)
        elif attempt == 1:
            print("SERPAPI_KEY is not configured; skipping SerpApi primary source")

        print(f"Attempt {attempt}/{attempts}: fetching lightweight metrics page")
        try:
            return fetch_metrics_from_profile_page(scholar_id, page_timeout)
        except Exception as exc:
            last_error = exc
            print(f"profile page fetch failed: {exc}", file=sys.stderr)

        print(f"Attempt {attempt}/{attempts}: fetching Google Scholar profile with scholarly")
        try:
            return fetch_with_scholarly(scholar_id, scholarly_timeout)
        except Exception as exc:
            last_error = exc
            print(f"scholarly fetch failed: {exc}", file=sys.stderr)

        if attempt < attempts:
            time.sleep(min(30, attempt * 10))

    raise RuntimeError(f"all Google Scholar fetch attempts failed: {last_error}")


def main():
    scholar_id = os.environ["GOOGLE_SCHOLAR_ID"]
    attempts = int(os.environ.get("SCHOLAR_FETCH_ATTEMPTS", "3"))
    scholarly_timeout = int(os.environ.get("SCHOLARLY_TIMEOUT_SECONDS", "150"))
    page_timeout = int(os.environ.get("PROFILE_PAGE_TIMEOUT_SECONDS", "30"))
    serpapi_key = os.environ.get("SERPAPI_KEY", "").strip()
    serpapi_timeout = int(os.environ.get("SERPAPI_TIMEOUT_SECONDS", "45"))
    max_previous_age_days = float(os.environ.get("MAX_PREVIOUS_DATA_AGE_DAYS", "3"))
    previous_data_path = os.environ.get("PREVIOUS_GS_DATA_PATH")
    previous_author = load_previous_data(previous_data_path)

    try:
        author = fetch_fresh_data(
            scholar_id,
            attempts,
            scholarly_timeout,
            page_timeout,
            serpapi_key,
            serpapi_timeout,
        )
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
