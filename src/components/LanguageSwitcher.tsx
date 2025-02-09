"use client"

import { usePathname, useRouter } from "@/navigation"

export default function LanguageSwitcher() {
    const router = useRouter()
    const pathname = usePathname()

    const changeLanguage = (lang: "en" | "pt-br") => {
        const segments = pathname.split("/")

        if (segments[1] === "en" || segments[1] === "pt-br") {
            segments[1] = lang // altera parte da url para o idioma selecionado
        } else {
            segments.unshift(lang) // se não houver idioma na URL é adicionado
        }

        router.push(segments.join("/")) // redireciona
    }

    return (
        <div className="relative">
            <select onChange={(e) => changeLanguage(e.target.value as "en" | "pt-br")} className="p-2 bg-transparent">
                <option value="en">🇺🇸</option>
                <option value="pt-br">🇧🇷</option>
            </select>
        </div>
    )
}
