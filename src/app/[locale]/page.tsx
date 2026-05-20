import { LoaderOverlay } from "@/components/loader-overlay"
import Hero from "./hero"

export default function Home() {

  return (
    <>
      <LoaderOverlay />
      <main className="min-h-screen">
        <Hero />
      </main>
    </>
  )
}
