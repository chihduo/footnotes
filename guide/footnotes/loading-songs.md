# Loading songs

Footnotes plays StepMania simfiles: a `.sm` or `.ssc` file together with the song's music, usually an `.ogg` or `.mp3` file in the same folder.
You can try the demo song, pick one on the Songs page, load a song from a link, or open a song folder from your computer.

## The demo song

The [Footnotes home page](https://chihduo.github.io/footnotes/) has a demo song: "YOU" by YURIA, with five charts from **Beginner** (level 1) to **Challenge** (level 9).
Trick Master Mint made the Beginner, Easy, Medium and Hard charts, and Shuffle Master Mint made the Challenge chart.
**Try the demo song** opens the **Hard** chart. To start with another chart, press its button in the **Try the demo** card.
The song and charts are used with permission and aren't covered by Footnotes' license, so please don't redistribute them.

## The Songs page

The [Songs page](https://chihduo.github.io/footnotes/songs/) lists the songs of the song packs hosted for Footnotes.
For now that's **Mintmania**: 52 songs with 257 charts, most of them by Trick Master Mint.
Open it with **More songs…** on the home page, or with **Songs** in the bottom bar while you practice.

Each song has a button for each chart, with its level and difficulty. Press one to start practicing that chart.
To find a song, type part of its title or artist in the search box.
Two songs also have charts for **double**, which uses both pads, listed after their single charts.

The packs are hosted in their own repository, [chihduo/footnotes-packs](https://github.com/chihduo/footnotes-packs).
Like the demo song, their songs and charts aren't covered by Footnotes' license, so please don't redistribute them.

## From a link

Paste a link to a `.sm` or `.ssc` file into **From a link** on the home page and press **Find charts**.
Footnotes lists the charts in the file in a pop-up, and you pick the one you want to practice.

For a link to work:

- It has to point straight to the `.sm` or `.ssc` file, not to a page that shows it.
- The music file has to be next to the simfile, at the path the simfile names.
- The site hosting the files has to let other pages read them.

GitHub works well: put the song folder in a public repository, open the simfile, and copy the link of its **Raw** button (it starts with `https://raw.githubusercontent.com/`).
Most file-sharing pages, such as Google Drive or Dropbox share links, don't work, because they link to a preview page instead of the file.

## From your computer

1. On the home page, choose **Open a song folder**.
2. Choose **Import a song folder**, then **Upload folder**, and select the folder that holds the simfile and its music.
3. Open the uploaded folder, click the `.sm` or `.ssc` file, and press **Select**.

Uploaded songs stay in your browser, so you only upload a song once. The next time, pick it from the file list or from **Recently Opened**.

## Choosing a chart

Songs usually have several charts, from Beginner to Challenge.
The home page lists them all when you load a song from a link.

While practicing, the **Chart** button in the bottom bar shows the current chart.
Press it, or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>O</kbd> (<kbd>⌘</kbd>+<kbd>Shift</kbd>+<kbd>O</kbd> on a Mac), to open the chart list.
Pick a game type at the top, then click a chart to switch to it. Press **Chart** again to close the list.

The dancing bot works with **dance single**, **dance double**, **pump single** and **pump double** charts.

## Sharing a song

To send someone a song, share one of these links. Replace `<link>` with the link to the simfile.

| Link                                                                                              | Opens                                        |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `https://chihduo.github.io/footnotes/?song=<link>`                                                | The home page, with the song's charts listed |
| `https://chihduo.github.io/footnotes/app/?url=<link>&chartType=dance-single&chartIndex=0&flags=D` | One chart, straight in practice mode         |

`chartIndex` counts the charts of that game type from `0`, in order from Beginner to Challenge.
The easiest way to get one of these links is to pick a chart on the home page and copy the address of the page that opens.
