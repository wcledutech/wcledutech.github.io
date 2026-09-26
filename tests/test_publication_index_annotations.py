import json
from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
PAPERS = json.loads((ROOT / "_data/publication_index.json").read_text(encoding="utf-8"))
INDEX = {paper["doi"].lower(): paper for paper in PAPERS}
DETAILS = json.loads((ROOT / "_data/research_highlights.json").read_text(encoding="utf-8"))
AUDIT = json.loads((ROOT / "docs/publication-index-annotation-sources.json").read_text(encoding="utf-8"))["records"]


class PublicationIndexAnnotationsTest(unittest.TestCase):
    def test_records_and_plain_metadata(self):
        self.assertEqual(len(PAPERS), 82)
        self.assertEqual(len(INDEX), 82)
        for paper in PAPERS:
            with self.subTest(doi=paper["doi"]):
                for text in paper["authors"] + [paper["title"], paper["citation_text"]]:
                    self.assertNotRegex(text, r"[#*\U0001f3c6\U0001f525]")
        for doi in ("10.3389/fpsyg.2022.947209", "10.1057/s41599-025-04885-x"):
            self.assertNotIn(doi, INDEX)

    def test_role_names_and_detail_page_consistency(self):
        for paper in PAPERS:
            for field in ("co_first_authors", "corresponding_authors"):
                with self.subTest(doi=paper["doi"], field=field):
                    names = paper.get(field, [])
                    self.assertEqual(names, [name for name in paper["authors"] if name in names])
                    self.assertEqual(len(names), len(set(names)))
                    if field == "co_first_authors" and names:
                        self.assertGreaterEqual(len(names), 2)
        for detail in DETAILS:
            for field in ("co_first_authors", "corresponding_authors"):
                self.assertEqual(INDEX[detail["doi"].lower()].get(field, []), detail.get(field, []))

    def test_author_confirmed_unmarked_conference_papers(self):
        for doi in ("10.1145/3786995.3787000", "10.22318/icls2025.986726", "10.1145/3702163.3702174"):
            self.assertFalse(INDEX[doi].get("co_first_authors"))
            self.assertFalse(INDEX[doi].get("corresponding_authors"))

    def test_exact_scholar_and_author_award_updates(self):
        trophies = {
            "10.1057/s41599-024-02717-y", "10.1080/10447318.2024.2383033",
            "10.1007/s10639-024-12549-7", "10.1057/s41599-023-01904-7",
            "10.1080/10447318.2023.2291609", "10.1108/ijchm-03-2024-0358",
            "10.1057/s41599-024-02751-w", "10.1007/s10639-025-13487-8",
            "10.1111/jcal.13117", "10.1057/s41599-024-02718-x",
            "10.1080/10494820.2024.2370477", "10.1007/s10639-024-12654-7",
            "10.1080/10494820.2025.2472288", "10.1016/j.ijme.2025.101323",
            "10.1080/10494820.2024.2444533", "10.1016/j.techsoc.2025.102949",
            "10.1177/21582440251339961", "10.1007/s12144-025-07813-z",
            "10.1111/bjet.70058",
        }
        fire = {
            "10.1057/s41599-024-02717-y": [2025, 2026],
            "10.1080/10447318.2024.2383033": [2025, 2026],
            "10.1007/s10639-024-12549-7": [2025, 2026],
            "10.1080/10447318.2023.2291609": [2024, 2025],
            "10.1108/ijchm-03-2024-0358": [2026],
            "10.1057/s41599-024-02751-w": [2025],
            "10.1111/jcal.13117": [2025],
            "10.1007/s10639-024-12654-7": [2024],
            "10.1080/10494820.2025.2472288": [2026],
            "10.1016/j.ijme.2025.101323": [2026],
            "10.1007/s10639-025-13487-8": [2026],
        }
        self.assertEqual({doi for doi, p in INDEX.items() if p.get("highly_cited")}, trophies)
        self.assertEqual({doi: p["hot_paper_years"] for doi, p in INDEX.items() if p.get("hot_paper_years")}, fire)

    def test_audit_matches_display_data(self):
        self.assertEqual(len(AUDIT), 82)
        for record in AUDIT:
            paper = INDEX[record["doi"]]
            for field in ("co_first_authors", "corresponding_authors", "hot_paper_years"):
                self.assertEqual(record[field], paper.get(field, []))
            self.assertEqual(record["highly_cited"], paper.get("highly_cited", False))
            self.assertTrue(record["role_source"])


if __name__ == "__main__":
    unittest.main()
