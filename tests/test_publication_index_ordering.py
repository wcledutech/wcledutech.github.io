from copy import deepcopy
import json
from pathlib import Path
import unittest

from _scripts.sort_publication_index import (
    author_position, corresponding_rank, is_co_first_author, is_last_author, normalized,
    ordered_publications, ordering_group, publication_group,
)


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
            groups = [ordering_group(p, POLICY) for p in year_papers]
            self.assertEqual(groups, sorted(groups), year)
            for group in set(groups):
                positions = [author_position(p, POLICY) for p in year_papers
                             if ordering_group(p, POLICY) == group
                             and not is_last_author(p, POLICY)]
                self.assertEqual(positions, sorted(positions), (year, group))

    def test_non_last_author_slots_keep_the_baseline_order(self):
        metrics = {normalized(k): v["value"]
                   for k, v in POLICY["journal_impact_factors"].items()}

        def previous_key(paper):
            group = publication_group(paper, POLICY)
            position = author_position(paper, POLICY)
            jif = metrics[normalized(paper["journal"])] if group == 0 and position == 1 else 0
            return (-int(paper["year"]), ordering_group(paper, POLICY), position,
                    is_co_first_author(paper, POLICY), paper["category"] == "preprint", -jif,
                    normalized(paper["title"]), paper["doi"].lower())

        previous = sorted(PAPERS, key=previous_key)
        for i, paper in enumerate(previous):
            if not is_last_author(paper, POLICY):
                self.assertEqual(PAPERS[i], paper)

    def test_last_authors_prioritize_sole_shared_then_non_corresponding(self):
        for year in {p["year"] for p in PAPERS}:
            for group in (0, 1, 2):
                papers = [p for p in PAPERS if p["year"] == year
                          and publication_group(p, POLICY) == group and is_last_author(p, POLICY)]
                ranks = [corresponding_rank(p, POLICY) for p in papers]
                self.assertEqual(ranks, sorted(ranks), (year, group))

    def test_education_precedes_jif_for_sole_corresponding_last_authors(self):
        self.assertEqual(POLICY["sole_last_author_priority"], ["education_relevance", "jif"])
        for year in {p["year"] for p in PAPERS}:
            for group in (0, 1, 2):
                papers = [p for p in PAPERS if p["year"] == year
                          and publication_group(p, POLICY) == group
                          and is_last_author(p, POLICY) and corresponding_rank(p, POLICY) == 0]
                criteria = []
                for paper in papers:
                    relevance = POLICY["education_relevance"][paper["doi"].lower()]
                    rank = POLICY["education_relevance_levels"][relevance["level"]]
                    jif = POLICY["journal_impact_factors"][paper["journal"]]["value"] if group == 0 else 0
                    criteria.append((rank, -jif))
                self.assertEqual(criteria, sorted(criteria), (year, group))

    def test_last_author_role_overrides_number_of_authors_and_jif(self):
        owner = POLICY["owner_names"][0]
        base = dict(PAPERS[0], co_first_authors=[], year=2026)
        sample = [
            dict(base, doi="none", authors=["A", owner], corresponding_authors=["A"], journal="Nature"),
            dict(base, doi="shared", authors=["A", "B", owner], corresponding_authors=["A", owner], journal="Nature"),
            dict(base, doi="sole", authors=["A", "B", "C", "D", owner], corresponding_authors=[owner], journal="Discover Computing"),
        ]
        policy = deepcopy(POLICY)
        policy["education_relevance"]["sole"] = {"level": "other"}
        self.assertEqual([p["doi"] for p in ordered_publications(sample, policy)], ["sole", "shared", "none"])

    def test_first_co_first_and_owner_aliases(self):
        for owner in POLICY["owner_names"]:
            sample = {"doi": "alias", "authors": ["A", owner], "corresponding_authors": [owner]}
            self.assertTrue(is_last_author(sample, POLICY))
            self.assertEqual(corresponding_rank(sample, POLICY), 0)
            sample["corresponding_authors"] = ["A", owner]
            self.assertEqual(corresponding_rank(sample, POLICY), 1)
            sample["co_first_authors"] = ["A", owner]
            self.assertFalse(is_last_author(sample, POLICY))
            self.assertFalse(is_last_author({"doi": "single", "authors": [owner]}, POLICY))

    def test_relevance_covers_exactly_the_sole_corresponding_last_papers(self):
        sole = {p["doi"].lower() for p in PAPERS
                if is_last_author(p, POLICY) and corresponding_rank(p, POLICY) == 0}
        self.assertEqual(set(POLICY["education_relevance"]), sole)
        for entry in POLICY["education_relevance"].values():
            self.assertIn(entry["level"], POLICY["education_relevance_levels"])
            self.assertTrue(entry["reason"])

    def test_unreviewed_sole_last_paper_does_not_get_an_invented_rank(self):
        paper = next(p for p in PAPERS if is_last_author(p, POLICY)
                     and corresponding_rank(p, POLICY) == 0 and publication_group(p, POLICY) == 0)
        policy = deepcopy(POLICY)
        del policy["education_relevance"][paper["doi"].lower()]
        with self.assertRaisesRegex(ValueError, "Review education relevance"):
            ordered_publications([paper], policy)
        with self.assertRaisesRegex(ValueError, "Verify a 2025 JIF"):
            ordered_publications([dict(paper, journal="Unverified journal")], POLICY)

    def test_first_author_journals_use_numeric_jif_descending(self):
        expected = {
            2026: ["10.1007/s00371-025-04265-1"],
            2025: [
                "10.1177/07356331251322470", "10.1080/10447318.2024.2383033",
                "10.1111/jcal.13117", "10.1007/s11423-025-10535-5",
                "10.1007/s12144-025-07813-z", "10.1007/s10639-025-13487-8",
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
        self.assertEqual(year_2026[-1]["doi"], "10.1007/978-3-032-29791-4_24")
        self.assertEqual([p["doi"] for p in year_2026[:2]], [
            "10.1007/s00371-025-04265-1", "10.2139/ssrn.6968861",
        ])
        preprint = indexed["10.2139/ssrn.6968861"]
        self.assertEqual(preprint["category"], "preprint")
        self.assertEqual(publication_group(preprint, POLICY), 2)
        self.assertEqual(ordering_group(preprint, POLICY), 0)
        self.assertEqual([p for p in PAPERS if int(p["year"]) == 2022][-1]["category"], "proceedings-article")

    def test_ordinary_first_preprints_precede_co_first_and_non_first_papers(self):
        owner = POLICY["owner_names"][0]
        preprint = next(p for p in PAPERS if p["category"] == "preprint")
        base = dict(preprint, authors=[owner, "A", "B"], co_first_authors=[], corresponding_authors=[])
        sample = [
            dict(base, doi="first-journal", category="journal-article", journal="Current Psychology"),
            dict(base, doi="first-preprint"),
            dict(base, doi="co-first-journal", category="journal-article", journal="Nature",
                 authors=["A", owner, "B"], co_first_authors=["A", owner]),
            dict(base, doi="co-first-preprint", co_first_authors=[owner, "A"]),
            dict(base, doi="second-journal", category="journal-article", journal="Nature", authors=["A", owner, "B"]),
            dict(base, doi="first-conference", category="proceedings-article"),
            dict(base, doi="second-preprint", authors=["A", owner, "B"]),
        ]
        expected = [p["doi"] for p in sample]
        ordered = ordered_publications(list(reversed(sample)), POLICY)
        self.assertEqual([p["doi"] for p in ordered], expected)
        self.assertTrue(all(p["category"] == "preprint" for p in ordered if p["doi"].endswith("preprint")))

    def test_co_first_papers_follow_ordinary_first_in_every_sequence(self):
        for year in {p["year"] for p in PAPERS}:
            for group in (0, 1, 2):
                first = [p for p in PAPERS if p["year"] == year
                         and ordering_group(p, POLICY) == group and author_position(p, POLICY) == 1]
                shared = [is_co_first_author(p, POLICY) for p in first]
                self.assertEqual(shared, sorted(shared), (year, group))
                for co_first in (False, True):
                    jifs = [POLICY["journal_impact_factors"][p["journal"]]["value"]
                            for p in first if publication_group(p, POLICY) == 0
                            and is_co_first_author(p, POLICY) == co_first]
                    self.assertEqual(jifs, sorted(jifs, reverse=True))

    def test_co_first_priority_applies_to_conferences_and_all_owner_aliases(self):
        for owner in POLICY["owner_names"]:
            base = dict(PAPERS[0], category="proceedings-article", authors=[owner, "A", "B"],
                        co_first_authors=[], corresponding_authors=[])
            first = dict(base, doi="ordinary", title="Z title")
            co_first = dict(base, doi="shared", title="A title", co_first_authors=[owner, "A"])
            self.assertEqual([p["doi"] for p in ordered_publications([co_first, first], POLICY)],
                             ["ordinary", "shared"])
            self.assertFalse(is_co_first_author(dict(base, co_first_authors=["A", "B"]), POLICY))

    def test_missing_jif_stops_instead_of_guessing(self):
        sample = dict(PAPERS[0], journal="Unverified journal")
        with self.assertRaisesRegex(ValueError, "Verify a 2025 JIF"):
            ordered_publications([sample], POLICY)


if __name__ == "__main__":
    unittest.main()
