import { Menu } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { TextRoll } from "../ui/skiper-ui/text-roll-navigation"
import LanguageToggle from "./language-toggle"
import { ThemeToggle } from "./theme-toggle"

const links = ["projects", "blog", "demos"] as const

export default function Navbar() {
  const t = useTranslations("shared.navbar")
  const tA11y = useTranslations("accessibility.components.navbar")

  return (
    <header className="mix-blend-difference select-none">
      <div className="flex justify-end items-center py-4">
        <div className="hidden md:flex items-center justify-end gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <Sheet>
          <SheetTrigger
            className="md:hidden pointer-events-auto"
            asChild>
            <Button
              size="icon"
              className="pointer-events-auto border-0 bg-input/10 hover:bg-input/30 dark:bg-input/30 dark:hover:bg-input/50 text-muted-foreground hover:text-foreground transition-all duration-300">
              <Menu
                aria-hidden="true"
                focusable="false"
              />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom">
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
                    className="uppercase text-sm text-muted-foreground hover:text-foreground dark:hover:text-foreground transition-colors duration-300">
                    <TextRoll>{t(link)}</TextRoll>
                  </Link>
                ))}
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
