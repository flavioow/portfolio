import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer id="contact" className="container-wrapper">
            <div className="py-16 border-t border-border flex justify-between items-start lg:items-center flex-col lg:flex-row gap-4">
                <div>
                    <p>© 2025 Flávio Henrique Perusin de Souza</p>
                    <small className="text-muted-foreground">Flavi.oow</small>
                </div>

                <div className="flex gap-4">
                    <Link
                        href="https://www.linkedin.com/in/flavioow/"
                        about="_blank">
                        <Button variant="outline">
                            <Linkedin /> LinkedIn
                        </Button>
                    </Link>

                    <Link href="https://github.com/flavioow/" about="_blank">
                        <Button variant="outline">
                            <Github /> GitHub
                        </Button>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
