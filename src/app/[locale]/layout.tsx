import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./cursors.css"
import { ReactElement } from "react"
import { I18nProviderClient } from "@/locales/client"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Flavi.oow",
    description: "This is a little demonstration of who I am",
    keywords: "portfolio, personal, flávio henrique, webdesigner",
    authors: [{ name: "Flávio Henrique", url: "https://github.com/flavioow" }],
    robots: "index, follow",
    manifest: "manifest.webmanifest",
    applicationName: "Flavi.oow",
    other: { name: "apple-mobile-web-app-title", content: "Flavi.oow" },
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

export default async function RootLayout(
    { params, children }: {
        params: Promise<{ locale: string }>,
        children: ReactElement
    }
) {
    const { locale } = await params

    return (
        <html lang="en">
            <body className={inter.className}>
                <I18nProviderClient locale={locale}>
                    {children}
                </I18nProviderClient>
            </body>
        </html>
    )
}
