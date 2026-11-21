import { STAGE_LAYOUTS } from "../chart/stats/parity/StageLayouts"
import { clamp } from "./Math"
import { Options } from "./Options"

const PANEL_SIZE = 80
const TOP_MARGIN = 16
const RECEPTOR_GAP = 12
const RECEPTOR_HALF_HEIGHT = 32
const COLUMN_WIDTH = 64
const SHORT_SCREEN_HEIGHT = 560
const SIDE_MIN_ASPECT = 1.6
const SIDE_GAP = 48
const BOTTOM_BAR_REM = 5.5

let bottomBarRoom: number | null = null
let noteLayoutRoom = 0

export function setPracticeNoteLayoutRoom(stageUnits: number) {
  noteLayoutRoom = stageUnits
}

export function setPracticeBottomBarRoom(pixels: number) {
  bottomBarRoom = pixels
}

export function getPracticeStageZoom(screenHeight: number): number {
  if (!Options.practice.enabled || screenHeight <= 0) return 1
  return clamp(SHORT_SCREEN_HEIGHT / screenHeight, 1, 1.8)
}

export interface DancerArea {
  x: number
  y: number
  width: number
  height: number
}

const padSizes = new Map<string, { width: number; height: number }>()

// Use the footprint of the original pad, including both pads on double charts.
export function getPadSize(gameTypeId: string) {
  const layout = STAGE_LAYOUTS[gameTypeId]
  if (!layout) return
  let size = padSizes.get(gameTypeId)
  if (!size) {
    const xs = layout.layout.map(point => point.x)
    const ys = layout.layout.map(point => point.y)
    size = {
      width: (Math.max(...xs) - Math.min(...xs) + 1) * PANEL_SIZE,
      height: (Math.max(...ys) - Math.min(...ys) + 1) * PANEL_SIZE,
    }
    padSizes.set(gameTypeId, size)
  }
  return size
}

interface PracticeLayout {
  dancer?: DancerArea
  notefieldX: number
  receptorY: number
}

// Both the dancer and the scrolling chart use these centered Pixi stage coordinates.
export function getPracticeLayout(
  stageWidth: number,
  stageHeight: number,
  gameTypeId: string,
  zoom: number,
  pixelsPerUnit: number
): PracticeLayout | undefined {
  const pad = getPadSize(gameTypeId)
  if (!pad) return
  const top = -stageHeight / 2 + TOP_MARGIN
  const receptorY = top + RECEPTOR_GAP + RECEPTOR_HALF_HEIGHT * zoom
  if (!Options.practice.showDancer || !Options.chart.parity.enabled)
    return { notefieldX: 0, receptorY }

  const sidebar = Options.chart.noteLayout.enabled ? noteLayoutRoom : 0
  const fieldWidth =
    STAGE_LAYOUTS[gameTypeId].layout.length * COLUMN_WIDTH * zoom
  const availableWidth = stageWidth - sidebar
  if (
    pixelsPerUnit > 0 &&
    stageHeight * pixelsPerUnit < SHORT_SCREEN_HEIGHT &&
    stageWidth >= SIDE_MIN_ASPECT * stageHeight &&
    availableWidth > fieldWidth + SIDE_GAP + PANEL_SIZE
  ) {
    const bottomBar =
      (bottomBarRoom ?? BOTTOM_BAR_REM * 16 * Options.general.uiScale) /
      pixelsPerUnit
    const height = Math.max(1, stageHeight - TOP_MARGIN - bottomBar)
    const width = Math.min(
      (height * pad.width) / pad.height,
      availableWidth / 2 - SIDE_GAP,
      availableWidth - fieldWidth - SIDE_GAP
    )
    const x = -(sidebar + width + SIDE_GAP + fieldWidth) / 2
    return {
      dancer: { x, y: top, width, height },
      notefieldX: x + width + SIDE_GAP + fieldWidth / 2,
      receptorY,
    }
  }

  const height = Options.practice.botHeight * stageHeight
  const width = Math.min(
    (height * pad.width) / pad.height,
    0.9 * Math.max(1, stageWidth - 2 * sidebar)
  )
  return {
    dancer: { x: -width / 2, y: top, width, height },
    notefieldX: 0,
    receptorY: receptorY + height,
  }
}
