// "use client"

// import { useLocale } from "next-intl"
// import { usePathname } from "next/navigation"
// import { useEffect } from "react"
// import DarkVeil from "@/components/dark-veil"
// import { HeroEffect } from "@/components/hero-scene/hero-effect"
// import { preloadHeroTextures } from "@/three/assets/hero-textures"

// if (typeof window !== "undefined") {
//     preloadHeroTextures()
// }

// export function HeroBackgrounds() {
//     const locale = useLocale()
//     const pathname = usePathname()
//     const isHome = pathname === `/${locale}` || pathname === `/${locale}/`

//     useEffect(() => {
//         preloadHeroTextures()
//     }, [])

//     return (
//         <div
//             aria-hidden="true"
//             className={`pointer-events-none fixed inset-0 z-0 transition-opacity duration-200 ${
//                 isHome ? "opacity-100" : "invisible opacity-0"
//             }`}>
//             <DarkVeil
//                 isActive={isHome}
//                 hueShift={244}
//                 noiseIntensity={0.005}
//                 scanlineIntensity={0.5}
//                 speed={0.3}
//                 scanlineFrequency={5}
//                 alphaThreshold={0}
//                 alphaSoftness={0.03}
//                 warpAmount={1}
//                 patternScale={1.12}
//                 pointerInfluence={1}
//                 colorA="#768585"
//                 colorB="#768585"
//             />
//             <HeroEffect isActive={isHome} />
//         </div>
//     )
// }
