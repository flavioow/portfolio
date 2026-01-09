import { getScopedI18n } from "@/locales/server"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const techIcons: Record<string, string> = {
  HTML: "devicon-plain:html5-wordmark",
  CSS: "devicon-plain:css3-wordmark",
  JavaScript: "devicon-plain:javascript",
  TypeScript: "devicon-plain:typescript",
  Figma: "devicon-plain:figma",
  Node: "devicon-plain:nodejs",
  "Node.js": "devicon-plain:nodejs",
  Next: "devicon-plain:nextjs",
  "Next.js": "devicon-plain:nextjs",
  TailwindCSS: "file-icons:tailwind",
  ShadcnUi: "hugeicons:shadcn",
  "Biome.js": "simple-icons:biome",
  Python: "devicon-plain:python",
  Git: "devicon-plain:git",
  GitHub: "mdi:github",
  Bun: "devicon-plain:bun",
  MySQL: "devicon-plain:mysql-wordmark",
  React: "mdi:react",
  Prisma: "lineicons:prisma",
  Npm: "mdi:npm",
  Vscode: "akar-icons:vscode-fill",
}

const links = {
  responsive: "https://datareportal.com/reports/digital-2024-global-overview-report",
  planning: "https://vinniciusgomes.dev/articles/biome-js-um-novo-lint-e-formatter-para-javascript-e-typescript",
  timing: "https://www.npmjs.com/package/madeit",
}

export async function Skills() {
  const t = await getScopedI18n("home")

  const skillsApplications = [
    {
      title: t("skills.responsive.title"),
      description: t("skills.responsive.firstParagraph"),
      detail: t("skills.responsive.secondParagraph"),
      link: links.responsive,
      tools: ["HTML", "CSS", "TailwindCSS", "Figma"],
      image: "/assets/mobile-mokup-high.webp",
      stat: "69.4%",
      statLabel: t("skills.responsive.statLabel"),
    },
    {
      title: t("skills.planning.title"),
      description: t("skills.planning.firstParagraph"),
      detail: t("skills.planning.secondParagraph"),
      link: links.planning,
      tools: ["Biome.js", "Git", "Node", "Bun"],
      image: "/assets/vscode-high.webp",
      stat: "Biome.js",
      statLabel: t("skills.planning.statLabel"),
    },
    {
      title: t("skills.timing.title"),
      description: t("skills.timing.firstParagraph"),
      detail: t("skills.timing.secondParagraph"),
      link: links.timing,
      tools: ["Node", "TypeScript"],
      image: "/assets/madeit-high.webp",
      stat: "MadeIt",
      statLabel: t("skills.timing.statLabel"),
    },
  ]

  return (
    <section id="skills" className="container-wrapper py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-serif font-light mb-4 text-balance">
          {t("skills.where")}
        </h2>
      </div>

      <Carousel>
        <CarouselContent>
          {skillsApplications.map((skill, index) => (
            <CarouselItem>
              <div
                key={skill.title}
                className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-center bg-background">
                {/* Text content */}
                <div className="grid gap-4">
                  <article>
                    <h3 className="text-2xl lg:text-3xl font-serif font-light mb-4">{skill.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{skill.description}</p>
                    <p className="text-muted-foreground leading-relaxed"> {skill.detail}</p>
                  </article>

                  {/* Stat */}
                  {skill.stat && (
                    <Link href={skill.link} className="inline-flex items-baseline gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-border">
                      <span className="text-3xl font-bold text-primary">{skill.stat}</span>
                      <span className="text-sm text-muted-foreground"> {skill.statLabel}</span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground ml-1" />
                    </Link>
                  )}

                  {/* Tools (techLabel) */}
                  <aside className="flex flex-wrap gap-3 mt-4">
                    {skill.tools.map((tool) => (
                      <div key={tool} className="flex items-center gap-2">
                        <Icon icon={techIcons[tool] || "mdi:code-tags"} className="size-[1.5rem] text-muted-foreground" />
                        <span className="text-sm text-muted-foreground font-mono">{tool}</span>
                      </div>
                    ))}
                  </aside>
                </div>

                {/* Image */}
                <div>
                  <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-accent/5 border border-border shadow-xl max-h-[300px] lg:min-h-[300px]">
                    <img src={skill.image || "/placeholder.svg"} alt={skill.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
