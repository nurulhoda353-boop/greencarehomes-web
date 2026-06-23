import { useRouterState, useLocation } from "@tanstack/react-router";

export type Locale = "en" | "bn";

/**
 * Detect current locale from the URL path.
 * `/bn`, `/bn/anything` → "bn"
 * everything else → "en"
 */
export function useLocale(): Locale {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return pathname === "/bn" || pathname.startsWith("/bn/") ? "bn" : "en";
}

/**
 * Return the equivalent path in the target locale.
 * `/services` <-> `/bn/services`
 * `/services/residence` <-> `/bn/services/residence`
 */
export function localizedPath(pathname: string, target: Locale): string {
  // strip current /bn prefix if present
  let path = pathname;
  if (path === "/bn") path = "/";
  else if (path.startsWith("/bn/")) path = path.slice(3);

  if (target === "en") return path || "/";
  // bn target
  return path === "/" ? "/bn" : `/bn${path}`;
}

export function useLocalizedPath(target: Locale): string {
  const pathname = useLocation({ select: (s) => s.pathname });
  return localizedPath(pathname, target);
}

/** Tiny helper for picking translated strings inline. */
export function t<T>(locale: Locale, en: T, bn: T): T {
  return locale === "bn" ? bn : en;
}
