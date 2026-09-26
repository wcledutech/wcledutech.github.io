import json
from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
PAPERS = json.loads((ROOT / "_data/research_highlights.json").read_text(encoding="utf-8"))


class PaperAuthorRolesTest(unittest.TestCase):
    def test_roles_are_unique_existing_names_in_byline_order(self):
        for paper in PAPERS:
            for field in ("co_first_authors", "corresponding_authors"):
                with self.subTest(paper=paper["slug"], field=field):
                    names = paper.get(field, [])
                    self.assertIsInstance(names, list)
                    self.assertEqual(len(names), len(set(names)))
                    self.assertTrue(all(name in paper["authors"] for name in names))
                    self.assertEqual(names, [name for name in paper["authors"] if name in names])
                    if field == "co_first_authors" and names:
                        self.assertGreaterEqual(len(names), 2)

    def test_names_and_citations_do_not_contain_display_markers(self):
        for paper in PAPERS:
            with self.subTest(paper=paper["slug"]):
                for value in paper["authors"] + [paper["citation_text"]]:
                    self.assertNotRegex(value, r"[#*]")

    def test_verified_roles_for_existing_detail_pages(self):
        # Sources and the two author-confirmed IJME records are listed in docs/paper-author-roles.md.
        expected = {
            "metaclassroom-programming-education": ([], ["Yuanyuan Li"]),
            "generative-ai-education-policy-framework": ([], ["Xiaoqing Gu"]),
            "aigc-adoption-ai-literacy-fsqca": ([], ["Xiaojiao Chen"]),
            "ai-self-regulated-learning-meta-analysis": (["Jun Xu", "Yuying Luo"], ["Yonghe Wu"]),
            "chatgpt-programming-ai-literacy": ([], ["Chengliang Wang"]),
            "ai-agents-collaborative-programming": (["Haoming Wang", "Chengliang Wang"], ["Xianlong Xu"]),
            "human-ai-collaborative-learning-ecosystem": (["Zihan Xiao", "Haoming Wang"], ["Haoming Wang", "Chengliang Wang"]),
            "aigc-education-systematic-review": ([], ["Chengliang Wang"]),
            "genai-agents-education-systematic-review": ([], ["Chengliang Wang"]),
            "ai-agent-school-dual-memory": (["Sheng Jin", "Haoming Wang"], ["Haoming Wang", "Chengliang Wang"]),
            "classroom-emotion-image-dataset": ([], ["Haoming Wang"]),
            "genai-business-schools-valence-adoption": ([], ["Chengliang Wang"]),
            "genai-business-schools-information-adoption": ([], ["Chengliang Wang"]),
        }
        indexed = {paper["slug"]: paper for paper in PAPERS}
        for slug, (co_first, corresponding) in expected.items():
            with self.subTest(paper=slug):
                self.assertIn(slug, indexed)
                self.assertEqual(indexed[slug].get("co_first_authors", []), co_first)
                self.assertEqual(indexed[slug].get("corresponding_authors", []), corresponding)


if __name__ == "__main__":
    unittest.main()
