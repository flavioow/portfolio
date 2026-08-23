import { SmoothScrolling } from "@/components/gsap/smooth-scrolling"
import { LoaderOverlay } from "@/components/loader-overlay"
import About from "./about"
import Hero from "./hero"

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
