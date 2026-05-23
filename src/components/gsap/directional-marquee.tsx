"use client"

import gsap from "gsap"
import { Observer } from "gsap/Observer"
import { useLayoutEffect, useRef } from "react"

import { horizontalLoop } from "./horizontal-loop"

gsap.registerPlugin(Observer)

type DirectionalMarqueeProps = {
  items: string[]
}

export function DirectionalMarquee({ items }: DirectionalMarqueeProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!rootRef.current) return

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>(".marquee-item")

      const loop = horizontalLoop(elements, {
        repeat: -1,
        speed: 0.8,
        paddingRight: 24,
      })

      Observer.create({
        target: window,
        type: "wheel,touch,pointer",

        onChangeY(self) {
          const direction = self.deltaY > 0 ? 1 : -1

          gsap.killTweensOf(loop)

          gsap
            .timeline()
            .to(loop, {
              timeScale: direction * 2.5,
              duration: 0.1,
              ease: "power2.out",
              overwrite: true,
            })
            .to(
              loop,
              {
                timeScale: direction * 1.5,
                duration: 1,
                ease: "expo.out",
              },
              ">",
            )
        },
      })
    }, rootRef)

    return () => {
      ctx.revert()
    }
  }, [])

  const repeatedItems = [...items, ...items, ...items]

  return (
    <section
      ref={rootRef}
      className="overflow-hidden border-y border-border/10 bg-background py-6 select-none">
      <div className="flex items-center mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {repeatedItems.map((item, index) => (
          <p
            key={`${item}-${index}`}
            className="marquee-item mr-6 whitespace-nowrap text-3xl font-black leading-none tracking-tight text-foreground md:text-5xl">
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}
