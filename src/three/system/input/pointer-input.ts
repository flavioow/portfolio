import { applyDeadzone, clamp, type InputState } from "@/types/input-state"

export function createPointerInput(): InputState {
  return {
    xPosition: 0,
    yPosition: 0,
    active: false,
  }
}

export function updatePointerInputFromEvent(
  state: InputState,
  event: PointerEvent,
  bounds: DOMRect,
) {
  const relativeXPosition = clamp(
    (event.clientX - bounds.left) / bounds.width,
    0,
    1,
  )
  const relativeYPosition = clamp(
    (event.clientY - bounds.top) / bounds.height,
    0,
    1,
  )

  state.xPosition = applyDeadzone(relativeXPosition * 2 - 1)
  state.yPosition = applyDeadzone(1 - relativeYPosition * 2)
  state.active = true
}

export function deactivatePointerInput(state: InputState) {
  state.active = false
}
