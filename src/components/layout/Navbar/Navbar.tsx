import LanguageSwitcher from "@/components/layout/LanguageSwitcher/LanguageSwitcher"
import { Logo } from "@/components/layout/Logo/Logo"
import NavLinks from "@/components/layout/Navbar/NavLinks"
import ThemeSwitcher from "@/components/layout/ThemeSwitcher/ThemeSwitcher"
import { getScopedI18n } from "@/locales/server"
import Link from "next/link"

export default async function Navbar() {
    const t = await getScopedI18n("navbar")

    const labels = {
        about: t("about"),
        skills: t("skills"),
        projects: t("projects"),
        contact: t("contact"),
    }

    return (
        <header className="container-wrapper sticky top-0 bg-background/50 backdrop-blur-lg z-50">
            <div className="flex justify-between lg:grid grid-cols-3 items-center py-4">
                <div className="flex items-center justify-start gap-2">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>

                <NavLinks labels={labels} />

                <div className="flex items-center justify-end gap-2">
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    )
}
