import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getScopedI18n } from "@/locales/server"
import { ArrowDown, Github, Printer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export async function Hero() {
    const t = await getScopedI18n("home")

    return (
        <div
            className="min-h-[85dvh]"
            id="about"
            itemScope
            itemType="http://schema.org/Person">

            <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full">
                {/* Left content */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <Badge variant="secondary" className="font-mono text-xs">
                            {t("about.slogan")}
                        </Badge>
                        <h1 className="text-5xl lg:text-7xl font-serif font-light tracking-tight text-balance">
                            {t("about.title")}
                        </h1>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                        {t("about.description")}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-4">
                        <Link
                            href="https://github.com/flavioow"
                            target="_blank"
                            rel="noopener noreferrer me author"
                            aria-label="GitHub"
                            itemProp="sameAs">
                            <Button size="lg" className="gap-2">
                                {t("about.github")}
                                <Github className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link
                            href="/assets/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer me author"
                            aria-label={t("about.cv")}
                            itemProp="sameAs">
                            <Button size="lg" variant="outline" className="gap-2 bg-transparent cursor-pointer">
                                <Printer className="h-4 w-4" />
                                {t("about.cv")}
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Right */}
                <div className="space-y-8 flex justify-end lg:static absolute w-full opacity-30 blur-xs lg:blur-none lg:opacity-100 -z-1">
                    <div className="-z-1 lg:static aspect-3/4 lg:max-h-[600px] h-[60dvh]">
                        <div className="relative w-full h-full scale-x-[-1]">
                            <Image
                                src="/assets/profile-low.avif"
                                alt="Loading..."
                                fill
                                priority
                                fetchPriority="high"
                                aria-hidden
                                className="object-cover"
                            />
                            <Image
                                src="/assets/profile-high.webp"
                                alt="Profile picture"
                                fill
                                loading="lazy"
                                decoding="async"
                                className="object-cover transition-opacity duration-1000 ease-in-out"
                                fetchPriority="high"
                                itemProp="image"
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce select-none pointer-events-none">
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <span className="text-xs font-mono">SCROLL</span>
                        <ArrowDown className="h-4 w-4" />
                    </div>
                </div>

                {/* Meta tags for SEO */}
                <meta itemProp="jobTitle" content={t("about.slogan")} />
                <meta
                    itemProp="knowsAbout"
                    content="HTML, CSS, JavaScript, NextJS, Design, SEO" />
            </div>
        </div>
    )
}
