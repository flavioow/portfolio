import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Flavi.oow - Flávio Henrique Perusin de Souza's Portfolio - Front-end Developer & Designer",
  description:
    "I'm Flávio Henrique, a front-end developer specializing in creating elegant and functional interfaces. I turn ideas into digital products that people love to use.",
  keywords: [
    "developer",
    "front-end",
    "seo",
    "accessibility",
    "responsiveness",
    "typescript",
    "node",
    "react",
    "nextjs",
    "tailwindcss",
    "prisma",
    "postgresql",
  ],
  authors: [
    {
      name: "Flávio Henrique Perusin de Souza",
      url: "https://github.com/flavioow",
    },
  ],
  robots: "index, follow",
  applicationName: "Flavi.oow",
  manifest: "https://flavioow.vercel.app/manifest.webmanifest",
  other: {
    "google-site-verification": "MnOwS6_u35_3-3fShEOrsnUt17uLEEEA2UWCraW_mCM",
  },
  openGraph: {
    title: "Flavi.oow",
    description:
      "I'm Flávio Henrique, a front-end developer specializing in creating elegant and functional interfaces. I turn ideas into digital products that people love to use.",
    images: [
      {
        url: "https://flavioow.vercel.app/assets/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Preview",
      },
    ],
    type: "website",
    url: "https://flavioow.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flavi.oow",
    description:
      "I'm Flávio Henrique, a front-end developer specializing in creating elegant and functional interfaces. I turn ideas into digital products that people love to use.",
    images: ["https://flavioow.vercel.app/assets/opengraph.png"],
  },
}

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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
