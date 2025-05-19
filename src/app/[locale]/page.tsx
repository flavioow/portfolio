import Navbar from "@/components/Navbar/Navbar"
import { InfiniteScroll } from "@/components/InfiniteScroll"
import { Link } from "@/navigation"
import { getTranslations } from "next-intl/server"
import { Code, Download, Github } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default async function Home() {
    const t = await getTranslations("#Homepage")

    return (
        <div>
            <Navbar />

            <section className="relative border-grid border-b overflow-hidden" id="about">
                <div className="container-wrapper">
                    <div className="container lg:max-h-[600px] h-[75dvh] lg:h-[60dvh] relative lg:grid lg:grid-cols-[auto_minmax(400px,1fr)] gap-8 lg:justify-center">

                        <div className="absolute -z-1 lg:static aspect-2/3 lg:max-h-[600px] h-[75dvh] lg:h-[60dvh]">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/assets/profile-low.webp"
                                    alt="Loading..."
                                    fill
                                    priority
                                    className="object-cover"
                                />
                                <Image
                                    src="/assets/profile-high.webp"
                                    alt="Profile picture"
                                    fill
                                    loading="lazy"
                                    className="object-cover transition-opacity duration-1000 ease-in-out"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-end lg:justify-center h-full">
                            <div className="flex flex-col justify-end lg:justify-center p-4 lg:p-0 mb-8 lg:m-0 rounded-lg lg:rounded-none bg-gray-50/75 dark:bg-gray-950/75 lg:bg-transparent backdrop-blur-xs lg:backdrop-filter-none border border-dashed lg:border-none">
                                <h1 className="font-courier">
                                    Flávi.
                                    <span className="font-calligraffitti">oow</span>
                                </h1>
                                <h2>{t("about.slogan")}</h2>
                                <p className="text-justify">{t("about.description")}</p>
                                <div className="flex gap-2 mt-4">
                                    <Button variant="default">
                                        <Download />
                                        <Link
                                            href="https://flavioow.vercel.app/assets/cv.pdf"
                                            target="_blank">
                                            {t("about.cv")}
                                        </Link>
                                    </Button>
                                    <Button variant="ghost">
                                        <Github />
                                        <Link
                                            href="https://github.com/flavioow"
                                            target="_blank">
                                            GitHub
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}
