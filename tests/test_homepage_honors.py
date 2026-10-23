from html.parser import HTMLParser
from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
RECORD = "images/honors/top-2-scientists-2026-chengliang-wang.png"


class HonorParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_honors = False
        self.items = []
        self.links = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "section" and attrs.get("id") == "honors":
            self.in_honors = True
        if self.in_honors and tag == "div" and "compact-item" in attrs.get("class", "").split():
            self.items.append(attrs)
        if self.in_honors and tag == "a":
            self.links.append(attrs)

    def handle_endtag(self, tag):
        if tag == "section":
            self.in_honors = False


class HomepageHonorsTest(unittest.TestCase):
    def setUp(self):
        self.home = (ROOT / "_pages/about.md").read_text(encoding="utf-8")
        self.parser = HonorParser()
        self.parser.feed(self.home)

    def test_2026_single_year_recognition_is_first_and_linked_from_bio(self):
        self.assertEqual(len(self.parser.items), 10)
        self.assertEqual(self.parser.items[0]["id"], "top-2-scientists-2026")
        self.assertIn('href="#top-2-scientists-2026"', self.home)
        self.assertIn("2026 | World's Top 2% Scientists", self.home)
        self.assertNotIn("Stanford/Elsevier single-year citation impact list, based on citations received in 2025. Field: Education.", self.home)

    def test_recognition_record_and_official_dataset_are_linked(self):
        self.assertEqual(len(self.parser.links), 2)
        self.assertIn(RECORD, self.parser.links[0]["href"])
        self.assertEqual(self.parser.links[1]["href"], "https://elsevier.digitalcommonsdata.com/datasets/btchxktzyw/9")
        for link in self.parser.links:
            self.assertEqual(link["rel"], "noopener")
        with (ROOT / RECORD).open("rb") as stream:
            self.assertEqual(stream.read(8), b"\x89PNG\r\n\x1a\n")

    def test_presidents_scholarship_shares_featured_colors_title_and_icon(self):
        highlighted = [index for index, item in enumerate(self.parser.items) if "honor-highlight" in item.get("class", "").split()]
        self.assertEqual(highlighted, [3])
        self.assertNotIn("honor-featured", self.parser.items[3]["class"].split())
        title = '<div class="honor-title"><i class="fas fa-award" aria-hidden="true"></i><strong>'
        self.assertIn('<div class="compact-item honor-highlight">' + title + "2024 | East China Normal University President's Scholarship</strong>", self.home)
        self.assertEqual(self.home.count(title), 2)
        self.assertRegex(self.home, r"\.honor-featured,\s*\.honor-highlight\s*\{\s*border-color: #dac9a3;\s*background: #fcfaf4;\s*\}")


if __name__ == "__main__":
    unittest.main()
