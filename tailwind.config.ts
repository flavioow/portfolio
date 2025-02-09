import type { Config } from "tailwindcss"

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                text: "rgb(var(--text) / <alpha-value>)",
                background: "rgb(var(--background) / <alpha-value>)",
                primary: "rgb(var(--primary) / <alpha-value>)",
                secondary: "rgb(var(--secondary) / <alpha-value>)",
                accent: "rgb(var(--accent) / <alpha-value>)",
            },
            fontFamily: {
                calligraffitti: ["Calligraffitti"],
            },
        },
    },
    plugins: [],
} satisfies Config
