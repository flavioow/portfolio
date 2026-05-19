import type { RefObject } from "react"
import type { DampedMotionState } from "@/three/system/damped-motion"
import type { InputManager } from "@/three/system/input/input-manager"

export type HeroSceneConfig = {
  pointerRange: number
  motionDamping: number
  cameraPositionStrength: number
  cameraRotationStrength: number
  uvParallaxStrength: number
  vertexDepthStrength: number
  normalStrength: number
  specularStrength: number
  fresnelStrength: number
  depthPower: number
}

export type SceneConfigProps = {
  config: HeroSceneConfig
  motionRef: RefObject<DampedMotionState>
}

export type SceneRootProps = {
  config?: HeroSceneConfig
  inputRef: RefObject<InputManager | null>
}

export const DEFAULT_HERO_SCENE_CONFIG: HeroSceneConfig = {
  pointerRange: 0.24,
  motionDamping: 16,
  cameraPositionStrength: 0.12,
  cameraRotationStrength: 0.02,
  uvParallaxStrength: 0.07,
  vertexDepthStrength: 0.05,
  normalStrength: 0.5,
  specularStrength: 0.03,
  fresnelStrength: 0.03,
  depthPower: 1.71,
}

export const HERO_IMAGE_PLANE_SIZE = {
  width: 1,
  height: 1,
}

export const HERO_IMAGE_PLANE_SEGMENTS = 192
