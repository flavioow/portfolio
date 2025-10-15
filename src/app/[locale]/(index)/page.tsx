import Navbar from "@/components/layout/Navbar/Navbar"
import { Hero } from "./hero"
import { Skills } from "./skills"
import GradualBlurMemo from "@/components/ui/GradualBlur"
import { TechStack } from "./techstack"
import Footer from "@/components/layout/Footer"

export default function Home() {
    return (
        <div className="relative h-dvh overflow-hidden">
            <div className="h-full overflow-y-auto">
                <Navbar />
                <div className="container-wrapper">
                    <Hero />
                    <TechStack />
                    <Skills />
                </div>
                <Footer />
            </div>

            <GradualBlurMemo
                target="parent"
                position="bottom"
                height="4rem"
                strength={2}
                divCount={5}
                curve="bezier"
                exponential={true}
                opacity={1}
            />
        </div>
    )
}
