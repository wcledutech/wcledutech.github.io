import json
from pathlib import Path
import unittest

from _scripts.sort_publication_index import ordered_publications, publication_group


ROOT = Path(__file__).resolve().parents[1]
PAPERS = json.loads((ROOT / "_data/publication_index.json").read_text(encoding="utf-8"))
POLICY = json.loads((ROOT / "_data/publication_index_ordering.json").read_text(encoding="utf-8"))
METRICS = POLICY["journal_impact_factors"]


class PublicationIndexMetricsTest(unittest.TestCase):
    def test_every_journal_has_a_sourced_metric_record(self):
        journals = {p["journal"] for p in PAPERS if publication_group(p, POLICY) == 0}
        self.assertEqual(set(METRICS), journals)
        self.assertEqual(len(journals), 35)
        self.assertEqual(POLICY["jif_year"], 2025)
        self.assertEqual(POLICY["jif_release_year"], 2026)
        for journal, metric in METRICS.items():
            self.assertTrue(metric["source"].startswith("https://"), journal)
            if metric["value"] is not None:
                self.assertIsInstance(metric["value"], (int, float), journal)
                self.assertGreater(metric["value"], 0, journal)
            else:
                self.assertEqual(metric["status"], "pending")
                self.assertTrue(metric["note"])
                self.assertTrue(metric["status_source"].startswith("https://"))

    def test_old_heliyon_value_is_not_presented_as_current(self):
        self.assertIsNone(METRICS["Heliyon"]["value"])
        self.assertEqual(sum(m["value"] is not None for m in METRICS.values()), 34)
        with self.assertRaisesRegex(ValueError, "Verify a 2025 JIF"):
            ordered_publications([dict(PAPERS[0], journal="Heliyon")], POLICY)

    def test_conferences_and_preprints_do_not_get_journal_metrics(self):
        for paper in PAPERS:
            if publication_group(paper, POLICY) != 0:
                self.assertNotIn(paper["journal"], METRICS, paper["doi"])


if __name__ == "__main__":
    unittest.main()
