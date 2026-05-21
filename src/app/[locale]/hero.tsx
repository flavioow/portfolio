import { useTranslations } from "next-intl"
import { HeroEffect } from "@/components/hero-scene/hero-effect"
import RotatingText from "@/components/rotating-text"

export default function Hero() {
  const t = useTranslations("home.hero")
  const roles = [
    t("roles.keyboardist"),
    t("roles.designer"),
    t("roles.developer"),
    t("roles.brazilian"),
    t("roles.handsome"),
    t("roles.artist"),
  ]

  return (
    <section
      itemScope
      itemType="http://schema.org/Person"
      className="relative isolate h-dvh w-dvw overflow-hidden bg-radial from-background dark:from-muted from-28% to-muted-foreground dark:to-background">
      <HeroEffect />

      <div className="container-wrapper h-full content-end pb-8 pointer-events-none select-none text-background dark:text-foreground mix-blend-difference">
        <h1 className="z-2 text-[clamp(4rem,26vw,26rem)] leading-[0.9] tracking-tighter font-title text-center absolute left-1/2 top-1/2 -translate-1/2 -rotate-3 skew-x-3">
          Flavi.<span className="font-cursive">oow</span>
        </h1>

        <p className="container-breakout z-2 text-muted-foreground dark:text-foreground text-[clamp(1.4rem,2vw,2rem)] md:text-[clamp(1.6rem,3vw,3rem)]">
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
