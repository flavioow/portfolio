import { DirectionalMarquee } from "@/components/gsap/directional-marquee"
import { LoaderOverlay } from "@/components/loader-overlay"
import Hero from "./hero"

export default function Home() {
  const items = ["teste1", "teste2", "teste3"]

  return (
    <>
      <LoaderOverlay />
      <main className="min-h-screen">
        <Hero />

        <DirectionalMarquee items={items} />
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fuga
          molestias officia nesciunt iste labore accusamus animi quo, ducimus
          vel.
        </section>
      </main>
    </>
  )
}
