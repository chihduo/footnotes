#!/usr/bin/env python3
"""Generate the Footnotes demo song: a synthesized track and three charts.

Everything is generated from scratch by this script, so the output can be
shared freely (CC0). Requires numpy and ffmpeg (with libvorbis).

Usage: python3 tools/demo-song/make_demo_song.py
Output: public/demo/footnotes-demo.ogg and public/demo/footnotes-demo.sm
"""

import os
import subprocess
import tempfile
import wave

import numpy as np

SR = 44100
BPM = 120
BEAT = 60 / BPM
MEASURES = 32
LENGTH = MEASURES * 4 * BEAT + 1.0

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..")
OUT_DIR = os.path.join(ROOT, "public", "demo")
NAME = "footnotes-demo"

rng = np.random.default_rng(7)
mix = np.zeros(int(LENGTH * SR))


def add(signal, start):
    i = int(round(start * SR))
    end = min(len(mix), i + len(signal))
    mix[i:end] += signal[: end - i]


def t_axis(duration):
    return np.arange(int(duration * SR)) / SR


def lowpass(x, width):
    return np.convolve(x, np.ones(width) / width, mode="same")


def kick():
    t = t_axis(0.35)
    freq = 48 + 90 * np.exp(-t * 28)
    return np.sin(2 * np.pi * np.cumsum(freq) / SR) * np.exp(-t * 8)


def clap():
    t = t_axis(0.22)
    n = rng.standard_normal(len(t))
    band = lowpass(n, 3) - lowpass(n, 24)
    env = np.exp(-t * 22)
    for offset in (0.011, 0.022):
        env += np.where(t >= offset, np.exp(-(t - offset) * 120), 0) * 0.6
    return band * env


def hat():
    t = t_axis(0.06)
    n = rng.standard_normal(len(t))
    return (n - lowpass(n, 4)) * np.exp(-t * 70)


def triangle(freq, t):
    return 4 * np.abs((freq * t) % 1.0 - 0.5) - 1


def bass_note(freq, duration):
    t = t_axis(duration)
    s = np.tanh(2.2 * np.sin(2 * np.pi * freq * t)) * 0.8
    s += 0.3 * np.sin(2 * np.pi * 2 * freq * t)
    return s * np.minimum(1, t / 0.005) * np.exp(-t * 5)


def pad_chord(freqs, duration):
    t = t_axis(duration)
    s = np.zeros_like(t)
    for f in freqs:
        for detune in (0.998, 1.002):
            s += triangle(f * detune, t)
    attack = np.minimum(1, t / 0.35)
    release = np.clip((duration - t) / 0.4, 0, 1)
    return lowpass(s, 6) * attack * release / (len(freqs) * 2)


def pluck(freq, duration):
    t = t_axis(duration)
    s = triangle(freq, t) * 0.7 + np.sin(2 * np.pi * 2 * freq * t) * 0.15
    return s * np.minimum(1, t / 0.003) * np.exp(-t * 7)


# Am, F, C, G: (bass root, chord tones)
CHORDS = [
    (110.00, [220.00, 261.63, 329.63]),
    (87.31, [174.61, 220.00, 261.63]),
    (130.81, [261.63, 329.63, 392.00]),
    (98.00, [196.00, 246.94, 293.66]),
]
BREAK = (18, 19)


def make_audio(path):
    for m in range(MEASURES):
        start = m * 4 * BEAT
        root, chord = CHORDS[m % 4]
        add(pad_chord(chord, 4 * BEAT + 0.3) * 0.5, start)
        groove = 2 <= m < 30 and m not in BREAK
        if groove or m == 30:
            for b in range(4):
                add(kick() * 0.9, start + b * BEAT)
        if groove:
            for b in (1, 3):
                add(clap() * 0.35, start + b * BEAT)
            for e in range(8):
                add(bass_note(root, BEAT / 2) * 0.32, start + e * BEAT / 2)
        if m in BREAK:
            add(clap() * 0.35, start + 3 * BEAT)
        if 1 <= m < 30:
            for e in range(8):
                if e % 2 == 1:
                    add(hat() * 0.18, start + e * BEAT / 2)
                elif groove:
                    add(hat() * 0.08, start + e * BEAT / 2)
        if 10 <= m < 18 or 20 <= m < 30:
            for e, k in enumerate([0, 1, 2, 1, 0, 1, 2, 1]):
                add(pluck(chord[k] * 2, BEAT / 2 + 0.1) * 0.16, start + e * BEAT / 2)

    # Fade out over the last measure
    fade_start = int((MEASURES - 1) * 4 * BEAT * SR)
    mix[fade_start:] *= np.linspace(1, 0, len(mix) - fade_start)

    out = np.tanh(1.2 * mix / np.max(np.abs(mix))) / np.tanh(1.2) * 0.9
    with tempfile.TemporaryDirectory() as tmp:
        wav_path = os.path.join(tmp, "demo.wav")
        with wave.open(wav_path, "wb") as w:
            w.setnchannels(1)
            w.setsampwidth(2)
            w.setframerate(SR)
            w.writeframes((out * 32767).astype("<i2").tobytes())
        subprocess.run(
            ["ffmpeg", "-y", "-loglevel", "error", "-i", wav_path,
             "-c:a", "libvorbis", "-q:a", "3", path],
            check=True,
        )


