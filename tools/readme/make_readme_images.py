#!/usr/bin/env python3
"""Generate the README images, which mirror the Footnotes home page.

The images are SVGs with all text converted to outlines in the site's font
(Assistant), so GitHub shows them exactly like the website. The hero image is
animated with CSS, like the mini dancing bot on the home page. The demo GIF is
made from the recording shown on the website.

Requires fontTools, brotli and uharfbuzz (pip install fonttools brotli
uharfbuzz), and ffmpeg for the GIF.

Usage: python3 tools/readme/make_readme_images.py
Output: .github/readme/
"""

import io
import os
import subprocess
from xml.sax.saxutils import escape

import uharfbuzz as hb
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = os.path.normpath(
    os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..")
)
FONT_PATH = os.path.join(ROOT, "public", "assets", "font", "Assistant-Latin.woff2")
VIDEO_PATH = os.path.join(ROOT, "public", "media", "footnotes-preview.webm")
OUT_DIR = os.path.join(ROOT, ".github", "readme")

# Colors and shapes from landing/landing.css and index.html
BG = "#121316"
BG_RAISED = "#18191d"
SURFACE = "#1f2128"
TEXT = "#f3f4f6"
MUTED = "#a7abb6"
LEFT = "#2f9bff"
RIGHT = "#ffad1f"
NOTE = "#ff4f61"
SOLE = (
    "M0 0C6.5 0 10 4.6 10 11.5 10 18 7.4 21.5 6.2 25 5.4 27.6 6.6 30.5 6.6 35 "
    "6.6 41.5 3.9 46 0 46S-6.6 41.5-6.6 35C-6.6 30.5-5.4 27.6-6.2 25-7.4 21.5-10 18"
    "-10 11.5-10 4.6-6.5 0 0 0Z"
)
ARROW = "M8 32 30 10v13h26v18H30v13Z"
ROTATION = {"left": 0, "down": -90, "up": 90, "right": 180}
BORDER = 'stroke="#fff" stroke-opacity=".09"'


def num(value):
    text = f"{value:.1f}"
    return text[:-2] if text.endswith(".0") else text


class Typesetter:
    """Shapes text with HarfBuzz and draws it as SVG outlines."""

    def __init__(self, path):
        self.path = path
        self.weights = {}

    def _instance(self, weight):
        if weight not in self.weights:
            font = instantiateVariableFont(TTFont(self.path), {"wght": weight})
            font.flavor = None
            data = io.BytesIO()
            font.save(data)
            self.weights[weight] = (font, hb.Font(hb.Face(data.getvalue())))
        return self.weights[weight]

    def _shape(self, text, weight):
        font, hb_font = self._instance(weight)
        buf = hb.Buffer()
        buf.add_str(text)
        buf.guess_segment_properties()
        hb.shape(hb_font, buf, {"kern": True, "liga": True})
        order = font.getGlyphOrder()
        glyphs = [
            (order[info.codepoint], pos.x_advance, pos.x_offset, pos.y_offset)
            for info, pos in zip(buf.glyph_infos, buf.glyph_positions)
        ]
        return font, glyphs

    def width(self, text, weight, size, tracking=0.0):
        font, glyphs = self._shape(text, weight)
        scale = size / font["head"].unitsPerEm
        return sum(g[1] * scale + tracking for g in glyphs) - tracking

    def outline(self, text, weight, size, x, y, tracking=0.0):
        """Returns path data for `text`, with its baseline starting at (x, y)."""
        font, glyphs = self._shape(text, weight)
        glyph_set = font.getGlyphSet()
        scale = size / font["head"].unitsPerEm
        pen = SVGPathPen(glyph_set, ntos=num)
        cursor = x
        for name, advance, x_offset, y_offset in glyphs:
            transform = (
                scale, 0, 0, -scale,
                cursor + x_offset * scale, y - y_offset * scale,
            )
            glyph_set[name].draw(TransformPen(pen, transform))
            cursor += advance * scale + tracking
        return pen.getCommands()

    def text(self, text, weight, size, x, y, fill, extra=""):
        d = self.outline(text, weight, size, x, y)
        return f'<path fill="{fill}" {extra} d="{d}"/>'

    def wrap(self, text, weight, size, max_width):
        lines, line = [], ""
        for word in text.split():
            candidate = f"{line} {word}" if line else word
            if line and self.width(candidate, weight, size) > max_width:
                lines.append(line)
                line = word
            else:
                line = candidate
        return lines + [line]


