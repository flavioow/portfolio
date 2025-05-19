import { getTranslations } from "next-intl/server"
import ThemeSwitcherButton from "./ThemeSwitcherButton"

export default async function ThemeSwitcher() {
  const t = await getTranslations("Navbar")
  const tooltipText = t("theme")

  return <ThemeSwitcherButton tooltipText={tooltipText} />
}
