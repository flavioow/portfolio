import { useTranslations } from "next-intl"
import { HeroEffect } from "@/components/hero-scene/hero-effect"
import RotatingText from "@/components/rotating-text"
import DarkVeil from "@/components/dark-veil"

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
        t("roles.science"),
        t("roles.creative"),
    ]

    return (
        <section
            itemScope
            itemType="http://schema.org/Person"
            className="relative isolate h-dvh w-dvw overflow-hidden bg-radial from-background dark:from-muted from-28% to-muted-foreground/50 dark:to-background">
            <DarkVeil
                hueShift={244}
                noiseIntensity={0.005}
                scanlineIntensity={0.5}
                speed={0.3}
                scanlineFrequency={5}
                alphaThreshold={0}
                alphaSoftness={0.03}
                warpAmount={1}
                patternScale={1.12}
                pointerInfluence={1}
                colorA="#768585"
                colorB="#768585"
            />
            <HeroEffect />

            <div className="container-wrapper h-full content-end pb-8 pointer-events-none select-none text-background dark:text-foreground mix-blend-difference -z-10">
                <div className="container-breakout">
                    <h1 className="text-[clamp(4rem,8vw,8rem)] leading-[0.9] tracking-tighter -rotate-2 skew-x-6 mb-2">
                        Flavi.<span className="font-cursive">oow</span>
                    </h1>
                    <p className="text-[clamp(1.4rem,2vw,2rem)] md:text-[clamp(1.6rem,2.4vw,2.4rem)]">
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
            </div>
        </section>
    )
}
