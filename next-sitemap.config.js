/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.rightwarp.com/",
  exclude: ["/api/*", "/admin/*", "/blog/*"],
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/admin/*", "/blog/*"],
      },
    ],
  },
}
