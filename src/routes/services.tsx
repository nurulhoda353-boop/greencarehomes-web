import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { StatsSection } from "@/components/site/StatsSection";
import {
  ArrowRight,
  Phone,
  Home,
  Stethoscope,
  HeartPulse,
  Activity,
  Baby,
  Users,
  Sparkles,
  Leaf,
  CheckCircle2,
  ShieldCheck,
  Clock,
  ClipboardList,
  MessageCircle,
} from "lucide-react";
import heroNurseImg from "@/assets/hero-nurse.jpg?format=webp&quality=80&w=1400";
import svcResidenceImg from "@/assets/svc-residence.jpg?format=webp&quality=80&w=1400";
import svcNursingImg from "@/assets/svc-nursing.jpg?format=webp&quality=80&w=1400";
import svcCaregiverImg from "@/assets/svc-caregiver.jpg?format=webp&quality=80&w=1400";
import svcPhysioImg from "@/assets/svc-physio.jpg?format=webp&quality=80&w=1400";
import svcDaycareImg from "@/assets/svc-daycare.jpg?format=webp&quality=80&w=1400";
import svcRespiteImg from "@/assets/svc-respite.jpg?format=webp&quality=80&w=1400";
import faqCareImg from "@/assets/faq-care.jpg?format=webp&quality=80&w=1400";
import { FaqSection } from "@/components/site/FaqSection";
import { SITE_URL } from "@/config/site";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const stagger = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-60px" },
  transition: { staggerChildren: 0.08 },
};

const childFadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const services = [
  {
    slug: "residence",
    icon: Home,
    image: svcResidenceImg,
    title: "Green Living Residence",
    tagline: "Residential Assisted Living",
    desc: "A warm, hygienic residence with 24/7 nursing, three nutritious meals, daily rounds, physiotherapy, and on-site clinical supervision.",
    features: [
      "Private or shared rooms",
      "24-hour on-site nursing",
      "Medication & vitals monitoring",
      "Recreation & companionship",
    ],
  },
  {
    slug: "nursing",
    icon: Stethoscope,
    image: svcNursingImg,
    title: "Gentle Nursing Care",
    tagline: "Home & Clinical Nursing",
    desc: "Certified nurses for medication management, wound care, post-surgical recovery, and continuous patient monitoring at home.",
    features: [
      "Post-hospital recovery support",
      "IV, injections & wound care",
      "Vitals & symptom tracking",
      "Shift or 24/7 live-in nursing",
    ],
  },
  {
    slug: "caregiver",
    icon: HeartPulse,
    image: svcCaregiverImg,
    title: "Caregiver Home Service",
    tagline: "Daily Personal Care",
    desc: "Trained caregivers for personal hygiene, mobility help, meal support, and steady companionship — delivered at your doorstep.",
    features: [
      "Bathing, dressing & grooming",
      "Mobility & transfer assistance",
      "Meal prep & feeding support",
      "Companionship & light housekeeping",
    ],
  },
  {
    slug: "physiotherapy",
    icon: Activity,
    image: svcPhysioImg,
    title: "Physiotherapy at Home",
    tagline: "Rehabilitation & Mobility",
    desc: "BPT/DPT certified physiotherapists delivering personalised rehabilitation, stroke recovery, and pain management in the comfort of home.",
    features: [
      "Post-stroke & post-op recovery",
      "Orthopaedic & joint therapy",
      "Geriatric mobility programs",
      "Customised home exercise plans",
    ],
  },
  {
    slug: "daycare",
    icon: Baby,
    image: svcDaycareImg,
    title: "Day Care for Aged & Child",
    tagline: "Supervised Daytime Care",
    desc: "Reliable daytime supervision for elderly parents and young children in a safe, nurturing, professionally staffed environment.",
    features: [
      "Structured daily activities",
      "Healthy meals & snacks",
      "Trained on-site supervisors",
      "Pickup & drop coordination",
    ],
  },
  {
    slug: "respite",
    icon: Users,
    image: svcRespiteImg,
    title: "Respite & Companion Care",
    tagline: "Short-Term Family Relief",
    desc: "Trusted short-term caregiving that gives families breathing room — for travel, recovery, or simply rest — without compromising care.",
    features: [
      "Hourly, daily & weekly slots",
      "Trained respite caregivers",
      "Continuity with same caregiver",
      "Emotional & social companionship",
    ],
  },
];

