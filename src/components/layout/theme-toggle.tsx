"use client"

import { Moon, Sun } from "lucide-react"
import { useTranslations } from "next-intl"
import type * as React from "react"
import { useEffect, useState } from "react"

import { useSkiperThemeToggle } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ThemeToggleProps = Omit<
    React.ComponentProps<typeof Button>,
    "children" | "size" | "variant"
>

function ThemeToggle({ className, onClick, ...props }: ThemeToggleProps) {
    const { isDark, toggleTheme } = useSkiperThemeToggle()
    const t = useTranslations("accessibility.components.themeToggle")
    const [isMounted, setIsMounted] = useState(false)
    const label = !isMounted ? t("toggle") : isDark ? t("toLight") : t("toDark")

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={label}
            className={cn(
                "pointer-events-auto pointer border-0 bg-transparent hover:bg-input/10 dark:bg-input/30 dark:hover:bg-input/50 text-sm text-background hover:text-muted-foreground dark:text-muted-foreground dark:hover:text-foreground transition-colors duration-300",
                className,
            )}
            onClick={(event) => {
                onClick?.(event)

                if (!event.defaultPrevented) {
                    toggleTheme()
                }
            }}
            {...props}>
            <Sun
                aria-hidden="true"
                focusable="false"
                className="scale-100 rotate-0 dark:-rotate-90 dark:scale-0"
            />
            <Moon
                aria-hidden="true"
                focusable="false"
                className="absolute scale-0 rotate-90 dark:scale-100 dark:rotate-0"
            />
            <span className="sr-only">{label}</span>
        </Button>
    )
}

export { ThemeToggle }
