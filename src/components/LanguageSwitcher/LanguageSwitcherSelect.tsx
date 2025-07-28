"use client"

import { useRouter } from "@/navigation"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Props = {
    placeholderText: string
    switchLangText: string
}

export default function LanguageSwitcherSelect({ placeholderText, switchLangText }: Props) {
    const { pushLocale } = useRouter()

    return (
        <div className="relative">
            <Select onValueChange={(value) => pushLocale(value as "en" | "pt-br")}>
                <SelectTrigger aria-label={switchLangText}>
                    <SelectValue placeholder={placeholderText} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="br">Português</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
