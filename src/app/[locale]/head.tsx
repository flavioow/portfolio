export default function Head() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Flávio Henrique Perusin de Souza",
        alternateName: "Flavi.oow",
        url: "https://flavioow.vercel.app/",
        image: "https://flavioow.vercel.app/assets/opengraph.png",
        sameAs: [
            "https://github.com/flavioow",
            "https://www.linkedin.com/in/flavioow/"
        ],
        jobTitle: "Frontend Developer",
        knowsAbout: [
            "HTML",
            "CSS",
            "JavaScript",
            "Next.js",
            "UI/UX Design"
        ],
    }

    return (
        <>
            <title>Flavi.oow</title>
            <meta name="description" content="This is a little demonstration of who I am" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    )
}