def svg(width, height, title, body, defs="", style=""):
    head = (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{num(width)}" '
        f'height="{num(height)}" viewBox="0 0 {num(width)} {num(height)}" role="img">'
    )
    parts = [head, f"<title>{escape(title)}</title>"]
    if style:
        parts.append(f"<style>{style}</style>")
    if defs:
        parts.append(f"<defs>{defs}</defs>")
    parts.append(body)
    parts.append("</svg>")
    return "\n".join(parts) + "\n"


def arrow(cx, cy, size, direction, attrs):
    """An arrow like the website's, pointing in `direction`, centered on (cx, cy)."""
    scale = size / 64
    return (
        f'<g transform="translate({num(cx - size / 2)} {num(cy - size / 2)}) '
        f'scale({scale:.4f}) rotate({ROTATION[direction]} 32 32)">'
        f'<path d="{ARROW}" stroke-width="5" stroke-linejoin="round" {attrs}/></g>'
    )


PRIMARY_GRADIENT = (
    '<linearGradient id="primary"><stop offset="0" stop-color="#2f9bff"/>'
    '<stop offset="1" stop-color="#6f8dff"/></linearGradient>'
)


def button(ts, label, x, y, primary):
    """A website button. Returns its SVG and width."""
    text_width = ts.width(label, 700, 17)
    width = text_width + 42
    if primary:
        rect = f'<rect x="{num(x)}" y="{num(y)}" width="{num(width)}" height="44" rx="22" fill="url(#primary)"/>'
        color = "#07111f"
    else:
        rect = (
            f'<rect x="{num(x + 0.5)}" y="{num(y + 0.5)}" width="{num(width - 1)}" '
            f'height="43" rx="21.5" fill="{SURFACE}" {BORDER}/>'
        )
        color = TEXT
    label_svg = ts.text(label, 700, 17, x + (width - text_width) / 2, y + 27.8, color)
    return rect + label_svg, width


def make_button(ts, label, primary):
    body, width = button(ts, label, 0, 0, primary)
    return svg(width, 44, label, body, defs=PRIMARY_GRADIENT if primary else "")


def card_frame(width, height):
    return (
        f'<rect x=".5" y=".5" width="{num(width - 1)}" height="{num(height - 1)}" '
        f'rx="14" fill="{BG_RAISED}" {BORDER}/>'
    )


CARD_WIDTH = 340
PAD = 22
TEXT_WIDTH = CARD_WIDTH - 2 * PAD
LINE = 17 * 1.55


def paragraph(ts, lines, top):
    return "".join(
        ts.text(line, 400, 17, PAD, top + 18.8 + i * LINE, MUTED)
        for i, line in enumerate(lines)
    )


DEMO_CHARTS = [("Beginner", 1, "#3fd6f5"), ("Easy", 3, "#6ad35f"), ("Medium", 5, "#ffd23f")]


def demo_tiles(ts, y):
    """The demo card's chart tiles: a colored top edge, the meter and the difficulty."""
    gap = 8
    width = (TEXT_WIDTH - 2 * gap) / 3
    defs, body = "", ""
    for i, (label, meter, color) in enumerate(DEMO_CHARTS):
        x = PAD + i * (width + gap)
        defs += (
            f'<clipPath id="tile-{i}"><rect x="{num(x)}" y="{y}" width="{num(width)}" '
            'height="64" rx="12"/></clipPath>'
        )
        body += (
            f'<g clip-path="url(#tile-{i})">'
            f'<rect x="{num(x)}" y="{y}" width="{num(width)}" height="64" fill="{SURFACE}"/>'
            f'<rect x="{num(x)}" y="{y}" width="{num(width)}" height="3" fill="{color}"/></g>'
            f'<rect x="{num(x + 0.5)}" y="{y + 0.5}" width="{num(width - 1)}" height="63" '
            f'rx="11.5" fill="none" {BORDER}/>'
        )
        meter_width = ts.width(str(meter), 800, 22)
        body += ts.text(str(meter), 800, 22, x + (width - meter_width) / 2, y + 30, color)
        label_width = ts.width(label, 700, 15)
        body += ts.text(label, 700, 15, x + (width - label_width) / 2, y + 51, TEXT)
    return defs, body


