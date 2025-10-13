import LanguageSwitcher from "@/components/layout/LanguageSwitcher/LanguageSwitcher"
import NavLinks from "@/components/layout/Navbar/NavLinks"
import ThemeSwitcher from "@/components/layout/ThemeSwitcher/ThemeSwitcher"
import { Button } from "@/components/ui/button"
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
        <header className="container-wrapper">
            <div className="grid grid-cols-3 items-center py-4">
                <div className="flex items-center justify-start gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary" />
                    <span className="font-mono text-sm font-medium">portfolio</span>
                </div>

                <NavLinks labels={labels} />

                <div className="flex items-center justify-end">
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    )
}
