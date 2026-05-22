import Link from "next/link"
import { useTranslations } from "next-intl"
import LanguageToggle from "./language-toggle"
import { Logo } from "./logo"
import { ThemeToggle } from "./theme-toggle"

const links = ["projects", "blog", "demos"] as const

export default function Navbar() {
  const t = useTranslations("shared.navbar")
  const tA11y = useTranslations("accessibility.components.navbar")

  return (
    <header className="fixed top-0 w-full z-50 pointer-events-none mix-blend-difference">
      <div className="container-wrapper">
        <div className="flex justify-between lg:grid grid-cols-3 items-center py-4">
          <div className="flex items-center justify-start gap-2">
            <Link
              href="/"
              aria-label={tA11y("homeLink")}
              className="pointer-events-auto">
              <Logo />
            </Link>
          </div>

          <nav
            aria-label={tA11y("mainNavigation")}
            className="hidden md:flex items-center justify-center gap-8">
            {links.map((link) => (
              <Link
                key={link}
                href={`/${link}`}
                className="pointer-events-auto text-sm text-muted-foreground hover:text-background dark:hover:text-foreground transition-colors duration-300">
                {t(link)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
