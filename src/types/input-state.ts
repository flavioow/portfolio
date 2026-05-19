import type { Vector2D } from "./vector"

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

export function applyDeadzone(value: number): number {
  return Math.abs(value) < DEADZONE ? 0 : value
}

export type InputState = Vector2D & {
  active: boolean
}

export const DEADZONE = 0.015
export const MAX_GAMMA = 24
export const MAX_BETA = 24
