import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'

const I18nMiddleware = createI18nMiddleware({
    locales: ["en", "br"],
    defaultLocale: "en",
})

export function middleware(req: NextRequest) {
    return I18nMiddleware(req)
}

export const config = {
    matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt|_headers).*)"],
}
