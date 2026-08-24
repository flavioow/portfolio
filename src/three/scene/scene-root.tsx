import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import {
  DEFAULT_HERO_SCENE_CONFIG,
  type SceneRootProps,
} from "@/types/scene-config"
import { createDampedMotion, updateDampedMotion } from "../system/damped-motion"
import { CameraController } from "./camera-controller"
import { ImagePlane } from "./image-plane"
import { SceneReadiness } from "./scene-readiness"

export function SceneRoot({
  config = DEFAULT_HERO_SCENE_CONFIG,
  inputRef,
}: SceneRootProps) {
  const motionRef = useRef(createDampedMotion(config.motionDamping))

  useFrame((_, delta) => {
    const input = inputRef.current?.state
    const motion = motionRef.current

    motion.damping = config.motionDamping
    motion.target.xPosition = input?.active
      ? input.xPosition * config.pointerRange
      : 0
    motion.target.yPosition = input?.active
      ? input.yPosition * config.pointerRange
      : 0

    updateDampedMotion(motion, delta)
  }, -2)

  return (
    <>
      <SceneReadiness />
      <ambientLight intensity={0.22} />
      <directionalLight
        intensity={0.42}
        position={[0.35, 0.65, 1.2]}
      />
      <CameraController
        config={config}
        motionRef={motionRef}
      />
      <ImagePlane
        config={config}
        motionRef={motionRef}
      />
    </>
  )
}
