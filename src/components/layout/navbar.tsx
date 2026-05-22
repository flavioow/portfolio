import { useTranslations } from "next-intl"
import Link from "next/link"
import { Logo } from "./logo"

const links = [
  "projects",
  "blog",
  "demos",
] as const

export default function Navbar() {
  const t = useTranslations("shared.navbar")

  return (
    <header className="fixed top-0 w-full z-50 pointer-events-none mix-blend-difference">
      <div className="container-wrapper">
        <div className="flex justify-between lg:grid grid-cols-2 items-center py-4">
          <div className="flex items-center justify-start gap-2">
            <Link href="/" className="pointer-events-auto">
              <Logo />
            </Link>
          </div>

          <div className="flex items-center justify-end gap-2">
            <nav className="hidden md:flex items-center justify-center gap-8">
              {links.map((link) => (
                <Link
                  key={link}
                  href={`/${link}`}
                  className="pointer-events-auto text-sm text-muted-foreground hover:text-background dark:hover:text-foreground transition-colors duration-300"
                >
                  {t(link)}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
