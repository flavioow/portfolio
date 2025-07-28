import { getScopedI18n } from "@/locales/server"
import LanguageSwitcherSelect from "./LanguageSwitcherSelect"

export default async function LanguageSwitcher() {
    const t = await getScopedI18n("navbar")
    const placeholderText = t("lang")
    const switchLangText = t("switchLang")

    return <LanguageSwitcherSelect placeholderText={placeholderText} switchLangText={switchLangText} />
}