def make_song_cards(ts):
    """The three cards of the website's "Pick a song" section."""
    cards = [
        ("card-demo", "Try the demo",
         "A one-minute practice song made for Footnotes. Pick a chart to start dancing.",
         "tiles", None),
        ("card-link", "From a link",
         "Paste a link to a .sm or .ssc file. Its music file has to sit next to it.",
         "input", "Find charts"),
        ("card-computer", "From your computer",
         "Import a song folder that holds a .sm or .ssc file and its music. It stays in your browser.",
         "button", "Open a song folder"),
    ]
    controls_height = {"tiles": 64, "input": 96, "button": 44}
    wrapped = [ts.wrap(c[2], 400, 17, TEXT_WIDTH) for c in cards]
    height = round(max(
        PAD + 31 + 12 + len(lines) * LINE + 12 + controls_height[c[3]] + PAD
        for c, lines in zip(cards, wrapped)
    ))
    files = {}
    for (name, title, text, kind, label), lines in zip(cards, wrapped):
        defs = ""
        body = card_frame(CARD_WIDTH, height)
        body += ts.text(title, 800, 20, PAD, 45, TEXT)
        body += paragraph(ts, lines, 65)
        bottom = height - PAD
        if kind == "tiles":
            defs, tiles = demo_tiles(ts, bottom - 64)
            body += tiles
        else:
            if kind == "input":
                input_y = bottom - 44 - 8 - 44
                body += (
                    f'<rect x="{PAD + 0.5}" y="{input_y + 0.5}" width="{TEXT_WIDTH - 1}" '
                    f'height="43" rx="10" fill="#0f1013" {BORDER}/>'
                )
                body += ts.text("https://…/song.ssc", 400, 17, PAD + 15, input_y + 27.8, "#6c707b")
            part, _ = button(ts, label, PAD, bottom - 44, False)
            body += part
        files[name] = svg(CARD_WIDTH, height, f"{title}. {text}", body, defs=defs)
    return files


def sole(cx, cy, scale, rotation, fill, label_svg=""):
    return (
        f'<g transform="translate({num(cx)} {num(cy)}) rotate({rotation})">'
        f'<path fill="{fill}" transform="scale({scale}) translate(0 -23)" d="{SOLE}"/>'
        f"{label_svg}</g>"
    )


def make_step_cards(ts):
    """The three cards of the website's "How it works" section."""
    badge_text_width = ts.width("75%", 800, 18)
    badge_width = badge_text_width + 30
    icons = [
        sole(33, 50, 0.958, -8, LEFT) + sole(61, 44, 0.958, 8, RIGHT),
        arrow(45, 50, 46, "up", f'fill="{NOTE}" stroke="#fff" stroke-opacity=".85"'),
        (
            f'<rect x="{PAD + 0.5}" y="30.5" width="{num(badge_width - 1)}" height="39" rx="19.5" '
            f'fill="{LEFT}" fill-opacity=".14" stroke="{LEFT}" stroke-opacity=".35"/>'
            + ts.text("75%", 800, 18, PAD + 15, 56, LEFT)
        ),
    ]
    cards = [
        ("step-bot", "Watch the bot",
         "The pad at the top shows where each foot goes. Blue is your left foot, orange is your right."),
        ("step-arrows", "Read the arrows",
         "Arrows rise into the targets just under the bot. Step as they reach them, and they slide away under the pad."),
        ("step-pace", "Practice at your pace",
         "Slow the song down, change the scroll speed, and jump to any part of the chart from the strip on the right."),
    ]
    wrapped = [ts.wrap(c[2], 400, 17, TEXT_WIDTH) for c in cards]
    height = round(max(PAD + 56 + 14 + 31 + 6 + len(lines) * LINE + PAD for lines in wrapped))
    files = {}
    for (name, title, text), lines, icon in zip(cards, wrapped, icons):
        body = card_frame(CARD_WIDTH, height) + icon
        body += ts.text(title, 800, 20, PAD, 115, TEXT)
        body += paragraph(ts, lines, 123)
        files[name] = svg(CARD_WIDTH, height, f"{title}. {text}", body)
    return files


