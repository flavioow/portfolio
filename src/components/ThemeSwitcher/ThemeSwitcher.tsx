import { getTranslations } from "next-intl/server"
import ThemeSwitcherButton from "./ThemeSwitcherButton"

export default async function ThemeSwitcher() {
  const t = await getTranslations("Navbar")
  const lightThemeText = t("light-theme")
  const darkThemeText = t("dark-theme")

  return <ThemeSwitcherButton lightThemeText={lightThemeText} darkThemeText={darkThemeText} />
}
