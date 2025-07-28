"use client"

import { usePathname as useNextPathname, useRouter as useNextRouter } from "next/navigation"
import { useCallback } from "react"
import { localeToKey, LocaleParam } from "@/locales/config"

export function useLocaleFromPathname(pathname: string): LocaleParam | null {
    const segments = pathname.split("/")
    const localeInUrl = segments[1] as LocaleParam
    return localeInUrl && localeToKey[localeInUrl] ? localeInUrl : null
}

export function useRouter() {
    const router = useNextRouter()
    const pathname = useNextPathname()

    const pushLocale = useCallback(
        (localeInUrl: LocaleParam) => {
            const segments = pathname.split("/")
            const currentLocale = useLocaleFromPathname(pathname)

            if (currentLocale) {
                segments[1] = localeInUrl
            } else {
                segments.splice(1, 0, localeInUrl)
            }

            const newPath = segments.join("/") || "/"
            router.push(newPath)
        },
        [pathname, router]
    )

    return { ...router, pushLocale }
}
