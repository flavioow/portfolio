export const locales = ["en", "pt-br"] as const
export type Locale = (typeof locales)[number]

export const localeToKey = {
    "pt-br": "br",
    "en": "en",
} as const

export const keyToLocale = {
    "br": "pt-br",
    "en": "en",
} as const

export type LocaleKey = keyof typeof keyToLocale
export type LocaleParam = keyof typeof localeToKey
