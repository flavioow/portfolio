import Link from "next/link"
import { useTranslations } from "next-intl"
import { TextRoll } from "../ui/skiper-ui/text-roll-navigation"
import LanguageToggle from "./language-toggle"
import { Logo } from "./logo"
import { ThemeToggle } from "./theme-toggle"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "../ui/button"

const links = ["projects", "blog", "demos"] as const

export default function Navbar() {
  const t = useTranslations("shared.navbar")
  const tA11y = useTranslations("accessibility.components.navbar")

  return (
    <header className="fixed top-0 w-full z-50 pointer-events-none mix-blend-difference select-none">
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
                className="pointer-events-auto uppercase text-sm text-muted-foreground hover:text-background dark:hover:text-foreground transition-colors duration-300">
                <TextRoll>{t(link)}</TextRoll>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center justify-end gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <Sheet>
            <SheetTrigger className="md:hidden pointer-events-auto">
              <Button size="icon" className="pointer-events-auto bg-input/20 hover:bg-input/20 dark:hover:bg-input/50 text-muted-foreground hover:text-background dark:hover:text-foreground transition-all duration-300">
                <Menu
                  aria-hidden="true"
                  focusable="false"
                />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle />
                <div className="flex items-center justify-center gap-2 mb-4">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>

                <nav
                  aria-label={tA11y("mainNavigation")}
                  className="flex flex-col items-center justify-center gap-8">
                  {links.map((link) => (
                    <Link
                      key={link}
                      href={`/${link}`}
                      className="uppercase text-sm text-muted-foreground hover:text-background dark:hover:text-foreground transition-colors duration-300">
                      <TextRoll>{t(link)}</TextRoll>
                    </Link>
                  ))}
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
