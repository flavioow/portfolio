import type { Metadata } from "next"
import { EB_Garamond, Figtree } from "next/font/google"
import "@/styles/globals.css"
import "@/styles/layout.css"
import "@/styles/fonts.css"
import "@/styles/cursors.css"
import { I18nProviderClient } from "@/locales/client"
import type { ReactElement } from "react"

const figtree = Figtree({
    subsets: ["latin"],
    variable: "--font-primary",
})
const eb_garamond = EB_Garamond({
    subsets: ["latin"],
    variable: "--font-secondary",
})
const fonts = {
    primary: figtree,
    secondary: eb_garamond,
}

export const metadata: Metadata = {
    title: "Flavi.oow",
    description: "This is a little demonstration of who I am",
    keywords: "portfolio, personal, flávio henrique, webdesigner",
    authors: [{ name: "Flávio Henrique", url: "https://github.com/flavioow" }],
    robots: "index, follow",
    applicationName: "Flavi.oow",
    other: { "google-site-verification": "MnOwS6_u35_3-3fShEOrsnUt17uLEEEA2UWCraW_mCM" },
    icons: [
        {
            rel: "icon",
            type: "image/png",
            url: "favicons/favicon-96x96.png",
            sizes: "96x96",
        },
        {
            rel: "icon",
            type: "image/svg+xml",
            url: "favicons/favicon.svg",
        },
        {
            rel: "shortcut icon",
            url: "favicons/favicon.ico",
        },
        {
            rel: "apple-touch-icon",
            url: "favicons/apple-touch-icon.png",
            sizes: "180x180",
        },
    ],
    openGraph: {
        title: "Flavi.oow",
        description: "This is a little demonstration of who I am",
        images: [
            {
                url: "https://flavioow.vercel.app/assets/opengraph.png",
                width: 1200,
                height: 630,
                alt: "Preview",
            },
        ],
        type: "website",
        url: "https://flavioow.vercel.app/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flavi.oow",
        description: "This is a little demonstration of who I am",
        images: ["https://flavioow.vercel.app/assets/opengraph.png"],
    },
}

export default async function RootLayout({
    params,
    children,
}: {
    params: Promise<{ locale: string }>
    children: ReactElement
}) {
    const { locale } = await params

    return (
        <I18nProviderClient locale={locale}>
            <html lang="en">
                <head>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "Person",
                                name: "Flávio Henrique Perusin de Souza",
                                alternateName: "Flavi.oow",
                                url: "https://flavioow.vercel.app/",
                                image: "https://flavioow.vercel.app/assets/opengraph.png",
                                sameAs: [
                                    "https://github.com/flavioow",
                                    "https://www.linkedin.com/in/flavioow/"
                                ],
                                jobTitle: "Frontend Developer",
                                knowsAbout: [
                                    "HTML",
                                    "CSS",
                                    "JavaScript",
                                    "Next.js",
                                    "UI/UX Design"
                                ],
                            }),
                        }}
                    />
                </head>
                <body
                    className={`${figtree.variable} ${eb_garamond.variable} ${figtree.className}`}>
                    {children}
                </body>
            </html>
        </I18nProviderClient>
    )
}
