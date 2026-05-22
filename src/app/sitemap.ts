import type { MetadataRoute } from "next"
import { routing } from "@/i18n/routing"
import {
  getAbsoluteLocalizedUrl,
  getSitemapAlternates,
  type Locale,
} from "@/i18n/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString()

  return routing.locales.map((locale) => ({
    url: getAbsoluteLocalizedUrl(locale as Locale),
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
    alternates: getSitemapAlternates(),
  }))
}