const process = [
  {
    step: "01",
    icon: Phone,
    title: "Reach Out",
    desc: "Call, message, or fill the form. A care advisor — not a salesperson — listens to your situation, anytime.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Free Assessment",
    desc: "A clinical lead visits or video-calls to understand medical needs, home setup, and family preferences.",
  },
  {
    step: "03",
    icon: Sparkles,
    title: "Custom Care Plan",
    desc: "We design a written plan with transparent pricing. You review, adjust, and approve — zero pressure.",
  },
  {
    step: "04",
    icon: HeartPulse,
    title: "Care Begins",
    desc: "A matched, trained caregiver arrives within 24 hours. Supervised, supported, and always one call away.",
  },
];

const plans = [
  {
    name: "Home Visit",
    badge: "From / visit",
    summary: "Best for short, scheduled tasks — nursing visits, physiotherapy sessions, wound dressing.",
    includes: [
      "Per-visit certified professional",
      "Vitals & care notes shared with family",
      "Backup caregiver guarantee",
      "Flexible scheduling, no contracts",
    ],
    accent: false,
  },
  {
    name: "Live-In Care",
    badge: "Most Chosen",
    summary: "Round-the-clock caregiving at home. Ideal for seniors needing constant support and companionship.",
    includes: [
      "24/7 trained caregiver at home",
      "Shift rotation & supervisor visits",
      "Medication & meal management",
      "Dedicated family point of contact",
    ],
    accent: true,
  },
  {
    name: "Residential Care",
    badge: "At Our Residence",
    summary: "Full assisted-living at Green Living Residence — for those who need a fully equipped, supervised home.",
    includes: [
      "Private or shared rooms",
      "On-site nurses & physiotherapy",
      "All meals, recreation, hygiene",
      "Family visits warmly encouraged",
    ],
    accent: false,
  },
];

const faqs = [
  {
    q: "Can I combine multiple services on one care plan?",
    a: "Yes — that is the heart of our ecosystem. A single family can have home nursing, weekly physiotherapy, and respite care under one coordinated plan, one supervisor, and one transparent invoice.",
  },
  {
    q: "How fast can a caregiver or nurse start?",
    a: "For Dhaka and nearby districts, most placements happen within 12–24 hours of the assessment. Urgent post-hospital nursing can often start the same day.",
  },
  {
    q: "What if we are not satisfied with the assigned caregiver?",
    a: "We replace, no questions asked. Every placement is backed by a supervisor and a replacement guarantee — your comfort with the caregiver matters more than anything.",
  },
  {
    q: "Are pricing and inclusions transparent?",
    a: "Always. After the free assessment we share a written care plan with itemised pricing, included services, and any optional add-ons. No hidden fees, ever.",
  },
];


export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Greencare Homes" },
      {
        name: "description",
        content:
          "Residential care, home nursing, physiotherapy, day care, and respite services — one connected ecosystem of dignified care across Bangladesh.",
      },
      { property: "og:title", content: "Our Services — Greencare Homes" },
      {
        property: "og:description",
        content:
          "A connected ecosystem of home healthcare and assisted living — designed around dignity, safety, and family.",
      },
      { property: "og:url", content: `${SITE_URL}/services` },
      { property: "og:image", content: `${SITE_URL}/og-cover.jpg` },
      { name: "twitter:image", content: `${SITE_URL}/og-cover.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services` }],
  }),
  component: ServicesPage,
});


