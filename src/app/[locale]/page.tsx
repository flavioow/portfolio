import { SmoothScrolling } from "@/components/gsap/smooth-scrolling"
import { LoaderOverlay } from "@/components/loader-overlay"
import Hero from "./(sections)/hero"
import About from "./(sections)/about"

export default function Home() {
    return (
        <>
            <LoaderOverlay />
            <SmoothScrolling>
                <main className="min-h-screen">
                    <Hero />
                    {/* <About /> */}
                </main>
            </SmoothScrolling>
        </>
    )
}
