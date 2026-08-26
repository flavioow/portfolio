import { useTranslations } from "next-intl"
import ScrollReveal from "@/components/scroll-reveal"

export default function About() {
    const t = useTranslations("routes.home.about")
    const tA11y = useTranslations("accessibility.routes.home.about")

    return (
        <section className="container-wrapper py-16 md:py-64 max-w-full overflow-hidden">
            <ScrollReveal
                baseOpacity={0.1}
                enableBlur
                baseRotation={0}
                blurStrength={8}
                textClassName="text-center text-[clamp(2rem,3vw,3rem)] md:text-[clamp(4rem,6vw,6rem)]"
                wordAnimationEnd="top top">
                {t("description")}
            </ScrollReveal>
        </section>
    )
}
