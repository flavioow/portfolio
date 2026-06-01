import { Icon } from "@iconify/react"
import { Printer } from "lucide-react"
import { SmoothScrolling } from "@/components/gsap/smooth-scrolling"
import { LoaderOverlay } from "@/components/loader-overlay"
import ScrollReveal from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import Hero from "./hero"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations("home")

  return (
    <>
      <LoaderOverlay />
      <SmoothScrolling>
        <main className="min-h-screen">
          <Hero />

          <section className="container-wrapper py-16 md:py-64 max-w-full overflow-hidden">
            {/* todo: translate to "en" and "it" */}
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={-4}
              blurStrength={8}
              textClassName="text-justify text-[clamp(1.4rem,2vw,2rem)] md:text-[clamp(1.6rem,3vw,3rem)]"
              rotationEnd="top top"
              wordAnimationEnd="top top">
              Eu adoro transformar as ideias mais malucas em projetos reais que
              dão inveja a qualquer um! Ainda não acredita? Então porque você
              não
            </ScrollReveal>

            <div className="flex flex-wrap items-center gap-4 pt-8">
              <Link
                href="https://github.com/flavioow"
                target="_blank"
                rel="noopener noreferrer me author"
                aria-label={t("about.github")}
                itemProp="sameAs">
                <Button size="lg">
                  Explora meu GitHub
                  <Icon icon="mdi:github" />
                </Button>
              </Link>
              e
              <Link
                href="/assets/dev-general-br.pdf" // todo: add suport to mult-lang as "dev-general-{lang}.pdf"
                target="_blank"
                rel="noopener noreferrer me author"
                aria-label={t("about.cv")}
                itemProp="sameAs">
                <Button
                  size="lg"
                  variant="outline">
                  Vê meu Currículo
                  <Printer />
                </Button>
              </Link>
            </div>
          </section>
        </main>
      </SmoothScrolling>
    </>
  )
}
