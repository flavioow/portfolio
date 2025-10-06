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
    applicationName: "Flavi.oow",
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
        <html lang={locale}>
            <head>
                <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
                <link rel="preload" href="https://use.typekit.net/xyr3fuc.css" as="style" />
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/xyr3fuc.css"
                    media="print"
                />
                <noscript>
                    <link rel="stylesheet" href="https://use.typekit.net/xyr3fuc.css" />
                </noscript>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.addEventListener('load', () => {
                                const link = document.createElement('link');
                                link.rel = 'manifest';
                                link.href = '/manifest.webmanifest';
                                document.head.appendChild(link);
                            });
                        `,
                    }}
                />
            </head>
            <body className={inter.className}>
                <I18nProviderClient locale={locale}>
                    {children}
                </I18nProviderClient>
            </body>
        </html>
    )
}
