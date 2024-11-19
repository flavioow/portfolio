import { Link } from "@/navigation"
import { getTranslations } from "next-intl/server"

export default async function Home() {
    const t = await getTranslations("Homepage")

    return (
        <div>
            <h1>{ t("title") }</h1>
            <p>{ t("content") }</p>
            <Link href="/example">{ t("example") }</Link>
        </div>
    )
}
