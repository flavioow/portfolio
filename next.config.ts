import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
    async headers() {
        return [
            {
                source: "/assets/:path*.png",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=2592000",
                    },
                ],
            },
        ]
    },
}
const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
