import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

export default createMiddleware(routing)
export const config = {
  matcher: [
    // Exclude API routes, static files, image optimizations, and .png files
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
}
