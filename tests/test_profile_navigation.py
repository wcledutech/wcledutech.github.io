from html.parser import HTMLParser
from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]


class DestinationParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.destinations = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "a" and attrs.get("class") == "profile-destination":
            self.destinations.append(attrs.get("href"))


class ProfileNavigationTest(unittest.TestCase):
    def test_publication_index_follows_research_highlights(self):
        home = (ROOT / "_pages/about.md").read_text(encoding="utf-8")
        parser = DestinationParser()
        parser.feed(home)
        self.assertEqual(parser.destinations, [
            "{{ '/research-highlights/' | relative_url }}",
            "{{ '/publication-index/' | relative_url }}",
        ])
        self.assertIn("<strong>Publications by year</strong>", home)
        self.assertIn("grid-template-columns: minmax(0, 1fr);", home)


if __name__ == "__main__":
    unittest.main()
