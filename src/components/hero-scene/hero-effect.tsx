"use client"

import { useRef } from "react"
import { usePageReadiness } from "@/hooks/use-page-readiness"
import { HeroCanvas } from "./hero-canvas"

type HeroEffectProps = {
  aspectRatio?: string
  minSize?: string
  idealSize?: string
  maxSize?: string
  className?: string
}

export function HeroEffect({ className = "" }: HeroEffectProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  usePageReadiness()

  return (
    <div
      className={`overflow-hidden absolute inset-0 h-full w-full ${className}`}
      ref={containerRef}>
      <HeroCanvas containerRef={containerRef} />
    </div>
  )
}
