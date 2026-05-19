"use client"

import { useProgress } from "@react-three/drei"
import { useEffect } from "react"
import { useLoadingStore } from "@/hooks/use-loading-store"

export function SceneReadiness() {
  const { active, progress } = useProgress()
  const setSceneReady = useLoadingStore((s) => s.setSceneReady)
  const setSceneProgress = useLoadingStore((s) => s.setSceneProgress)

  useEffect(() => {
    setSceneProgress(progress)

    if (!active && progress === 100) setSceneReady()
  }, [active, progress, setSceneReady, setSceneProgress])

  return null
}
