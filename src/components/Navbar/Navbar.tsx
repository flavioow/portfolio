import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher"
import NavLinks from "@/components/Navbar/NavLinks"
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher"
import { getScopedI18n } from "@/locales/server"

export default async function Navbar() {
    const t = await getScopedI18n("navbar")

    const labels = {
        about: t("about"),
        skills: t("skills"),
        projects: t("projects"),
        contact: t("contact"),
    }

    return (
        <header className="border-grid border-b bg-background/50 dark:bg-background/50 backdrop-blur-md w-full sticky top-0 z-20">
            <div className="container-wrapper">
                <div className="container flex justify-between lg:justify-center items-center relative h-14 w-full">
                    <NavLinks labels={labels} />
                    <div className="static lg:absolute lg:right-0 flex gap-2 lg:mr-8">
                        <LanguageSwitcher />
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </header>
    )
}
