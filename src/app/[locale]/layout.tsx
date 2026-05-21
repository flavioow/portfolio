import {
  Calligraffitti,
  EB_Garamond,
  Geist,
  Geist_Mono,
} from "next/font/google"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import "@/styles/globals.css"
import { notFound } from "next/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { routing } from "@/i18n/routing"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"

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

export const metadata: Metadata = {
  title:
    "Flavi.oow - Flávio Henrique Perusin de Souza's Portfolio - Front-end Developer & Designer",
  description:
    "I'm Flávio Henrique, a front-end developer specializing in creating elegant and functional interfaces. I turn ideas into digital products that people love to use.",
  keywords: [
    "developer",
    "front-end",
    "seo",
    "accessibility",
    "responsiveness",
    "typescript",
    "node",
    "react",
    "nextjs",
    "tailwindcss",
    "prisma",
    "postgresql",
  ],
  authors: [
    {
      name: "Flávio Henrique Perusin de Souza",
      url: "https://github.com/flavioow",
    },
  ],
  robots: "index, follow",
  applicationName: "Flavi.oow",
  manifest: "https://flavioow.vercel.app/manifest.webmanifest",
  other: {
    "google-site-verification": "MnOwS6_u35_3-3fShEOrsnUt17uLEEEA2UWCraW_mCM",
  },
  openGraph: {
    title: "Flavi.oow",
    description:
      "I'm Flávio Henrique, a front-end developer specializing in creating elegant and functional interfaces. I turn ideas into digital products that people love to use.",
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
    description:
      "I'm Flávio Henrique, a front-end developer specializing in creating elegant and functional interfaces. I turn ideas into digital products that people love to use.",
    images: ["https://flavioow.vercel.app/assets/opengraph.png"],
  },
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) notFound()

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
