import {
  applyDeadzone,
  clamp,
  type InputState,
  MAX_BETA,
  MAX_GAMMA,
} from "@/types/input-state"

export function createGyroInput(): InputState {
  return {
    xPosition: 0,
    yPosition: 0,
    active: false,
  }
}

export function updateGyroInputFromEvent(
  state: InputState,
  event: DeviceOrientationEvent,
) {
  if (event.gamma == null || event.beta == null) {
    state.active = false
    return
  }

  const normalizedX = clamp(event.gamma / MAX_GAMMA, -1, 1)

  const normalizedY = clamp(event.beta / MAX_BETA, -1, 1)

  state.xPosition = applyDeadzone(normalizedX)
  state.yPosition = applyDeadzone(normalizedY)
  state.active = true
}

export function deactivateGyroInput(state: InputState) {
  state.active = false
}
