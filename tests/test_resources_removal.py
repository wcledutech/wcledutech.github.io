from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]


class ResourcesRemovalTest(unittest.TestCase):
    def test_resources_page_is_removed(self):
        self.assertFalse((ROOT / "_pages/resources.html").exists())

    def test_site_sources_do_not_link_to_retired_page(self):
        for directory in ("_pages", "_layouts", "_includes", "_data"):
            for path in (ROOT / directory).rglob("*"):
                if path.suffix in (".html", ".md", ".json", ".yml"):
                    self.assertNotIn("/resources/", path.read_text(encoding="utf-8"), str(path))

    def test_individual_citation_downloads_remain(self):
        layout = (ROOT / "_layouts/publication.html").read_text(encoding="utf-8")
        self.assertIn("Download BibTeX", layout)
        self.assertIn("Download RIS", layout)
        home = (ROOT / "_pages/about.md").read_text(encoding="utf-8")
        self.assertEqual(home.count('class="profile-destination"'), 1)
        self.assertIn('class="profile-guides"', home)


if __name__ == "__main__":
    unittest.main()
