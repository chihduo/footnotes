import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import { EventHandler } from "../../util/EventHandler"
import { clamp } from "../../util/Math"
import { Options } from "../../util/Options"
import { ReactIcon } from "../Icons"
import { WindowContext } from "./WindowManager"

// The space a window shrunk to fit keeps from the edges of its area, in pixels
const WINDOW_MARGIN = 8

export interface WindowOptions {
  title: string
  width: number
  height?: number
  win_id?: string
  disableClose?: boolean
  blocking?: boolean
}

export function Window(props: { focused: boolean }) {
  const [windowPosition, setWindowPosition] = useState<{
    x: number
    y: number
  }>({ x: -3000, y: -3000 })
  const windowData = useContext(WindowContext)
  const [dragging, setDragging] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const windowElement = useRef<HTMLDivElement>(null)
  const viewElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!windowElement.current) return
    if (windowData?.blocking) {
      window.addEventListener("resize", center)
      return () => window.removeEventListener("resize", center)
    }
  }, [windowElement])

  // When the app's size changes, as when a phone turns, windows still fit.
  // Blocking windows stay centered, and so does a window whose size had to
  // change. Others keep their place
  useEffect(() => {
    if (!windowElement.current) return
    const resized = () => {
      const element = windowElement.current
      if (!element) return
      const { offsetWidth, offsetHeight } = element
      fit()
      if (
        windowData?.blocking ||
        element.offsetWidth != offsetWidth ||
        element.offsetHeight != offsetHeight
      ) {
        center()
        return
      }
      setWindowPosition(position => clampPosition(position))
    }
    EventHandler.on("resize", resized)
    return () => EventHandler.off("resize", resized)
  }, [windowElement])

  useLayoutEffect(() => {
    if (!windowElement.current) return
    center()
    const resizeObserver = new ResizeObserver(() => {
      center()
      if (!windowData?.blocking) resizeObserver.disconnect()
    })
    resizeObserver.observe(windowElement.current)
    return () => resizeObserver.disconnect()
  }, [windowElement])

  // The area windows stay in: the canvas, and in practice mode only the part
  // above the bottom bar, since the bar is drawn over windows
  function getBounds() {
    const canvas = windowData!.app.view.getBoundingClientRect()
    let bottom = canvas.bottom
    if (document.body.classList.contains("practice")) {
      const bar = document
        .getElementById("status-widget")
        ?.getBoundingClientRect()
      if (bar && bar.height > 0) bottom = Math.min(bottom, bar.top)
    }
    return {
      left: canvas.left,
      top: canvas.top,
      width: canvas.width,
      height: bottom - canvas.top,
    }
  }

  // Shrinks the window if it's bigger than its area, as on phones. Its content
  // gets narrower or scrolls
  function fit() {
    const bounds = getBounds()
    const element = windowElement.current!
    const view = viewElement.current!
    const navbarHeight = element.offsetHeight - view.offsetHeight
    element.style.maxWidth = bounds.width - 2 * WINDOW_MARGIN + "px"
    view.style.maxHeight =
      bounds.height - 2 * WINDOW_MARGIN - navbarHeight + "px"
  }

  function clampPosition(position: { x: number; y: number }) {
    const bounds = getBounds()
    return {
      x: clamp(
        position.x,
        bounds.left,
        bounds.width - windowElement.current!.offsetWidth + bounds.left
      ),
      y: clamp(
        position.y,
        bounds.top,
        bounds.height - windowElement.current!.offsetHeight + bounds.top
      ),
    }
  }

  const handleDrag = useCallback((event: MouseEvent) => {
    if (!windowElement.current || windowData?.blocking) return
    setWindowPosition(pos =>
      clampPosition({ x: pos.x + event.movementX, y: pos.y + event.movementY })
    )
  }, [])

  const startDrag = useCallback(() => {
    if (!windowElement.current || windowData?.blocking) return
    setDragging(true)
    window.addEventListener("mousemove", handleDrag)
    window.addEventListener("mouseup", () => {
      setDragging(false)
      window.removeEventListener("mousemove", handleDrag)
    })
  }, [])

  function center() {
    fit()
    const bounds = windowElement.current!.getBoundingClientRect()
    // In practice mode, windows open in the middle of the stage, between the
    // top and bottom bars
    const area = document.body.classList.contains("practice")
      ? getBounds()
      : {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
    const x =
      area.left + area.width / 2 - (bounds.width / 2) * Options.general.uiScale
    const y =
      area.top + area.height / 2 - (bounds.height / 2) * Options.general.uiScale
    // fast update no flicker !
    windowElement.current!.style.left = x + "px"
    windowElement.current!.style.top = y + "px"
    setWindowPosition(clampPosition({ x, y }))
  }

  return (
    <WindowContext.Provider
      value={{
        ...windowData!,
        center,
      }}
    >
      <div
        className={
          "window" +
          (props.focused ? " focused" : "") +
          (minimized ? " minimized" : "")
        }
        style={{
          width: windowData!.width / 16 + "rem",
          left: windowPosition.x + "px",
          top: windowPosition.y + "px",
          zIndex: windowData!.blocking ? 10000 : 1,
        }}
        ref={windowElement}
        onMouseDown={() => windowData!.focus()}
      >
        <div
          className="navbar"
          onMouseDown={startDrag}
          style={{
            cursor: windowData?.blocking
              ? "auto"
              : dragging
                ? "grabbing"
                : "grab",
          }}
        >
          <div className="title unselectable">{windowData!.title}</div>
          {windowData?.disableClose || (
            <>
              <ReactIcon
                id="MINIMIZE"
                width={15}
                height={15}
                onClick={() => {
                  setMinimized(!minimized)
                }}
              />
              <ReactIcon
                id="CLOSE_WINDOW"
                width={15}
                height={15}
                onClick={windowData?.close}
              />
            </>
          )}
        </div>
        <div
          className={"window-view " + (minimized ? "minimized" : "")}
          ref={viewElement}
          style={{
            width: "100%",
            height: windowData!.height
              ? windowData!.height / 16 + "rem"
              : undefined,
            ...windowData!.viewStyle,
          }}
        >
          {windowData!.content}
        </div>
      </div>
    </WindowContext.Provider>
  )
}
