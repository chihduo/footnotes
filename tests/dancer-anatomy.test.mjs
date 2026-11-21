import assert from "node:assert/strict"
import test from "node:test"
import { createServer } from "vite"

const vite = await createServer({
  configFile: false,
  appType: "custom",
  logLevel: "error",
  optimizeDeps: { noDiscovery: true, include: [] },
  server: { middlewareMode: true, hmr: false, ws: false, watch: null },
})
const { createDancerAnatomy } = await vite.ssrLoadModule(
  "/app/src/gui/dancer/DancerAnatomy.ts"
)
await vite.close()

test("both detail levels use valid faces and reflect the right hand's winding", () => {
  const full = createDancerAnatomy(false)
  const svg = createDancerAnatomy(true)
  assert.ok(svg.head.geometry.index.count < full.head.geometry.index.count)
  assert.ok(
    svg.hands[0].geometry.index.count < full.hands[0].geometry.index.count
  )
  for (const { head, hands } of [full, svg]) {
    for (const { geometry } of [head, ...hands]) {
      const { position, normal, color } = geometry.attributes
      assert.equal(position.count, normal.count)
      assert.equal(position.count, color.count)
      assert.ok(geometry.index.count > 0)
      assert.equal(geometry.index.count % 3, 0)
      assert.ok(geometry.index.array.every(index => index < position.count))
    }
    const [left, right] = hands.map(hand => hand.geometry)
    const leftVertices = left.attributes.position
    const rightVertices = right.attributes.position
    assert.equal(leftVertices.count, rightVertices.count)
    for (let i = 0; i < leftVertices.count; i++) {
      assert.ok(Math.abs(leftVertices.getX(i) + rightVertices.getX(i)) < 1e-6)
      assert.equal(leftVertices.getY(i), rightVertices.getY(i))
      assert.equal(leftVertices.getZ(i), rightVertices.getZ(i))
    }
    const leftFaces = left.index.array
    const rightFaces = right.index.array
    assert.equal(leftFaces.length, rightFaces.length)
    for (let i = 0; i < leftFaces.length; i += 3) {
      assert.equal(leftFaces[i], rightFaces[i])
      assert.equal(leftFaces[i + 1], rightFaces[i + 2])
      assert.equal(leftFaces[i + 2], rightFaces[i + 1])
    }
  }
})
