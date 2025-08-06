"use client"

import { useRouter } from "@/navigation"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import type { Locale } from "@/locales/config"

type Props = {
    placeholderText: string
    switchLangText: string
}

export default function LanguageSwitcherSelect({ placeholderText, switchLangText }: Props) {
    const { pushLocale } = useRouter()

    return (
        <div className="relative">
            <Select onValueChange={(value) => pushLocale(value as Locale)}>
                <SelectTrigger aria-label={switchLangText}>
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
