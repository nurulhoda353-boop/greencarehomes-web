## লক্ষ্য

বর্তমান English সাইটের design, layout, animation, color সব **অপরিবর্তিত** রেখে একটি সম্পূর্ণ professional Bangla version যোগ করব `/bn` route-এ।

## আর্কিটেকচার

### 1. i18n কাঠামো (`src/i18n/`)
- `types.ts` — Locale type (`"en" | "bn"`), TranslationDict shape
- `en.ts` — সব English string একটি structured object-এ (nav, hero, services, about, contact, faq, footer, forms, toasts ইত্যাদি)
- `bn.ts` — সম্পূর্ণ native, polished Bangla translation (machine translation নয়)
- `services.ts` — 6টি service-এর bilingual content (title, description, features, FAQ)
- `useLocale.ts` hook — current route থেকে locale detect করবে, `t()` translator function এবং `localizedPath()` helper দিবে
- `LocaleContext.tsx` — locale + translations provider

### 2. Routing (`/bn/*`)
TanStack Start file-based routing দিয়ে parallel route tree:
```
src/routes/
  index.tsx                          (existing - EN)
  about.tsx, services.tsx, contact.tsx, blog-and-events.tsx, book-appointment.tsx
  services_.$slug.tsx
  bn/
    index.tsx
    about.tsx
    services.tsx
    contact.tsx
    blog-and-events.tsx
    book-appointment.tsx
    services_.$slug.tsx
```
প্রতিটি BN route file খুব thin wrapper হবে — শুধু `<LocaleProvider locale="bn">` দিয়ে existing page component render করবে। Page component-গুলো locale-aware হয়ে `t()` দিয়ে content টানবে।

### 3. Locale-aware Components
সব hardcoded English text replace হবে `t("hero.title")` style call দিয়ে। প্রধান component যেগুলো update হবে:
- `Header.tsx` — nav labels, mobile menu, **Language Switcher** (EN | বাংলা)
- `Footer.tsx`
- `FloatingActions.tsx`
- `Hero`, `Services`, `About`, `FAQ`, `Testimonials`, `TrustBadges`, `StatsSection`, `Contact form`, `Appointment form`
- `SectionHeading` ব্যবহারকারী সব section
- `NotFound`, toast/validation messages

### 4. Language Switcher
- Header desktop: pill-style `EN | বাংলা`, active highlighted, smooth hover
- Mobile menu: same স্টাইল drawer-এ
- `localizedPath(currentPath, targetLocale)` — `/services` ↔ `/bn/services` সঠিকভাবে map করবে (dynamic slug সহ)
- `<Link>` ব্যবহার করে SPA navigation, scroll preserve

### 5. Bangla Typography
- `__root.tsx`-এ Google Fonts থেকে **Hind Siliguri** (400/500/600/700) preload
- `styles.css`-এ:
  ```css
  html[lang="bn"] body {
    font-family: "Hind Siliguri", "Noto Sans Bengali", "Inter", system-ui, sans-serif;
    line-height: 1.7;
  }
  html[lang="bn"] h1, h2, h3 { line-height: 1.35; }
  ```
- BN page-গুলো `<html lang="bn">` set করবে (root shell-এ locale-aware)
- BN-specific spacing tweaks: button padding, card min-height, hero text wrapping

### 6. SEO
প্রতিটি route-এর `head()`-এ:
- Locale-specific `title`, `description`, `og:title`, `og:description`
- Canonical: leaf-এ only (`/bn/services` → canonical `https://greencarehomesbd.life/bn/services`)
- **hreflang** alternates:
  ```
  <link rel="alternate" hreflang="en" href="https://greencarehomesbd.life/services" />
  <link rel="alternate" hreflang="bn-BD" href="https://greencarehomesbd.life/bn/services" />
  <link rel="alternate" hreflang="x-default" href="https://greencarehomesbd.life/services" />
  ```
- `og:locale`: `en_BD` / `bn_BD`
- `sitemap.xml`-এ সব BN URL যোগ
- JSON-LD Organization root-এ অপরিবর্তিত

### 7. Bangla Content Quality
Native, premium tone — উদাহরণ:
- Hero: "আপনার প্রিয়জনের বিশ্বস্ত যত্ন এখান থেকেই শুরু"
- Tagline: "পরিবারের মতো আপন যত্ন"
- Service tagline: "মর্যাদা বজায় রেখে ব্যক্তিকেন্দ্রিক যত্ন"
- CTAs: "অ্যাপয়েন্টমেন্ট নিন", "ফ্রি অ্যাসেসমেন্ট", "যোগাযোগ করুন"
- Service names: গ্রিন লিভিং রেসিডেন্স, জেন্টল নার্সিং কেয়ার, কেয়ারগিভার হোম সার্ভিস, বাসায় ফিজিওথেরাপি, প্রবীণ ও শিশুদের ডে কেয়ার, রেসপাইট ও কম্প্যানিয়ন কেয়ার
- সব hero subtitle, about story, mission/vision, why-choose-us, FAQ, testimonials, form labels, footer — পেশাদার, আবেগময়, brand-aligned Bangla

## যা পরিবর্তন হবে **না**
- Design tokens, colors, gradients, hero image, rounded shapes
- Animation, scroll behavior, cursor, page loader
- Form submission logic (server functions অপরিবর্তিত)
- English version-এর কোনো content/visual

## ফলাফল
- `/` সম্পূর্ণ আগের মতো English
- `/bn` সব page-এ polished native Bangla
- Header-এ EN | বাংলা switcher যা equivalent page-এ নিয়ে যায়
- Bangla typography পরিষ্কার, premium, responsive
- SEO ও hreflang properly configured
- Build clean, no breakage