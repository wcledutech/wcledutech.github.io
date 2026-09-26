from copy import deepcopy
import json
from pathlib import Path
import unittest

from _scripts.sort_publication_index import author_position, ordered_publications, publication_group


ROOT = Path(__file__).resolve().parents[1]
PAPERS = json.loads((ROOT / "_data/publication_index.json").read_text(encoding="utf-8"))
POLICY = json.loads((ROOT / "_data/publication_index_ordering.json").read_text(encoding="utf-8"))


class PublicationIndexOrderingTest(unittest.TestCase):
    def test_index_is_sorted_and_sorting_preserves_every_field(self):
        original = deepcopy(PAPERS)
        ordered = ordered_publications(PAPERS, POLICY)
        self.assertEqual(PAPERS, ordered)
        self.assertEqual(PAPERS, original)
        self.assertEqual(ordered, ordered_publications(list(reversed(PAPERS)), POLICY))
        self.assertEqual(len({p["doi"].lower() for p in ordered}), 82)
        self.assertEqual({p["doi"]: p for p in ordered}, {p["doi"]: p for p in original})

    def test_every_year_has_journals_before_conferences_and_other_records(self):
        for year in {p["year"] for p in PAPERS}:
            year_papers = [p for p in PAPERS if p["year"] == year]
            groups = [publication_group(p, POLICY) for p in year_papers]
            self.assertEqual(groups, sorted(groups), year)
            for group in set(groups):
                positions = [author_position(p, POLICY) for p in year_papers
                             if publication_group(p, POLICY) == group]
                self.assertEqual(positions, sorted(positions), (year, group))

    def test_first_author_journals_use_numeric_jif_descending(self):
        expected = {
            2026: ["10.1007/s00371-025-04265-1"],
            2025: [
                "10.1177/07356331251322470", "10.1007/s10639-025-13487-8",
                "10.1080/10447318.2024.2383033", "10.1111/jcal.13117",
                "10.1007/s11423-025-10535-5", "10.1007/s12144-025-07813-z",
            ],
            2024: [
                "10.1080/10447318.2023.2291609", "10.1057/s41599-024-02717-y",
                "10.1016/j.dib.2024.111147",
            ],
        }
        for year, dois in expected.items():
            actual = [p["doi"].lower() for p in PAPERS if int(p["year"]) == year
                      and publication_group(p, POLICY) == 0 and author_position(p, POLICY) == 1]
            self.assertEqual(actual, dois)
        policy = deepcopy(POLICY)
        policy["journal_impact_factors"]["High"] = {"value": 10.2}
        policy["journal_impact_factors"]["Low"] = {"value": 9.8}
        sample = [dict(PAPERS[0], doi="low", journal="Low"),
                  dict(PAPERS[0], doi="high", journal="High")]
        self.assertEqual(ordered_publications(sample, policy)[0]["doi"], "high")

    def test_only_owner_co_first_changes_author_position(self):
        owner = "Chengliang Wang"
        sample = {"doi": "example", "authors": ["A", owner, "B"],
                  "corresponding_authors": [owner], "co_first_authors": ["A", "B"]}
        self.assertEqual(author_position(sample, POLICY), 2)
        sample["co_first_authors"] = ["A", owner]
        self.assertEqual(author_position(sample, POLICY), 1)
        for alias in POLICY["owner_names"]:
            self.assertEqual(author_position({"doi": alias, "authors": [alias]}, POLICY), 1)

    def test_proceedings_overrides_and_preprint(self):
        indexed = {p["doi"].lower(): p for p in PAPERS}
        for doi in POLICY["conference_dois"]:
            self.assertEqual(publication_group(indexed[doi], POLICY), 1)
        year_2026 = [p for p in PAPERS if int(p["year"]) == 2026]
        self.assertEqual(year_2026[-2]["doi"], "10.1007/978-3-032-29791-4_24")
        self.assertEqual(year_2026[-1]["category"], "preprint")
        self.assertEqual([p for p in PAPERS if int(p["year"]) == 2022][-1]["category"], "proceedings-article")

    def test_missing_jif_stops_instead_of_guessing(self):
        sample = dict(PAPERS[0], journal="Unverified journal")
        with self.assertRaisesRegex(ValueError, "Verify a 2025 JIF"):
            ordered_publications([sample], POLICY)


if __name__ == "__main__":
    unittest.main()
