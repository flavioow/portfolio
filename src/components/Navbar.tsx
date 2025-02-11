import { Link } from "@/navigation"
import { getTranslations } from "next-intl/server"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import ThemeSwitcher from "@/components/ThemeSwitcher"

export default async function Navbar() {
    const t = await getTranslations("Navbar")

    return (
        <nav className="bg-background dark:bg-background/90 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-md w-full px-20 py-4 sticky top-0 z-20">
            <div className="flex justify-center items-center relative">
                <ul className="links flex justify-center items-center gap-6 text-text dark:text-text">
                    <li id="about">
                        <Link href="#about" className="p-2">{t("about")}</Link>
                    </li>
                    <li id="skills">
                        <Link href="#" className="p-2">{t("skills")}</Link>
                    </li>
                    <li id="projects">
                        <Link href="#" className="p-2">{t("projects")}</Link>
                    </li>
                    <li id="contact">
                        <Link href="#" className="p-2">{t("contact")}</Link>
                    </li>
                </ul>

                <div className="side-buttons absolute right-0 flex gap-6">
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    )
}
