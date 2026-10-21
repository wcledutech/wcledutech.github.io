"""Build two-panel publication overviews from verified local PDFs.

Usage: python _scripts/compose_research_figures.py LOCAL_INVENTORY.json
Only entries in research_figure_composites.json are updated. The other paper
figures and all existing assets remain unchanged. Requires PyMuPDF and Pillow.
"""

import argparse
import hashlib
import io
import json
from pathlib import Path
import re

from PIL import Image, ImageDraw, ImageFont
import pymupdf

ROOT = Path(__file__).resolve().parents[1]
INK = "#242b32"
MUTED = "#59636c"
TEAL = "#176c63"
RULE = "#dce4e2"


def font(size, bold=False):
    return ImageFont.truetype("C:/Windows/Fonts/" + ("timesbd.ttf" if bold else "times.ttf"), size)


def table_image(spec, page):
    text = page.get_text()
    for row in [spec["headers"], *spec["rows"]]:
        for cell in row:
            if not re.search(r"\b" + re.escape(str(cell)) + r"\b", text):
                raise ValueError("Table cell not found on its source page: " + str(cell))
    if sum(row[1] for row in spec["rows"][:-1]) != spec["rows"][-1][1]:
        raise ValueError("Dataset category counts do not sum to the reported total")
    image = Image.new("RGB", (1400, 718), "white")
    draw = ImageDraw.Draw(image)
    draw.text((700, 35), "Table 2. Data distribution", font=font(48, True), fill=INK, anchor="mt")
    draw.line((44, 116, 1356, 116), fill=INK, width=3)
    for x, header in zip((430, 1070), spec["headers"]):
        draw.text((x, 156), header, font=font(46, True), fill=INK, anchor="mm")
    draw.line((44, 198, 1356, 198), fill=INK, width=2)
    for index, row in enumerate(spec["rows"]):
        for x, value in zip((430, 1070), row):
            draw.text((x, 244 + index * 78), str(value), font=font(46, index == 5), fill=INK, anchor="mm")
    draw.line((44, 687, 1356, 687), fill=INK, width=3)
    return image


def read_panel(pdf, spec, source):
    page = pdf[spec["page"] - 1]
    provenance = {"doi": source["doi"], "pdf_sha256": source["sha256"], "pdf_page": spec["page"], "reference": spec["reference"]}
    if spec.get("kind") == "table":
        provenance.update({"method": "Table re-typeset in Times New Roman; original labels and values preserved", "headers": spec["headers"], "rows": spec["rows"]})
        return table_image(spec, page), provenance
    info = page.get_image_info(xrefs=True)[spec["image_index"]]
    embedded = pdf.extract_image(info["xref"])
    if embedded.get("smask"):
        rgba = Image.open(io.BytesIO(pymupdf.Pixmap(pymupdf.Pixmap(pdf, info["xref"]), pymupdf.Pixmap(pdf, embedded["smask"])).tobytes("png")))
        image = Image.new("RGB", rgba.size, "white")
        image.paste(rgba, mask=rgba.getchannel("A"))
    else:
        image = Image.open(io.BytesIO(embedded["image"])).convert("RGB")
    provenance.update({"image_index": spec["image_index"], "image_xref": info["xref"], "bbox": [round(v, 4) for v in info["bbox"]], "method": "Original embedded PDF image"})
    if "crop" in spec:
        left, top, right, bottom = spec["crop"]
        if not (0 <= left < right <= image.width and 0 <= top < bottom <= image.height):
            raise ValueError("Crop is outside the source image")
        provenance["crop_pixels"] = spec["crop"]
        provenance["uncropped_size"] = list(image.size)
        provenance["method"] += "; selected complete chart detail, with all axes and legends retained"
        image = image.crop(spec["crop"])
    return image, provenance


def save_asset(image, stem, directory):
    image.save(directory / (stem + ".png"), optimize=True)
    preview = image.copy()
    preview.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
    preview.save(directory / (stem + ".webp"), quality=95, method=6)
    return {"src": "/images/research-figures/" + stem + ".webp", "full": "/images/research-figures/" + stem + ".png", "width": preview.width, "height": preview.height, "original_width": image.width, "original_height": image.height}


def compose(panels):
    width = min(1800, max(1200, *(image.width for image, _ in panels)))
    margin, gap, caption_height = 40, 56, 90
    content_width = width - margin * 2
    images = [image.resize((content_width, round(image.height * content_width / image.width)), Image.Resampling.LANCZOS) for image, _ in panels]
    height = margin * 2 + sum(image.height + caption_height for image in images) + gap
    canvas = Image.new("RGB", (width, height), "white")
    draw = ImageDraw.Draw(canvas)
    y = margin
    for index, (image, (_, spec)) in enumerate(zip(images, panels)):
        canvas.paste(image, (margin, y))
        y += image.height + 28
        caption = f"{chr(65 + index)}   {spec['title']} ({spec['reference']})"
        if draw.textlength(caption, font=font(44, True)) > content_width:
            raise ValueError("Panel caption exceeds the composition width")
        draw.text((width / 2, y), caption, font=font(44, True), fill=INK, anchor="mt")
        y += caption_height - 28
        if index == 0:
            draw.line((margin, y + gap // 2, width - margin, y + gap // 2), fill=RULE, width=2)
            y += gap
    return canvas


def build(inventory_path, root=ROOT):
    inventory = {item["slug"]: item for item in json.loads(inventory_path.read_text(encoding="utf-8"))}
    specs = json.loads((root / "_data/research_figure_composites.json").read_text(encoding="utf-8"))
    figure_path = root / "_data/research_figures.json"
    figures = json.loads(figure_path.read_text(encoding="utf-8"))
    for slug, spec in specs.items():
        source = inventory[slug]
        if len(spec["panels"]) != 2:
            raise ValueError("Each composition must have exactly two panels")
        if hashlib.sha256(Path(source["path"]).read_bytes()).hexdigest() != source["sha256"]:
            raise ValueError("The verified source PDF has changed: " + slug)
        if source["doi"] != figures[slug]["source"]["doi"]:
            raise ValueError("The source DOI does not match the highlighted paper")
    directory = root / "images/research-figures"
    for slug, spec in specs.items():
        source = inventory[slug]
        images, panels = [], []
        with pymupdf.open(source["path"]) as pdf:
            for index, panel_spec in enumerate(spec["panels"]):
                image, provenance = read_panel(pdf, panel_spec, source)
                assets = save_asset(image, slug + "-overview-" + chr(97 + index), directory)
                panels.append({**assets, "label": chr(65 + index), "title": panel_spec["title"], "reference": panel_spec["reference"], "alt": panel_spec["alt"], "source": provenance})
                images.append((image, panel_spec))
        assets = save_asset(compose(images), slug + "-overview-composite", directory)
        figures[slug] = {**assets, "number": int(re.search(r"\d+", spec["panels"][0]["reference"])[0]), "label": spec["label"], "caption": spec["caption"], "alt": "Two-panel overview: " + " ".join(panel["alt"] for panel in panels), "panels": panels, "source": {**panels[0]["source"], "method": "Two-panel composition; panel-level sources and any selected chart details are recorded separately"}}
        print(slug, "->", spec["label"], "|", assets["original_width"], "x", assets["original_height"])
    figure_path.write_text(json.dumps(figures, ensure_ascii=True, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("inventory", type=Path)
    build(parser.parse_args().inventory)
