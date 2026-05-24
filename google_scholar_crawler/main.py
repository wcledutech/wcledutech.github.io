from scholarly import scholarly
import jsonpickle
import json
from datetime import datetime, timezone
import os

google_scholar_id = os.environ['GOOGLE_SCHOLAR_ID']
author: dict = scholarly.search_author_id(google_scholar_id)
scholarly.fill(author, sections=['basics', 'indices', 'counts', 'publications'])
name = author['name']
author['scholar_id'] = google_scholar_id
author['updated'] = datetime.now(timezone.utc).isoformat(timespec='seconds')
author['publications'] = {v['author_pub_id']:v for v in author['publications']}
print(json.dumps(author, indent=2))
os.makedirs('results', exist_ok=True)
with open(f'results/gs_data.json', 'w') as outfile:
    json.dump(author, outfile, ensure_ascii=False)

shieldio_data = {
  "schemaVersion": 1,
  "label": "citations",
  "message": f"{author['citedby']}",
}
with open(f'results/gs_data_shieldsio.json', 'w') as outfile:
    json.dump(shieldio_data, outfile, ensure_ascii=False)
