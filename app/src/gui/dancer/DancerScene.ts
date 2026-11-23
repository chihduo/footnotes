import {
  AmbientLight,
  BoxGeometry,
  CircleGeometry,
  Color,
  DirectionalLight,
  Group,
  HemisphereLight,
  LatheGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  OrthographicCamera,
  Scene,
  Shape,
  ShapeGeometry,
  SphereGeometry,
  Vector2,
  Vector3,
  WebGLRenderer,
} from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { SVGRenderer } from "three/addons/renderers/SVGRenderer.js"
import { Foot } from "../../chart/stats/parity/ParityDataTypes"
import type { StageLayout } from "../../chart/stats/parity/StageLayouts"
import { getParityColor } from "../../util/Color"
import { clamp } from "../../util/Math"
import { Options } from "../../util/Options"
import { createDancerAnatomy } from "./DancerAnatomy"
import { getDancerFitZoom, resizeDancerProjection } from "./DancerFraming"
import { PANEL_SPACING, type DancerPose, type FootPose } from "./DancerMotion"

const up = new Vector3(0, 1, 0)
const down = new Vector3(0, -1, 0)
const direction = new Vector3()
const pole = new Vector3()
const thighLength = 0.425
const shinLength = 0.405

function material(color: number) {
  return new MeshLambertMaterial({ color })
}

function oval(
  parent: Group,
  surface: MeshLambertMaterial,
  x: number,
  y: number,
  z: number,
  rx: number,
  ry: number,
  rz: number
) {
  const mesh = new Mesh(new SphereGeometry(1, 14, 10), surface)
  mesh.position.set(x, y, z)
  mesh.scale.set(rx, ry, rz)
  parent.add(mesh)
  return mesh
}

function profile(
  parent: Group,
  surface: MeshLambertMaterial,
  rings: number[][],
  depth = 1
) {
  const mesh = new Mesh(
    new LatheGeometry(
      rings.map(([r, y]) => new Vector2(r, y)),
      16
    ),
    surface
  )
  mesh.scale.z = depth
  parent.add(mesh)
  return mesh
}

function limb(
  parent: Group,
  surface: MeshLambertMaterial,
  top: number,
  widest: number,
  end: number
) {
  return profile(
    parent,
    surface,
    [
      [0, 0],
      [top, 0],
      [widest, 0.22],
      [end, 0.92],
      [end * 0.78, 1],
      [0, 1],
    ],
    0.94
  )
}

function connect(mesh: Mesh, a: Vector3, b: Vector3) {
  direction.subVectors(b, a)
  mesh.position.copy(a)
  mesh.scale.y = direction.length()
  mesh.quaternion.setFromUnitVectors(up, direction.normalize())
}

// The ankle is a contact constraint. Place the knee at the intersection of
// the thigh and shin lengths, choosing the bend toward the dancer's toes.
function placeKnee(
  hip: Vector3,
  ankle: Vector3,
  yaw: number,
  side: number,
  knee: Vector3
) {
  direction.subVectors(ankle, hip)
  const distance = Math.max(0.0001, direction.length())
  direction.divideScalar(distance)
  pole.set(
    -Math.sin(yaw) + side * 0.11 * Math.cos(yaw),
    0,
    -Math.cos(yaw) - side * 0.11 * Math.sin(yaw)
  )
  pole.addScaledVector(direction, -pole.dot(direction)).normalize()
  const along = Math.min(
    distance,
    (thighLength ** 2 - shinLength ** 2 + distance ** 2) / (2 * distance)
  )
  const bend = Math.sqrt(Math.max(0, thighLength ** 2 - along ** 2))
  knee.copy(hip).addScaledVector(direction, along).addScaledVector(pole, bend)
}

