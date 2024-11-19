import type { Metadata } from "next"
import "./globals.css"
import "./cursors.css"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"

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
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const messages = await getMessages()

    return (
        <NextIntlClientProvider messages={messages}>
            <html lang="en">
                <body>
                    {children}
                </body>
            </html>
        </NextIntlClientProvider>
    )
}
