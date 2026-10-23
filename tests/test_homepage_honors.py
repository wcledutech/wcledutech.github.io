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
        self.assertIn("2026 | World's Top 2% Scientists (2025 Single-Year Impact)", self.home)
        self.assertIn("for single-year citation impact in 2025.", self.home)
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
        self.assertEqual(highlighted, [3, 5])
        self.assertNotIn("honor-featured", self.parser.items[3]["class"].split())
        title = '<div class="honor-title"><i class="fas fa-award" aria-hidden="true"></i><strong>'
        self.assertIn('<div class="compact-item honor-highlight">' + title + "2024 | East China Normal University President's Scholarship</strong>", self.home)
        self.assertEqual(self.home.count(title), 3)
        self.assertRegex(self.home, r"\.honor-featured,\s*\.honor-highlight\s*\{\s*border-color: #dac9a3;\s*background: #fcfaf4;\s*\}")

    def test_presidents_scholarship_description_states_both_distinctions(self):
        description = "ECNU's only master's recipient in 2024; the Faculty of Education's first-ever master's recipient."
        self.assertIn("2024 | East China Normal University President's Scholarship</strong></div><p>" + description + "</p><p>The highest academic honor at ECNU, 20,000 RMB.</p>", self.home)

    def test_zhejiang_graduate_honor_shares_styling_and_states_top_four_percent(self):
        self.assertIn("honor-highlight", self.parser.items[5]["class"].split())
        title = '<div class="compact-item honor-highlight"><div class="honor-title"><i class="fas fa-award" aria-hidden="true"></i><strong>'
        self.assertIn(title + "2023 | Outstanding Graduate of Zhejiang Province</strong></div><p>Awarded only to the top 4% of graduates.</p>", self.home)

    def test_national_scholarships_have_only_a_secondary_background(self):
        secondary = [index for index, item in enumerate(self.parser.items) if "honor-secondary" in item.get("class", "").split()]
        self.assertEqual(secondary, [2, 4])
        self.assertRegex(self.home, r"\.honor-secondary\s*\{\s*background: #e7f0e8;\s*\}")
        for year in ("2024-2025", "2023-2024"):
            self.assertIn('<div class="compact-item honor-secondary"><strong>' + year + " | China National Scholarship for Postgraduate Students</strong>", self.home)

    def test_second_national_scholarship_explains_maximum_and_department_first(self):
        description = "Second award, achieving the two-award maximum during master's study; the department's first two-time recipient."
        self.assertEqual(self.home.count(description), 1)
        self.assertIn("2024-2025 | China National Scholarship for Postgraduate Students</strong><p>" + description + "</p><p>20,000 RMB.</p>", self.home)
        self.assertIn("2023-2024 | China National Scholarship for Postgraduate Students</strong><p>20,000 RMB.</p>", self.home)

    def test_award_spacing_is_slightly_wider_without_changing_other_lists(self):
        self.assertRegex(self.home, r"\.award-list\s*\{\s*gap: 1rem;\s*\}")
        self.assertRegex(self.home, r"\.award-list,\s*\.funding-list,\s*\.service-list\s*\{\s*display: grid;\s*gap: \.75rem;\s*\}")


if __name__ == "__main__":
    unittest.main()