function createRenderer(): WebGLRenderer | SVGRenderer {
  const canvas = document.createElement("canvas")
  try {
    const context = canvas.getContext("webgl2", {
      alpha: true,
      antialias: true,
      // Pixi can upload this image on the next frame after a mouse gesture.
      preserveDrawingBuffer: true,
    })
    if (context) {
      const renderer = new WebGLRenderer({
        canvas,
        context,
        alpha: true,
        antialias: true,
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      return renderer
    }
  } catch (error) {
    console.warn("Using the SVG renderer for the practice dancer", error)
  }
  const renderer = new SVGRenderer()
  renderer.setQuality("low")
  renderer.setPrecision(1)
  return renderer
}

export class DancerScene {
  private renderer = createRenderer()
  private scene = new Scene()
  private camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 14)
  private controls: OrbitControls<OrthographicCamera>
  private body = new Group()
  private pad = new Group()
  private hips = new Group()
  private chest = new Group()
  private anatomy = createDancerAnatomy(this.renderer instanceof SVGRenderer)
  private skin = material(0xc58b68)
  private jersey = material(0x387f80)
  private trim = material(0x9de1d3)
  private shorts = material(0x354260)
  private tights = material(0x58647c)
  private sock = material(0xe5ece9)
  private shoes = [material(0x0390fc), material(0xfcad03)]
  private toes = [material(0x0390fc), material(0xfcad03)]
  private floorColor = new Color(0x47596d)
  private tiles: Mesh<BoxGeometry, MeshLambertMaterial>[] = []
  private legs = [this.buildLeg(0), this.buildLeg(1)]
  private arms = this.anatomy.hands.map(hand => ({
    upper: limb(this.chest, this.jersey, 0.058, 0.061, 0.043),
    lower: profile(this.chest, this.skin, [
      [0, 0],
      [0.041, 0],
      [0.044, 0.22],
      [0.036, 0.53],
      [0.028, 0.75],
      [0.022, 0.92],
      [0.0205, 0.97],
      [0.0196, 1],
    ]),
    hand,
    shoulder: new Vector3(),
    elbow: new Vector3(),
    wrist: new Vector3(),
  }))
  private cameraRestored = false
  private padWidth = 1

  private width = 0
  private height = 0
  private extent = 1
  private canvas =
    this.renderer instanceof WebGLRenderer
      ? this.renderer.domElement
      : document.createElement("canvas")
  private svgContext =
    this.renderer instanceof SVGRenderer ? this.canvas.getContext("2d") : null

  constructor(
    private mount: HTMLDivElement,
    private present: (canvas: HTMLCanvasElement, extent: number) => void
  ) {
    this.scene.add(this.pad, this.body)
    this.body.add(this.hips, this.chest, this.anatomy.head)
    this.chest.add(...this.anatomy.hands)
    // SVGRenderer supports ambient fill only through AmbientLight.
    this.scene.add(
      this.renderer instanceof SVGRenderer
        ? new AmbientLight(0xb8b4ae)
        : new HemisphereLight(0xfff6e8, 0x91a9c8, 1.65)
    )
    const key = new DirectionalLight(0xffe5c8, 2.1)
    key.position.set(-3, 5, 3)
    const rim = new DirectionalLight(0xc7f1f6, 1.2)
    rim.position.set(2, 3, -3)
    this.scene.add(key, rim)
    // The neutral dancer faces -Z. Equal height and rear distance give 45° elevation.
    this.camera.position.set(0, 3, 3)
    this.controls = new OrbitControls(this.camera, mount)
    this.controls.target.copy(this.pad.position)
    this.controls.enablePan = false
    this.controls.minPolarAngle = Math.PI / 12
    this.controls.maxPolarAngle = Math.PI / 2 - 0.06
    this.controls.minZoom = 0.6
    this.controls.maxZoom = 3
    this.controls.zoomSpeed = 2.4
    this.controls.rotateSpeed = 0.7
    this.controls.cursorStyle = "grab"
    this.controls.update()
    this.controls.saveState()
    this.controls.addEventListener("change", this.cameraChanged)
    this.controls.addEventListener("end", this.rememberCamera)
    mount.addEventListener("dblclick", this.resetCamera)
    mount.addEventListener("keydown", this.cameraKey)

    profile(
      this.hips,
      this.shorts,
      [
        [0, -0.09],
        [0.13, -0.08],
        [0.157, -0.015],
        [0.142, 0.09],
        [0, 0.1],
      ],
      0.75
    )
    profile(
      this.chest,
      this.jersey,
      [
        [0, 0],
        [0.141, 0],
        [0.138, 0.11],
        [0.16, 0.24],
        [0.193, 0.3],
        [0.156, 0.35],
        [0.078, 0.375],
        [0, 0.375],
      ],
      0.7
    )
    profile(
      this.chest,
      this.trim,
      [
        [0.143, 0.015],
        [0.142, 0.027],
      ],
      0.71
    )
    // The contrasting yoke makes shoulder rotation visible from behind.
    oval(this.chest, this.trim, 0, 0.299, 0.112, 0.123, 0.014, 0.014)
    this.setColors()
  }

  private restoreCameraPreference() {
    const saved = Options.practice.stageCamera
    if (
      !Array.isArray(saved) ||
      saved.length !== 3 ||
      !saved.every(Number.isFinite) ||
      saved[2] < Number.EPSILON
    )
      return
    const [azimuth, polar, zoom] = saved
    const controls = this.controls
    this.camera.position
      .setFromSphericalCoords(
        controls.getDistance(),
        clamp(polar, controls.minPolarAngle, controls.maxPolarAngle),
        azimuth
      )
      .add(controls.target)
    this.setViewZoom(zoom)
    controls.update()
  }

  private setViewZoom(zoom: number) {
    // Fit may need a wider view for a foot on the far edge of a double pad.
    this.camera.zoom = Math.min(zoom, this.controls.maxZoom)
    this.controls.minZoom = Math.min(this.controls.minZoom, this.camera.zoom)
    this.camera.updateProjectionMatrix()
  }

  private rememberCamera = () => {
    Options.practice.stageCamera = [
      this.controls.getAzimuthalAngle(),
      this.controls.getPolarAngle(),
      this.camera.zoom,
    ]
  }

  private resetCamera = () => {
    this.controls.reset()
    Options.practice.stageCamera = []
  }

  private cameraKey = (event: KeyboardEvent) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return
    const turn = Math.PI / 12
    switch (event.key) {
      case "ArrowLeft":
        this.controls.rotateLeft(turn)
        break
      case "ArrowRight":
        this.controls.rotateLeft(-turn)
        break
      case "ArrowUp":
        this.controls.rotateUp(turn)
        break
      case "ArrowDown":
        this.controls.rotateUp(-turn)
        break
      case "+":
      case "=":
        this.controls.dollyIn(1 / 1.2)
        break
      case "-":
        this.controls.dollyOut(1 / 1.2)
        break
      case "Home":
        this.resetCamera()
        break
      default:
        return
    }
    event.preventDefault()
    event.stopPropagation()
    if (event.key !== "Home") this.rememberCamera()
  }

  private buildLeg(index: number) {
    const shoe = new Group()
    this.body.add(shoe)
    oval(shoe, this.sock, 0, 0.022, -0.008, 0.057, 0.022, 0.132)
    oval(shoe, this.shoes[index], 0, 0.048, -0.005, 0.056, 0.041, 0.128)
    oval(shoe, this.toes[index], 0, 0.046, -0.084, 0.05, 0.028, 0.051)
    oval(shoe, this.sock, 0, 0.086, 0.046, 0.042, 0.035, 0.044)
    const shadow = new Mesh(
      new CircleGeometry(1, 18),
      new MeshBasicMaterial({
        color: 0x101722,
        transparent: true,
        opacity: 0.36,
        depthWrite: false,
      })
    )
    shadow.rotation.x = -Math.PI / 2
    this.body.add(shadow)
    return {
      shoe,
      shadow,
      thigh: limb(this.body, this.shorts, 0.083, 0.091, 0.059),
      shin: limb(this.body, this.tights, 0.054, 0.065, 0.039),
      joint: oval(this.body, this.tights, 0, 0, 0, 0.057, 0.057, 0.056),
      hip: new Vector3(),
      knee: new Vector3(),
      ankle: new Vector3(),
    }
  }

  setColors() {
    this.shoes[0].color.setHex(getParityColor(Foot.LEFT_HEEL).toNumber())
    this.shoes[1].color.setHex(getParityColor(Foot.RIGHT_HEEL).toNumber())
    this.toes[0].color.setHex(getParityColor(Foot.LEFT_TOE).toNumber())
    this.toes[1].color.setHex(getParityColor(Foot.RIGHT_TOE).toNumber())
  }

  setLayout(layout: StageLayout) {
    this.disposeMeshes(this.pad)
    this.pad.clear()
    this.tiles = []
    const xs = layout.layout.map(p => p.x)
    this.padWidth = (Math.max(...xs) - Math.min(...xs) + 1) * PANEL_SPACING
    const deck = new Mesh(
      new BoxGeometry(this.padWidth + 0.025, 0.05, 3 * PANEL_SPACING + 0.025),
      material(0x29384a)
    )
    deck.position.y = -0.034
    this.pad.add(deck)
    const arrow = new Shape()
    arrow.moveTo(0, 0.089)
    arrow.lineTo(-0.087, 0.002)
    arrow.lineTo(-0.045, 0.002)
    arrow.lineTo(-0.045, -0.057)
    arrow.lineTo(0.045, -0.057)
    arrow.lineTo(0.045, 0.002)
    arrow.lineTo(0.087, 0.002)
    arrow.closePath()
    const marks = new MeshBasicMaterial({ color: 0xa9bbca })
    const arrowGeometry = new ShapeGeometry(arrow)
    for (const [i, point] of layout.layout.entries()) {
      const tile = new Mesh(
        new BoxGeometry(PANEL_SPACING - 0.012, 0.014, PANEL_SPACING - 0.012),
        material(0x47596d)
      )
      tile.position.set(
        point.x * PANEL_SPACING,
        -0.007,
        -point.y * PANEL_SPACING
      )
      this.pad.add(tile)
      this.tiles.push(tile)
      const center = layout.name.startsWith("pump") && i % 5 === 2
      const mark = new Mesh(
        center ? new CircleGeometry(0.059, 12) : arrowGeometry,
        marks
      )
      mark.rotation.set(-Math.PI / 2, Math.PI / 2 - point.rotation, 0, "YXZ")
      mark.position.copy(tile.position).y = 0.002
      this.pad.add(mark)
    }
  }

  resize(width: number, height: number) {
    this.width = width
    this.height = height
    if (!this.cameraRestored) {
      this.cameraRestored = true
      this.restoreCameraPreference()
    }
    this.updateProjection()
  }

  private updateProjection() {
    this.extent = resizeDancerProjection(
      this.camera,
      this.width,
      this.height,
      this.padWidth
    )
    if (this.renderer instanceof WebGLRenderer) {
      const resolution = Math.min(window.devicePixelRatio * this.extent, 2)
      if (
        this.canvas.width !== Math.floor(this.width * resolution) ||
        this.canvas.height !== Math.floor(this.height * resolution)
      )
        this.renderer.setDrawingBufferSize(this.width, this.height, resolution)
    } else if (
      this.canvas.width !== this.width ||
      this.canvas.height !== this.height
    ) {
      this.renderer.setSize(this.width, this.height)
      this.canvas.width = this.width
      this.canvas.height = this.height
    }
  }

  fitDancer() {
    this.setViewZoom(getDancerFitZoom(this.camera, this.body, this.extent))
    this.cameraChanged()
    this.rememberCamera()
  }

  draw(pose: DancerPose) {
    const { left, right, yaw, heading } = pose
    const feet = [left, right]
    const shift = left.unload - right.unload
    const { x, z } = pose.hips
    let hipY = 0.86 + Math.min(left.lift, right.lift) - pose.compression
    const cos = Math.cos(yaw),
      sin = Math.sin(yaw)
    for (const [i, foot] of feet.entries()) {
      const leg = this.legs[i]
      const side = i === 0 ? -1 : 1
      leg.hip.set(x + side * 0.099 * cos, 0, z - side * 0.099 * sin)
      leg.ankle.set(
        foot.x + 0.046 * Math.sin(foot.yaw),
        foot.lift + 0.083,
        foot.z + 0.046 * Math.cos(foot.yaw)
      )
      const horizontal =
        (leg.hip.x - leg.ankle.x) ** 2 + (leg.hip.z - leg.ankle.z) ** 2
      hipY = Math.min(
        hipY,
        leg.ankle.y +
          Math.sqrt(
            Math.max(0.07, (thighLength + shinLength - 0.016) ** 2 - horizontal)
          )
      )
    }
    this.hips.position.set(x, hipY, z)
    this.hips.rotation.set(0, yaw, shift * 0.045, "YXZ")
    this.chest.position.set(
      x + shift * 0.012 * cos,
      hipY + 0.063,
      z - shift * 0.012 * sin
    )
    this.chest.rotation.set(
      -0.09 - pose.compression * 0.8,
      heading + (yaw - heading) * 0.69,
      -shift * 0.075,
      "YXZ"
    )
    this.anatomy.head.position
      .set(0, 0.355, 0)
      .applyQuaternion(this.chest.quaternion)
      .add(this.chest.position)
    this.anatomy.head.rotation.set(
      -0.035,
      heading + (yaw - heading) * 0.39,
      -shift * 0.025,
      "YXZ"
    )
    for (const tile of this.tiles) tile.material.color.copy(this.floorColor)
    for (const [i, foot] of feet.entries()) {
      const side = i === 0 ? -1 : 1
      const leg = this.legs[i]
      leg.hip.y = hipY + side * shift * 0.006
      placeKnee(leg.hip, leg.ankle, yaw, side, leg.knee)
      connect(leg.thigh, leg.hip, leg.knee)
      connect(leg.shin, leg.knee, leg.ankle)
      leg.joint.position.copy(leg.knee)
      leg.shoe.position.set(foot.x, foot.lift + 0.005, foot.z)
      leg.shoe.rotation.set(foot.pitch, foot.yaw, 0, "YXZ")
      leg.shadow.position.set(foot.x, 0.004, foot.z)
      leg.shadow.rotation.set(-Math.PI / 2, foot.yaw, 0, "YXZ")
      leg.shadow.scale.set(0.075 + foot.lift * 0.16, 0.143, 1)
      leg.shadow.material.opacity = 0.38 - foot.lift * 1.6
      if (foot.contact) {
        this.tiles[foot.heel]?.material.color.lerp(this.shoes[i].color, 0.65)
        this.tiles[foot.toe]?.material.color.lerp(this.toes[i].color, 0.65)
      }
      this.poseArm(i, foot, feet[1 - i], yaw, pose.compression)
    }
    this.render()
  }

  private cameraChanged = () => {
    if (!this.width || !this.height) return
    this.updateProjection()
    this.render()
  }

  private render = () => {
    if (!this.width || !this.height) return
    this.renderer.render(this.scene, this.camera)
    if (this.renderer instanceof SVGRenderer && this.svgContext) {
      // SVGRenderer emits filled paths in coordinates centered on the viewport.
      // Rasterize those paths onto the same transparent Pixi texture as WebGL.
      const ctx = this.svgContext
      ctx.clearRect(0, 0, this.width, this.height)
      ctx.save()
      ctx.translate(this.width / 2, this.height / 2)
      for (const path of this.renderer.domElement.querySelectorAll("path")) {
        ctx.fillStyle = path.style.fill
        ctx.globalAlpha = Number(path.style.fillOpacity || 1)
        ctx.fill(new Path2D(path.getAttribute("d")!))
      }
      ctx.restore()
    }
    this.present(this.canvas, this.extent)
  }

  private poseArm(
    i: number,
    foot: FootPose,
    other: FootPose,
    yaw: number,
    compression: number
  ) {
    const side = i === 0 ? -1 : 1
    const stride = clamp(
      -(
        (foot.x - other.x) * Math.sin(yaw) +
        (foot.z - other.z) * Math.cos(yaw)
      ) / PANEL_SPACING,
      -1,
      1
    )
    const arm = this.arms[i]
    const open = foot.unload + other.unload
    arm.shoulder.set(side * 0.161, 0.3, 0)
    arm.elbow.copy(arm.shoulder)
    arm.elbow.x += side * (0.077 + open * 0.039)
    arm.elbow.y -= 0.223 - Math.abs(stride) * 0.026
    arm.elbow.z += 0.035 + stride * 0.115
    arm.wrist.copy(arm.elbow)
    arm.wrist.x += side * 0.025
    arm.wrist.y -= 0.177 - compression * 0.4
    arm.wrist.z += -0.096 + stride * 0.115
    connect(arm.upper, arm.shoulder, arm.elbow)
    connect(arm.lower, arm.elbow, arm.wrist)
    arm.hand.position.copy(arm.wrist)
    arm.hand.quaternion.setFromUnitVectors(
      down,
      direction.subVectors(arm.wrist, arm.elbow).normalize()
    )
  }

  private disposeMeshes(group: Group | Scene) {
    const geometries = new Set<Mesh["geometry"]>()
    const materials = new Set<MeshLambertMaterial | MeshBasicMaterial>()
    group.traverse(object => {
      if (!(object instanceof Mesh)) return
      geometries.add(object.geometry)
      materials.add(object.material)
    })
    geometries.forEach(g => g.dispose())
    materials.forEach(m => m.dispose())
  }

  dispose() {
    this.mount.removeEventListener("dblclick", this.resetCamera)
    this.mount.removeEventListener("keydown", this.cameraKey)
    this.controls.removeEventListener("change", this.cameraChanged)
    this.controls.removeEventListener("end", this.rememberCamera)
    this.controls.dispose()
    this.disposeMeshes(this.scene)
    if (this.renderer instanceof WebGLRenderer) {
      this.renderer.dispose()
      this.renderer.forceContextLoss()
    }
  }
}
