import assert from "node:assert/strict"
import test from "node:test"
import { BoxGeometry, Group, Mesh, OrthographicCamera, Vector3 } from "three"
import { createServer } from "vite"

const vite = await createServer({
  configFile: false,
  appType: "custom",
  logLevel: "error",
  optimizeDeps: { noDiscovery: true, include: [] },
  server: { middlewareMode: true, hmr: false, ws: false, watch: null },
})
const { resizeDancerProjection, getDancerFitZoom } = await vite.ssrLoadModule(
  "/app/src/gui/dancer/DancerFraming.ts"
)
// Use the same options defaults the chart loader uses in a worker.
globalThis.WorkerGlobalScope = class {}
globalThis.self = new WorkerGlobalScope()
const { Options } = await vite.ssrLoadModule("/app/src/util/Options.ts")
const { getPracticeLayout } = await vite.ssrLoadModule(
  "/app/src/util/PracticeLayout.ts"
)
delete globalThis.WorkerGlobalScope
delete globalThis.self
await vite.close()

test("zoom enlarges the stage image around the pad without cropping the dancer texture", () => {
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 14)
  camera.position.set(0, 3, 3)
  camera.lookAt(0, 0, 0)
  camera.updateMatrixWorld()
  const head = new Vector3(0, 1.52, 0)
  const shoe = new Vector3(0.35, 0.04, 0.36)
  let normalHeight
  for (const zoom of [1, 1.6, 3, 0.6]) {
    camera.zoom = zoom
    const extent = resizeDancerProjection(camera, 300, 270, 0.96)
    const a = head.clone().project(camera),
      b = shoe.clone().project(camera)
    assert.ok(Math.abs(a.y) < 1 && Math.abs(b.y) < 1 && Math.abs(b.x) < 1)
    const stageHeight = ((a.y - b.y) * 270 * extent) / 2
    normalHeight ??= stageHeight
    assert.ok(Math.abs(stageHeight - normalHeight * zoom) < 1e-8)
  }
})

test("zoom and orbit keep the pad center at a fixed, visible point in the frame", () => {
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 14)
  const pad = new Vector3()
  let anchor
  for (const eye of [
    [0, 3, 3],
    [2, 0.5, -1.8],
    [-1, 3, 0.4],
  ]) {
    camera.position.set(...eye)
    camera.lookAt(pad)
    camera.updateMatrixWorld()
    for (const zoom of [0.6, 1, 1.6, 3]) {
      camera.zoom = zoom
      resizeDancerProjection(camera, 460, 410, 1.92)
      const center = pad.clone().project(camera)
      anchor ??= center
      assert.ok(Math.abs(center.x - anchor.x) < 1e-10)
      assert.ok(Math.abs(center.y - anchor.y) < 1e-10)
      assert.ok(Math.abs(center.x) < 1 && center.y > -1 && center.y < 0)
    }
  }
})

test("Fit contains the posed body at an oblique angle on either side of a double pad", () => {
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 14)
  camera.position.set(2, 1.1, -1.8)
  camera.lookAt(0, 0, 0)
  const body = new Group()
  const torso = new Mesh(new BoxGeometry(0.32, 0.7, 0.24))
  torso.position.y = 1.1
  const shoe = new Mesh(new BoxGeometry(0.12, 0.1, 0.28))
  shoe.position.set(-0.24, 0.06, 0.21)
  body.add(torso, shoe)
  for (const x of [-0.55, 0.55]) {
    body.position.set(x, 0, 0.12)
    for (const [width, height] of [
      [150, 165],
      [380, 410],
      [680, 720],
    ]) {
      camera.zoom = 3
      const before = resizeDancerProjection(camera, width, height, 1.92)
      camera.zoom = Math.min(3, getDancerFitZoom(camera, body, before))
      const extent = resizeDancerProjection(camera, width, height, 1.92)
      const anchor = new Vector3().project(camera)
      for (const mesh of body.children) {
        const vertices = mesh.geometry.getAttribute("position")
        for (let i = 0; i < vertices.count; i++) {
          const v = new Vector3()
            .fromBufferAttribute(vertices, i)
            .applyMatrix4(mesh.matrixWorld)
            .project(camera)
          const y = anchor.y + (v.y - anchor.y) * extent
          assert.ok(Math.abs(v.x * extent) <= 0.941 && Math.abs(y) <= 0.941)
        }
      }
    }
  }
})

test("an end-on double pad fits inside the sprite at every zoom", () => {
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 14)
  for (const eye of [
    [3, 9, 0],
    [0, 3, 3],
    [-3, 0.5, 0],
  ]) {
    camera.position.set(...eye)
    camera.lookAt(0, 0, 0)
    for (const zoom of [0.6, 1, 3]) {
      camera.zoom = zoom
      resizeDancerProjection(camera, 260, 250, 1.92)
      for (const x of [-0.97, 0.97])
        for (const z of [-0.49, 0.49]) {
          const tile = new Vector3(x, -0.05, z).project(camera)
          assert.ok(Math.abs(tile.x) <= 1 && Math.abs(tile.y) <= 1)
        }
    }
  }
})

test("the dancer shares the chart center in portrait and sits to the left in landscape", () => {
  Options.chart.parity.enabled = true
  for (const game of [
    "dance-single",
    "dance-double",
    "pump-single",
    "pump-double",
  ]) {
    const portrait = getPracticeLayout(460, 960, game, 1, 0.85)
    const pad = portrait.dancer
    assert.equal(pad.x + pad.width / 2, portrait.notefieldX)
    assert.ok(pad.y + pad.height < portrait.receptorY)
    assert.equal(pad.height, 960 * Options.practice.botHeight)
    const landscape = getPracticeLayout(1400, 600, game, 1, 0.59)
    assert.ok(
      landscape.dancer.x + landscape.dancer.width < landscape.notefieldX
    )
    assert.ok(
      landscape.receptorY < landscape.dancer.y + landscape.dancer.height
    )
  }
  Options.practice.showDancer = false
  const hidden = getPracticeLayout(460, 960, "dance-single", 1, 0.85)
  assert.equal(hidden.dancer, undefined)
  assert.ok(hidden.receptorY < 0)
  Options.practice.showDancer = true
})
