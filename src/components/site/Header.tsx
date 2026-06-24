import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Home, Stethoscope, HeartPulse, Activity, Baby, Users, Search } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/greencare-logo-full.png";
import svcResidence from "@/assets/svc-residence.jpg";
import svcNursing from "@/assets/svc-nursing.jpg";
import svcCaregiver from "@/assets/svc-caregiver.jpg";
import svcPhysio from "@/assets/svc-physio.jpg";
import { useLocale, localizedPath, type Locale } from "@/i18n/locale";

const featuredServiceImages: Record<string, string> = {
  residence: svcResidence,
  nursing: svcNursing,
  caregiver: svcCaregiver,
  physiotherapy: svcPhysio,
};

type NavKey = "home" | "about" | "services" | "blog" | "contact";
type NavItem = { key: NavKey; en: { to: string; label: string }; bn: { to: string; label: string }; hasDropdown?: boolean };

const navItems: NavItem[] = [
  { key: "home", en: { to: "/", label: "Home" }, bn: { to: "/bn", label: "হোম" } },
  { key: "about", en: { to: "/about", label: "About" }, bn: { to: "/bn/about", label: "আমাদের সম্পর্কে" } },
  { key: "services", en: { to: "/services", label: "Services" }, bn: { to: "/bn/services", label: "সেবাসমূহ" }, hasDropdown: true },
  { key: "blog", en: { to: "/blog-and-events", label: "Blog & Events" }, bn: { to: "/bn/blog-and-events", label: "ব্লগ ও ইভেন্ট" } },
  { key: "contact", en: { to: "/contact", label: "Contact" }, bn: { to: "/bn/contact", label: "যোগাযোগ" } },
];

const serviceLinksData = [
  { slug: "residence", en: { label: "Green Living Residence", desc: "Residential assisted living" }, bn: { label: "গ্রিন লিভিং রেসিডেন্স", desc: "আবাসিক অ্যাসিস্টেড লিভিং" }, icon: Home },
  { slug: "nursing", en: { label: "Gentle Nursing Care", desc: "Home & clinical nursing" }, bn: { label: "জেন্টল নার্সিং কেয়ার", desc: "বাসায় ও ক্লিনিক্যাল নার্সিং" }, icon: Stethoscope },
  { slug: "caregiver", en: { label: "Caregiver Support", desc: "Trained personal caregivers" }, bn: { label: "কেয়ারগিভার হোম সার্ভিস", desc: "প্রশিক্ষিত পারসোনাল কেয়ারগিভার" }, icon: HeartPulse },
  { slug: "physiotherapy", en: { label: "Physiotherapy", desc: "Mobility & rehab therapy" }, bn: { label: "বাসায় ফিজিওথেরাপি", desc: "মুভমেন্ট ও রিহ্যাব থেরাপি" }, icon: Activity },
  { slug: "daycare", en: { label: "Senior Daycare", desc: "Daytime engagement & care" }, bn: { label: "প্রবীণ ও শিশুদের ডে কেয়ার", desc: "দিনের বেলায় যত্ন ও সঙ্গ" }, icon: Baby },
  { slug: "respite", en: { label: "Respite Care", desc: "Short-term family relief" }, bn: { label: "রেসপাইট ও কম্প্যানিয়ন কেয়ার", desc: "স্বল্পমেয়াদি পারিবারিক সহায়তা" }, icon: Users },
] as const;

function servicePath(locale: Locale, slug: string) {
  return locale === "bn" ? `/bn/services/${slug}` : `/services/${slug}`;
}

function LanguageSwitcher({ locale, className = "" }: { locale: Locale; className?: string }) {
  const pathname = useLocation({ select: (s) => s.pathname });
  const enHref = localizedPath(pathname, "en");
  const bnHref = localizedPath(pathname, "bn");
  return (
    <div className={`inline-flex items-center rounded-full border border-charcoal/10 bg-white/60 p-[3px] text-[11px] font-semibold tracking-[0.08em] backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)] ${className}`}>
      <Link
        to={enHref}
        className={`rounded-full px-3 py-1 transition-all duration-300 ${locale === "en" ? "bg-gradient-to-b from-brand to-brand-deep text-white shadow-[0_2px_8px_-2px_rgba(76,175,47,0.55)]" : "text-charcoal/55 hover:text-brand-deep"}`}
      >
        EN
      </Link>
      <Link
        to={bnHref}
        className={`rounded-full px-3 py-1 transition-all duration-300 ${locale === "bn" ? "bg-gradient-to-b from-brand to-brand-deep text-white shadow-[0_2px_8px_-2px_rgba(76,175,47,0.55)]" : "text-charcoal/55 hover:text-brand-deep"}`}
      >
        বাংলা
      </Link>
    </div>
  );
}

