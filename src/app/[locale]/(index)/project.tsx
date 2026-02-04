"use client"

import { Button } from "@/components/ui/button"
import { useScopedI18n } from "@/locales/client"
import { Icon } from "@iconify/react"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type Project = {
    id: number
    slug: string
    title: string
    icon: string
    image: string
    tags: string[]
    github: string
    demo: string
    publishedDate: string
}

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

export const projects: Project[] = [
    {
        id: 1,
        slug: "neomental",
        title: "Neo Mental",
        icon: "/favicons/favicon-96x96.png",
        image: "/assets/neomental.jpg",
        tags: ["Next.js", "TypeScript", "Figma"],
        github: "https://github.com/flavioow/fio-mental",
        demo: "https://neo-mental.vercel.app/",
        publishedDate: "2025-11-19",
    },
] as const

const ITEMS_PER_PAGE = 6

export function Project() {
    const [currentPage, setCurrentPage] = useState(1)
    const t = useScopedI18n("home")

    const sortedProjects = [...projects].sort(
        (a, b) =>
            new Date(b.publishedDate).getTime() -
            new Date(a.publishedDate).getTime(),
    )
    const featuredProjects = sortedProjects.slice(0, 3)
    const otherProjects = sortedProjects.slice(3)

    const totalPages = Math.ceil(otherProjects.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const paginatedProjects = otherProjects.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE,
    )

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", {
            month: "2-digit",
            year: "numeric",
        })
    }

    return (
        <section id="projects" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-serif font-light mb-4 text-balance">
                        {t("projects.featuredTitle")}
                    </h2>
                </div>

                <div className="mb-24">
                    <div className="relative">
                        {/* Vertical timeline line */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

                        {featuredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="relative pl-12 pb-16 last:pb-0">
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary -translate-x-[5px] ring-4 ring-background" />

                                {/* Content */}
                                <div className="space-y-4">
                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div className="space-y-2">
                                            <h3 className="text-2xl lg:text-3xl font-serif font-light mb-4">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {formatDate(
                                                    project.publishedDate,
                                                )}
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="gap-2 bg-transparent"
                                                asChild>
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    <Github className="w-4 h-4" />
                                                    GitHub
                                                </a>
                                            </Button>
                                            <Button
                                                size="sm"
                                                className="gap-2"
                                                asChild>
                                                <Link href={`/${project.slug}`}>
                                                    <ExternalLink className="w-4 h-4" />
                                                    Details
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Content section with text and image */}
                                    <div className="flex gap-6 items-start">
                                        <div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {t(
                                                    `projects.${project.slug}.description` as any,
                                                )}
                                            </p>

                                            <div className="flex flex-wrap gap-3 mt-4">
                                                {project.tags.map((tag) => (
                                                    <div
                                                        key={tag}
                                                        className="flex items-center gap-2">
                                                        <Icon
                                                            icon={
                                                                techIcons[
                                                                    tag
                                                                ] ||
                                                                "mdi:code-tags"
                                                            }
                                                            className="size-[1.5rem] text-muted-foreground"
                                                        />
                                                        <span className="text-sm text-muted-foreground font-mono">
                                                            {tag}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="relative h-48 min-w-xs aspect-3/1 rounded-lg overflow-hidden border border-border group">
                                            <Image
                                                src={
                                                    project.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {otherProjects.length > 0 && (
                    <div>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-serif font-light mb-4 text-balance">
                                {t("projects.moreTitle")}
                            </h2>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {paginatedProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group relative h-64 rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                                    {/* Background Image */}
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={
                                                project.image ||
                                                "/placeholder.svg"
                                            }
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

                                        {/* Content */}
                                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                                                    <Image
                                                        src={
                                                            project.icon ||
                                                            "/placeholder.svg"
                                                        }
                                                        alt={project.title}
                                                        width={24}
                                                        height={24}
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <h4 className="font-serif font-bold text-xl text-foreground">
                                                    {project.title}
                                                </h4>
                                            </div>

                                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                                {t(
                                                    `projects.${project.slug}.description` as any,
                                                )}
                                            </p>

                                            <div className="flex gap-2">
                                                <Button
                                                    size="sm"
                                                    className="flex-1 gap-2"
                                                    asChild>
                                                    <Link
                                                        href={`/${project.slug}`}>
                                                        <ExternalLink className="w-4 h-4" />
                                                        Details
                                                    </Link>
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="gap-2 backdrop-blur-sm bg-transparent"
                                                    asChild>
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        <Github className="w-4 h-4" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() =>
                                        setCurrentPage((prev) =>
                                            Math.max(1, prev - 1),
                                        )
                                    }
                                    disabled={currentPage === 1}>
                                    <ChevronLeft className="w-4 h-4" />
                                </Button>
                                <div className="flex gap-1">
                                    {Array.from(
                                        { length: totalPages },
                                        (_, i) => i + 1,
                                    ).map((page) => (
                                        <Button
                                            key={page}
                                            variant={
                                                currentPage === page
                                                    ? "default"
                                                    : "outline"
                                            }
                                            size="sm"
                                            onClick={() => setCurrentPage(page)}
                                            className="w-9">
                                            {page}
                                        </Button>
                                    ))}
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() =>
                                        setCurrentPage((prev) =>
                                            Math.min(totalPages, prev + 1),
                                        )
                                    }
                                    disabled={currentPage === totalPages}>
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}
