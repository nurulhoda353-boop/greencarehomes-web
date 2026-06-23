import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL } from "@/config/site";

const BASE_URL = SITE_URL;

// Keep in sync with src/routes/services_.$slug.tsx
const SERVICE_SLUGS = [
  "residence",
  "nursing",
  "caregiver",
  "physiotherapy",
  "daycare",
  "respite",
];

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/blog-and-events", changefreq: "weekly", priority: "0.7" },
          { path: "/book-appointment", changefreq: "monthly", priority: "0.9" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms-and-conditions", changefreq: "yearly", priority: "0.3" },
          ...SERVICE_SLUGS.map<SitemapEntry>((slug) => ({
            path: `/services/${slug}`,
            changefreq: "monthly",
            priority: "0.8",
          })),
          { path: "/bn", changefreq: "weekly", priority: "0.9" },
          { path: "/bn/about", changefreq: "monthly", priority: "0.7" },
          { path: "/bn/services", changefreq: "monthly", priority: "0.8" },
          { path: "/bn/blog-and-events", changefreq: "weekly", priority: "0.6" },
          { path: "/bn/book-appointment", changefreq: "monthly", priority: "0.8" },
          { path: "/bn/contact", changefreq: "monthly", priority: "0.6" },
          { path: "/bn/privacy-policy", changefreq: "yearly", priority: "0.3" },
          { path: "/bn/terms-and-conditions", changefreq: "yearly", priority: "0.3" },
          ...SERVICE_SLUGS.map<SitemapEntry>((slug) => ({
            path: `/bn/services/${slug}`,
            changefreq: "monthly",
            priority: "0.7",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
