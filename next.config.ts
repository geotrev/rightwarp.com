import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.tina.io",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  async rewrites() {
    return [
      // Redirect tina admin
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

export default nextConfig
