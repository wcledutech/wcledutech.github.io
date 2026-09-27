"""Keep the server-rendered index in its curated yearly publication order."""

import argparse
from collections import defaultdict
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


def is_last_author(paper, policy):
    # A first/co-first credit keeps its existing priority, even in the last slot.
    return (paper["authors"][-1] in policy["owner_names"]
            and author_position(paper, policy) != 1)


def corresponding_rank(paper, policy):
    correspondents = set(paper.get("corresponding_authors", []))
    if not correspondents.intersection(policy["owner_names"]):
        return 2
    return 0 if len(correspondents) == 1 else 1


def ordered_publications(papers, policy):
    metrics = {normalized(name): entry["value"]
               for name, entry in policy["journal_impact_factors"].items()}

    def verified_jif(paper):
        journal = normalized(paper["journal"])
        if journal not in metrics or metrics[journal] is None:
            raise ValueError(f"Verify a {policy['jif_year']} JIF for {paper['journal']}")
        return metrics[journal]

    def key(paper):
        group = publication_group(paper, policy)
        position = author_position(paper, policy)
        impact_factor = 0
        # Only first/co-first journal papers use JIF as the next ordering key.
        if group == 0 and position == 1:
            impact_factor = verified_jif(paper)
        return (-int(paper["year"]), group, position, -impact_factor,
                normalized(paper["title"]), paper["doi"].lower())

    def last_author_key(paper):
        role = corresponding_rank(paper, policy)
        relevance, impact_factor = 0, 0
        if role == 0:
            entry = policy["education_relevance"].get(paper["doi"].lower())
            if entry is None:
                raise ValueError(f"Review education relevance for {paper['doi']}")
            relevance = policy["education_relevance_levels"][entry["level"]]
            if publication_group(paper, policy) == 0:
                impact_factor = verified_jif(paper)
        criteria = {"education_relevance": relevance, "jif": -impact_factor}
        return (role, *(criteria[name] for name in policy["sole_last_author_priority"]),
                author_position(paper, policy), normalized(paper["title"]),
                paper["doi"].lower())

    ordered = sorted(papers, key=key)
    last_author_slots = defaultdict(list)
    for index, paper in enumerate(ordered):
        if is_last_author(paper, policy):
            last_author_slots[(int(paper["year"]), publication_group(paper, policy))].append(index)

    # Reorder only last-author slots within a year/type, leaving all others in place.
    for slots in last_author_slots.values():
        last_author_papers = sorted((ordered[i] for i in slots), key=last_author_key)
        for index, paper in zip(slots, last_author_papers):
            ordered[index] = paper
    return ordered


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
