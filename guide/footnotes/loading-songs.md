# Loading songs

Footnotes plays StepMania simfiles: a `.sm` or `.ssc` file together with the song's music, usually an `.ogg` or `.mp3` file in the same folder.
You can try the demo song, load a song from a link, or open a song folder from your computer.

## The demo song

The [Footnotes home page](https://chihduo.github.io/footnotes/) has a one-minute demo song with Beginner, Easy and Medium charts.
**Try the demo song** opens the Beginner chart, and the **Try the demo** card has a button for each chart.
The song was made for Footnotes, so you can share it freely.

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

While practicing, press **Charts** in the bottom bar, or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>O</kbd> (<kbd>⌘</kbd>+<kbd>Shift</kbd>+<kbd>O</kbd> on a Mac), to open the chart list.
Pick a game type at the top, then click a chart to switch to it.

The dancing bot works with **dance single**, **dance double**, **pump single** and **pump double** charts.

## Sharing a song

To send someone a song, share one of these links. Replace `<link>` with the link to the simfile.

| Link                                                                                              | Opens                                        |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `https://chihduo.github.io/footnotes/?song=<link>`                                                | The home page, with the song's charts listed |
| `https://chihduo.github.io/footnotes/app/?url=<link>&chartType=dance-single&chartIndex=0&flags=D` | One chart, straight in practice mode         |

`chartIndex` counts the charts of that game type from `0`, in order from Beginner to Challenge.
The easiest way to get one of these links is to pick a chart on the home page and copy the address of the page that opens.
