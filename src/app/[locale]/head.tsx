export default function Head() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://flavioow.vercel.app/#person",
      name: "Flávio Henrique Perusin de Souza",
      alternateName: "Flavi.oow",
      url: "https://flavioow.vercel.app/",
      image: "https://flavioow.vercel.app/assets/opengraph.png",
      jobTitle: "Front-end Developer & Designer",
      hasOccupation: {
        "@type": "Occupation",
        name: "Front-end Developer & Designer",
        description:
          "Builds modern web interfaces with focus on performance and user experience",
        skills: [
          "JavaScript",
          "TypeScript",
          "Next.js",
          "UI/UX Design",
          "Web performance",
          "Accessibility",
          "Design systems",
        ],
      },
      worksFor: {
        "@type": "Organization",
        "@id": "https://flavioow.vercel.app/#organization",
        name: "Flavi.oow",
        url: "https://flavioow.vercel.app/",
      },
      knowsAbout: [
        "Front-end development",
        "User interface design",
        "Web performance",
        "Accessibility",
        "Design systems",
        "HTML",
        "CSS",
        "JavaScript",
        "Next.js",
      ],
      sameAs: [
        "https://github.com/flavioow",
        "https://www.linkedin.com/in/flavioow/",
        "https://www.instagram.com/flavi.oow/",
      ],
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://flavioow.vercel.app/",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://flavioow.vercel.app/#website",
      name: "Flavi.oow",
      alternateName: "Flávio Henrique's Portfolio",
      url: "https://flavioow.vercel.app/",
      publisher: {
        "@id": "https://flavioow.vercel.app/#person",
      },
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
