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
        <ul className="links flex justify-center items-center gap-2">
            <li id="nav-about">
                <Button variant="ghost">
                    <a
                        href="#about"
                        onClick={(e) => scrollToSection(e, "about")}>
                        {labels.about}
                    </a>
                </Button>
            </li>
            <li id="nav-skills">
                <a href="#skills" onClick={(e) => scrollToSection(e, "skills")}>
                    <Button variant="ghost">{labels.skills}</Button>
                </a>
            </li>
            <li id="nav-projects">
                <a
                    href="#projects"
                    onClick={(e) => scrollToSection(e, "projects")}>
                    <Button variant="ghost">{labels.projects}</Button>
                </a>
            </li>
            <li id="nav-contact">
                <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, "contact")}>
                    <Button variant="ghost">{labels.contact}</Button>
                </a>
            </li>
        </ul>
    )
}
