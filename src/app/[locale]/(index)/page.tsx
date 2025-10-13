import Navbar from "@/components/layout/Navbar/Navbar"
import { Hero } from "./hero"
import { Skills } from "./skills"
import GradualBlurMemo from "@/components/ui/GradualBlur"

export default function Home() {
    return (
        <div className="relative h-dvh overflow-hidden">
            <div className="h-full overflow-y-auto">
                <Navbar />
                <div className="container-wrapper">
                    <Hero />
                    <Skills />
                </div>
            </div>

            <GradualBlurMemo
                target="parent"
                position="bottom"
                height="6rem"
                strength={2}
                divCount={5}
                curve="bezier"
                exponential={true}
                opacity={1}
            />
        </div>
    )
}
