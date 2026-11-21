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
await vite.close()

test("expanding either edge uncrops the body at the original pixel scale", () => {
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 14)
  camera.position.set(0, 2.4, 3.2)
  camera.lookAt(0, 0, 0)
  camera.updateMatrixWorld()
  camera.zoom = 2
  const head = new Vector3(0, 1.4, 0)
  const shoe = new Vector3(0.63, 0.04, 0.48)
  function measure(width, height) {
    resizeDancerProjection(camera, width, height, 300, 300, 0.96)
    const a = head.clone().project(camera)
    const b = shoe.clone().project(camera)
    return {
      a,
      b,
      pixelHeight: ((a.y - b.y) * height) / 2,
      pixelWidth: ((b.x - a.x) * width) / 2,
    }
  }

  const small = measure(300, 300)
  assert.ok(small.a.y > 1 && small.b.y < -1 && small.b.x > 1)
  const wide = measure(450, 300)
  assert.ok(wide.b.x < 1 && wide.a.y > 1 && wide.b.y < -1)
  const tall = measure(450, 500)
  assert.ok(tall.b.x < 1 && tall.a.y < 1 && tall.b.y > -1)
  assert.ok(Math.abs(tall.pixelHeight - small.pixelHeight) < 1e-8)
  assert.ok(Math.abs(tall.pixelWidth - small.pixelWidth) < 1e-8)
  assert.equal(camera.zoom, 2)
})

test("zoom and orbit keep the pad center at a fixed, visible point in the frame", () => {
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 14)
  const pad = new Vector3()
  resizeDancerProjection(camera, 460, 410, 400, 370, 1.92)
  let anchor
  for (const eye of [
    [0.82, 1.9, 3.25],
    [2, 0.5, -1.8],
    [-1, 3, 0.4],
  ]) {
    camera.position.set(...eye)
    camera.lookAt(pad)
    camera.updateMatrixWorld()
    for (const zoom of [0.6, 1, 1.6, 3]) {
      camera.zoom = zoom
      camera.updateProjectionMatrix()
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
      resizeDancerProjection(camera, width, height, 400, 370, 1.92)
      camera.zoom = Math.min(3, getDancerFitZoom(camera, body))
      camera.updateProjectionMatrix()
      for (const mesh of body.children) {
        const vertices = mesh.geometry.getAttribute("position")
        for (let i = 0; i < vertices.count; i++) {
          const v = new Vector3()
            .fromBufferAttribute(vertices, i)
            .applyMatrix4(mesh.matrixWorld)
            .project(camera)
          assert.ok(Math.abs(v.x) <= 0.941 && Math.abs(v.y) <= 0.941)
        }
      }
    }
  }
})
