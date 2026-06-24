import { Link } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Heart,
  Clock,
  ChevronRight,
  Leaf,
  PhoneCall,
  Home as HomeIcon,
  ShieldCheck,
} from "lucide-react";

const SocialIcons = {
  Facebook: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.24-1.46 1.49-1.46H16.5V4.45c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.81 1.38-3.81 3.91V10.5H8v3h2.41V21h3.09z" />
    </svg>
  ),
  Instagram: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Youtube: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3-5.2 3z" />
    </svg>
  ),
  Linkedin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H4V20h2.94V8.5zM5.47 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zM20 13.6c0-3-1.6-4.4-3.74-4.4-1.72 0-2.49.95-2.92 1.62V9.5H10.4c.04.83 0 10.5 0 10.5h2.94v-5.86c0-.26.02-.53.1-.72.21-.53.7-1.08 1.51-1.08 1.07 0 1.5.81 1.5 2v5.66H20v-6.4z" />
    </svg>
  ),
};

import logo from "@/assets/greencare-footer-logo.png";
import { useLocale } from "@/i18n/locale";

const exploreLinksData = [
  { key: "about", en: { to: "/about", label: "About Us" }, bn: { to: "/bn/about", label: "আমাদের সম্পর্কে" } },
  { key: "services", en: { to: "/services", label: "Our Services" }, bn: { to: "/bn/services", label: "আমাদের সেবা" } },
  { key: "blog", en: { to: "/blog-and-events", label: "Blog & Events" }, bn: { to: "/bn/blog-and-events", label: "ব্লগ ও ইভেন্ট" } },
  { key: "contact", en: { to: "/contact", label: "Contact" }, bn: { to: "/bn/contact", label: "যোগাযোগ" } },
] as const;

const socials = [
  { href: "https://facebook.com", label: "Facebook", Icon: SocialIcons.Facebook },
  { href: "https://instagram.com", label: "Instagram", Icon: SocialIcons.Instagram },
  { href: "https://youtube.com", label: "YouTube", Icon: SocialIcons.Youtube },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: SocialIcons.Linkedin },
];

/* ─────────────────────────────────────────────────────────────
   Premium glassy card used across the mobile footer.
   Green hairline border + soft inner gradient + outer glow.
   ───────────────────────────────────────────────────────────── */
function GlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[26px] border border-leaf/15 bg-gradient-to-br from-white/[0.04] via-white/[0.015] to-transparent shadow-[0_22px_50px_-30px_rgba(76,175,47,0.45),inset_0_1px_0_rgba(255,255,255,0.04)] ${className}`}
    >
      {/* top edge glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-leaf/70 to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-y-6 -left-10 h-[200%] w-12 rotate-12 bg-leaf/[0.04] blur-2xl"
      />
      {children}
    </div>
  );
}

export function Footer() {
  const locale = useLocale();
  const exploreLinks = exploreLinksData.map((l) => (locale === "bn" ? l.bn : l.en));
  const tx = {
    description: locale === "bn"
      ? "বাংলাদেশ জুড়ে প্রবীণ, রোগী ও পরিবারের জন্য নিবেদিত হোম হেলথকেয়ার ও অ্যাসিস্টেড লিভিং — মর্যাদা ও যত্নের সঙ্গে জীবনযাত্রার মান উন্নয়ন।"
      : "Dedicated home healthcare and assisted living services, improving quality of life for seniors and families across Bangladesh with dignity and respect.",
    available: locale === "bn" ? "২৪/৭, ৩৬৫ দিন সহজলভ্য" : "Available 24/7, 365 days",
    explore: locale === "bn" ? "এক্সপ্লোর" : "Explore",
    getInTouch: locale === "bn" ? "যোগাযোগ করুন" : "Get in touch",
    phone: locale === "bn" ? "ফোন" : "Phone",
    email: locale === "bn" ? "ইমেইল" : "Email",
    address: locale === "bn" ? "ঠিকানা" : "Address",
    addressValue: locale === "bn" ? "হাউস-৭, ঢাকা উদ্যান মেইন রোড, মোহাম্মদপুর, ঢাকা" : "House-7, Dhaka Uddan Main Road, Mohammadpur, Dhaka",
    rights: locale === "bn" ? `© ${new Date().getFullYear()} Greencare Homes. সর্বস্বত্ব সংরক্ষিত।` : `© ${new Date().getFullYear()} Greencare Homes. All rights reserved.`,
    madeIn: locale === "bn" ? "ভালোবাসা দিয়ে তৈরি — ঢাকা, বাংলাদেশ" : "Made with love in Dhaka, Bangladesh",
    privacy: locale === "bn" ? "গোপনীয়তা নীতি" : "Privacy Policy",
    terms: locale === "bn" ? "শর্তাবলি" : "Terms & Conditions",
  };
  return (
    <footer className="relative isolate overflow-hidden bg-[oklch(0.14_0.012_160)] pb-24 text-cream sm:pb-0">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand/15 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-32 h-[24rem] w-[24rem] rounded-full bg-leaf/10 blur-[110px]" />

      {/* Top divider line */}
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-leaf/30 to-transparent" />

      {/* ═══════════════════════════════════════════════════════════
          MOBILE LAYOUT (premium card stack) — visible < lg
          ═══════════════════════════════════════════════════════════ */}
      <div className="relative mx-auto max-w-md px-5 py-10 lg:hidden">
        {/* Logo card */}
        <GlowCard className="neon-border px-4 py-5">
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="Greencare Homes — Compassionate Care, Safe Environment"
              loading="lazy"
              decoding="async"
              className="h-12 max-w-full object-contain"
            />
          </div>
        </GlowCard>

        {/* Description */}
        <p className="mt-6 text-center text-[15px] leading-relaxed text-cream/70">
          {tx.description}
        </p>

        {/* 24/7 pill */}
        <div className="mt-7 flex justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-leaf/25 bg-leaf/[0.06] px-4 py-2.5 text-[13px] text-cream/85 shadow-[0_0_24px_-8px_rgba(76,175,47,0.5)] backdrop-blur-sm">
            <Clock className="h-4 w-4 text-leaf" strokeWidth={2} />
            <span>{tx.available}</span>
          </div>
        </div>

        {/* Socials — circles with green underglow */}
        <div className="mt-7 flex items-center justify-center gap-4">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative grid h-12 w-12 place-items-center rounded-full border border-cream/12 bg-white/[0.03] text-cream/85 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-leaf/50 hover:text-leaf"
            >
              {/* under glow */}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-2 left-1/2 h-2 w-8 -translate-x-1/2 rounded-full bg-leaf/40 blur-md transition group-hover:bg-leaf/80"
              />
              <Icon className="relative h-[18px] w-[18px]" />
            </a>
          ))}
        </div>

        {/* Stacked cards: Explore on top, full-width Get in touch below */}
        <div className="mt-8 space-y-4">
          {/* EXPLORE card */}
          <GlowCard className="p-5">
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-leaf" strokeWidth={2} />
              <h4 className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-cream">{tx.explore}</h4>
            </div>
            <ul className="mt-5 divide-y divide-cream/[0.06]">
              {exploreLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group flex items-center justify-between py-3 text-[13px] text-cream/80 transition hover:text-leaf"
                  >
                    <span>{l.label}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-leaf/70 transition group-hover:translate-x-0.5 group-hover:text-leaf" />
                  </Link>
                </li>
              ))}
            </ul>
            {/* decorative leaves bottom-left */}
            <svg
              aria-hidden
              viewBox="0 0 80 80"
              className="pointer-events-none absolute -bottom-2 -left-2 h-20 w-20 text-leaf/30"
              fill="none"
            >
              <defs>
                <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              <path
                d="M10 70 C 15 45, 30 35, 45 30 C 38 45, 28 60, 18 72 Z"
                fill="url(#leafGrad)"
              />
              <path
                d="M22 72 C 28 55, 40 48, 55 46 C 48 60, 38 70, 28 76 Z"
                fill="url(#leafGrad)"
                opacity="0.7"
              />
              <path d="M14 72 Q 20 55 30 48" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
            </svg>
          </GlowCard>

          {/* GET IN TOUCH card */}
          <GlowCard className="p-5">
            <div className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-leaf" strokeWidth={2} />
              <h4 className="font-display text-[13px] font-bold uppercase tracking-[0.18em] text-cream">{tx.getInTouch}</h4>
            </div>
            <ul className="mt-5 space-y-3">
              {/* Phone */}
              <li>
                <a
                  href="tel:+8801992869025"
                  className="group flex items-start gap-3 rounded-2xl border border-leaf/15 bg-white/[0.025] p-3 transition hover:border-leaf/40 hover:bg-leaf/[0.05]"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-leaf/25 bg-leaf/10 text-leaf">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-leaf">{tx.phone}</p>
                    <p className="mt-0.5 break-words text-[12.5px] leading-tight text-cream/90">
                      +880 1992-869025
                    </p>
                  </div>
                </a>
              </li>
              {/* Email */}
              <li>
                <a
                  href="mailto:info@greencarehomesbd.com"
                  className="group flex items-start gap-3 rounded-2xl border border-leaf/15 bg-white/[0.025] p-3 transition hover:border-leaf/40 hover:bg-leaf/[0.05]"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-leaf/25 bg-leaf/10 text-leaf">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-leaf">{tx.email}</p>
                    <p className="mt-0.5 break-all text-[12px] leading-tight text-cream/90">
                      info@greencarehomesbd.com
                    </p>
                  </div>
                </a>
              </li>
              {/* Address */}
              <li>
                <div className="flex items-start gap-3 rounded-2xl border border-leaf/15 bg-white/[0.025] p-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-leaf/25 bg-leaf/10 text-leaf">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-leaf">{tx.address}</p>
                    <p className="mt-0.5 text-[12px] leading-snug text-cream/90">
                      {tx.addressValue}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </GlowCard>
        </div>

        {/* Bottom bar card with centered icon badge */}
        <div className="relative mt-10">
          {/* Centered icon badge */}
          <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-leaf/30 bg-[oklch(0.14_0.012_160)] text-leaf shadow-[0_0_20px_-4px_rgba(76,175,47,0.6)]">
              <HomeIcon className="h-4 w-4" />
            </div>
          </div>
          <GlowCard className="px-5 pb-5 pt-9">
            <p className="text-center text-[12px] text-cream/65">
              {tx.rights}
            </p>
            <div className="mx-auto my-3 h-px w-2/3 bg-gradient-to-r from-transparent via-cream/15 to-transparent" />
            <div className="flex items-center justify-center gap-3 text-[11.5px] text-cream/70">
              <Link to={locale === "bn" ? "/bn/privacy-policy" : "/privacy-policy"} className="transition hover:text-leaf">{tx.privacy}</Link>
              <span className="h-3 w-px bg-cream/15" />
              <Link to={locale === "bn" ? "/bn/terms-and-conditions" : "/terms-and-conditions"} className="transition hover:text-leaf">{tx.terms}</Link>
            </div>
            <div className="mx-auto my-3 h-px w-2/3 bg-gradient-to-r from-transparent via-cream/15 to-transparent" />
            <p className="flex items-center justify-center gap-1.5 text-[12px] text-cream/70">
              <>{tx.madeIn.split(" — ")[0] || tx.madeIn} <Heart className="h-3.5 w-3.5 fill-leaf text-leaf" /></>
            </p>
          </GlowCard>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          DESKTOP LAYOUT — visible lg+
          ═══════════════════════════════════════════════════════════ */}
      <div className="relative mx-auto hidden max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid lg:grid-cols-12 lg:px-10 xl:gap-14">
        {/* Brand column */}
        <div className="lg:col-span-4">
          <GlowCard className="neon-border px-6 py-7">
            <div className="flex items-center justify-center">
              <img
                src={logo}
                alt="Greencare Homes — Compassionate Care, Safe Environment"
                loading="lazy"
                decoding="async"
                className="h-14 w-auto"
              />
            </div>
          </GlowCard>

          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-cream/65">
            {tx.description}
          </p>

          <div className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-leaf/30 bg-leaf/[0.06] px-4 py-2.5 text-[13px] text-cream/85 shadow-[0_0_24px_-8px_rgba(76,175,47,0.5)] backdrop-blur-sm">
            <Clock className="h-4 w-4 text-leaf" strokeWidth={2} />
            <span>{tx.available}</span>
          </div>

          <div className="mt-7 flex items-center gap-3.5">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative grid h-11 w-11 place-items-center rounded-full border border-cream/12 bg-white/[0.03] text-cream/85 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-leaf/50 hover:text-leaf"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-2 left-1/2 h-2 w-7 -translate-x-1/2 rounded-full bg-leaf/40 blur-md transition group-hover:bg-leaf/80"
                />
                <Icon className="relative h-[17px] w-[17px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div className="lg:col-span-3">
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-cream">{tx.explore}</h4>
          <span className="mt-3 block h-[3px] w-10 rounded-full bg-leaf" />
          <ul className="mt-6 space-y-1">
            {exploreLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="group flex items-center gap-3 border-b border-cream/[0.06] py-3 text-[14px] text-cream/80 transition hover:text-leaf"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                  <span>{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in touch */}
        <div className="lg:col-span-5">
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-cream">{tx.getInTouch}</h4>
          <span className="mt-3 block h-[3px] w-10 rounded-full bg-leaf" />
          <ul className="mt-6 space-y-1">
            <li>
              <a
                href="tel:+8801992869025"
                className="group flex items-start gap-4 border-b border-cream/[0.06] py-3.5 transition"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-leaf/25 bg-leaf/10 text-leaf transition group-hover:border-leaf/50 group-hover:bg-leaf/15">
                  <Phone className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-leaf">{tx.phone}</p>
                  <p className="mt-1 text-[14px] leading-tight text-cream/90 transition group-hover:text-leaf">
                    +880 1992-869025
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="mailto:info@greencarehomesbd.com"
                className="group flex items-start gap-4 border-b border-cream/[0.06] py-3.5 transition"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-leaf/25 bg-leaf/10 text-leaf transition group-hover:border-leaf/50 group-hover:bg-leaf/15">
                  <Mail className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-leaf">{tx.email}</p>
                  <p className="mt-1 break-all text-[14px] leading-tight text-cream/90 transition group-hover:text-leaf">
                    info@greencarehomesbd.com
                  </p>
                </div>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-4 border-b border-cream/[0.06] py-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-leaf/25 bg-leaf/10 text-leaf">
                  <MapPin className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-leaf">{tx.address}</p>
                  <p className="mt-1 text-[14px] leading-snug text-cream/90">
                    {tx.addressValue}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop bottom bar */}
      <div className="relative hidden lg:block">
        <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-leaf/25 to-transparent" />
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-7 text-[13px] text-cream/65 sm:flex-row sm:px-8 lg:px-10">
          <div className="flex items-center gap-4">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-leaf/30 bg-leaf/10 text-leaf">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <p>{tx.rights}</p>
            <span className="hidden h-3 w-px bg-cream/15 sm:block" />
            <Link to={locale === "bn" ? "/bn/privacy-policy" : "/privacy-policy"} className="hidden transition hover:text-leaf sm:inline">{tx.privacy}</Link>
            <span className="hidden h-3 w-px bg-cream/15 sm:block" />
            <Link to={locale === "bn" ? "/bn/terms-and-conditions" : "/terms-and-conditions"} className="hidden transition hover:text-leaf sm:inline">{tx.terms}</Link>
          </div>
          <p className="flex items-center gap-1.5">
            <>{tx.madeIn.split(" — ")[0] || tx.madeIn} <Heart className="h-3.5 w-3.5 fill-leaf text-leaf" /></>
          </p>
        </div>
      </div>
    </footer>
  );
}
