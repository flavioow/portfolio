import Navbar from "@/components/layout/Navbar/Navbar"
import { Hero } from "./hero"
import { Skills } from "./skills"

export default function Home() {
    return (
        <>
            <Navbar />

            <div className="container-wrapper">
                <Hero />
                <Skills />
            </div>
        </>
    )
}
