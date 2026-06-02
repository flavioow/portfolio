# i18n, SEO, and Accessibility Messages

This project uses `next-intl` with one JSON message file per locale in
`src/i18n/messages/`. Keep SEO, page copy, shared UI text, and accessibility
labels in that same file so every locale stays complete.

## Canonical JSON Order

Use this top-level order in every locale file:

1. `metadata`
2. `routes`
3. `shared`
4. `accessibility`
5. `forms`

## Namespace Responsibilities

`metadata` stores strings used by the Next.js Metadata API, sitemap alternates,
Open Graph, Twitter cards, and JSON-LD.

`routes` stores visible page content by route. Route keys should match the app's
route concepts, for example `routes.home.hero`.

`shared` stores visible labels reused across components, such as navbar links,
locale names, footer text, and common button text.

`accessibility` stores non-visible assistive text, such as `aria-label`,
screen-reader-only text, live region labels, and labels that include state.
Use `accessibility.components` for reusable components and
`accessibility.routes` for route-specific controls or landmarks.

`forms` is reserved for form labels, helper text, validation messages, and submit
states.

## Metadata Shape

Use `metadata.site` for global site data:

```json
{
  "metadata": {
    "site": {
      "name": "Flavi.oow",
      "titleTemplate": "%s | Flavi.oow",
      "defaultTitle": "Flavi.oow",
      "description": "Default site description",
      "keywords": ["portfolio", "front-end"],
      "openGraphImageAlt": "Preview of Flavi.oow portfolio",
      "author": {
        "name": "Flavio Henrique Perusin de Souza",
        "url": "https://github.com/flavioow"
      }
    },
    "routes": {
      "home": {
        "title": "Home page title",
        "description": "Home page description",
        "canonicalPath": "/",
        "openGraphTitle": "Open Graph title",
        "openGraphDescription": "Open Graph description"
      }
    }
  }
}
```

## Accessibility Shape

Use `accessibility.components` for component-level labels:

```json
{
  "accessibility": {
    "components": {
      "navbar": {
        "mainNavigation": "Main navigation",
        "homeLink": "Go to the home page"
      },
      "themeToggle": {
        "toLight": "Switch to light theme",
        "toDark": "Switch to dark theme"
      }
    }
  }
}
```

## Rules for AI and Contributors

- Do not hardcode user-facing or assistive text in components when it can be
  localized.
- Visible text belongs in `routes` or `shared`; non-visible assistive text belongs
  in `accessibility`.
- Do not reuse visible labels as `aria-label` when the accessible name needs more
  context or state.
- Keep keys stable across all locale files. If one locale gets a key, every
  locale gets the same key.
- Prefer short, action-oriented accessibility labels for controls.
- Keep metadata route keys aligned with actual route names. Do not add SEO copy
  for future pages until the route has real content.
