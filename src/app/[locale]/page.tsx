import Navbar from "@/components/Navbar"
import { getTranslations } from "next-intl/server"

export default async function Home() {
    const t = await getTranslations("#Homepage")

    return (
        <div>
            <Navbar />
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
    )
}
