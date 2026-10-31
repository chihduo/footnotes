import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Footnotes Guide",
  description:
    "How to learn StepMania charts with Footnotes, and how to use the SMEditor chart editor it's built on",
  base: "/footnotes/guide/",
  outDir: "../dist/guide",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/footnotes/guide/footnotes.svg",
      },
    ],
  ],
  themeConfig: {
    logo: "/footnotes.svg",
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "../" },
      { text: "Open Footnotes", link: "../app/?flags=D" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/chihduo/footnotes" },
    ],

    sidebar: [
      {
        text: "Footnotes",
        items: [
          {
            text: "Getting Started",
            link: "/footnotes/",
          },
          {
            text: "How the Bot Chooses Feet",
            link: "/footnotes/footing",
          },
          {
            text: "Loading Songs",
            link: "/footnotes/loading-songs",
          },
          {
            text: "Controls",
            link: "/footnotes/controls",
          },
          {
            text: "Tips and FAQ",
            link: "/footnotes/tips",
          },
        ],
      },
      {
        text: "Chart Editor",
        items: [
          {
            text: "Basic Guide",
            link: "/basic-guide",
          },
          {
            text: "XMod vs CMod",
            link: "/xmod-cmod",
          },
          {
            text: "Timing Tracks and Events",
            link: "/timing-events",
          },
          {
            text: "Parity Checking",
            link: "/parity",
          },
        ],
      },
      {
        text: "Chart Editor: Advanced",
        items: [
          // {
          //   text: "Audio Filtering",
          // },
          {
            text: "Auto BPM Detection",
            link: "/auto-sync",
          },
          {
            text: "Scripting",
            link: "/scripting",
          },
        ],
      },
    ],
  },
})
