import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import TextPressure from "@/components/ui/TextPressure"
import { getScopedI18n } from "@/locales/server"
import { ArrowDown, Code2, Download, Github, Linkedin, Mail, Printer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export async function Hero() {
    const t = await getScopedI18n("home")

    return (
        // <section
        //     className="relative border-grid border-b overflow-hidden"
        //     id="about"
        //     itemScope
        //     itemType="http://schema.org/Person">
        //     <div className="container-wrapper">
        //         <div className="container lg:max-h-[600px] h-[80dvh] lg:h-[60dvh] relative lg:grid lg:grid-cols-[auto_minmax(400px,1fr)] gap-8 lg:justify-center">
        //             <div className="absolute -z-1 lg:static aspect-3/4 lg:max-h-[600px] h-[80dvh] lg:h-[60dvh]">
        //                 <div className="relative w-full h-full">
        //                     <Image
        //                         src="/assets/profile-low.avif"
        //                         alt="Loading..."
        //                         fill
        //                         priority
        //                         fetchPriority="high"
        //                         aria-hidden
        //                         className="object-cover"
        //                     />
        //                     <Image
        //                         src="/assets/profile-high.webp"
        //                         alt="Profile picture"
        //                         fill
        //                         loading="lazy"
        //                         decoding="async"
        //                         className="object-cover transition-opacity duration-1000 ease-in-out"
        //                         fetchPriority="high"
        //                         itemProp="image"
        //                     />
        //                 </div>
        //             </div>

        //             <div className="flex flex-col justify-end lg:justify-center h-full">
        //                 <div className="flex flex-col justify-end lg:justify-center p-4  mb-8 lg:m-0 rounded-lg bg-gray-50/75 dark:bg-gray-950/75 backdrop-blur-xs border border-dashed lg:border-none">
        //                     <h1 className="font-secondary">
        //                         <span className="sr-only" itemProp="name">
        //                             Flávio Henrique Perusin de Souza
        //                         </span>
        //                         <span aria-hidden="true">
        //                             Flávi.
        //                             <span className="font-calligraffitti">
        //                                 oow
        //                             </span>
        //                         </span>
        //                     </h1>
        //                     <h2>{t("about.slogan")}</h2>
        //                     <p className="text-justify" itemProp="description">
        //                         {t("about.description")}
        //                     </p>
        //                     <div className="flex gap-2 mt-4">
        //                         <Link
        //                             href="/assets/cv.pdf"
        //                             target="_blank"
        //                             rel="noopener noreferrer me author"
        //                             aria-label={t("about.cv")}
        //                             itemProp="sameAs">
        //                             <Button variant="default">
        //                                 <Download />
        //                                 {t("about.cv")}
        //                             </Button>
        //                         </Link>

        //                         <Link
        //                             href="https://github.com/flavioow"
        //                             target="_blank"
        //                             rel="noopener noreferrer me author"
        //                             aria-label="GitHub"
        //                             itemProp="sameAs">
        //                             <Button variant="ghost">
        //                                 <Github />
        //                                 GitHub
        //                             </Button>
        //                         </Link>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     {/* Meta tags for SEO */}
        //     <meta itemProp="jobTitle" content={t("about.slogan")} />
        //     <meta
        //         itemProp="knowsAbout"
        //         content="HTML, CSS, JavaScript, NextJS, Design, SEO"
        //     />
        // </section>
        <div
            className="min-h-[85dvh]"
            id="about"
            itemScope
            itemType="http://schema.org/Person">

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full">
                {/* Left content */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <Badge variant="secondary" className="font-mono text-xs">
                            DESENVOLVEDOR • DESIGNER
                        </Badge>
                        <h1 className="text-5xl lg:text-7xl font-serif font-light tracking-tight text-balance">
                            Crio experiências
                            <span className="block mt-2 font-normal">digitais únicas</span>
                        </h1>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                        Sou <strong>Flávio Henrique</strong>, desenvolvedor full-stack especializado em criar interfaces elegantes e funcionais. Transformo ideias em
                        produtos digitais que as pessoas adoram usar.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-4">
                        <Button size="lg" className="gap-2">
                            Explore meu portfólio
                            <ArrowDown className="h-4 w-4" />
                        </Button>
                        <Link
                            href="/assets/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer me author"
                            aria-label={t("about.cv")}
                            itemProp="sameAs">
                            <Button size="lg" variant="outline" className="gap-2 bg-transparent cursor-pointer">
                                <Printer className="h-4 w-4" />
                                Ver meu currículo
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Right */}
                <div className="relative space-y-8">

                    {/* Flavi.oow */}
                    <div className="h-fit opacity-50 pointer-events-none absolute bottom-0 left-0 w-full">
                        <TextPressure
                            text="Flavi.oow"
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={true}
                            italic={true}
                            textColor="var(--color-muted-foreground)"
                            minFontSize={36}
                            className="w-full"
                        />
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
