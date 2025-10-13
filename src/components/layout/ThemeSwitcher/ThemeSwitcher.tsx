import { getScopedI18n } from "@/locales/server"
import ThemeSwitcherButton from "./ThemeSwitcherButton"

export default async function ThemeSwitcher() {
    const t = await getScopedI18n("navbar")
    const lightThemeText = t("lightTheme")
    const darkThemeText = t("darkTheme")

    return (
        <ThemeSwitcherButton
            lightThemeText={lightThemeText}
            darkThemeText={darkThemeText}
        />
    )
}
