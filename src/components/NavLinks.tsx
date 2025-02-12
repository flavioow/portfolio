"use client"

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
        <ul className="links flex justify-center items-center gap-6 text-text dark:text-text">
            <li id="nav-about">
                <a
                    href="#about"
                    onClick={(e) => scrollToSection(e, "about")}
                    className="p-2">
                    {labels.about}
                </a>
            </li>
            <li id="nav-skills">
                <a
                    href="#skills"
                    onClick={(e) => scrollToSection(e, "skills")}
                    className="p-2">
                    {labels.skills}
                </a>
            </li>
            <li id="nav-projects">
                <a
                    href="#projects"
                    onClick={(e) => scrollToSection(e, "projects")}
                    className="p-2">
                    {labels.projects}
                </a>
            </li>
            <li id="nav-contact">
                <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, "contact")}
                    className="p-2">
                    {labels.contact}
                </a>
            </li>
        </ul>
    )
}
