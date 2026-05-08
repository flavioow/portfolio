import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["en", "pt-BR", "it"],
  defaultLocale: "en",
  localePrefix: {
    mode: "always",
    prefixes: {
      "pt-BR": "/br",
    }
  }
})
