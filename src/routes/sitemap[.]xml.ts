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
  /** Matching path in the alternate language version */
  alternatePath?: string;
  /** Language code */
  lang?: "en" | "bn";
}

const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        // English pages
        const enPages: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", alternatePath: "/bn", lang: "en" },
          { path: "/about", changefreq: "monthly", priority: "0.8", alternatePath: "/bn/about", lang: "en" },
          { path: "/services", changefreq: "monthly", priority: "0.9", alternatePath: "/bn/services", lang: "en" },
          { path: "/blog-and-events", changefreq: "weekly", priority: "0.7", alternatePath: "/bn/blog-and-events", lang: "en" },
          { path: "/book-appointment", changefreq: "monthly", priority: "0.9", alternatePath: "/bn/book-appointment", lang: "en" },
          { path: "/contact", changefreq: "monthly", priority: "0.7", alternatePath: "/bn/contact", lang: "en" },
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.3", alternatePath: "/bn/privacy-policy", lang: "en" },
          { path: "/terms-and-conditions", changefreq: "yearly", priority: "0.3", alternatePath: "/bn/terms-and-conditions", lang: "en" },
          ...SERVICE_SLUGS.map<SitemapEntry>((slug) => ({
            path: `/services/${slug}`,
            changefreq: "monthly",
            priority: "0.8",
            alternatePath: `/bn/services/${slug}`,
            lang: "en" as const,
          })),
        ];

        // Bengali pages
        const bnPages: SitemapEntry[] = [
          { path: "/bn", changefreq: "weekly", priority: "0.9", alternatePath: "/", lang: "bn" },
          { path: "/bn/about", changefreq: "monthly", priority: "0.7", alternatePath: "/about", lang: "bn" },
          { path: "/bn/services", changefreq: "monthly", priority: "0.8", alternatePath: "/services", lang: "bn" },
          { path: "/bn/blog-and-events", changefreq: "weekly", priority: "0.6", alternatePath: "/blog-and-events", lang: "bn" },
          { path: "/bn/book-appointment", changefreq: "monthly", priority: "0.8", alternatePath: "/book-appointment", lang: "bn" },
          { path: "/bn/contact", changefreq: "monthly", priority: "0.6", alternatePath: "/contact", lang: "bn" },
          { path: "/bn/privacy-policy", changefreq: "yearly", priority: "0.3", alternatePath: "/privacy-policy", lang: "bn" },
          { path: "/bn/terms-and-conditions", changefreq: "yearly", priority: "0.3", alternatePath: "/terms-and-conditions", lang: "bn" },
          ...SERVICE_SLUGS.map<SitemapEntry>((slug) => ({
            path: `/bn/services/${slug}`,
            changefreq: "monthly",
            priority: "0.7",
            alternatePath: `/services/${slug}`,
            lang: "bn" as const,
          })),
        ];

        const entries = [...enPages, ...bnPages];

        const urls = entries.map((e) => {
          const lines = [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            `    <lastmod>${today}</lastmod>`,
          ];
          if (e.changefreq) lines.push(`    <changefreq>${e.changefreq}</changefreq>`);
          if (e.priority) lines.push(`    <priority>${e.priority}</priority>`);
          // hreflang alternate links
          if (e.lang && e.alternatePath) {
            const altLang = e.lang === "en" ? "bn" : "en";
            lines.push(`    <xhtml:link rel="alternate" hreflang="${e.lang}" href="${BASE_URL}${e.path}" />`);
            lines.push(`    <xhtml:link rel="alternate" hreflang="${altLang}" href="${BASE_URL}${e.alternatePath}" />`);
            lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${e.lang === "en" ? e.path : e.alternatePath}" />`);
          }
          lines.push(`  </url>`);
          return lines.join("\n");
        });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`,
          `        xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
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
