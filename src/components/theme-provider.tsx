"use client"

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import * as React from "react"

const themeTransitionStyleId = "skiper-theme-transition-styles"

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => void
}

function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}>
      <ThemeHotkey />
      {children}
    </NextThemesProvider>
  )
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  )
}

function ThemeHotkey() {
  const { toggleTheme } = useSkiperThemeToggle()

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) {
        return
      }

      if (event.metaKey || event.ctrlKey || event.altKey) {
        return
      }

      if (event.key.toLowerCase() !== "d") {
        return
      }

      if (isTypingTarget(event.target)) {
        return
      }

      toggleTheme()
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [toggleTheme])

  return null
}

function useSkiperThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const isDark = resolvedTheme === "dark"

  const toggleTheme = React.useCallback(() => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark"

    startSkiperThemeTransition(() => {
      setTheme(nextTheme)
    })
  }, [resolvedTheme, setTheme])

  return { isDark, toggleTheme }
}

function startSkiperThemeTransition(updateTheme: () => void) {
  if (
    typeof window === "undefined" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    updateTheme()
    return
  }

  applySkiperThemeTransitionStyles()

  const viewTransitionDocument = document as ViewTransitionDocument

  if (!viewTransitionDocument.startViewTransition) {
    updateTheme()
    return
  }

  viewTransitionDocument.startViewTransition(updateTheme)
}

function applySkiperThemeTransitionStyles() {
  let styleElement = document.getElementById(
    themeTransitionStyleId,
  ) as HTMLStyleElement | null

  if (!styleElement) {
    styleElement = document.createElement("style")
    styleElement.id = themeTransitionStyleId
    document.head.appendChild(styleElement)
  }

  styleElement.textContent = `
    ::view-transition-group(root) {
      animation-duration: 0.7s;
      animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    }

    ::view-transition-new(root) {
      animation-name: skiper-reveal-light-blur;
      filter: blur(2px);
    }

    ::view-transition-old(root),
    .dark::view-transition-old(root) {
      animation: none;
      z-index: -1;
    }

    .dark::view-transition-new(root) {
      animation-name: skiper-reveal-dark-blur;
      filter: blur(2px);
    }

    @keyframes skiper-reveal-dark-blur {
      from {
        clip-path: circle(0% at 50% 50%);
        filter: blur(8px);
      }

      50% {
        filter: blur(4px);
      }

      to {
        clip-path: circle(100% at 50% 50%);
        filter: blur(0);
      }
    }

    @keyframes skiper-reveal-light-blur {
      from {
        clip-path: circle(0% at 50% 50%);
        filter: blur(8px);
      }

      50% {
        filter: blur(4px);
      }

      to {
        clip-path: circle(100% at 50% 50%);
        filter: blur(0);
      }
    }
  `
}

export { ThemeProvider, useSkiperThemeToggle }
