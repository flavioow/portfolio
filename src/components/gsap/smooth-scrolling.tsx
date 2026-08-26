"use client"

import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

interface Props {
    children: React.ReactNode
}

export function SmoothScrolling({ children }: Props) {
    useEffect(() => {
        const smoother = ScrollSmoother.create({
            smooth: 1.2,
            effects: true,
            smoothTouch: 0.1,
        })

        return () => {
            smoother.kill()
        }
    }, [])

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">{children}</div>
        </div>
    )
}
