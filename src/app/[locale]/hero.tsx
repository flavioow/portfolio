import { useTranslations } from "next-intl"
import { HeroEffect } from "@/components/hero-scene/hero-effect"
import RotatingText from "@/components/rotating-text"

export default function Hero() {
  const t = useTranslations("routes.home.hero")
  const roles = [
    t("roles.keyboardist"),
    t("roles.designer"),
    t("roles.developer"),
    t("roles.brazilian"),
    t("roles.handsome"),
    t("roles.artist"),
    t("roles.formula"),
    t("roles.science"), // todo: translate to "en" and "it"
    t("roles.creative"), // todo: translate to "en" and "it"
  ]

  return (
    <section
      itemScope
      itemType="http://schema.org/Person"
      className="relative isolate h-dvh w-dvw overflow-hidden bg-radial from-background dark:from-muted from-28% to-muted-foreground/50 dark:to-background">
      <HeroEffect />

      <div className="container-wrapper h-full content-end pb-8 pointer-events-none select-none text-background dark:text-foreground mix-blend-difference">
        <h1 className="z-2 text-[clamp(4rem,24vw,24rem)] leading-[0.9] tracking-tighter text-center absolute left-1/2 top-1/2 -translate-1/2 -rotate-3 skew-x-6">
          Flavi.<span className="font-cursive">oow</span>
        </h1>

        <p className="z-2 text-muted-foreground dark:text-foreground text-[clamp(1.4rem,2vw,2rem)] md:text-[clamp(1.6rem,3vw,3rem)]">
          <span>{t("title")}&nbsp;</span>
          <RotatingText
            texts={roles}
            mainClassName="overflow-hidden"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.02}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
            splitBy="characters"
            auto
            loop
          />
        </p>
      </div>
    </section>
  )
}
