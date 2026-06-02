import { Icon } from "@iconify/react"
import { Printer } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import ScrollReveal from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"

export default function About() {
  const t = useTranslations("routes.home.about")
  const tA11y = useTranslations("accessibility.routes.home.about")

  return (
    <section className="container-wrapper py-16 md:py-64 max-w-full overflow-hidden">
      <ScrollReveal
        baseOpacity={0.1}
        enableBlur
        baseRotation={-4}
        blurStrength={8}
        textClassName="text-justify text-[clamp(1.4rem,2vw,2rem)] md:text-[clamp(1.6rem,3vw,3rem)]"
        rotationEnd="top top"
        wordAnimationEnd="top top">
        {t("description")}
      </ScrollReveal>

      <div className="flex flex-wrap items-center gap-4 pt-8">
        <Button
          asChild
          size="lg">
          <Link
            href="https://github.com/flavioow"
            target="_blank"
            rel="noopener noreferrer me author"
            aria-label={tA11y("github")}
            itemProp="sameAs">
            {t("actions.github.label")}
            <Icon
              icon="mdi:github"
              aria-hidden="true"
            />
          </Link>
        </Button>
        <span>{t("connector")}</span>
        <Button
          asChild
          size="lg"
          variant="outline">
          <Link
            href={t("actions.cv.href")}
            target="_blank"
            rel="noopener noreferrer me author"
            aria-label={tA11y("cv")}
            itemProp="sameAs">
            {t("actions.cv.label")}
            <Printer aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
