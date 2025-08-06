"use client"

import { usePathname as useNextPathname, useRouter as useNextRouter } from "next/navigation"
import { useCallback } from "react"
import { locales, keyToLocale, localeToKey, Locale, LocaleParam } from "@/locales/config"

export function useLocaleFromPathname(pathname: string): LocaleParam | null {
    const segments = pathname.split("/")
    const rawKey = segments[1] as LocaleParam

    if (rawKey in keyToLocale) return keyToLocale[rawKey as keyof typeof keyToLocale]

    return null
}

export function useRouter() {
    const router = useNextRouter()
    const pathname = useNextPathname()

    const pushLocale = useCallback(
        (newLocale: Locale) => {
            const newKey = localeToKey[newLocale]
            const segments = pathname.split("/")
            const currentLocale = useLocaleFromPathname(pathname)

            if (currentLocale) segments[1] = newKey
            else segments.splice(1, 0, newKey)

            const newPath = segments.join("/") || "/"
            router.push(newPath)
        },
        [pathname, router]
    )

    return { ...router, pushLocale }
}
