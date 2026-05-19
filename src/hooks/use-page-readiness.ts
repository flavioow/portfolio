"use client"

import { useEffect } from "react"
import { useLoadingStore } from "./use-loading-store"

export function usePageReadiness() {
  const SetPageReady = useLoadingStore((s) => s.setPageReady)

  useEffect(() => {
    if (document.readyState === "complete") {
      SetPageReady()
      return
    }

    const handler = () => SetPageReady()
    window.addEventListener("load", handler)

    return () => window.removeEventListener("load", handler)
  }, [SetPageReady])
}
