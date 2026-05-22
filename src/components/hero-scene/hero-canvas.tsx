"use client"

import { Canvas } from "@react-three/fiber"
import { type RefObject, Suspense, useEffect, useRef } from "react"
import { NoToneMapping, SRGBColorSpace } from "three"
import { useHeroSceneControls } from "@/hooks/use-hero-scene-controls"
import { SceneRoot } from "@/three/scene/scene-root"
import {
  createInputManager,
  type InputManager,
} from "@/three/system/input/input-manager"

type HeroCanvasProps = {
  containerRef: RefObject<HTMLDivElement | null>
}

type HeroSceneProps = {
  inputManagerRef: RefObject<InputManager | null>
}

function HeroScene({ inputManagerRef }: HeroSceneProps) {
  const config = useHeroSceneControls()

  return (
    <SceneRoot
      config={config}
      inputRef={inputManagerRef}
    />
  )
}

export function HeroCanvas({ containerRef }: HeroCanvasProps) {
  const inputManagerRef = useRef<InputManager | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    let mounted = true

    createInputManager(containerRef.current).then((manager) => {
      if (!mounted) {
        manager.destroy()
        return
      }

      inputManagerRef.current = manager
    })

    return () => {
      mounted = false
      inputManagerRef.current?.destroy()
    }
  }, [containerRef])

  return (
    <Canvas
      aria-hidden="true"
      camera={{ fov: 25, near: 0.1, far: 100, position: [0, 0, 100] }}
      className="h-full w-full"
      dpr={[1, 2]}
      frameloop="always"
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
        toneMapping: NoToneMapping,
        outputColorSpace: SRGBColorSpace,
      }}>
      <Suspense fallback={null}>
        <HeroScene inputManagerRef={inputManagerRef} />
      </Suspense>
    </Canvas>
  )
}
