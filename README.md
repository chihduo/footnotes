<p align="center">
  <img src="public/assets/icon/footnotes.svg" alt="" width="96" height="96" />
</p>

<h1 align="center">Footnotes</h1>

<p align="center"><strong>The notes, with your feet written in.</strong></p>

<p align="center">
  <a href="https://chihduo.github.io/footnotes/">Website</a> ·
  <a href="https://chihduo.github.io/footnotes/guide/footnotes/">Guide</a> ·
  <a href="https://chihduo.github.io/footnotes/app/?flags=D">Open the app</a>
</p>

Footnotes helps you learn how to dance StepMania charts.
A dancing bot stands on a dance pad at the top of the screen and steps exactly when you should, right above the arrows you're about to hit.
Copy its feet while you read the arrows, and slow the song down until the pattern feels natural.

- **See your footing.** The bot shows which foot goes where, including crossovers, turns and holds. Blue is your left foot, orange is your right.
- **Practice at your pace.** Slow the song down, change the scroll speed, and jump to any part of the chart.
- **Bring your own songs.** Load any `.sm` or `.ssc` simfile from a link or from your computer, or start with the built-in demo song.
- **Nothing in the way.** The editing tools are hidden while you practice. The full chart editor is one key away.

## Quick start

1. Open [chihduo.github.io/footnotes](https://chihduo.github.io/footnotes/).
2. Press **Try the demo song** and pick a chart.
3. Press <kbd>Space</kbd> to play, and dance along with the bot.

| Action                | Keys                                                          |
| --------------------- | ------------------------------------------------------------- |
| Play or pause         | <kbd>Space</kbd>                                              |
| Slower or faster      | <kbd>Shift</kbd>+<kbd>←</kbd> / <kbd>Shift</kbd>+<kbd>→</kbd> |
| Scroll speed          | <kbd>Shift</kbd>+<kbd>↓</kbd> / <kbd>Shift</kbd>+<kbd>↑</kbd> |
| Choose another chart  | <kbd>Ctrl</kbd>/<kbd>⌘</kbd>+<kbd>Shift</kbd>+<kbd>O</kbd>    |
| Open the chart editor | <kbd>Shift</kbd>+<kbd>H</kbd>                                 |

The [guide](https://chihduo.github.io/footnotes/guide/footnotes/) covers loading songs, all controls, and tips for learning a chart.

## How it works

Footnotes is built on [SMEditor](https://github.com/tillvit/smeditor), an open source StepMania chart editor by tillvit.
SMEditor works out the most natural foot for every arrow with its [parity checker](https://chihduo.github.io/footnotes/guide/parity.html) and can show the result as a small dancing bot.
Footnotes adds a **dance practice mode** around it:

- The bot is enlarged and placed above the notefield, with the receptors directly underneath. Arrows rise into the receptors and slide under the bot once they pass.
- The editing interface is hidden. Playback controls, playback rate, scroll speed, the assist tick and the note layout stay.
- A landing page loads a song from a link, lists its charts, and opens the chosen chart in practice mode.

Practice mode is toggled with <kbd>Shift</kbd>+<kbd>H</kbd> or **View > Dance practice mode**, and the `D` URL flag opens a song straight into it:
`app/?url=<link to .sm/.ssc>&chartType=dance-single&chartIndex=0&flags=D`.

## Development

| Command             | What it does                                              |
| ------------------- | --------------------------------------------------------- |
| `npm run dev`       | Starts a dev server at `http://127.0.0.1:5173/footnotes/` |
| `npm run build`     | Builds the site, app and guide into `dist/`               |
| `npm run guide:dev` | Starts the guide's dev server                             |
| `npm run app:dev`   | Runs the desktop app against the dev server               |

Every push to `master` builds the site and publishes it to GitHub Pages (`.github/workflows/bundle.yml`).

| Path                     | Contents                                   |
| ------------------------ | ------------------------------------------ |
| `index.html`, `landing/` | The Footnotes landing page and song picker |
| `app/`                   | The app: SMEditor with dance practice mode |
| `guide/`                 | The guide (VitePress)                      |
| `public/demo/`           | The demo song                              |
| `tools/demo-song/`       | The script that generates the demo song    |

## License

Footnotes is a modified version of SMEditor and is distributed under the MIT License, like SMEditor. See [LICENSE](LICENSE).

The demo song in `public/demo/` is generated from scratch by `tools/demo-song/make_demo_song.py` and is released into the public domain ([CC0](https://creativecommons.org/publicdomain/zero/1.0/)).
