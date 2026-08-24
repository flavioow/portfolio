"use client"

import { AnimatePresence, motion } from "motion/react"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { useIsFullyLoaded } from "@/hooks/use-loading-store"

const INITIAL_TITLE_SCALE = 1.65

type TitleTarget = {
    x: number
    y: number
    width: number
    height: number
}

export function LoaderOverlay() {
    const isReady = useIsFullyLoaded()
    const [isTitleMoving, setIsTitleMoving] = useState(false)
    const [isOverlayVisible, setIsOverlayVisible] = useState(true)
    const [hasExited, setHasExited] = useState(false)
    const [titleTarget, setTitleTarget] = useState<TitleTarget | null>(null)
    const t = useTranslations("accessibility.components.loader")

    useEffect(() => {
        if (!isReady || isTitleMoving) return

        let animationFrame = 0

        const startTitleHandoff = () => {
            const heroTitle = document.querySelector<HTMLElement>(
                "[data-loader-title]",
            )

            if (!heroTitle) {
                animationFrame = requestAnimationFrame(startTitleHandoff)
                return
            }

            const titleBounds = heroTitle.getBoundingClientRect()

            setTitleTarget({
                x: titleBounds.left + titleBounds.width / 2 - window.innerWidth / 2,
                y: titleBounds.top + titleBounds.height / 2 - window.innerHeight / 2,
                width: heroTitle.offsetWidth,
                height: heroTitle.offsetHeight,
            })
            setIsTitleMoving(true)
        }

        animationFrame = requestAnimationFrame(startTitleHandoff)

        return () => cancelAnimationFrame(animationFrame)
    }, [isReady, isTitleMoving])

    useEffect(() => {
        if (!hasExited) {
            const scrollbarWidth =
                window.innerWidth - document.documentElement.clientWidth

            document.body.style.overflow = "hidden"
            document.body.style.paddingRight = `${scrollbarWidth}px`
        } else {
            document.body.style.overflow = ""
            document.body.style.paddingRight = ""
        }

        return () => {
            document.body.style.overflow = ""
            document.body.style.paddingRight = ""
        }
    }, [hasExited])

    return (
        <AnimatePresence
            mode="wait"
            onExitComplete={() => setHasExited(true)}>
            {isOverlayVisible && (
                <motion.div
                    key="loader"
                    aria-label={t("label")}
                    aria-live="polite"
                    role="status"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.45,
                        ease: [0.76, 0, 0.24, 1],
                    }}
                    className="fixed inset-0 z-50 flex items-center justify-center select-none bg-background/90 backdrop-blur-2xl">
                    <span className="sr-only">{t("label")}</span>
                    <motion.div
                        aria-hidden="true"
                        initial={{ x: 0, y: 0, scale: INITIAL_TITLE_SCALE }}
                        animate={
                            isTitleMoving && titleTarget
                                ? { x: titleTarget.x, y: titleTarget.y, scale: 1 }
                                : { x: 0, y: 0, scale: INITIAL_TITLE_SCALE }
                        }
                        style={
                            titleTarget
                                ? {
                                    width: titleTarget.width,
                                    height: titleTarget.height,
                                }
                                : undefined
                        }
                        transition={{
                            duration: 0.95,
                            ease: [0.76, 0, 0.24, 1],
                        }}
                        onAnimationComplete={() => {
                            if (isTitleMoving) setIsOverlayVisible(false)
                        }}
                        className="pointer-events-none">
                        <div className="whitespace-nowrap text-[clamp(4rem,8vw,8rem)] leading-[0.9] tracking-tighter -rotate-2 skew-x-6 text-muted-foreground">
                            Flavi.<span className="font-cursive">oow</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
