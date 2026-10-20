"""Create small catalogue previews from the local evidence-files archive.

Usage: python scripts/create-thumbnails.py
Optional dependencies: Pillow, pypdfium2. Existing previews are reused.
This reads local files only; originals remain outside the code repository.
"""
import json
from pathlib import Path
from urllib.parse import unquote, urlparse

from PIL import Image, ImageOps
import pypdfium2 as pdfium

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'data' / 'evidence.json'
OUTPUT = ROOT / 'assets' / 'thumbnails'
IMAGE_TYPES = {'.png', '.jpg', '.jpeg', '.webp', '.gif'}


def create_thumbnails():
    # 1. Reuse cached previews and find previewable local attachments.
    data = json.loads(DATA.read_text(encoding='utf-8'))
    OUTPUT.mkdir(parents=True, exist_ok=True)
    failures = []
    for item in data['items']:
        destination = OUTPUT / (item['id'] + '.webp')
        if not destination.exists():
            files = sorted(item['files'], key=lambda file: Path(file.get('fileName', '')).suffix.lower() not in IMAGE_TYPES)
            for file in files:
                local = ROOT / 'evidence-files' / unquote(Path(urlparse(file.get('fileUrl', '')).path).name)
                if not local.is_file() or local.suffix.lower() not in IMAGE_TYPES | {'.pdf'}:
                    continue
                try:
                    # 2. Rasterise only the first PDF page; never copy originals.
                    if local.suffix.lower() == '.pdf':
                        with pdfium.PdfDocument(local) as pdf:
                            image = pdf[0].render(scale=.6).to_pil()
                    else:
                        image = ImageOps.exif_transpose(Image.open(local))
                    image.thumbnail((600, 390))
                    image.convert('RGB').save(destination, 'WEBP', quality=78)
                    break
                except (OSError, ValueError, Image.DecompressionBombError, pdfium.PdfiumError) as error:
                    failures.append(f'{local.name}: {error}')
        if destination.exists():
            item['thumbnail'] = 'assets/thumbnails/' + destination.name

    # 3. Save only thumbnail paths to the website data snapshot.
    DATA.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'{sum("thumbnail" in item for item in data["items"])} evidence previews available.')
    for failure in failures:
        print(f'Preview skipped: {failure}')


if __name__ == '__main__':
    create_thumbnails()
