/**
 * Single source of truth for the site's public base URL.
 *
 * To switch the domain (e.g. from the preview `.life` to the final `.com`),
 * change ONLY this file — every canonical, og:url, sitemap entry, JSON-LD,
 * and robots Sitemap directive derives from `SITE_URL`.
 *
 * You can also override at build time via the `VITE_SITE_URL` environment
 * variable without editing source:
 *
 *     VITE_SITE_URL=https://greencarehomesbd.com bun run build
 *
 * NOTE: `public/robots.txt` is static and must be edited manually if you
 * change the domain — keep its `Sitemap:` line in sync with `SITE_URL`.
 */
export const SITE_URL: string =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
  "https://greencarehomesbd.com";

/** Build an absolute URL for a given path (always single-slash joined). */
export const absoluteUrl = (path: string = "/"): string =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