def make_hero(ts):
    """The website's hero, with the animated mini dancing bot."""
    width, height = 1200, 520
    x0 = 84

    title_width = ts.width("Footnotes", 800, 108, tracking=-2.16)
    defs = (
        '<clipPath id="panel"><rect width="1200" height="520" rx="24"/></clipPath>'
        '<radialGradient id="glow-left" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" '
        'gradientTransform="translate(216 156) scale(480 286)">'
        f'<stop offset="0" stop-color="{LEFT}" stop-opacity=".18"/>'
        f'<stop offset=".7" stop-color="{LEFT}" stop-opacity="0"/></radialGradient>'
        '<radialGradient id="glow-right" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" '
        'gradientTransform="translate(984 322) scale(420 260)">'
        f'<stop offset="0" stop-color="{RIGHT}" stop-opacity=".13"/>'
        f'<stop offset=".7" stop-color="{RIGHT}" stop-opacity="0"/></radialGradient>'
        f'<linearGradient id="title" gradientUnits="userSpaceOnUse" x1="{x0}" x2="{num(x0 + title_width)}" y1="0" y2="0">'
        f'<stop offset="0" stop-color="{LEFT}"/><stop offset=".55" stop-color="#9b8cff"/>'
        f'<stop offset="1" stop-color="{RIGHT}"/></linearGradient>'
        '<filter id="shadow" x="-60%" y="-40%" width="220%" height="180%">'
        '<feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#000" flood-opacity=".45"/></filter>'
    )
    body = (
        f'<g clip-path="url(#panel)"><rect width="1200" height="520" fill="{BG}"/>'
        '<rect width="1200" height="520" fill="url(#glow-left)"/>'
        '<rect width="1200" height="520" fill="url(#glow-right)"/></g>'
        f'<rect x=".75" y=".75" width="1198.5" height="518.5" rx="23.25" fill="none" {BORDER} stroke-width="1.5"/>'
    )
    body += f'<path fill="url(#title)" d="{ts.outline("Footnotes", 800, 108, x0, 200, tracking=-2.16)}"/>'
    body += ts.text("The notes, with your feet written in.", 700, 32, x0, 266, TEXT)
    lede = (
        "Learn to dance any StepMania chart. A dancing bot shows which foot goes "
        "where, right above the arrows you're about to hit."
    )
    for i, line in enumerate(ts.wrap(lede, 400, 23, 650)):
        body += ts.text(line, 400, 23, x0, 322 + i * 36, MUTED)

    # Mini dancing bot: the same pad, feet and arrows as the home page
    px, py = 826, 61
    panels = {"up": (px + 72, py), "left": (px, py + 72), "right": (px + 144, py + 72), "down": (px + 72, py + 144)}
    centers = {name: (x + 32, y + 32) for name, (x, y) in panels.items()}
    for name, (x, y) in panels.items():
        body += (
            f'<rect class="pn p{name[0]}" x="{x}" y="{y}" width="64" height="64" rx="12" '
            'fill="#262932" stroke="#fff" stroke-opacity=".07"/>'
        )
        body += arrow(*centers[name], 44, name, 'fill="#363a46" stroke="#4a4f5e"')

    feet = ""
    for css_class, color, label in (("fl", LEFT, "L"), ("fr", RIGHT, "R")):
        label_width = ts.width(label, 800, 14)
        label_svg = ts.text(label, 800, 14, -label_width / 2, 7, "#000", 'fill-opacity=".55"')
        feet += (
            f'<g class="{css_class}"><g filter="url(#shadow)">'
            f'<path fill="{color}" transform="scale(1.125) translate(0 -23)" d="{SOLE}"/>'
            f"{label_svg}</g></g>"
        )

    lane_top = py + 208 + 14
    columns = ["left", "down", "up", "right"]
    receptor = {name: (px + 26 + 52 * i, lane_top + 22) for i, name in enumerate(columns)}
    for name in columns:
        body += arrow(*receptor[name], 44, name, 'fill="none" stroke="#8b90a0"')
    delays = {"left": "0s", "down": "-0.5s", "up": "-1s", "right": "-1.5s"}
    notes = "".join(
        f'<g class="nt" style="transform-origin:{receptor[name][0]}px {receptor[name][1]}px;'
        f'animation-delay:{delays[name]}">'
        + arrow(*receptor[name], 44, name, f'fill="{NOTE}" stroke="#fff" stroke-opacity=".85"')
        + "</g>"
        for name in columns
    )
    defs += (
        f'<linearGradient id="fade" gradientUnits="userSpaceOnUse" x1="0" y1="{lane_top}" x2="0" y2="{lane_top + 176}">'
        '<stop offset=".72" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'
        f'<mask id="lane" maskUnits="userSpaceOnUse" x="{px - 12}" y="{lane_top - 8}" width="232" height="184">'
        f'<rect x="{px - 12}" y="{lane_top - 8}" width="232" height="184" fill="url(#fade)"/></mask>'
    )
    body += f'<g mask="url(#lane)">{notes}</g>' + feet

    def at(point, rotation, scale=1):
        return f"transform:translate({point[0]}px,{point[1]}px) rotate({rotation}deg) scale({scale})"

    def mid(a, b):
        return ((centers[a][0] + centers[b][0]) / 2, (centers[a][1] + centers[b][1]) / 2)

    left, up = centers["left"], centers["up"]
    right, down = centers["right"], centers["down"]
    style = (
        ".fl,.fr{animation:2s ease-in-out infinite}"
        f".fl{{{at(left, -8)};animation-name:fl}}"
        f".fr{{{at(right, 8)};animation-name:fr}}"
        f"@keyframes fl{{0%,18%{{{at(left, -8)}}}21.5%{{{at(mid('left', 'up'), -8, 1.18)}}}"
        f"25%,68%{{{at(up, -8)}}}71.5%{{{at(mid('left', 'up'), -8, 1.18)}}}75%,100%{{{at(left, -8)}}}}}"
        f"@keyframes fr{{0%,43%{{{at(right, 8)}}}46.5%{{{at(mid('right', 'down'), 8, 1.18)}}}"
        f"50%,93%{{{at(down, 8)}}}96.5%{{{at(mid('right', 'down'), 8, 1.18)}}}100%{{{at(right, 8)}}}}}"
        ".pn{animation:flash 2s linear infinite}"
        ".pu{animation-delay:-1.5s}.pd{animation-delay:-1s}.pl{animation-delay:-.5s}"
        "@keyframes flash{0%{fill:#3b404f;stroke-opacity:.14}18%,100%{fill:#262932;stroke-opacity:.07}}"
        ".nt{animation:rise 2s linear infinite}"
        "@keyframes rise{0%{transform:translate(0,176px) scale(1);opacity:1}"
        "75%{transform:translate(0,0) scale(1);opacity:1}"
        "80%{transform:translate(0,-4px) scale(1.25);opacity:0}"
        "100%{transform:translate(0,0) scale(1);opacity:0}}"
        "@media (prefers-reduced-motion:reduce){.fl,.fr,.pn,.nt{animation:none}.nt{opacity:0}}"
    )
    title = (
        "Footnotes. The notes, with your feet written in. " + lede
    )
    return svg(width, height, title, body, defs=defs, style=style)


