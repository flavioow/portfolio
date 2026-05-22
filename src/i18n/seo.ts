import type { MetadataRoute } from "next"
import { routing } from "./routing"

export const siteUrl = "https://flavioow.vercel.app"
export const openGraphImagePath = "/assets/opengraph.png"
export const manifestPath = "/manifest.webmanifest"
export const googleSiteVerification =
  "MnOwS6_u35_3-3fShEOrsnUt17uLEEEA2UWCraW_mCM"

export type Locale = (typeof routing.locales)[number]

export function getLocalePrefix(locale: Locale) {
  const localePrefix = routing.localePrefix

  if (
    localePrefix &&
    typeof localePrefix === "object" &&
    "prefixes" in localePrefix
  ) {
    return localePrefix.prefixes?.[locale] ?? `/${locale}`
  }

  return `/${locale}`
}

export function getLocalizedPath(locale: Locale, canonicalPath = "/") {
  const prefix = getLocalePrefix(locale)
  const path = canonicalPath === "/" ? "" : canonicalPath

  return `${prefix}${path || ""}`
}

export function getAbsoluteLocalizedUrl(locale: Locale, canonicalPath = "/") {
  return new URL(getLocalizedPath(locale, canonicalPath), siteUrl).toString()
}

export function getLanguageAlternates(canonicalPath = "/") {
  return Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      getAbsoluteLocalizedUrl(locale, canonicalPath),
    ]),
  )
}

export function getSitemapAlternates(
  canonicalPath = "/",
): MetadataRoute.Sitemap[number]["alternates"] {
  return {
    languages: getLanguageAlternates(canonicalPath),
  }
}
