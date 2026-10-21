import hashlib
import json
from pathlib import Path
import struct
import unittest


ROOT = Path(__file__).resolve().parents[1]


class ResearchFiguresTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.figures = json.loads((ROOT / "_data/research_figures.json").read_text(encoding="utf-8"))
        cls.papers = json.loads((ROOT / "_data/research_highlights.json").read_text(encoding="utf-8"))

    def test_every_paper_has_its_own_figure(self):
        self.assertEqual(set(self.figures), {paper["slug"] for paper in self.papers})
        for field in ("src", "full"):
            self.assertEqual(len({item[field] for item in self.figures.values()}), len(self.papers))

    def test_figures_are_traceable_to_the_matching_papers(self):
        for paper in self.papers:
            with self.subTest(slug=paper["slug"]):
                figure = self.figures[paper["slug"]]
                source = figure["source"]
                self.assertEqual(source["doi"], paper["doi"])
                self.assertRegex(source["pdf_sha256"], r"^[0-9a-f]{64}$")
                self.assertGreater(source["pdf_page"], 0)
                self.assertGreater(source["image_xref"], 0)
                self.assertEqual(len(source["bbox"]), 4)
                self.assertGreater(figure["number"], 0)
                self.assertGreater(len(figure["caption"]), 10)
                self.assertGreater(len(figure["alt"]), 30)
                self.assertNotIn("path", source)

    def test_original_assets_have_matching_dimensions_and_unique_content(self):
        hashes = set()
        for figure in self.figures.values():
            self.assertTrue(figure["full"].startswith("/images/research-figures/"))
            data = (ROOT / figure["full"].lstrip("/")).read_bytes()
            self.assertEqual(data[:8], b"\x89PNG\r\n\x1a\n")
            width, height = struct.unpack(">II", data[16:24])
            self.assertEqual((width, height), (figure["original_width"], figure["original_height"]))
            self.assertGreaterEqual(width, figure["width"])
            self.assertGreaterEqual(height, figure["height"])
            hashes.add(hashlib.sha256(data).hexdigest())
        self.assertEqual(len(hashes), len(self.figures))

    def test_previews_are_webp_and_within_page_payload_budget(self):
        size = 0
        for figure in self.figures.values():
            for image in figure.get("panels", [figure]):
                self.assertTrue(image["src"].startswith("/images/research-figures/"))
                data = (ROOT / image["src"].lstrip("/")).read_bytes()
                self.assertEqual(data[:4], b"RIFF")
                self.assertEqual(data[8:12], b"WEBP")
                self.assertLessEqual(max(image["width"], image["height"]), 1200)
                size += len(data)
        self.assertLess(size, 3 * 1024 * 1024)

    def test_only_the_six_requested_papers_have_two_panel_compositions(self):
        expected = {
            "metaclassroom-programming-education", "generative-ai-education-policy-framework",
            "ai-self-regulated-learning-meta-analysis", "chatgpt-programming-ai-literacy",
            "classroom-emotion-image-dataset", "genai-agents-education-systematic-review",
        }
        composed = {slug for slug, figure in self.figures.items() if "panels" in figure}
        self.assertEqual(composed, expected)
        for slug in composed:
            self.assertEqual(len(self.figures[slug]["panels"]), 2)
            self.assertEqual([p["label"] for p in self.figures[slug]["panels"]], ["A", "B"])

    def test_panel_sources_and_full_size_assets_are_complete(self):
        for figure in self.figures.values():
            for panel in figure.get("panels", []):
                self.assertEqual(panel["source"]["doi"], figure["source"]["doi"])
                self.assertEqual(panel["source"]["pdf_sha256"], figure["source"]["pdf_sha256"])
                self.assertGreater(panel["source"]["pdf_page"], 0)
                self.assertGreater(len(panel["alt"]), 30)
                self.assertTrue(panel["reference"].startswith(("Figure", "Table")))
                data = (ROOT / panel["full"].lstrip("/")).read_bytes()
                self.assertEqual(data[:8], b"\x89PNG\r\n\x1a\n")
                self.assertEqual(struct.unpack(">II", data[16:24]), (panel["original_width"], panel["original_height"]))

    def test_selected_chart_details_are_explicit_and_within_source_bounds(self):
        panels = self.figures["chatgpt-programming-ai-literacy"]["panels"]
        self.assertIn("one student output", self.figures["chatgpt-programming-ai-literacy"]["caption"])
        selected = [p for p in panels if "crop_pixels" in p["source"]]
        self.assertEqual(len(selected), 1)
        selected += self.figures["metaclassroom-programming-education"]["panels"]
        for panel in selected:
            left, top, right, bottom = panel["source"]["crop_pixels"]
            width, height = panel["source"]["uncropped_size"]
            self.assertTrue(0 <= left < right <= width)
            self.assertTrue(0 <= top < bottom <= height)
            self.assertEqual((right - left, bottom - top), (panel["original_width"], panel["original_height"]))

    def test_compact_redesign_is_limited_to_two_papers(self):
        layouts = {slug: figure["layout"] for slug, figure in self.figures.items() if "layout" in figure}
        self.assertEqual(layouts, {"metaclassroom-programming-education": "scenes", "chatgpt-programming-ai-literacy": "study"})
        for slug in layouts:
            self.assertLess(self.figures[slug]["original_height"], self.figures[slug]["original_width"])
        scenes = self.figures["metaclassroom-programming-education"]["panels"]
        self.assertEqual([p["reference"] for p in scenes], ["Figure 4, Scene 6", "Figure 4, Scene 5"])

    def test_condensed_workflow_retains_five_stages_and_source_disclosure(self):
        figure = self.figures["chatgpt-programming-ai-literacy"]
        workflow = figure["panels"][0]
        self.assertEqual(workflow["steps"], ["Preparation & recruitment", "Familiarisation", "Pre-test", "Programming task", "Post-test & evaluation"])
        self.assertEqual(workflow["source"]["pdf_page"], 4)
        self.assertIn("condensed from Figure 1", figure["caption"])
        self.assertIn("highlights-study-steps", (ROOT / "_pages/research-highlights.html").read_text(encoding="utf-8"))

    def test_retypeset_table_preserves_all_published_categories_and_counts(self):
        figure = self.figures["classroom-emotion-image-dataset"]
        source = figure["panels"][1]["source"]
        self.assertIn("re-typeset", figure["caption"])
        self.assertEqual(source["headers"], ["Category", "Images"])
        self.assertEqual(source["rows"], [["Surprise", 218], ["Neutral", 1611], ["Happy", 592], ["Confuse", 1176], ["Boring", 1930], ["Total", 5527]])
        self.assertEqual(sum(row[1] for row in source["rows"][:-1]), 5527)

    def test_result_figures_retain_significance_notes(self):
        for slug in ("genai-business-schools-valence-adoption", "genai-business-schools-information-adoption"):
            self.assertEqual(self.figures[slug]["note"], "*p < 0.05; **p < 0.01; ***p < 0.001.")

    def test_template_preserves_semantic_captions_and_original_image_links(self):
        template = (ROOT / "_pages/research-highlights.html").read_text(encoding="utf-8")
        self.assertIn("site.data.research_figures[paper.slug]", template)
        self.assertIn('alt="{{ figure.alt | escape }}"', template)
        self.assertIn('loading="lazy"', template)
        self.assertIn('width="{{ figure.width }}" height="{{ figure.height }}"', template)
        self.assertLess(template.index("<img src="), template.index("<figcaption>"))
        self.assertIn('href="{{ figure.full | relative_url }}" target="_blank" rel="noopener"', template)
        self.assertIn('href="{{ figure.full | relative_url }}?view=original"', template)
        self.assertNotIn("fa-expand-alt", template)
        css = (ROOT / "assets/css/research-highlights-page.css").read_text(encoding="utf-8")
        self.assertIn("object-fit: contain", css)
        self.assertIn("aspect-ratio: 4 / 3", css)


if __name__ == "__main__":
    unittest.main()
