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
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
