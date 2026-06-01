"use client"

import { useLocale, useTranslations } from "next-intl"

import { usePathname, useRouter } from "@/i18n/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

const locales = [
  { value: "en", labelKey: "en" },
  { value: "pt-BR", labelKey: "pt-BR" },
  { value: "it", labelKey: "it" },
] as const

export default function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const tLocales = useTranslations("shared.locales")
  const tA11y = useTranslations("accessibility.components.languageToggle")
  const currentLocale = locales.find((item) => item.value === locale)
  const currentLocaleLabel = currentLocale
    ? tLocales(currentLocale.labelKey)
    : locale

  function onSelectChange(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <Select
      value={locale}
      onValueChange={onSelectChange}>
      <SelectTrigger
        aria-label={`${tA11y("label")}. ${tA11y("current", {
          locale: currentLocaleLabel,
        })}`}
        className="pointer-events-auto bg-input/20 hover:bg-input/20 dark:hover:bg-input/50 dark:hover:text-foreground border-0 text-sm text-muted-foreground hover:text-background transition-colors duration-300">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        {locales.map((locale) => (
          <SelectItem
            key={locale.value}
            value={locale.value}>
            {tLocales(locale.labelKey)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
