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
            self.assertTrue(figure["src"].startswith("/images/research-figures/"))
            data = (ROOT / figure["src"].lstrip("/")).read_bytes()
            self.assertEqual(data[:4], b"RIFF")
            self.assertEqual(data[8:12], b"WEBP")
            self.assertLessEqual(max(figure["width"], figure["height"]), 1200)
            size += len(data)
        self.assertLess(size, 3 * 1024 * 1024)

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
