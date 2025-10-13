"use client"

import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

type Props = {
    lightThemeText: string
    darkThemeText: string
}

export default function ThemeSwitcherButton({
    lightThemeText,
    darkThemeText,
}: Props) {
    const [theme, setTheme] = useState<"light" | "dark">("light")

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches

        if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add("dark")
            setTheme("dark")
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        document.documentElement.classList.toggle("dark")
        localStorage.setItem("theme", newTheme)
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        aria-label={
                            theme === "dark" ? lightThemeText : darkThemeText
                        }>
                        {theme === "dark" ? <Sun /> : <Moon />}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="text-primary-foreground">
                        {theme === "dark" ? lightThemeText : darkThemeText}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
