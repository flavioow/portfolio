"use client"
import { createI18nClient } from "next-international/client"

export const { useI18n, useScopedI18n, I18nProviderClient } = createI18nClient({
    en: () => import("./messages/en"),
    br: () => import("./messages/pt-br")
})
