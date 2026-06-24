import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { CustomCursor } from "@/components/site/CustomCursor";
import { PageLoader } from "@/components/site/PageLoader";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { NoiseOverlay } from "@/components/site/NoiseOverlay";
import { OrganizationJsonLd } from "@/components/site/JsonLd";
import { NotFound } from "@/components/site/NotFound";
import { Toaster } from "@/components/ui/sonner";
import { useLocale } from "@/i18n/locale";
import { useEffect } from "react";
import { SITE_URL } from "@/config/site";


function NotFoundComponent() {
  return <NotFound />;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1f5d2f" },
      { name: "description", content: "Compassionate home healthcare & assisted living for seniors and families across Bangladesh. 24/7 nursing, caregiver, physiotherapy & residential care — Greencare Homes." },
      // Open Graph
      { property: "og:site_name", content: "Greencare Homes" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_BD" },
      { property: "og:locale:alternate", content: "bn_BD" },
      { property: "og:image", content: `${SITE_URL}/og-cover.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/og-cover.jpg` },
      // Page title
      { title: "Greencare Homes — Compassionate Home Healthcare in Bangladesh" },
      { property: "og:title", content: "Greencare Homes — Compassionate Home Healthcare in Bangladesh" },
      { name: "twitter:title", content: "Greencare Homes — Compassionate Home Healthcare in Bangladesh" },
      { property: "og:description", content: "Compassionate home healthcare & assisted living for seniors and families across Bangladesh." },
      { name: "twitter:description", content: "Compassionate home healthcare & assisted living for seniors and families across Bangladesh." },
      // Geo SEO — Bangladesh targeting
      { name: "geo.region", content: "BD-C" },
      { name: "geo.placename", content: "Dhaka, Bangladesh" },
      { name: "geo.position", content: "23.7537;90.3629" },
      { name: "ICBM", content: "23.7537, 90.3629" },
      // Robots
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      // Language / content
      { httpEquiv: "content-language", content: "en, bn" },
      // Author
      { name: "author", content: "Greencare Homes" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/icon-192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/icon-512.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Hind+Siliguri:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <OrganizationJsonLd />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var p=location.pathname;var bn=p==='/bn'||p.indexOf('/bn/')===0;document.documentElement.lang=bn?'bn':'en';}catch(e){}})();",
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative flex min-h-screen flex-col">
        <NoiseOverlay />
        <ScrollProgress />
        <Header />
        <main className="relative z-[2] flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingActions />
        <CustomCursor />
        <PageLoader />
        <Toaster position="top-center" richColors closeButton />
      </div>
    </QueryClientProvider>
  );
}
