import { useFrame, useThree } from "@react-three/fiber"
import { MathUtils } from "three"
import type { SceneConfigProps } from "@/types/scene-config"

export function CameraController({ config, motionRef }: SceneConfigProps) {
    const camera = useThree((state) => state.camera)

    useFrame((_, delta) => {
        const motion = motionRef.current.current
        const targetX = motion.xPosition * config.cameraPositionStrength
        const targetY = motion.yPosition * config.cameraPositionStrength

        camera.position.x = MathUtils.damp(
            camera.position.x,
            targetX,
            config.motionDamping,
            delta,
        )
        camera.position.y = MathUtils.damp(
            camera.position.y,
            targetY,
            config.motionDamping,
            delta,
        )
        camera.position.z = MathUtils.damp(camera.position.z, 2, 5, delta)

        camera.rotation.x = MathUtils.damp(
            camera.rotation.x,
            -motion.yPosition * config.cameraRotationStrength,
            config.motionDamping,
            delta,
        )
        camera.rotation.y = MathUtils.damp(
            camera.rotation.y,
            motion.xPosition * config.cameraRotationStrength,
            config.motionDamping,
            delta,
        )
        camera.rotation.z = MathUtils.damp(camera.rotation.z, 0, 5, delta)
    }, -1)

    return null
}
