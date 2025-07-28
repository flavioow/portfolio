import { getScopedI18n } from "@/locales/server"
import ThemeSwitcherButton from "./ThemeSwitcherButton"

export default async function ThemeSwitcher() {
    const t = await getScopedI18n("navbar")
    const lightThemeText = t("light-theme")
    const darkThemeText = t("dark-theme")

    return <ThemeSwitcherButton lightThemeText={lightThemeText} darkThemeText={darkThemeText} />
}
