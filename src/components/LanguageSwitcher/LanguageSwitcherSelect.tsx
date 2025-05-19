"use client"

import { usePathname, useRouter } from "@/navigation"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Props = {
    placeholderText: string
}

export default function LanguageSwitcherSelect({ placeholderText }: Props) {
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
            <Select onValueChange={(value) => changeLanguage(value as "en" | "pt-br")}>
                <SelectTrigger>
                    <SelectValue placeholder={placeholderText} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="pt-br">Português</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
