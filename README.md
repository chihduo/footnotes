# SMEditor: Dance Practice

This repository is a modified version of [SMEditor](https://github.com/tillvit/smeditor) by tillvit (MIT License).
It adds a **dance practice mode** for learning how to dance a song:

- The [dancing bot](https://tillvit.github.io/smeditor/guide/parity.html) is enlarged and placed above the notefield, so you can see the bot's feet and the incoming arrows at the same time.
- The editing interface is hidden. Only playback controls, playback rate, scroll speed, assist tick and the note layout remain.

Toggle it with <kbd>Shift</kbd>+<kbd>H</kbd> or **View > Dance practice mode**, or open a song straight into it with
`app/?url=<link to .sm/.ssc>&flags=D`. See `guide/parity.md` for details.

The rest of this README is from the original project.

# SMEditor

Open source tool to view and edit StepMania charts.
You can view the tool at https://tillvit.github.io/smeditor
Inspired by [ArrowVortex](https://arrowvortex.ddrnl.com/index.html)

SMEditor is currently a work in progress. You can check the planned features [here](https://github.com/users/tillvit/projects/2)

# Running

To start a dev web server, use `npm run dev`.
To run the native app, run `npm run dev` and `npm run app:dev`.

# Building

The website is split into two parts: the core webapp and the guide.
You can build them seperately using `npm run core:build` or `npm run guide:build`, or build them
together using `npm run build`.

To build the native app, run `npm run app:build`.
