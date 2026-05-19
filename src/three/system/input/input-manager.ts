import type { InputState } from "@/types/input-state"
import { createGyroInput, updateGyroInputFromEvent } from "./gyro-input"
import {
  createPointerInput,
  deactivatePointerInput,
  updatePointerInputFromEvent,
} from "./pointer-input"

export type InputManager = {
  state: InputState
  destroy: () => void
}

function shouldUseGyro() {
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches
  const supportsGyro = typeof DeviceOrientationEvent !== "undefined"

  return coarsePointer && supportsGyro
}

export async function createInputManager(
  container: HTMLElement,
): Promise<InputManager> {
  if (!shouldUseGyro()) {
    const state = createPointerInput()

    const onPointerMove = (event: PointerEvent) => {
      updatePointerInputFromEvent(
        state,
        event,
        container.getBoundingClientRect(),
      )
    }

    const onPointerLeave = () => {
      deactivatePointerInput(state)
    }

    container.addEventListener("pointermove", onPointerMove)
    container.addEventListener("pointerleave", onPointerLeave)

    return {
      state,
      destroy() {
        container.removeEventListener("pointermove", onPointerMove)
        container.removeEventListener("pointerleave", onPointerLeave)
      },
    }
  }

  const state = createGyroInput()

  if (
    typeof DeviceOrientationEvent !== "undefined" &&
    "requestPermission" in DeviceOrientationEvent
  ) {
    try {
      const response = await (
        DeviceOrientationEvent as typeof DeviceOrientationEvent & {
          requestPermission(): Promise<string>
        }
      ).requestPermission()

      if (response !== "granted") return { state, destroy() {} }
    } catch {
      return { state, destroy() {} }
    }
  }

  const onOrientation = (event: DeviceOrientationEvent) => {
    updateGyroInputFromEvent(state, event)
  }

  window.addEventListener("deviceorientation", onOrientation)

  return {
    state,
    destroy() {
      window.removeEventListener("deviceorientation", onOrientation)
    },
  }
}
