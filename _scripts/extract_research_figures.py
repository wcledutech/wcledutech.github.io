"""Extract reviewed, embedded figures from locally verified publication PDFs.

Requires PyMuPDF and Pillow. The inventory (slug, path, sha256) remains local;
the selections (slug, page, figure, image_index, caption, alt) contain the
visually reviewed choices. Neither input PDF nor local source path is published.
"""

import argparse
import hashlib
import io
import json
from pathlib import Path

from PIL import Image
import pymupdf


ROOT = Path(__file__).resolve().parents[1]


def extract(inventory_path, selections_path, root=ROOT):
    inventory = {
        item["slug"]: item
        for item in json.loads(inventory_path.read_text(encoding="utf-8"))
    }
    selections = json.loads(selections_path.read_text(encoding="utf-8"))
    papers = json.loads((root / "_data/research_highlights.json").read_text(encoding="utf-8"))
    papers = {paper["slug"]: paper for paper in papers}
    if len(selections) != len(papers) or {s["slug"] for s in selections} != set(papers):
        raise ValueError("Exactly one reviewed figure is required for every highlighted paper")

    # Validate every source before writing any public asset.
    for selection in selections:
        source = inventory[selection["slug"]]
        digest = hashlib.sha256(Path(source["path"]).read_bytes()).hexdigest()
        if digest != source["sha256"] or source["doi"] != papers[selection["slug"]]["doi"]:
            raise ValueError("Source identity changed: " + selection["slug"])

    asset_dir = root / "images/research-figures"
    asset_dir.mkdir(parents=True, exist_ok=True)
    figures = {}
    for selection in selections:
        slug = selection["slug"]
        source = inventory[slug]
        with pymupdf.open(source["path"]) as document:
            page = document[selection["page"] - 1]
            info = page.get_image_info(xrefs=True)[selection["image_index"]]
            if not info["xref"]:
                raise ValueError("Selected figure is not an extractable PDF image: " + slug)
            embedded = document.extract_image(info["xref"])
            if embedded.get("smask"):
                base = pymupdf.Pixmap(document, info["xref"])
                mask = pymupdf.Pixmap(document, embedded["smask"])
                rgba = Image.open(io.BytesIO(pymupdf.Pixmap(base, mask).tobytes("png")))
                # Match the white PDF page without discarding the original alpha mask.
                original = Image.new("RGB", rgba.size, "white")
                original.paste(rgba, mask=rgba.getchannel("A"))
            else:
                original = Image.open(io.BytesIO(embedded["image"])).convert("RGB")
            stem = slug + "-fig-" + str(selection["figure"])
            original.save(asset_dir / (stem + ".png"), optimize=True)
            preview = original.copy()
            preview.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
            quality = selection.get("preview_quality", 100)
            preview.save(asset_dir / (stem + ".webp"), lossless=quality == 100, quality=quality, method=6)
            figures[slug] = {
                "src": "/images/research-figures/" + stem + ".webp",
                "full": "/images/research-figures/" + stem + ".png",
                "width": preview.width,
                "height": preview.height,
                "original_width": original.width,
                "original_height": original.height,
                "number": selection["figure"],
                "caption": selection["caption"],
                "alt": selection["alt"],
                "source": {
                    "doi": source["doi"],
                    "pdf_page": selection["page"],
                    "pdf_sha256": source["sha256"],
                    "image_index": selection["image_index"],
                    "image_xref": info["xref"],
                    "bbox": [round(value, 4) for value in info["bbox"]],
                    "method": "Original embedded PDF figure; no content cropping or redrawing",
                },
            }
            if selection.get("note"):
                figures[slug]["note"] = selection["note"]
            print(f"{slug}: Figure {selection['figure']}, PDF page {selection['page']}, {original.size}")

    (root / "_data/research_figures.json").write_text(
        json.dumps(figures, ensure_ascii=True, indent=2) + "\n", encoding="utf-8"
    )
    if (root / "_data/research_figure_composites.json").exists():
        from compose_research_figures import build
        build(inventory_path, root)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("inventory", type=Path)
    parser.add_argument("selections", type=Path)
    args = parser.parse_args()
    extract(args.inventory, args.selections)
