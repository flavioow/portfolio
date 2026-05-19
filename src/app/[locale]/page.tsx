import { useTranslations } from "next-intl"
import { HeroEffect } from "@/components/hero-scene/hero-effect"
import { LoaderOverlay } from "@/components/loader-overlay"
import RotatingText from "@/components/rotating-text"

export default function Home() {
  const t = useTranslations("home.hero")
  const roles = [
    t("roles.designer"),
    t("roles.keyboardist"),
    t("roles.artist"),
    t("roles.brazilian"),
    t("roles.handsome")
  ]

  return (
    <>
      <LoaderOverlay />
      <main className="min-h-screen">
        <section
          itemScope
          itemType="http://schema.org/Person"
          className="relative isolate flex h-dvh w-dvw items-center justify-center overflow-hidden bg-radial from-background dark:from-muted from-28% to-muted-foreground dark:to-background">
          <HeroEffect />

          <div className="pointer-events-none select-none text-background dark:text-foreground mix-blend-difference">
            <h1 className="z-2 text-[clamp(4rem,24vw,24rem)] leading-[0.9] tracking-tighter font-title text-center">
              Flavi.<span className="font-cursive">oow</span>
            </h1>
            <div className="z-2 text-[clamp(1rem,1vw,1rem)] md:text-[clamp(1.2rem,2vw,2rem)] text-center flex flex-col">
              {t("title")}

              <RotatingText
                texts={roles}
                mainClassName="overflow-hidden justify-center"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
                splitBy="characters"
                auto
                loop
              />
            </div>
          </div>

          <small className="pointer-events-none select-none z-2 text-foreground dark:text-background leading-relaxed text-center absolute left-1/2 bottom-8 -translate-1/2">
            Experimente scrolar
          </small>
        </section>
      </main>
    </>
  )
}
