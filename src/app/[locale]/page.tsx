import Navbar from "@/components/Navbar"
import Image from "next/image"
import { getTranslations } from "next-intl/server"

export default async function Home() {
    const t = await getTranslations("#Homepage")

    return (
        <div>
            <Navbar />
            <header className="m-8 grid grid-cols-[250px_minmax(300px,750px)] gap-12 justify-center">
                <div className="relative w-[250px] h-[600px]">
                    <Image
                        src="/assets/profile-low.png"
                        alt="Loading..."
                        fill
                        priority
                        className="object-cover blur-sm"
                    />
                    <Image
                        src="/assets/profile-high.png"
                        alt="Profile picture"
                        fill
                        loading="lazy"
                        className="object-cover transition-opacity duration-1000 ease-in-out"
                    />
                </div>

                <div>
                    <h1>
                        Flávi.<span className="font-calligraffitti">oow</span>
                    </h1>
                    <h2>{t("about.slogan")}</h2>
                    <p>{t("about.description")}</p>
                    <button type="button">
                        <p>CV</p>
                    </button>
                    <button type="button">
                        <p>GitHub</p>
                    </button>
                </div>
            </header>
        </div>
    )
}
