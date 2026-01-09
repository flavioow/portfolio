"use client"

import { useEffect, useRef } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Icon } from "@iconify/react"

const technologies = [
  { name: "HTML", icon: "devicon-plain:html5-wordmark" },
  { name: "CSS", icon: "devicon-plain:css3-wordmark" },
  { name: "JavaScript", icon: "devicon-plain:javascript" },
  { name: "TypeScript", icon: "devicon-plain:typescript" },
  { name: "Figma", icon: "devicon-plain:figma" },
  { name: "Node.js", icon: "devicon-plain:nodejs" },
  { name: "React", icon: "mdi:react" },
  { name: "Next.js", icon: "devicon-plain:nextjs" },
  { name: "TailwindCSS", icon: "file-icons:tailwind" },
  { name: "ShadcnUi", icon: "hugeicons:shadcn" },
  { name: "Biome.js", icon: "simple-icons:biome" },
  { name: "Prisma", icon: "lineicons:prisma" },
  { name: "Python", icon: "devicon-plain:python" },
  { name: "Git", icon: "devicon-plain:git" },
  { name: "GitHub", icon: "mdi:github" },
  { name: "VS Code", icon: "akar-icons:vscode-fill" },
  { name: "Npm", icon: "mdi:npm" },
  { name: "Bun", icon: "devicon-plain:bun" },
  { name: "MySQL", icon: "devicon-plain:mysql-wordmark" },
]


export function TechStack() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const content = scrollContainer.querySelector(".scroll-content") as HTMLDivElement
    if (!content) return

    let animationFrameId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition -= 0.4
      const contentWidth = content.scrollWidth / 2

      if (Math.abs(scrollPosition) >= contentWidth) {
        scrollPosition = 0
      }

      content.style.transform = `translateX(${scrollPosition}px)`
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div className="relative my-12 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-serif font-light">Tech Stack</h2>
      </div>

      <div
        ref={scrollRef}
        className="relative h-60 overflow-hidden"
      >
        <TooltipProvider>
          <div
            className="scroll-content flex gap-12 items-center absolute left-0 top-0 h-full will-change-transform"
            style={{
              width: "max-content",
              scrollBehavior: "auto",
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <Tooltip key={`${tech.name}-${index}`}>
                <TooltipTrigger asChild>
                  <div
                    className="flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-125"
                    style={{
                      transform: `translateY(${Math.sin(index * 0.8) * 50}px)`,
                    }}
                  >
                    <Icon
                      icon={tech.icon}
                      className="size-[3rem] text-secondary/75 hover:text-secondary dark:text-primary/50 dark:hover:text-primary"
                      aria-label={tech.name.toLowerCase()}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-mono text-xs">{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        {/* Gradientes laterais */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </div>
  )
}
