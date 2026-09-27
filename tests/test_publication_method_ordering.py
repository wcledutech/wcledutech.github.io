from collections import Counter
from copy import deepcopy
import json
from pathlib import Path
import unittest

from _scripts.sort_publication_index import (
    author_position, corresponding_rank, is_co_first_author, is_last_author,
    sole_last_author_criteria,
)
from _scripts.sort_publications_by_method import (
    citation_doi, method_groups, method_order_key, reorder_methods,
)


ROOT = Path(__file__).resolve().parents[1]
PAPERS = json.loads((ROOT / "_data/publication_index.json").read_text(encoding="utf-8"))
POLICY = json.loads((ROOT / "_data/publication_index_ordering.json").read_text(encoding="utf-8"))
INDEXED = {paper["doi"].lower(): paper for paper in PAPERS}
with (ROOT / "_pages/publications.md").open(encoding="utf-8", newline="") as page:
    SOURCE = page.read()


def group_citations(source):
    lines = source.splitlines(keepends=True)
    return {group.title: [line.rstrip("\r\n") for line in lines[group.summary_end + 1:group.end]
                          if line.strip()] for group in method_groups(source)}


class PublicationMethodOrderingTest(unittest.TestCase):
    def test_current_groups_are_sorted_and_idempotent(self):
        self.assertEqual(reorder_methods(SOURCE, PAPERS, POLICY), SOURCE)
        self.assertEqual(len(method_groups(SOURCE)), 10)
        self.assertEqual([len(lines) for lines in group_citations(SOURCE).values()],
                         [8, 12, 23, 7, 5, 2, 2, 5, 5, 8])

    def test_first_then_co_first_then_other_positions_then_last(self):
        for title, lines in group_citations(SOURCE).items():
            papers = [INDEXED[citation_doi(line)] for line in lines]
            tiers = [int(is_co_first_author(p, POLICY)) if author_position(p, POLICY) == 1
                     else 3 if is_last_author(p, POLICY) else 2 for p in papers]
            self.assertEqual(tiers, sorted(tiers), title)
            last = [p for p in papers if is_last_author(p, POLICY)]
            roles = [corresponding_rank(p, POLICY) for p in last]
            self.assertEqual(roles, sorted(roles), title)
            sole = [sole_last_author_criteria(p, POLICY) for p in last if corresponding_rank(p, POLICY) == 0]
            self.assertEqual(sole, sorted(sole), title)

    def test_experimental_list_uses_verified_roles_across_years(self):
        lines = group_citations(SOURCE)["Quasi-Experimental and Experimental Studies"]
        self.assertEqual([citation_doi(line) for line in lines], [
            "10.1177/07356331251322470",
            "10.1007/s10639-025-13487-8",
            "10.1177/13621688251391412",
            "10.3389/fpsyg.2022.839982",
            "10.1057/s41599-024-02751-w",
            "10.1108/bfj-11-2024-1178",
            "10.1080/10447318.2026.2692021",
            "10.1007/978-3-032-29791-4_24",
        ])

    def test_citations_boundaries_and_line_endings_are_preserved(self):
        groups = method_groups(SOURCE)
        scrambled = SOURCE.splitlines(keepends=True)
        slots = set()
        for group in groups:
            indices = [i for i in range(group.summary_end + 1, group.end) if scrambled[i].strip()]
            citations = [scrambled[i].rstrip("\r\n") for i in indices][::-1]
            for i, citation in zip(indices, citations):
                ending = scrambled[i][len(scrambled[i].rstrip("\r\n")):]
                scrambled[i] = citation + ending
            slots.update(indices)
        scrambled = "".join(scrambled)
        before = deepcopy(PAPERS)
        reordered = reorder_methods(scrambled, PAPERS, POLICY)
        self.assertEqual(reordered, SOURCE)
        self.assertEqual(PAPERS, before)
        for i, (old, new) in enumerate(zip(scrambled.splitlines(keepends=True), reordered.splitlines(keepends=True))):
            if i not in slots:
                self.assertEqual(old, new)
            self.assertEqual(old[len(old.rstrip("\r\n")):], new[len(new.rstrip("\r\n")):])
        for name, citations in group_citations(scrambled).items():
            self.assertEqual(Counter(citations), Counter(group_citations(reordered)[name]))

    def test_doi_case_and_embedded_parentheses(self):
        self.assertEqual(citation_doi("- Text [DOI](https://doi.org/10.30191/ETS.202501_28(1).SP02)\r\n"),
                         "10.30191/ets.202501_28(1).sp02")

    def test_unknown_duplicate_and_multiline_entries_fail_closed(self):
        doi = "10.1177/07356331251322470"
        with self.assertRaisesRegex(ValueError, "Unknown DOI"):
            reorder_methods(SOURCE.replace(doi, "10.0000/unknown"), PAPERS, POLICY)
        with self.assertRaisesRegex(ValueError, "Duplicate DOI"):
            reorder_methods(SOURCE.replace("10.1007/s10639-025-13487-8", doi), PAPERS, POLICY)
        malformed = SOURCE.splitlines(keepends=True)
        malformed.insert(method_groups(SOURCE)[0].summary_end + 1, "Unexpected continuation\n")
        with self.assertRaisesRegex(ValueError, "single-line citation"):
            reorder_methods("".join(malformed), PAPERS, POLICY)

    def test_first_author_preprints_are_not_sent_to_the_end(self):
        preprint = next(p for p in PAPERS if p["category"] == "preprint")
        ordinary = dict(preprint, co_first_authors=[])
        last = INDEXED["10.1016/j.ijme.2026.101430"]
        self.assertLess(method_order_key(ordinary, POLICY), method_order_key(preprint, POLICY))
        self.assertLess(method_order_key(preprint, POLICY), method_order_key(last, POLICY))


if __name__ == "__main__":
    unittest.main()
