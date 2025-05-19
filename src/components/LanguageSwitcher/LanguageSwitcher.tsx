import { getTranslations } from "next-intl/server"
import LanguageSwitcherSelect from "./LanguageSwitcherSelect"

export default async function LanguageSwitcher() {
    const t = await getTranslations("Navbar")
    const placeholderText = t("lang")
    const switchLangText = t("switch-lang")

    return <LanguageSwitcherSelect placeholderText={placeholderText} switchLangText={switchLangText} />
}
