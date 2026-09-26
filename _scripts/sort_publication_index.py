"""Keep the server-rendered index in its curated yearly publication order."""

import argparse
import html
import json
from pathlib import Path
import unicodedata


ROOT = Path(__file__).resolve().parents[1]
INDEX_PATH = ROOT / "_data/publication_index.json"
POLICY_PATH = ROOT / "_data/publication_index_ordering.json"


def normalized(text):
    return unicodedata.normalize("NFKC", html.unescape(text)).casefold()


def publication_group(paper, policy):
    if (paper["doi"].lower() in policy["conference_dois"]
            or paper["category"] == "proceedings-article"):
        return 1
    if paper["category"] in ("journal-article", "journal-correspondence"):
        return 0
    return 2


def author_position(paper, policy):
    owners = set(policy["owner_names"])
    positions = [i + 1 for i, name in enumerate(paper["authors"]) if name in owners]
    if len(positions) != 1:
        raise ValueError(f"Expected exactly one owner in {paper['doi']}")
    if owners.intersection(paper.get("co_first_authors", [])):
        return 1
    return positions[0]


def ordered_publications(papers, policy):
    metrics = {normalized(name): entry["value"]
               for name, entry in policy["journal_impact_factors"].items()}

    def key(paper):
        group = publication_group(paper, policy)
        position = author_position(paper, policy)
        impact_factor = 0
        # Only first/co-first journal papers use JIF as the next ordering key.
        if group == 0 and position == 1:
            journal = normalized(paper["journal"])
            if journal not in metrics:
                raise ValueError(f"Verify a {policy['jif_year']} JIF for {paper['journal']}")
            impact_factor = metrics[journal]
        return (-int(paper["year"]), group, position, -impact_factor,
                normalized(paper["title"]), paper["doi"].lower())

    return sorted(papers, key=key)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--write", action="store_true", help="Reorder the index JSON in place")
    args = parser.parse_args()
    papers = json.loads(INDEX_PATH.read_text(encoding="utf-8"))
    policy = json.loads(POLICY_PATH.read_text(encoding="utf-8"))
    ordered = ordered_publications(papers, policy)
    if args.write:
        INDEX_PATH.write_text(json.dumps(ordered, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"Ordered {len(ordered)} publications; bibliographic fields unchanged.")
    elif papers != ordered:
        parser.exit(1, "Index order is stale. Run: python _scripts/sort_publication_index.py --write\n")
    else:
        print(f"PASS: {len(papers)} publications follow the yearly ordering policy.")


if __name__ == "__main__":
    main()
