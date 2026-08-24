"use client"

import { useLocale, useTranslations } from "next-intl"

import { Link, usePathname } from "@/i18n/navigation"

const locales = [
    { value: "en", label: "EN", translationKey: "en" },
    { value: "pt-BR", label: "PT", translationKey: "pt-BR" },
    { value: "it", label: "IT", translationKey: "it" },
] as const

export default function LanguageToggle() {
    const locale = useLocale()
    const pathname = usePathname()

    const tLocales = useTranslations("shared.locales")
    const tA11y = useTranslations("accessibility.components.languageToggle")

    return (
        <div className="flex gap-4">
            {locales.map((item) => {
                const isActive = item.value === locale
                const languageName = tLocales(item.translationKey)

                return (
                    <Link
                        key={item.value}
                        href={pathname}
                        locale={item.value}
                        aria-label={tA11y("changeTo", {
                            locale: languageName,
                        })}
                        aria-current={isActive ? "page" : undefined}
                        className={`pointer pointer-events-auto text-[clamp(1.2rem,1.6vw,1.6rem)] text-background dark:text-foreground mix-blend-difference transition-opacity duration-300 ${isActive
                            ? "opacity-100"
                            : "opacity-50 hover:opacity-100"
                            }`}
                    >
                        {item.label}
                    </Link>
                )
            })}
        </div>
    )
}
