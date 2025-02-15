import Navbar from "@/components/Navbar"
import { InfiniteScroll } from "@/components/InfiniteScroll"
import { Link } from "@/navigation"
import { getTranslations } from "next-intl/server"
import { Code } from "lucide-react"
import Image from "next/image"

export default async function Home() {
    const t = await getTranslations("#Homepage")

    return (
        <div>
            <Navbar />
            <header
                id="about"
                className="m-8 grid grid-cols-[250px_minmax(300px,850px)] gap-12 justify-center">
                <div className="relative w-[250px] h-[600px] z-10">
                    <Image
                        src="/assets/profile-low.png"
                        alt="Loading..."
                        fill
                        priority
                        className="object-cover blur-xs"
                    />
                    <Image
                        src="/assets/profile-high.png"
                        alt="Profile picture"
                        fill
                        loading="lazy"
                        className="object-cover transition-opacity duration-1000 ease-in-out"
                    />
                </div>

                <div className="grid justify-between h-full pt-32">
                    <div>
                        <h1>
                            Flávi.
                            <span className="font-calligraffitti">oow</span>
                        </h1>
                        <h2>{t("about.slogan")}</h2>
                        <p className="text-justify">{t("about.description")}</p>
                    </div>

                    <div className="flex gap-8 h-fit">
                        <Link
                            href="https://flavioow.vercel.app/assets/cv.pdf"
                            target="_blank"
                            className="px-12 py-4 border-b-4 border-text hover:no-underline">
                            <p>CV</p>
                        </Link>
                        <Link
                            href="https://github.com/flavioow"
                            target="_blank"
                            className="px-12 py-4 border-b-4 border-text hover:no-underline">
                            <p>GitHub</p>
                        </Link>
                    </div>
                </div>
            </header>
            <InfiniteScroll.Root>
                <InfiniteScroll.Item icon={Code} text="HTML" />
                <InfiniteScroll.Item icon={Code} text="CSS" />
                <InfiniteScroll.Item icon={Code} text="JavaScript" />
                <InfiniteScroll.Item icon={Code} text="TypeScript" />
                <InfiniteScroll.Item icon={Code} text="Python" />
                <InfiniteScroll.Item icon={Code} text="Node.js" />
                <InfiniteScroll.Item icon={Code} text="React" />
                <InfiniteScroll.Item icon={Code} text="Next.js" />
                <InfiniteScroll.Item icon={Code} text="TailwindCSS" />
                <InfiniteScroll.Item icon={Code} text="BiomeJS" />
            </InfiniteScroll.Root>
        </div>
    )
}
