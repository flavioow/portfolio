"use client"

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import CountUp from "@/components/count-up"
import { useIsFullyLoaded } from "@/hooks/use-loading-store"

export function LoaderOverlay() {
  const isReady = useIsFullyLoaded()
  const [canExit, setCanExit] = useState(false)
  const t = useTranslations("accessibility.components.loader")

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 20 + 40 * (1 / 1.7),
    stiffness: 100 * (1 / 1.7),
  })

  useEffect(() => {
    if (!isReady) return

    motionValue.set(100)

    const unsubscribe = springValue.on("change", (latest) => {
      if (latest >= 99.5) {
        unsubscribe()
        setTimeout(() => setCanExit(true), 300)
      }
    })

    return () => unsubscribe()
  }, [isReady, motionValue, springValue])

  return (
    <AnimatePresence mode="wait">
      {!canExit && (
        <motion.div
          key="loader"
          aria-label={t("label")}
          aria-live="polite"
          role="status"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/75 backdrop-blur-2xl">
          <span className="sr-only">{t("label")}</span>
          <motion.div
            aria-hidden="true"
            animate={{ scale: [1, 1, 1.12, 0.96, 1] }}
            transition={{
              duration: 0.35,
              delay: 1.45,
              times: [0, 0.4, 0.6, 0.8, 1],
            }}>
            <CountUp
              from={0}
              to={100}
              duration={1.5}
              startWhen={isReady}
              delay={0}
              className="font-bold text-foreground tracking-[-0.08em] tabular-nums text-7xl md:text-9xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
