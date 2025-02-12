"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeSwitcher() {
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
        <button
            type="button"
            onClick={toggleTheme}
        >
            {theme === "dark" ? (
                <Sun size={20} className="text-yellow-500" />
            ) : (
                <Moon size={20} className="text-gray-500" />
            )}
        </button>
    )
}
