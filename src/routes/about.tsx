import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { StatsSection } from "@/components/site/StatsSection";
import {
  Heart,
  Shield,
  Award,
  Users,
  Clock,
  Phone,
  ArrowRight,
  Leaf,
  Sparkles,
  MapPin,
  HeartPulse,
  Home,
  Stethoscope,
  Activity,
  Baby,
  CheckCircle2,
} from "lucide-react";

import heroNurseImg from "@/assets/hero-nurse.jpg?format=webp&quality=80&w=1400";
import faqCareImg from "@/assets/faq-care.jpg?format=webp&quality=80&w=1400";
import ceoImg from "@/assets/ceo-shariful-islam.png";
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
  transition: { staggerChildren: 0.1 },
};

const childFadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    desc: "Every interaction is guided by genuine empathy. We treat every patient as family, because care without warmth is incomplete.",
  },
  {
    icon: Shield,
    title: "Uncompromising Safety",
    desc: "From infection control to medication protocols, we maintain rigorous standards that families can depend on without hesitation.",
  },
  {
    icon: Award,
    title: "Excellence in Service",
    desc: "Continuous training, performance reviews, and patient feedback loops keep our care quality consistently high.",
  },
  {
    icon: Users,
    title: "Family-Centered",
    desc: "Families are partners, not bystanders. We involve loved ones in every care decision and keep communication transparent.",
  },
];

const ecosystem = [
  {
    icon: Home,
    title: "Green Living Residence",
    desc: "A safe, hygienic residential facility with 24/7 nursing and companionship.",
  },
  {
    icon: HeartPulse,
    title: "Caregiver Home Service",
    desc: "Personal care, mobility help, and companionship delivered at your doorstep.",
  },
  {
    icon: Stethoscope,
    title: "Gentle Nursing Care",
    desc: "Professional medication management, monitoring, and post-hospital recovery.",
  },
  {
    icon: Activity,
    title: "Physiotherapy at Home",
    desc: "Certified physiotherapists bringing rehabilitation to the comfort of home.",
  },
  {
    icon: Baby,
    title: "Day Care for Aged & Child",
    desc: "Supportive daytime care in a nurturing, supervised environment.",
  },
  {
    icon: Users,
    title: "Respite & Companion Care",
    desc: "Trusted short-term relief and emotional support for families and patients.",
  },
];

