import {
    Calligraffitti,
    EB_Garamond,
    Geist,
    Geist_Mono,
} from "next/font/google"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import "@/styles/globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"
import { ThemeProvider } from "@/components/theme-provider"
import { routing } from "@/i18n/routing"
import {
    getAbsoluteLocalizedUrl,
    getLanguageAlternates,
    googleSiteVerification,
    type Locale,
    manifestPath,
    openGraphImagePath,
    siteUrl,
} from "@/i18n/seo"
import { cn } from "@/lib/utils"

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist",
})

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
})

const ebGaramond = EB_Garamond({
    subsets: ["latin"],
    variable: "--font-eb-garamond",
})

const calligraffitti = Calligraffitti({
    subsets: ["latin"],
    variable: "--font-calligraffitti",
    weight: ["400"],
})

type LocaleLayoutProps = {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}

export async function generateMetadata({
    params,
}: Omit<LocaleLayoutProps, "children">): Promise<Metadata> {
    const { locale: requestedLocale } = await params

    if (!hasLocale(routing.locales, requestedLocale)) notFound()

    const locale = requestedLocale as Locale
    const tSite = await getTranslations({ locale, namespace: "metadata.site" })
    const tHome = await getTranslations({
        locale,
        namespace: "metadata.routes.home",
    })

    const canonicalPath = tHome("canonicalPath")
    const canonicalUrl = getAbsoluteLocalizedUrl(locale, canonicalPath)
    const imageUrl = new URL(openGraphImagePath, siteUrl).toString()
    const author = tSite.raw("author") as { name: string; url: string }

    return {
        metadataBase: new URL(siteUrl),
        title: {
            default: tSite("defaultTitle"),
            template: tSite("titleTemplate"),
            absolute: tHome("title"),
        },
        description: tHome("description"),
        keywords: tSite.raw("keywords") as string[],
        authors: [author],
        robots: "index, follow",
        applicationName: tSite("name"),
        manifest: new URL(manifestPath, siteUrl).toString(),
        alternates: {
            canonical: canonicalUrl,
            languages: getLanguageAlternates(canonicalPath),
        },
        other: {
            "google-site-verification": googleSiteVerification,
        },
        openGraph: {
            title: tHome("openGraphTitle"),
            description: tHome("openGraphDescription"),
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: tSite("openGraphImageAlt"),
                },
            ],
            locale,
            siteName: tSite("name"),
            type: "website",
            url: canonicalUrl,
        },
        twitter: {
            card: "summary_large_image",
            title: tHome("openGraphTitle"),
            description: tHome("openGraphDescription"),
            images: [
                {
                    url: imageUrl,
                    alt: tSite("openGraphImageAlt"),
                },
            ],
        },
    }
}

async function getStructuredData(locale: Locale) {
    const tSite = await getTranslations({ locale, namespace: "metadata.site" })
    const tHome = await getTranslations({
        locale,
        namespace: "metadata.routes.home",
    })

    const canonicalPath = tHome("canonicalPath")
    const canonicalUrl = getAbsoluteLocalizedUrl(locale, canonicalPath)
    const imageUrl = new URL(openGraphImagePath, siteUrl).toString()
    const author = tSite.raw("author") as { name: string; url: string }

    return [
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": `${siteUrl}/#person`,
            name: author.name,
            alternateName: tSite("jsonLd.alternateName"),
            url: canonicalUrl,
            image: imageUrl,
            jobTitle: tSite("jsonLd.jobTitle"),
            hasOccupation: {
                "@type": "Occupation",
                name: tSite("jsonLd.occupationName"),
                description: tSite("jsonLd.occupationDescription"),
                skills: tSite.raw("jsonLd.skills") as string[],
            },
            worksFor: {
                "@type": "Organization",
                "@id": `${siteUrl}/#organization`,
                name: tSite("jsonLd.organizationName"),
                url: siteUrl,
            },
            knowsAbout: tSite.raw("jsonLd.knowsAbout") as string[],
            sameAs: tSite.raw("jsonLd.sameAs") as string[],
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": canonicalUrl,
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            name: tSite("name"),
            alternateName: tSite("jsonLd.websiteAlternateName"),
            url: siteUrl,
            inLanguage: locale,
            publisher: {
                "@id": `${siteUrl}/#person`,
            },
        },
    ]
}

export default async function RootLayout({
    children,
    params,
}: Readonly<LocaleLayoutProps>) {
    const { locale: requestedLocale } = await params

    if (!hasLocale(routing.locales, requestedLocale)) notFound()

    const locale = requestedLocale as Locale
    const structuredData = await getStructuredData(locale)

    return (
        <html
            lang={locale}
            suppressHydrationWarning
            className={cn(
                "antialiased",
                geist.variable,
                geistMono.variable,
                ebGaramond.variable,
                calligraffitti.variable,
            )}>
            <body>
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
                <ThemeProvider>
                    <NextIntlClientProvider>
                        {children}
                        <SpeedInsights />
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
