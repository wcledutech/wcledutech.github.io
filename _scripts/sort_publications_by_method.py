"""Reorder method-list citations using verified publication metadata, preserving their text."""

import argparse
from dataclasses import dataclass
from html.parser import HTMLParser
import json
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit

from _scripts.sort_publication_index import (
    INDEX_PATH, POLICY_PATH, author_position, corresponding_rank,
    is_co_first_author, is_last_author, normalized, ordering_group,
    publication_group, sole_last_author_criteria, verified_jif,
)


PAGE_PATH = Path(__file__).resolve().parents[1] / "_pages/publications.md"


@dataclass
class MethodGroup:
    title: str
    summary_end: int
    end: int


class MethodParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_section = False
        self.in_group = False
        self.in_summary = False
        self.in_count = False
        self.title = ""
        self.summary_end = None
        self.groups = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "section" and attrs.get("id") == "research-methods":
            self.in_section = True
        if self.in_section and tag == "details" and "method-group" in attrs.get("class", "").split():
            if self.in_group:
                raise ValueError("Nested method groups are not supported")
            self.in_group = True
            self.title = ""
            self.summary_end = None
        if self.in_group and tag == "summary":
            self.in_summary = True
        if self.in_summary and tag == "span":
            self.in_count = True

    def handle_data(self, data):
        if self.in_summary and not self.in_count:
            self.title += data

    def handle_endtag(self, tag):
        if tag == "span":
            self.in_count = False
        if self.in_summary and tag == "summary":
            self.in_summary = False
            self.summary_end = self.getpos()[0] - 1
        if self.in_group and tag == "details":
            if self.summary_end is None:
                raise ValueError("Method group is missing its summary")
            self.groups.append(MethodGroup(self.title.strip(), self.summary_end, self.getpos()[0] - 1))
            self.in_group = False
        if self.in_section and tag == "section":
            self.in_section = False


def method_groups(source):
    parser = MethodParser()
    parser.feed(source)
    parser.close()
    if parser.in_group or parser.in_section or not parser.groups:
        raise ValueError("Missing or unclosed research-methods section")
    return parser.groups


def citation_doi(line):
    # Citations are single-line Markdown bullets ending with a DOI link.
    # Greedy URL matching retains parentheses inside DOIs such as ETS.202501_28(1).SP02.
    match = re.search(r"\]\((https://doi\.org/\S+)\)\s*$", line)
    if not line.startswith("- ") or match is None:
        raise ValueError("Expected a single-line citation ending with a DOI link")
    return unquote(urlsplit(match.group(1)).path).lstrip("/").casefold()


def method_order_key(paper, policy):
    position = author_position(paper, policy)
    group = publication_group(paper, policy)
    tie = (-int(paper["year"]), normalized(paper["title"]), paper["doi"].lower())
    if position == 1:
        jif = verified_jif(paper, policy) if group == 0 else 0
        return (int(is_co_first_author(paper, policy)), ordering_group(paper, policy),
                paper["category"] == "preprint", -jif, *tie)
    if is_last_author(paper, policy):
        role = corresponding_rank(paper, policy)
        criteria = sole_last_author_criteria(paper, policy) if role == 0 else (0, 0)
        return (3, role, *criteria, group, *tie)
    return (2, position, group, *tie)


def reorder_methods(source, papers, policy):
    indexed = {p["doi"].lower(): p for p in papers}
    lines = source.splitlines(keepends=True)
    for group in method_groups(source):
        slots = [i for i in range(group.summary_end + 1, group.end) if lines[i].strip()]
        citations = [lines[i].rstrip("\r\n") for i in slots]
        dois = [citation_doi(line) for line in citations]
        if len(dois) != len(set(dois)):
            raise ValueError(f"Duplicate DOI in {group.title}")
        missing = set(dois) - indexed.keys()
        if missing:
            raise ValueError(f"Unknown DOI in {group.title}: {sorted(missing)}")
        ordered = sorted(citations, key=lambda line: method_order_key(indexed[citation_doi(line)], policy))
        for i, citation in zip(slots, ordered):
            ending = lines[i][len(lines[i].rstrip("\r\n")):]
            lines[i] = citation + ending
    return "".join(lines)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--write", action="store_true", help="Reorder the method section in place")
    args = parser.parse_args()
    with PAGE_PATH.open(encoding="utf-8", newline="") as source_file:
        source = source_file.read()
    papers = json.loads(INDEX_PATH.read_text(encoding="utf-8"))
    policy = json.loads(POLICY_PATH.read_text(encoding="utf-8"))
    ordered = reorder_methods(source, papers, policy)
    if args.write:
        with PAGE_PATH.open("w", encoding="utf-8", newline="") as output:
            output.write(ordered)
        print(f"Ordered {len(method_groups(source))} method groups; citation text unchanged.")
    elif source != ordered:
        parser.exit(1, "Method order is stale. Run: python -m _scripts.sort_publications_by_method --write\n")
    else:
        print(f"PASS: {len(method_groups(source))} method groups follow the author-role ordering policy.")


if __name__ == "__main__":
    main()
