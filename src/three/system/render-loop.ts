type RenderLoop = {
  start: () => void
  stop: () => void
}

export function createRenderLoop(
  update: () => void,
  render: () => void,
): RenderLoop {
  let running = false
  let rafId: number

  function loop() {
    if (!running) return

    update()
    render()

    rafId = requestAnimationFrame(loop)
  }

  return {
    start() {
      if (running) return
      running = true
      rafId = requestAnimationFrame(loop)
    },

    stop() {
      running = false
      cancelAnimationFrame(rafId)
    },
  }
}
