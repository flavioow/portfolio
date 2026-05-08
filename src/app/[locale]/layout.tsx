import { NextIntlClientProvider, hasLocale } from "next-intl"
import { Figtree, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { routing } from "@/i18n/routing"
import { notFound } from "next/navigation"

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default async function RootLayout({
  children,
  params
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
        fontMono.variable,
        "font-sans",
        figtree.variable,
      )}>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
