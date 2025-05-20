import Navbar from "@/components/Navbar/Navbar"
import { Link } from "@/navigation"
import { getTranslations } from "next-intl/server"
import { Download, Github } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"

export default async function Home() {
    const t = await getTranslations("#Homepage")

    return (
        <div>
            <Navbar />

            <section className="relative border-grid border-b overflow-hidden" id="about" itemScope itemType="http://schema.org/Person">
                <div className="container-wrapper">
                    <div className="container lg:max-h-[600px] h-[80dvh] lg:h-[60dvh] relative lg:grid lg:grid-cols-[auto_minmax(400px,1fr)] gap-8 lg:justify-center">

                        <div className="absolute -z-1 lg:static aspect-3/4 lg:max-h-[600px] h-[80dvh] lg:h-[60dvh]">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/assets/profile-low.webp"
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

                        <div className="flex flex-col justify-end lg:justify-center h-full">
                            <div className="flex flex-col justify-end lg:justify-center p-4 lg:p-0 mb-8 lg:m-0 rounded-lg lg:rounded-none bg-gray-50/75 dark:bg-gray-950/75 lg:bg-transparent backdrop-blur-xs lg:backdrop-filter-none border border-dashed lg:border-none">
                                <h1 className="font-courier">
                                    <span className="sr-only" itemProp="name">Flávio Henrique Perusin de Souza</span>
                                    <span aria-hidden="true">
                                        Flávi.
                                        <span className="font-calligraffitti">oow</span>
                                    </span>
                                </h1>
                                <h2>{t("about.slogan")}</h2>
                                <p className="text-justify" itemProp="description">{t("about.description")}</p>
                                <div className="flex gap-2 mt-4">
                                    <Link
                                        href="https://flavioow.vercel.app/assets/cv.pdf"
                                        target="_blank" rel="noopener noreferrer me author" aria-label={t("about.cv")} itemProp="sameAs">
                                        <Button variant="default">
                                            <Download />
                                            {t("about.cv")}
                                        </Button>
                                    </Link>

                                    <Link
                                        href="https://github.com/flavioow"
                                        target="_blank" rel="noopener noreferrer me author" aria-label="GitHub" itemProp="sameAs">
                                        <Button variant="ghost">
                                            <Github />
                                            GitHub
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Meta tags for SEO */}
                <meta itemProp="jobTitle" content={t("about.slogan")} />
                <meta itemProp="knowsAbout" content="HTML, CSS, JavaScript, NextJS, Design, SEO" />
            </section>

            <section>
                <div className="border-grid border-b" id="skills">
                    <div className="container-wrapper">
                        <div className="container py-3 lg:py-6">
                            <h2>Habilidades</h2>

                            <div className="flex gap-8 mt-4 flex-wrap">
                                <Icon icon="devicon-plain:html5-wordmark" className="size-[3rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out" aria-label="html" />
                                <Icon icon="devicon-plain:css3-wordmark" className="size-[3rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out" aria-label="css" />
                                <Icon icon="devicon-plain:javascript" className="size-[3rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out" aria-label="javascript" />
                                <Icon icon="devicon-plain:typescript" className="size-[3rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out" aria-label="typescript" />
                                <Icon icon="devicon-plain:figma" className="size-[3rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out" aria-label="figma" />
                                <Icon icon="devicon-plain:nodejs" className="size-[3rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out" aria-label="node" />
                                <Icon icon="devicon-plain:nextjs" className="size-[3rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out" aria-label="next" />
                                <Icon icon="file-icons:tailwind" className="size-[3rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out" aria-label="tailwind" />
                                <Icon icon="devicon-plain:biome-wordmark" className="size-[3rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out" aria-label="biome" />
                                <Icon icon="devicon-plain:python" className="size-[3rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out" aria-label="python" />
                                <Icon icon="devicon-plain:git" className="size-[3rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out" aria-label="git" />
                                <Icon icon="devicon-plain:githubcodespaces" className="size-[3rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out" aria-label="github" />
                                <Icon icon="devicon-plain:bun" className="size-[4rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out" aria-label="bun" />
                                <Icon icon="devicon-plain:mysql-wordmark" className="size-[3rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out" aria-label="mysql" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-grid border-b">
                    <div className="container-wrapper">
                        <div className="container flex lg:grid flex-col-reverse py-2 lg:py-4 lg:grid-cols-2 gap-2 lg:justify-between">
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h3 className="font-courier">Desenvolvimento responsivo</h3>
                                    <p className="my-2">Num cenário domindado pelo tráfego mobile, possuir interfaces que se adaptam bem a qualquer tamanho de tela deixou de ser diferencial - é essencial.</p>
                                    <p className="my-2">Tenho experiência em desenvolver layouts que mantêm a estética e usabilidade e tanto no mobile quanto no desktop, garantindo uma navegação fluida e acessível em qualquer dispositivo.</p>
                                </div>

                                <div className="flex justify-between flex-wrap items-end">
                                    <div className="w-1/4 flex flex-col justify-center">
                                        <p className="text-primary text-2xl font-bold text-center">69,4%</p>
                                        <a href="https://datareportal.com/reports/digital-2024-global-overview-report" target="_blank" rel="noopener noreferrer">
                                            <small className="text-primary underline text-center">dos acessos à internet são via mobile ↗</small>
                                        </a>
                                    </div>
                                    <div className="flex gap-4">
                                        <Icon icon="devicon-plain:html5-wordmark" className="size-[2rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out" aria-label="html" />
                                        <Icon icon="devicon-plain:css3-wordmark" className="size-[2rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out" aria-label="css" />
                                        <Icon icon="file-icons:tailwind" className="size-[2rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out" aria-label="tailwind" />
                                        <Icon icon="devicon-plain:figma" className="size-[2rem] text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 ease-in-out" aria-label="figma" />
                                    </div>
                                </div>
                            </div>

                            <div className="relative aspect-5/4 w-full max-w-md self-center lg:ml-auto">
                                <Image
                                    src="/assets/mobile-mokup-low.png"
                                    alt="Loading..."
                                    fill
                                    priority
                                    className="object-cover"
                                />
                                <Image
                                    src="/assets/mobile-mokup-high.png"
                                    alt="Website in mobile device example"
                                    fill
                                    loading="lazy"
                                    className="object-cover transition-opacity duration-1000 ease-in-out"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
