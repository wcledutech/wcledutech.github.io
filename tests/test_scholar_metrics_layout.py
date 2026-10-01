from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]


class MetricParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.metrics = []
        self.current = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.append(attrs["id"])
        if tag == "article" and "scholar-metric" in attrs.get("class", "").split():
            self.current = {"classes": attrs["class"].split(), "text": [], "icons": []}
            self.metrics.append(self.current)
        if self.current is not None and tag == "i":
            self.current["icons"].append(attrs)

    def handle_data(self, data):
        if self.current is not None:
            self.current["text"].append(data)

    def handle_endtag(self, tag):
        if tag == "article":
            self.current = None


class ScholarMetricsLayoutTest(unittest.TestCase):
    def setUp(self):
        self.source = (ROOT / "_pages/about.md").read_text(encoding="utf-8")
        self.parser = MetricParser()
        self.parser.feed(self.source)

    def test_live_metric_targets_are_preserved_and_unique(self):
        counts = Counter(self.parser.ids)
        for metric_id in ["gs-citations", "gs-citations-5y", "gs-hindex",
                          "gs-hindex-5y", "gs-i10index", "gs-i10index-5y", "gs-updated"]:
            with self.subTest(metric_id=metric_id):
                self.assertEqual(counts[metric_id], 1)

    def test_five_metrics_keep_their_labels_and_data(self):
        self.assertEqual(len(self.parser.metrics), 5)
        expected = [
            ("Total citations", "{{ site.data.scholar_snapshot.citedby }}"),
            ("h-index", "{{ site.data.scholar_snapshot.hindex }}"),
            ("i10-index", "{{ site.data.scholar_snapshot.i10index }}"),
            ("ESI 1% highly cited papers", "18"),
            ("ESI 0.1% hot papers", "5"),
        ]
        for metric, (label, value) in zip(self.parser.metrics, expected):
            text = " ".join(" ".join(metric["text"]).split())
            self.assertIn(label, text)
            self.assertTrue(text.startswith(value))

    def test_icons_are_decorative_and_recognition_styles_are_scoped(self):
        for metric in self.parser.metrics:
            self.assertEqual(len(metric["icons"]), 1)
            self.assertEqual(metric["icons"][0]["aria-hidden"], "true")
        self.assertIn("scholar-metric--citations", self.parser.metrics[0]["classes"])
        self.assertIn("scholar-metric--highly-cited", self.parser.metrics[3]["classes"])
        self.assertIn("scholar-metric--hot", self.parser.metrics[4]["classes"])
        metrics_css = self.source.split("#scholar-metrics {", 1)[1].split(".award-list,", 1)[0]
        self.assertNotIn("gradient(", metrics_css)
        self.assertNotIn("animation:", metrics_css)


if __name__ == "__main__":
    unittest.main()
