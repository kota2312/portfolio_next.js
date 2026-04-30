from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "img" / "top" / "certification"
OUT_DIR.mkdir(parents=True, exist_ok=True)

SIZE = (1400, 900)


def make_background(accent_rgb):
    img = Image.new("RGBA", SIZE, (9, 10, 16, 255))
    draw = ImageDraw.Draw(img, "RGBA")

    for y in range(SIZE[1]):
        mix = y / max(SIZE[1] - 1, 1)
        col = (
            int(9 + mix * 6),
            int(10 + mix * 7),
            int(16 + mix * 8),
            255,
        )
        draw.line((0, y, SIZE[0], y), fill=col)

    grid = Image.new("RGBA", SIZE, (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(grid, "RGBA")
    for x in range(0, SIZE[0], 80):
        gdraw.line((x, 0, x, SIZE[1]), fill=(255, 255, 255, 10))
    for y in range(0, SIZE[1], 80):
        gdraw.line((0, y, SIZE[0], y), fill=(255, 255, 255, 8))
    img = Image.alpha_composite(img, grid)

    glow = Image.new("RGBA", SIZE, (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow, "RGBA")
    gdraw.ellipse(
        (SIZE[0] * 0.48, 80, SIZE[0] * 1.05, SIZE[1] * 0.7),
        fill=(*accent_rgb, 76),
    )
    glow = glow.filter(ImageFilter.GaussianBlur(90))
    img = Image.alpha_composite(img, glow)

    panel = Image.new("RGBA", SIZE, (0, 0, 0, 0))
    pdraw = ImageDraw.Draw(panel, "RGBA")
    panel_box = (54, 54, SIZE[0] - 54, SIZE[1] - 54)
    pdraw.rectangle(panel_box, outline=(255, 255, 255, 32), width=2)
    pdraw.rectangle((78, 78, SIZE[0] - 78, SIZE[1] - 78), outline=(255, 255, 255, 14), width=1)
    pdraw.line((SIZE[0] - 220, SIZE[1] - 78, SIZE[0] - 78, SIZE[1] - 78), fill=(*accent_rgb, 220), width=2)
    img = Image.alpha_composite(img, panel)

    return img


def remove_near_white(image):
    image = image.convert("RGBA")
    pixels = image.load()
    for y in range(image.height):
        for x in range(image.width):
            r, g, b, a = pixels[x, y]
            if r > 240 and g > 240 and b > 240:
                pixels[x, y] = (r, g, b, 0)
    return image


def place_logo(base, logo, box, scale=0.78, shadow_alpha=120):
    logo = logo.convert("RGBA")
    target_w = int(box[2] - box[0])
    target_h = int(box[3] - box[1])
    ratio = min(target_w / logo.width, target_h / logo.height) * scale
    resized = logo.resize((max(1, int(logo.width * ratio)), max(1, int(logo.height * ratio))), Image.LANCZOS)

    shadow = Image.new("RGBA", resized.size, (0, 0, 0, 0))
    shadow_pixels = shadow.load()
    src_pixels = resized.load()
    for y in range(resized.height):
        for x in range(resized.width):
            _, _, _, a = src_pixels[x, y]
            if a:
                shadow_pixels[x, y] = (0, 0, 0, min(a, shadow_alpha))
    shadow = shadow.filter(ImageFilter.GaussianBlur(12))

    x = int(box[0] + (target_w - resized.width) / 2)
    y = int(box[1] + (target_h - resized.height) / 2)

    base.alpha_composite(shadow, (x + 6, y + 10))
    base.alpha_composite(resized, (x, y))


def build_badge(src_path, out_path, accent_rgb, cleanup_white=False, scale=0.78):
    base = make_background(accent_rgb)
    logo = Image.open(src_path)
    if cleanup_white:
        logo = remove_near_white(logo)
    place_logo(base, logo, (130, 110, SIZE[0] - 130, SIZE[1] - 150), scale=scale)
    base.save(out_path)


def main():
    build_badge(
        Path(r"C:\Users\user\Downloads\lv1_logo.png"),
        OUT_DIR / "lv1.png",
        (53, 139, 255),
        cleanup_white=True,
        scale=0.68,
    )
    build_badge(
        Path(r"C:\Users\user\Downloads\sa-csm-600.png"),
        OUT_DIR / "sa-csm-600.png",
        (247, 177, 38),
        cleanup_white=False,
        scale=0.74,
    )


if __name__ == "__main__":
    main()