# Charts: one string per measure, eight eighth-note slots per measure.
# L, D, U, R are the four arrows; "LR" is a jump; "." is an empty slot.
def cycle(patterns, start, end):
    return {m: patterns[(m - start) % len(patterns)] for m in range(start, end)}


# Beginner steps alternate feet, starting each measure with the left foot,
# so arrows 1 and 3 of a measure are for the left foot and 2 and 4 for the
# right. Keeping Right off the left foot's turns and Left off the right
# foot's means the feet never cross over or switch places.
BEGINNER = {
    2: "L . . . R . . .", 3: "L . . . R . . .",
    4: "D . . . U . . .", 5: "D . . . U . . .",
    **cycle(["L . R . L . R .", "D . U . D . U .",
             "L . D . U . R .", "L . U . D . R ."], 6, 14),
    14: "L . . . R . . .", 15: "D . . . U . . .",
    16: "L . R . L . R .", 17: "LR . . . . . . .",
    19: "LR . . . . . . .",
    **cycle(["L . R . L . R .", "L . D . U . R .",
             "D . U . D . U .", "L . U . D . R ."], 20, 30),
    30: "L . R . L . R .", 31: "LR . . . . . . .",
}

EASY = {
    2: "L . R . L . R .", 3: "D . U . D . U .",
    4: "L . D . U . R .", 5: "R . U . D . L .",
    6: "L R L . R L R .", 7: "D U D . U D U .",
    8: "L . D . U . R .", 9: "LR . . . DU . . .",
    **cycle(["L . D . U . R .", "L R L . R L R .",
             "D . U . L . R .", "LR . . . LR . . ."], 10, 18),
    18: "LR . . . . . . .", 19: "DU . . . LR . . .",
    **cycle(["L . D . R . D .", "L . U . R . U .", "L R L . R L R .",
             "D U D . U D U .", "LR . DU . LR . . ."], 20, 30),
    30: "L . R . L . R .", 31: "LR . . . . . . .",
}

MEDIUM = {
    2: "L . D . U . R .", 3: "L D U R L D U R",
    4: "L D R D L U R U", 5: "R D L D R U L U",
    6: "LR . . . DU . . .", 7: "L D U R LR . . .",
    8: "L U R D L U R D", 9: "L D R D L U R U",
    **cycle(["L D U R L U D R", "L D R D L U R U",
             "R U L U R D L D", "LR . DU . LR . DU ."], 10, 18),
    18: "LR . . . . . . .", 19: "LR . . . LR . LR .",
    **cycle(["L D U R L D U R", "L D R D L U R U", "R D L D R U L U",
             "L U R U L D R D", "LR . DU . L R L R"], 20, 30),
    30: "L D U R LR . . .", 31: "LR . . . . . . .",
}

COLUMNS = "LDUR"


def notes_block(chart):
    measures = []
    for m in range(MEASURES):
        tokens = chart.get(m, ". . . . . . . .").split()
        assert len(tokens) == 8, (m, tokens)
        rows = []
        for token in tokens:
            rows.append("".join("1" if c in token else "0" for c in COLUMNS))
        measures.append("\n".join(rows))
    return "\n,\n".join(measures) + "\n;"


def make_simfile(path):
    header = f"""#TITLE:Footnotes Demo;
#SUBTITLE:;
#ARTIST:Footnotes;
#CREDIT:Generated for Footnotes (CC0);
#MUSIC:{NAME}.ogg;
#OFFSET:0.000;
#SAMPLESTART:16.000;
#SAMPLELENGTH:12.000;
#SELECTABLE:YES;
#DISPLAYBPM:{BPM};
#BPMS:0.000={BPM:.3f};
#STOPS:;
"""
    charts = ""
    for difficulty, meter, chart in (
        ("Beginner", 1, BEGINNER),
        ("Easy", 3, EASY),
        ("Medium", 5, MEDIUM),
    ):
        charts += f"""
//---------------dance-single - {difficulty}----------------
#NOTES:
     dance-single:
     Footnotes:
     {difficulty}:
     {meter}:
     0.000,0.000,0.000,0.000,0.000:
{notes_block(chart)}
"""
    with open(path, "w", newline="\n") as f:
        f.write(header + charts)


if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    make_audio(os.path.join(OUT_DIR, NAME + ".ogg"))
    make_simfile(os.path.join(OUT_DIR, NAME + ".sm"))
    print("Wrote", os.path.normpath(OUT_DIR))
