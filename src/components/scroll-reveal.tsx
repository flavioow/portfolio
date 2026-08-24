"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type React from "react"
import {
  type ReactNode,
  type RefObject,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react"

import "@/styles/scroll-reveal.css"

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: ReactNode
  scrollContainerRef?: RefObject<HTMLElement>
  enableBlur?: boolean
  baseOpacity?: number
  baseRotation?: number
  blurStrength?: number
  containerClassName?: string
  textClassName?: string
  rotationEnd?: string
  wordAnimationEnd?: string
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null)

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : ""

    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word

      return (
        <span
          key={`${word}-${index}`}
          className="word">
          {word}
        </span>
      )
    })
  }, [children])

  useLayoutEffect(() => {
    const el = containerRef.current

    if (!el) return

    const scroller = scrollContainerRef?.current || window

    const ctx = gsap.context(() => {
      const wordElements = el.querySelectorAll<HTMLElement>(".word")

      gsap.set(wordElements, {
        opacity: baseOpacity,
        filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
        willChange: "opacity, filter",
      })

      gsap.set(el, {
        transformOrigin: "0% 50%",
        rotate: baseRotation,
      })

      gsap.to(el, {
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
        },
      })

      gsap.to(wordElements, {
        opacity: 1,
        filter: "blur(0px)",
        ease: "none",
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=20%",
          end: wordAnimationEnd,
          scrub: true,
        },
      })

      ScrollTrigger.refresh()
    }, el)

    return () => {
      ctx.revert()
    }
  }, [
    scrollContainerRef,
    enableBlur,
    baseOpacity,
    baseRotation,
    blurStrength,
    rotationEnd,
    wordAnimationEnd,
  ])

  return (
    <h2
      ref={containerRef}
      className={`scroll-reveal ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>{splitText}</p>
    </h2>
  )
}

export default ScrollReveal
