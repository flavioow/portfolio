"use client"

import { Button } from "@/components/ui/button"

interface NavLinksProps {
    labels: {
        about: string
        skills: string
        projects: string
        contact: string
    }
}

export default function NavLinks({ labels }: NavLinksProps) {
    const scrollToSection = (
        e: React.MouseEvent<HTMLAnchorElement>,
        id: string,
    ) => {
        e.preventDefault()
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <nav className="hidden md:flex items-center justify-center gap-8">
            <a
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}>
                {labels.about}
            </a>
            <a
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                href="#skills"
                onClick={(e) => scrollToSection(e, "skills")}>
                {labels.skills}
            </a>
            <a
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}>
                {labels.projects}
            </a>
            <a
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}>
                {labels.contact}
            </a>
        </nav>
    )

}
