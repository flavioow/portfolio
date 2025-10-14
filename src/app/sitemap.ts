import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://flavioow.vercel.app/",
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ]
}
