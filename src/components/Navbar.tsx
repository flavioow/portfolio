import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";

export default async function Navbar() {
    const t = await getTranslations("Navbar")

    return (
        <nav className="bg-background bg-opacity-50 backdrop-blur-md w-full px-20 py-4 sticky top-0">
            <div className="flex justify-center items-center relative">
                <ul className="links flex justify-center items-center gap-6">
                    <li id="about">
                        <Link href="#">{t("about")}</Link>
                    </li>
                    <li id="skills">
                        <Link href="#">{t("skills")}</Link>
                    </li>
                    <li id="projects">
                        <Link href="#">{t("projects")}</Link>
                    </li>
                    <li id="contact">
                        <Link href="#">{t("contact")}</Link>
                    </li>
                </ul>

                <div className="side-buttons absolute right-0 flex gap-6">
                    <button className="side-btn" type="button">
                        icon
                    </button>
                    <button className="side-btn" type="button">
                        icon
                    </button>
                </div>
            </div>
        </nav>
    )
}