def make_demo_gif(path):
    subprocess.run(
        [
            "ffmpeg", "-y", "-loglevel", "error", "-i", VIDEO_PATH,
            "-vf",
            "fps=12,scale=720:-1:flags=lanczos,split[a][b];"
            "[a]palettegen=stats_mode=diff:max_colors=96[p];"
            "[b][p]paletteuse=dither=bayer:bayer_scale=5:diff_mode=rectangle",
            "-loop", "0", path,
        ],
        check=True,
    )


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    ts = Typesetter(FONT_PATH)
    files = {"hero": make_hero(ts)}
    files["button-demo"] = make_button(ts, "Try the demo song", True)
    files["button-songs"] = make_button(ts, "Load your own song", False)
    files["button-controls"] = make_button(ts, "All controls", False)
    files.update(make_song_cards(ts))
    files.update(make_step_cards(ts))
    for name, content in files.items():
        with open(os.path.join(OUT_DIR, name + ".svg"), "w", newline="\n") as f:
            f.write(content)
    make_demo_gif(os.path.join(OUT_DIR, "demo.gif"))
    for name in sorted(os.listdir(OUT_DIR)):
        size = os.path.getsize(os.path.join(OUT_DIR, name))
        print(f"{name:24} {size / 1024:7.1f} KB")


if __name__ == "__main__":
    main()
