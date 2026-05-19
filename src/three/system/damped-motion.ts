import type { Vector2D } from "@/types/vector"

export type DampedMotionState = {
  current: Vector2D
  target: Vector2D
  damping: number
}

export function createDampedMotion(damping: number): DampedMotionState {
  return {
    current: { xPosition: 0, yPosition: 0 },
    target: { xPosition: 0, yPosition: 0 },
    damping,
  }
}

export function updateDampedMotion(state: DampedMotionState, delta: number) {
  const t = 1 - Math.exp(-state.damping * delta)

  state.current.xPosition +=
    (state.target.xPosition - state.current.xPosition) * t
  state.current.yPosition +=
    (state.target.yPosition - state.current.yPosition) * t
}