function ServicesPage() {
  return (
    <>
      {/* ===================== HERO — COMPACT DARK ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] pt-28 pb-14 text-cream lg:pt-32 lg:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, #000 30%, transparent 80%)",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/80 backdrop-blur-sm">
              <Leaf className="h-3.5 w-3.5 text-brand" />
              Our Services
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-cream sm:text-5xl lg:text-[3.6rem]"
          >
            Premium care services,{" "}
            <span className="bg-gradient-to-r from-leaf to-cream bg-clip-text text-transparent">
              one ecosystem.
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.75] text-cream/70 sm:text-base"
          >
            Residential living, home nursing, physiotherapy, day care, and respite — coordinated under one trusted relationship.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="tel:+8801992869025"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] transition hover:-translate-y-0.5 hover:bg-brand-deep"
            >
              <Phone className="h-4 w-4" />
              Talk to a Care Advisor
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/[0.06] px-6 py-3 text-sm font-bold text-cream backdrop-blur-sm transition hover:bg-cream/[0.1]"
            >
              Free Assessment <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===================== SERVICES GRID — LIGHT 1 ===================== */}
      <section className="relative bg-gradient-to-b from-background via-background to-secondary/30 py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          {/* Intro */}
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
              — What We Offer
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.08] text-brand-deep sm:text-[2.75rem]">
              Standalone services with an ecosystem mindset.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.85] text-muted-foreground">
              We do not present care as disconnected tasks. Each service is designed to deliver on its own while fitting naturally into a broader, better-managed care journey.
            </p>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            {...stagger}
            className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                {...childFadeUp}
                className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-border/50 bg-white shadow-[0_18px_50px_-30px_rgba(17,25,23,0.35)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_30px_60px_-25px_rgba(76,175,47,0.3)]"
              >
                {/* Image hero */}
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                  />
                  {/* Dark gradient overlay */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/15"
                  />

                  {/* Top badges */}
                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-cream backdrop-blur-md">
                      <span className="text-brand">0{i + 1}</span>
                      <span className="h-1 w-1 rounded-full bg-brand" />
                      Service
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-brand ring-1 ring-white/20 backdrop-blur-md transition group-hover:bg-brand group-hover:text-cream">
                      <s.icon className="h-[18px] w-[18px]" />
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-[26px] font-extrabold leading-[1.1] text-cream drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
                      {s.title}
                    </h3>
                    <span className="mt-2 block h-[3px] w-12 rounded-full bg-brand" />
                  </div>
                </div>

                {/* Body */}
                <div className="relative flex flex-1 flex-col px-6 pt-6 pb-6">
                  <p className="text-[14.5px] leading-[1.85] text-muted-foreground">
                    {s.desc}
                  </p>

                  <div className="mt-auto pt-6 border-t border-border/50">
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="group/link inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-deep"
                    >
                      Learn More & Pricing
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-cream transition group-hover/link:translate-x-1 group-hover/link:bg-brand-deep">
                        <ArrowRight className="h-3.5 w-3.5 -rotate-45" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}

          </motion.div>

        </div>
      </section>

      {/* ===================== FEATURED — DARK SPLIT ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] py-20 text-cream lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse at center, #000 35%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, #000 35%, transparent 85%)",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 h-[460px] w-[460px] rounded-full bg-brand/20 blur-[130px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 h-[460px] w-[460px] rounded-full bg-brand-deep/40 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-brand/30 via-brand-deep/10 to-transparent blur-2xl" />
              <img
                src={heroNurseImg}
                alt="Green Living Residence — assisted living at Greencare Homes"
                loading="lazy"
                decoding="async"
                className="relative w-full rounded-[32px] object-cover shadow-[0_30px_80px_-30px_rgba(20,60,30,0.30)]"
                style={{ aspectRatio: "4/5" }}
              />
              <div className="absolute -bottom-5 -right-5 rounded-2xl border border-cream/15 bg-[oklch(0.18_0.012_165)]/95 px-5 py-3 backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.18em] text-cream/50">
                  Flagship
                </p>
                <p className="text-sm font-bold text-cream">Green Living Residence</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/80 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              Featured Service
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.08] text-cream sm:text-[2.7rem]">
              A residence that delivers clinical confidence with the warmth of home.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.75] text-cream/70">
              Green Living Residence in Mohammadpur is our flagship assisted living facility — designed for seniors who deserve continuous care without losing the warmth, dignity, and rhythm of home life.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { icon: Clock, label: "24/7 nursing on-site" },
                { icon: HeartPulse, label: "Daily clinical rounds" },
                { icon: Users, label: "Recreation & companionship" },
                { icon: ShieldCheck, label: "Hygiene & safety protocols" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="flex items-start gap-3 rounded-[22px] border border-cream/10 bg-cream/[0.05] p-4 backdrop-blur-sm transition hover:border-brand/25 hover:bg-cream/[0.07]"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand/30 to-brand/10 text-leaf ring-1 ring-leaf/20">
                    <f.icon className="h-4 w-4" />
                  </span>
                  <span className="text-[13px] font-medium text-cream/80">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] transition hover:-translate-y-0.5 hover:bg-brand-deep"
              >
                Schedule a Visit <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+8801992869025"
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/[0.06] px-6 py-3 text-sm font-bold text-cream backdrop-blur-sm transition hover:bg-cream/[0.1]"
              >
                <Phone className="h-4 w-4" />
                +880 1992-869025
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== PROCESS — LIGHT 2 (brighter) ===================== */}
      <section className="relative bg-white py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
              — How Care Begins
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.08] text-brand-deep sm:text-[2.7rem]">
              A calm, premium process from first call to first visit.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              No long forms, no pressure, no salespeople. A clear, human path from your first call to care arriving at your door.
            </p>
          </motion.div>

          <motion.div
            {...stagger}
            className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent lg:block"
            />
            {process.map((p) => (
              <motion.div
                key={p.step}
                {...childFadeUp}
                className="group relative rounded-[28px] border border-border/50 bg-gradient-to-b from-white to-secondary/30 p-7 text-center transition hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-soft"
              >
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-white ring-1 ring-border">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] text-cream shadow-[0_12px_30px_-10px_rgba(20,60,30,0.35)]">
                    <p.icon className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-5 font-display text-[12px] font-bold tracking-[0.2em] text-brand">
                  STEP {p.step}
                </p>
                <h3 className="mt-2 font-display text-[18px] font-bold text-brand-deep">
                  {p.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-muted-foreground">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== PLANS — DARK ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] py-20 text-cream lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse at center, #000 35%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, #000 35%, transparent 85%)",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-[420px] w-[420px] rounded-full bg-brand/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 h-[420px] w-[420px] rounded-full bg-brand-deep/40 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/80 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              Care Models
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-cream sm:text-[2.5rem]">
              Choose the model that fits your family
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-cream/70">
              Final pricing is shared after a free assessment so it reflects the exact care your loved one needs — never a generic package.
            </p>
          </motion.div>

          <motion.div
            {...stagger}
            className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                {...childFadeUp}
                className={`relative flex flex-col rounded-[28px] p-8 text-center backdrop-blur-sm transition ${
                  plan.accent
                    ? "border border-brand/40 bg-gradient-to-b from-brand/15 to-cream/[0.04] shadow-[0_28px_60px_-25px_rgba(76,175,47,0.45)] lg:-translate-y-3"
                    : "border border-cream/10 bg-cream/[0.05] hover:-translate-y-1.5 hover:border-brand/30 hover:bg-cream/[0.08]"
                }`}
              >
                {plan.accent && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-[0_10px_25px_rgba(76,175,47,0.4)]">
                    {plan.badge}
                  </span>
                )}
                {!plan.accent && (
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-cream/45">
                    {plan.badge}
                  </span>
                )}

                <h3
                  className={`mt-4 font-display text-2xl font-extrabold ${
                    plan.accent ? "text-cream" : "text-cream"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-cream/65">
                  {plan.summary}
                </p>

                <ul className="mx-auto mt-7 inline-flex flex-col gap-3 border-t border-cream/10 pt-6 text-left">
                  {plan.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[13.5px] text-cream/80"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${
                    plan.accent
                      ? "bg-brand text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] hover:-translate-y-0.5 hover:bg-brand-deep"
                      : "border border-cream/20 bg-cream/[0.06] text-cream hover:bg-cream/[0.12]"
                  }`}
                >
                  Get a Custom Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== FAQ — STANDARD LAYOUT ===================== */}
      <FaqSection
        eyebrow="FAQ · Services"
        title={
          <>
            Service questions answered with{" "}
            <span className="italic font-light text-brand">clarity.</span>
          </>
        }
        description="Practical answers about scheduling, replacements, combining services, and pricing — the things families actually ask."
        image={faqCareImg}
        imageAlt="Greencare Homes service team supporting a family"
        caption={"\u201COne plan, one team, one calm rhythm of care.\u201D"}
        items={faqs}
      />

      {/* ===================== FINAL CTA — DARK ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] py-20 text-cream lg:py-24">
        <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand/25 blur-[130px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-brand-deep/40 blur-[130px]" />

        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/80 backdrop-blur-sm">
              <MessageCircle className="h-3.5 w-3.5 text-brand" />
              Begin the Conversation
            </span>
          </motion.div>
          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-5 font-display text-3xl font-extrabold leading-[1.06] text-cream sm:text-[2.8rem]"
          >
            Bring premium, coordinated care into your family’s daily life.
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-5 text-[15px] leading-relaxed text-cream/70"
          >
            Tell us about your loved one. We will listen, suggest the right service mix, and arrange a free assessment within 24 hours.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="tel:+8801992869025"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] transition hover:-translate-y-0.5 hover:bg-brand-deep"
            >
              <Phone className="h-4 w-4" />
              +880 1992-869025
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/[0.06] px-7 py-3.5 text-sm font-bold text-cream backdrop-blur-sm transition hover:bg-cream/[0.1]"
            >
              Book Free Assessment <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      <StatsSection />
    </>
  );
}
