/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `${process.env.WEBSITE_URL || "https://cityofdavidtabernacle.org"}`,
  generateRobotsTxt: true,
  sitemapSize: 7000,

  // Optional but recommended:
  changefreq: "weekly",
  priority: 0.8,

  // Auto-index all pages in /app directory
  generateIndexSitemap: true,
  images: true,

  // Handle static/dynamic routes just fine
  exclude: [
    // If you want to exclude admin pages later
    "/admin/*",
    "/resources/forms",
    "/resources/forms/*",
    "/resources/prayer-requests",
    "/resources/prayer-requests/*",
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/resources/forms",
          "/resources/forms/*",
          "/resources/prayer-requests",
          "/resources/prayer-requests/*",
        ],
      },
    ],
  },
};