export function Header() {
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const homeHref = locale === "bn" ? "/bn" : "/";
  const ctaLabel = locale === "bn" ? "অ্যাপয়েন্টমেন্ট নিন" : "Make Appointment";
  const featuredLabel = locale === "bn" ? "নির্বাচিত সেবা" : "Featured Services";
  const ourServicesLabel = locale === "bn" ? "আমাদের কেয়ার সেবাসমূহ" : "Our Care Services";
  const searchPlaceholder = locale === "bn" ? "খুঁজুন..." : "Search...";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 pt-2 sm:pt-4">
      <div className="pointer-events-auto mx-auto flex h-16 w-[min(1320px,94%)] items-center justify-between gap-4 rounded-xl border border-white/70 bg-white/95 px-3 shadow-pill backdrop-blur-xl sm:h-[76px] sm:w-[min(1320px,92%)] sm:rounded-full sm:px-6">
        <Link to={homeHref} className="flex items-center gap-2">
          <img src={logo} alt="Greencare Homes" loading="eager" fetchPriority="high" decoding="async" className="h-12 w-auto md:h-12" />
        </Link>

        <nav className="hidden items-center lg:flex">
          {navItems.map((item, i) => {
            const cfg = locale === "bn" ? item.bn : item.en;
            return (
              <div key={item.key} className="flex items-center">
                {i > 0 && <span className="mx-4 h-3.5 w-px bg-charcoal/10" />}
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to={cfg.to}
                      className={`flex items-center gap-1 ${locale === "bn" ? "text-[13.5px] font-bold tracking-normal" : "text-[13px] font-black uppercase tracking-[0.04em]"} text-charcoal/85 transition hover:text-brand-deep [&.active]:text-brand-deep`}
                      activeProps={{ className: "active" }}
                    >
                      {cfg.label}
                      <ChevronDown className={`h-3.5 w-3.5 transition ${servicesOpen ? "rotate-180" : ""}`} />
                    </Link>

                    {servicesOpen && (
                      <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4">
                        <div className="w-[560px] overflow-hidden rounded-3xl border border-brand/15 bg-white p-3 shadow-[0_40px_80px_-30px_rgba(20,60,30,0.45)] ring-1 ring-black/5">
                          <div className="mb-1 flex items-center gap-3 px-3 pt-2 pb-2">
                            <span className={`${locale === "bn" ? "text-[12px] font-bold tracking-normal" : "text-[10px] font-black uppercase tracking-[0.2em]"} text-brand-deep`}>{ourServicesLabel}</span>
                            <span className="h-px flex-1 bg-gradient-to-r from-brand/40 to-transparent" />
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            {serviceLinksData.map((s) => {
                              const sCfg = locale === "bn" ? s.bn : s.en;
                              return (
                                <Link
                                  key={s.slug}
                                  to={servicePath(locale, s.slug)}
                                  className="group flex items-start gap-3 rounded-2xl p-3 transition hover:bg-gradient-to-br hover:from-brand/8 hover:to-transparent"
                                >
                                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand/15 to-brand/5 text-brand-deep ring-1 ring-brand/10 transition group-hover:from-brand group-hover:to-brand-deep group-hover:text-white group-hover:ring-brand-deep">
                                    <s.icon className="h-5 w-5" />
                                  </span>
                                  <span className="flex flex-col pt-0.5">
                                    <span className="text-[13px] font-bold text-charcoal transition group-hover:text-brand-deep">{sCfg.label}</span>
                                    <span className="text-[11px] leading-relaxed text-charcoal/55">{sCfg.desc}</span>
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={cfg.to}
                    activeOptions={{ exact: cfg.to === "/" || cfg.to === "/bn" }}
                    className={`${locale === "bn" ? "text-[13.5px] font-bold tracking-normal" : "text-[13px] font-black uppercase tracking-[0.04em]"} text-charcoal/85 transition hover:text-brand-deep [&.active]:text-brand-deep`}
                    activeProps={{ className: "active" }}
                  >
                    {cfg.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} />
          <Link
            to={locale === "bn" ? "/bn/book-appointment" : "/book-appointment"}
            className={`inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 ${locale === "bn" ? "text-[13.5px] font-bold tracking-normal" : "text-[13px] font-black uppercase tracking-wide"} text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] transition hover:bg-brand-deep hover:-translate-y-0.5`}
          >
            {ctaLabel}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher locale={locale} />
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl bg-charcoal text-white sm:h-12 sm:w-12 sm:rounded-full"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile off-canvas drawer */}
      <div
        className={`pointer-events-auto fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-charcoal/50 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute left-0 top-0 h-1 w-[55%] bg-brand transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
        />
        <aside
          className={`absolute left-0 top-0 flex h-full w-[86%] max-w-[380px] flex-col overflow-hidden bg-white shadow-[0_40px_120px_-30px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-5 pt-5 pb-4">
            <Link to={homeHref} onClick={() => setOpen(false)} className="flex items-center">
              <img src={logo} alt="Greencare Homes" loading="eager" decoding="async" className="h-11 w-auto" />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-full border-2 border-brand text-charcoal transition hover:bg-brand hover:text-white"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mx-5 mt-1 flex items-center justify-between gap-3">
            <LanguageSwitcher locale={locale} />
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative mx-5 mt-4 flex items-center overflow-hidden rounded-full border border-border bg-white"
          >
            <input
              type="search"
              placeholder={searchPlaceholder}
              className="flex-1 bg-transparent px-5 py-3 text-[14px] text-charcoal placeholder:text-charcoal/40 focus:outline-none"
            />
            <button
              type="submit"
              className="grid h-12 w-14 place-items-center rounded-full bg-charcoal text-white"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>

          <div className="flex-1 overflow-y-auto px-5 py-5">
            <ul className="flex flex-col">
              {navItems.map((item) => {
                const cfg = locale === "bn" ? item.bn : item.en;
                return (
                  <li key={item.key} className="border-b border-border/60 last:border-b-0">
                    {item.hasDropdown ? (
                      <>
                        <div className="flex items-center justify-between py-4">
                          <Link
                            to={cfg.to}
                            onClick={() => setOpen(false)}
                            className="flex-1 text-[20px] font-semibold tracking-tight text-charcoal hover:text-brand-deep [&.active]:text-brand-deep"
                            activeProps={{ className: "active" }}
                          >
                            {cfg.label}
                          </Link>
                          <button
                            onClick={() => setMobileServicesOpen((v) => !v)}
                            className={`grid h-8 w-8 place-items-center rounded-full border border-border text-charcoal/70 transition ${mobileServicesOpen ? "rotate-180 bg-brand text-white border-brand" : "hover:border-brand hover:text-brand-deep"}`}
                            aria-label="Toggle services"
                          >
                            <ChevronDown className="h-4 w-4" />
                          </button>
                        </div>
                        <div className={`grid transition-all duration-300 ease-out ${mobileServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                          <div className="overflow-hidden">
                            <ul className="mb-3 flex flex-col gap-0.5 border-l border-brand/20 pl-3">
                              {serviceLinksData.map((s) => {
                                const sCfg = locale === "bn" ? s.bn : s.en;
                                return (
                                  <li key={s.slug}>
                                    <Link
                                      to={servicePath(locale, s.slug)}
                                      onClick={() => setOpen(false)}
                                      className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-[13px] font-semibold text-charcoal/75 transition hover:bg-brand/5 hover:text-brand-deep"
                                    >
                                      <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand/8 text-brand-deep ring-1 ring-brand/10">
                                        <s.icon className="h-3.5 w-3.5" />
                                      </span>
                                      {sCfg.label}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        to={cfg.to}
                        activeOptions={{ exact: cfg.to === "/" || cfg.to === "/bn" }}
                        onClick={() => setOpen(false)}
                        className="block py-4 text-[20px] font-semibold tracking-tight text-charcoal transition hover:text-brand-deep [&.active]:text-brand-deep"
                        activeProps={{ className: "active" }}
                      >
                        {cfg.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-6">
              <p className={`mb-3 text-center ${locale === "bn" ? "text-[12px] font-bold tracking-normal" : "text-[10px] font-bold uppercase tracking-[0.2em]"} text-charcoal/45`}>{featuredLabel}</p>
              <div className="grid grid-cols-2 gap-2.5">
                {serviceLinksData.slice(0, 4).map((s) => {
                  const sCfg = locale === "bn" ? s.bn : s.en;
                  return (
                    <Link
                      key={s.slug}
                      to={servicePath(locale, s.slug)}
                      onClick={() => setOpen(false)}
                      className="group flex flex-col items-center gap-2 overflow-hidden rounded-[2px] border border-border/70 bg-white/70 p-2.5 text-center transition hover:border-brand/50 hover:bg-brand/5"
                    >
                      <span className="block h-16 w-full overflow-hidden rounded-[1px]">
                        <img
                          src={featuredServiceImages[s.slug]}
                          alt={sCfg.label}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </span>
                      <span className="text-[12px] font-bold leading-tight text-charcoal">{sCfg.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-border/60 bg-gradient-to-b from-white to-brand/5 px-5 pt-4 pb-5">
            <Link
              to={locale === "bn" ? "/bn/book-appointment" : "/book-appointment"}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3.5 ${locale === "bn" ? "text-[14px] font-bold tracking-normal" : "text-[13px] font-black uppercase tracking-wide"} text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.35)] transition hover:bg-brand-deep hover:-translate-y-0.5`}
            >
              {ctaLabel}
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
