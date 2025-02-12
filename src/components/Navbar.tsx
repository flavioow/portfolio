import LanguageSwitcher from "@/components/LanguageSwitcher"
import NavLinks from "@/components/NavLinks"
import ThemeSwitcher from "@/components/ThemeSwitcher"
import { getTranslations } from "next-intl/server"

export default async function Navbar() {
    const t = await getTranslations("Navbar")

    const labels = {
        about: t("about"),
        skills: t("skills"),
        projects: t("projects"),
        contact: t("contact"),
    }

    return (
        <nav className="bg-background dark:bg-background/90 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-md w-full px-20 py-4 sticky top-0 z-20">
            <div className="flex justify-center items-center relative">
                <NavLinks labels={labels} />

                <div className="side-buttons absolute right-0 flex gap-6">
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    )
}