const faqs = [
  {
    q: "When was Green Care Homes established?",
    a: "Green Care Homes was founded in early 2026 by a team of practicing clinicians and care professionals. While the company is young, our founding team brings over 15 years of combined experience in geriatric care, nursing, and home healthcare across Bangladesh.",
  },
  {
    q: "What makes your care ecosystem different?",
    a: "Most providers offer isolated services — a nurse here, a physiotherapist there. We built one connected ecosystem where residence, home nursing, physiotherapy, day care, and respite care all coordinate under a single care plan, with shared records and one point of contact for the family.",
  },
  {
    q: "Are your caregivers and nurses certified?",
    a: "Yes. Every nurse holds a recognised nursing qualification, every physiotherapist is a certified BPT/DPT professional, and every caregiver completes our in-house training in elderly care, infection control, and emergency response before being placed with a family.",
  },
  {
    q: "How do you ensure safety and trust at home?",
    a: "All staff are background-verified, ID-badged, and supervised by a clinical lead. We follow documented hygiene and medication protocols, conduct regular family check-ins, and provide a direct escalation line for any concern — answered 24/7.",
  },
  {
    q: "Which areas in Bangladesh do you currently serve?",
    a: "We are headquartered in Dhaka and currently serve families across Dhaka and adjoining districts. Our residential facility is based in Mohammadpur. We are expanding to additional districts through 2026 — please contact us to confirm availability in your area.",
  },
  {
    q: "How do I start care for a loved one?",
    a: "A simple call or message starts it. We arrange a free in-home or video assessment with a clinical lead, share an honest care plan with transparent pricing, and only proceed once the family is comfortable. No pressure, no hidden fees.",
  },
];


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Green Care Homes" },
      { name: "description", content: "Our story, mission, values, and the care ecosystem that makes Green Care Homes a trusted name in Bangladesh." },
      { property: "og:title", content: "About Us — Green Care Homes" },
      { property: "og:description", content: "Discover the people, values, and ecosystem behind Bangladesh's trusted home healthcare provider." },
      { property: "og:url", content: `${SITE_URL}/about` },
      { property: "og:image", content: `${SITE_URL}/og-cover.jpg` },
      { name: "twitter:image", content: `${SITE_URL}/og-cover.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* ===================== HERO — DARK ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] pt-28 pb-16 text-cream lg:pt-32 lg:pb-20">
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
        <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 h-[640px] w-[640px] rounded-full bg-brand/25 blur-[140px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 h-[560px] w-[560px] rounded-full bg-brand-deep/40 blur-[140px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 text-center lg:px-8">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/80 backdrop-blur-sm">
              <Leaf className="h-3.5 w-3.5 text-brand" />
              About Green Care Homes
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.1] text-cream sm:text-5xl lg:text-[3.5rem]"
          >
            Care Built on{" "}
            <span className="bg-gradient-to-r from-leaf to-cream bg-clip-text text-transparent">Compassion</span>,{" "}
            Backed by Trust
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-cream/70 sm:text-lg"
          >
            We are a Dhaka-based home healthcare and assisted living provider built on one belief: every senior and patient deserves to age with dignity, surrounded by care that feels like family.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {[
              { icon: Award, label: "Clinician-Led" },
              { icon: Heart, label: "Family-First Care" },
              { icon: MapPin, label: "Based in Dhaka" },
              { icon: Sparkles, label: "Established 2026" },
            ].map((item) => (
              <div
                key={item.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-cream/15 bg-cream/[0.06] px-3 py-1.5 text-[12px] font-medium text-cream/85 backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
              >
                <item.icon className="h-3.5 w-3.5 text-leaf sm:h-4 sm:w-4" strokeWidth={2} />
                <span className="whitespace-nowrap">{item.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ===================== OUR STORY — LIGHT 1 ===================== */}
      <section className="relative bg-gradient-to-b from-background via-background to-secondary/30 py-16 lg:py-20">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <motion.div {...fadeUp} className="order-2 text-center lg:order-1 lg:text-left">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
              — Our Story
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.15] text-brand-deep sm:text-[2.5rem]">
              A New Standard of Home Care,{" "}
              <span className="italic font-medium text-brand">born in 2026</span>
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-muted-foreground">
              Green Care Homes was founded in early 2026 by a circle of practicing clinicians and care professionals who saw the same gap, again and again — families across Bangladesh struggling to find reliable, dignified, and coordinated care for the people they love most.
            </p>
            <p className="mt-4 text-[15px] leading-[1.75] text-muted-foreground">
              We are young as a company, but rich in experience. Our founding team brings more than fifteen years of combined work in geriatric medicine, nursing, and home healthcare — and we are building, from day one, a single connected ecosystem instead of another fragmented service.
            </p>

            <div className="mt-9 flex items-center justify-center gap-4 border-t border-border/50 pt-6 lg:justify-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[oklch(0.32_0.06_155)] to-[oklch(0.24_0.08_150)] text-cream shadow-[0_12px_30px_-10px_rgba(20,60,30,0.35)]">
                <Award className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-brand-deep">Clinician-Founded & Led</p>
                <p className="text-xs text-muted-foreground">Care plans designed by practicing medical professionals</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-brand/20 via-brand-deep/10 to-transparent blur-xl" />
              <img
                src={heroNurseImg}
                alt="Green Care Homes caregiver providing compassionate home care"
                loading="lazy"
                decoding="async"
                className="relative w-full rounded-[28px] object-cover shadow-soft"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-brand/20 bg-white/95 px-5 py-3 shadow-soft backdrop-blur-sm">
                <p className="text-xs font-bold text-brand-deep">Est. 2026</p>
                <p className="text-[11px] text-muted-foreground">Clinician-led, family-first</p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ===================== VALUES — LIGHT 2 (brighter) ===================== */}
      <section className="relative bg-white py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">What Drives Us</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Four principles that guide every decision, every caregiver, and every moment of care we deliver.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <motion.div
                key={v.title}
                {...childFadeUp}
                className="group flex flex-col items-center rounded-3xl border border-border/40 bg-gradient-to-b from-white to-secondary/40 p-7 text-center transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] text-cream shadow-[0_12px_30px_-10px_rgba(20,60,30,0.35)] transition group-hover:scale-[1.02]">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-bold text-brand-deep">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== CARE ECOSYSTEM — DARK ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] py-16 text-cream lg:py-20">
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
        <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full bg-brand/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-brand-deep/30 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/80 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              The Green Care Ecosystem
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-cream sm:text-4xl">
              One Connected Network of Care
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-cream/70">
              Our services are not isolated — they form an interconnected ecosystem where each part supports the other. From home visits to residential care, every service is designed to work together seamlessly.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((item, i) => (
              <motion.div
                key={item.title}
                {...childFadeUp}
                className="card-premium-dark group p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/30 to-brand/10 text-leaf ring-1 ring-leaf/20 transition group-hover:scale-[1.02]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-cream">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-cream/60">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute top-5 right-5 text-[11px] font-bold text-cream/20">0{i + 1}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeUp} className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] transition hover:bg-brand-deep hover:-translate-y-0.5"
            >
              Explore All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===================== CEO — PREMIUM SPOTLIGHT ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background py-16 lg:py-24">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[oklch(0.32_0.06_155)]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">Leadership</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">
              A Message from our <span className="italic font-light text-brand">CEO</span>
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14"
          >
            {/* Portrait */}
            <div className="relative lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand/20 via-transparent to-[oklch(0.32_0.06_155)]/20 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-border/40 bg-white shadow-[0_30px_80px_-30px_rgba(20,60,30,0.45)]">
                  <img
                    src={ceoImg}
                    alt="Md. Shariful Islam — CEO of Green Care Homes"
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5">
                    <p className="font-display text-lg font-bold text-cream">Md. Shariful Islam</p>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-cream/80">
                      Founder & CEO
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-border/40 bg-white px-4 py-3 shadow-soft sm:block">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-brand" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-deep">
                      Visionary Leader
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl border border-border/40 bg-white/80 p-7 backdrop-blur-sm sm:p-9">
                <span className="absolute -top-5 left-7 font-display text-7xl leading-none text-brand/30">
                  &ldquo;
                </span>
                <p className="font-display text-xl leading-relaxed text-brand-deep sm:text-2xl">
                  Green Care Homes was born from a simple belief — that every elderly person deserves
                  to age with dignity, comfort, and the warmth of family-like care.
                </p>
                <p className="mt-5 text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
                  As a founder, I've walked alongside countless families navigating the most tender chapters
                  of their loved ones' lives. We built Green Care Homes to be more than a service — it's a
                  promise of presence, professionalism, and genuine compassion in every visit, every shift,
                  every conversation.
                </p>
                <p className="mt-4 text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
                  Thank you for trusting us with what matters most.
                </p>

                <div className="mt-7 flex items-center gap-4 border-t border-border/40 pt-5">
                  <div className="h-px flex-1 bg-gradient-to-r from-brand/40 to-transparent" />
                  <div className="text-right">
                    <p className="font-display text-lg font-bold text-brand-deep">Md. Shariful Islam</p>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
                      Founder & Chief Executive Officer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== LEADERSHIP — LIGHT 1 ===================== */}
      <section className="relative bg-gradient-to-b from-background via-background to-secondary/30 py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">The People</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">
              Leadership & Care Team
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Experienced professionals who combine clinical expertise with genuine human warmth. Meet the people shaping care at Green Care Homes.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Dr. A. Rahman",
                role: "Founder & Medical Director",
                desc: "A practicing physician with 15+ years in geriatric and family medicine. Founded Green Care Homes to bridge the gap between hospital care and home living.",
                since: "Founding Partner",
              },
              {
                name: "Nurse Sultana Jahan",
                role: "Head of Nursing Operations",
                desc: "Registered nurse with deep expertise in post-operative and palliative care. Built and leads our nursing training and quality protocols.",
                since: "Founding Partner",
              },
              {
                name: "Rezaul Karim",
                role: "Care Ecosystem Director",
                desc: "Coordinates home care, residence, and physiotherapy teams to ensure every family experiences one connected, seamless care plan.",
                since: "Founding Partner",
              },
            ].map((person) => (

              <motion.div
                key={person.name}
                {...childFadeUp}
                className="group rounded-3xl border border-border/40 bg-gradient-to-b from-white to-secondary/40 p-7 transition hover:-translate-y-1 hover:border-brand/20 hover:shadow-soft"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] text-cream text-lg font-bold shadow-[0_12px_30px_-10px_rgba(20,60,30,0.35)]">
                    {person.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-brand-deep">{person.name}</h3>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{person.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{person.desc}</p>
                <p className="mt-4 text-[11px] font-medium uppercase tracking-wider text-brand">{person.since}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== FAQ — STANDARD LAYOUT ===================== */}
      <FaqSection
        eyebrow="FAQ · About us"
        title={
          <>
            Questions families often{" "}
            <span className="italic font-light text-brand">ask us.</span>
          </>
        }
        description="Honest answers to the things that matter most when you are choosing care for someone you love."
        items={faqs}
        image={faqCareImg}
        imageAlt="Compassionate nurse with patient at Green Care Homes"
        caption={"\u201CWe care the way we'd want our own family cared for.\u201D"}
        footerText="Still have a question?"
        footerLinkText="Ask us directly"
      />



      {/* ===================== TRUST STRIP — LIGHT before footer ===================== */}
      <section className="relative bg-gradient-to-b from-secondary/30 via-background to-background py-12 lg:py-14">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div
            {...stagger}
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
          >
            {[
              { icon: CheckCircle2, label: "Ministry of Health Licensed" },
              { icon: HeartPulse, label: "ISO-Inspired Hygiene Protocols" },
              { icon: Shield, label: "Background-Verified Staff" },
              { icon: Clock, label: "24/7 Emergency Response" },
            ].map((item) => (
              <motion.div
                key={item.label}
                {...childFadeUp}
                className="flex items-center gap-2.5 text-sm text-muted-foreground"
              >
                <item.icon className="h-5 w-5 text-brand" />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== CTA — DARK ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] py-16 text-cream lg:py-20">
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-brand/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-brand-deep/30 blur-[120px]" />

        <motion.div
          {...fadeUp}
          className="relative mx-auto flex max-w-3xl flex-col items-center px-5 text-center lg:px-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/80 backdrop-blur-sm">
            <Heart className="h-3.5 w-3.5 text-brand" />
            Start the Conversation
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-cream sm:text-4xl">
            Ready to Learn More?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/70">
            Whether you are exploring care options for a loved one or looking to join our team, we are here to talk. No pressure, just honest guidance.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+8801992869025"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] transition hover:bg-brand-deep hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              Call +880 1992-869025
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream/[0.08]"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>
      <StatsSection />
    </>
  );
}

