import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  HeartPulse,
  Home,
  Stethoscope,
  Activity,
  Baby,
  Users,
  Shield,
  Clock,
  Sparkles,
  CheckCircle2,
  Play,
  ShieldCheck,
  Award,
  Quote,
  MapPin,
  BookOpen,
  CalendarDays,
  ClipboardList,
  Mail,
  Send,
  MessageCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import physioImg from "@/assets/about-physio.jpg?format=webp&quality=80&w=1400";
import heroNurseImg from "@/assets/hero-nurse.jpg?format=webp&quality=80&w=1400";
import doctorPortrait from "@/assets/doctor-portrait.jpg?format=webp&quality=80&w=1400";
import faqPortraitImg from "@/assets/faq-portrait.jpg?format=webp&quality=80&w=1400";
import blogSeniorImg from "@/assets/blog-senior-wellness.jpg?format=webp&quality=80&w=1400";
import blogCaregiverImg from "@/assets/blog-caregiver-notes.jpg?format=webp&quality=80&w=1400";
import blogRecoveryImg from "@/assets/blog-recovery.jpg?format=webp&quality=80&w=1400";
import { Star } from "lucide-react";
import { CountUp } from "@/components/site/CountUp";
import { StatsSection } from "@/components/site/StatsSection";
import { FaqSection } from "@/components/site/FaqSection";
import { TrustBadges } from "@/components/site/TrustBadges";
import { toast } from "sonner";
import { SITE_URL } from "@/config/site";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Green Care Homes — Compassionate Care for Seniors & Families" },
      {
        name: "description",
        content:
          "Professional home healthcare, nursing, physiotherapy, and assisted living services in Bangladesh. 24/7 compassionate care for seniors, patients, and families.",
      },
      { property: "og:title", content: "Green Care Homes — Compassionate Care for Seniors & Families" },
      { property: "og:description", content: "Dedicated healthcare support for better living. 24/7 compassionate care across Bangladesh." },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}/og-cover.jpg` },
      { name: "twitter:image", content: `${SITE_URL}/og-cover.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "preload", as: "image", href: heroNurseImg, fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Green Care Homes",
          description:
            "Home healthcare, nursing, physiotherapy and assisted living services across Bangladesh.",
          url: SITE_URL,
          telephone: "+8801992869025",
          email: "info@greencarehomesbd.com",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "House-7, Dhaka Uddan Main Road, Mohammadpur",
            addressLocality: "Dhaka",
            addressCountry: "BD",
          },
          areaServed: "Bangladesh",
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "500",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Home,
    title: "Green Living Residence",
    desc: "Safe, clean, and comfortable residential care for seniors who need steady daily support, warm companionship, and peaceful living.",
  },
  {
    icon: Stethoscope,
    title: "Gentle Nursing Care",
    desc: "Professional nursing support for medication, vitals monitoring, wound care, and recovery after hospital visits or ongoing treatment.",
  },
  {
    icon: HeartPulse,
    title: "Caregiver Home Service",
    desc: "Trained caregivers providing personal care, mobility help, hygiene support, and friendly companionship in the comfort of home.",
  },
  {
    icon: Activity,
    title: "Physiotherapy at Home",
    desc: "Certified physiotherapists delivering rehab, pain relief, mobility therapy, and guided exercise sessions in the comfort of home.",
  },
  {
    icon: Baby,
    title: "Day Care for Aged & Child",
    desc: "Reliable daytime supervision and supportive care for elderly parents and children in a safe, caring, and comfortable environment.",
  },
  {
    icon: Users,
    title: "Respite & Companion Care",
    desc: "Trusted short-term caregiving relief with emotional support, companionship, and steady care for families whenever they need help.",
  },
];

const reasons = [
  { icon: Award, title: "Professionally trained caregivers", desc: "Certified nurses and attendants vetted for skill and empathy." },
  { icon: Clock, title: "24/7 care & emergency support", desc: "Round-the-clock response — day, night, weekends, holidays." },
  { icon: Shield, title: "Safe & hygienic environment", desc: "Strict protocols, sanitised tools, and infection-control standards." },
  { icon: HeartPulse, title: "Personalized care planning", desc: "Plans tailored to each individual's medical and emotional needs." },
  { icon: Users, title: "Compassionate, trusted service", desc: "Warm relationships built on dignity, respect, and consistency." },
  { icon: Home, title: "Home & residential options", desc: "Choose in-home visits or our peaceful residential facility." },
  { icon: Sparkles, title: "Affordable & reliable support", desc: "Transparent pricing without compromising on quality." },
  { icon: Stethoscope, title: "Patient-focused approach", desc: "Clinical expertise paired with genuinely human attention." },
];

const trustStrip = [
  { icon: Users, label: "Trusted by 500+ families" },
  { icon: ShieldCheck, label: "Licensed caregivers" },
  { icon: Clock, label: "24/7 on-call support" },
  { icon: MapPin, label: "Bangladesh-wide" },
];

const howItWorks = [
  {
    step: "01",
    icon: Phone,
    title: "Call or message",
    desc: "Reach out anytime — day or night. A care advisor listens to your situation, no scripts, no pressure.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Free home assessment",
    desc: "We visit, understand the patient's needs, and design a care plan with the family — fully transparent.",
  },
  {
    step: "03",
    icon: HeartPulse,
    title: "Care begins at home",
    desc: "A matched, trained caregiver arrives — often within 24 hours. Ongoing supervision, always one call away.",
  },
];

const testimonials = [
  {
    quote: "নার্সদের যত্ন ও মমতা অসাধারণ। সময়মতো ওষুধ, ফিজিওথেরাপি — সব পেয়েছি।",
    name: "Farhana Akter",
    role: "Teacher",
  },
  {
    quote: "Post-stroke recovery at home was seamless. Six months in, my father is walking again.",
    name: "Tanvir Hossain",
    role: "Engineer",
  },
  {
    quote: "২৪/৭ কেয়ারগিভারদের প্রফেশনালিজম দেখে পুরো পরিবার নিশ্চিন্ত।",
    name: "Shahnaz Rahman",
    role: "Homemaker",
  },
  {
    quote: "The residence feels like a real home — clean, warm, and genuinely caring.",
    name: "Dr. Imran Chowdhury",
    role: "Physician",
  },
  {
    quote: "মায়ের জন্য যে নার্স পেয়েছি, তিনি পরিবারের একজনের মতোই।",
    name: "Nusrat Jahan",
    role: "Banker",
  },
  {
    quote: "Transparent pricing, trained caregivers, and zero hassle. Highly recommended.",
    name: "Arif Mahmud",
    role: "Entrepreneur",
  },
];

const faqs = [
  {
    q: "How quickly can you arrange a caregiver or nurse?",
    a: "For most areas in Dhaka we can deploy a trained caregiver within 12–24 hours. Emergency nursing and post-hospital care can often start the same day after a short assessment call.",
  },
  {
    q: "Are your caregivers and nurses verified and trained?",
    a: "Yes. Every team member is background-checked, professionally certified, and undergoes our internal training on elderly care, hygiene protocols, and emergency response before being assigned.",
  },
  {
    q: "Do you offer 24/7 live-in care at home?",
    a: "Absolutely. We provide both shift-based (8/12 hour) and 24/7 live-in caregiving. A dedicated supervisor checks in regularly and a backup is arranged if your assigned caregiver is unavailable.",
  },
  {
    q: "What is included in the Green Living Residence?",
    a: "Private or shared rooms, three nutritious meals plus snacks, daily nursing rounds, medication management, physiotherapy sessions, hygiene assistance, recreation, and 24-hour on-site staff.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing depends on the level of care, duration, and whether the service is at home or residential. We share a transparent, written quote after a free care assessment — no hidden charges.",
  },
  {
    q: "Can family members visit anytime?",
    a: "Yes. We warmly encourage family involvement. Visiting hours at the residence are generous, and for home care the family is always part of the care planning conversation.",
  },
];

const stats = [
  { value: "24/7", label: "Care line & response", sub: "On call, any hour", icon: HeartPulse },
  { value: "Free", label: "Initial home assessment", sub: "No obligation", icon: Award },
  { value: "100%", label: "Background-verified caregivers", sub: "Screened & trained", icon: Users },
  { value: "1", label: "Residence in Mohammadpur", sub: "Dhaka, Bangladesh", icon: MapPin },
];

const tips = [
  {
    tag: "Senior Wellness",
    date: "May 15, 2026",
    read: "4 min read",
    title: "5 daily habits that keep aging parents stronger for longer",
    desc: "Small, consistent routines — hydration, gentle mobility, sunlight, social check-ins — quietly add years of quality to a parent's life.",
    image: blogSeniorImg,
  },
  {
    tag: "Caregiver Notes",
    date: "May 02, 2026",
    read: "6 min read",
    title: "What every family should ask before hiring a home caregiver",
    desc: "The right questions surface the right people. A short checklist we share with every family during the first care assessment.",
    image: blogCaregiverImg,
  },
  {
    tag: "Recovery",
    date: "Apr 21, 2026",
    read: "5 min read",
    title: "Post-stroke recovery at home: a gentle 30-day starter plan",
    desc: "A physiotherapist-approved framework families can follow at home — paced, safe, and built around dignity rather than pressure.",
    image: blogRecoveryImg,
  },
];


const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const total = testimonials.length;

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 3500);
    return () => clearInterval(id);
  }, [total]);

  // Build a looped list so the window always has items
  const looped = [...testimonials, ...testimonials, ...testimonials];

  // Monogram color rotation for visual variety
  const monogramTints = [
    "from-brand to-brand-deep",
    "from-leaf to-brand",
    "from-brand-deep to-[oklch(0.32_0.06_155)]",
    "from-[oklch(0.55_0.16_142)] to-leaf",
  ];

  return (
    <div className="relative mx-auto mt-12 max-w-6xl">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[oklch(0.24_0.08_150)] to-transparent sm:w-24"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[oklch(0.24_0.08_150)] to-transparent sm:w-24"
      />

      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `${-(index) * (100 / perView)}%` }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {looped.map((t, i) => {
            const initials = t.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("");
            const tint = monogramTints[i % monogramTints.length];
            return (
              <div
                key={i}
                className="w-full shrink-0 px-2 sm:w-1/2 sm:px-2 lg:w-1/3"
              >
                <div className="group h-full rounded-3xl border border-cream/10 bg-cream/[0.04] p-6 shadow-[0_18px_45px_-28px_rgba(0,0,0,0.5)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-brand/40 hover:bg-cream/[0.06] hover:shadow-[0_24px_55px_-25px_rgba(76,175,47,0.35)]">
                  <Quote aria-hidden className="h-5 w-5 text-brand" strokeWidth={2} />
                  <p className="mt-4 text-[14px] leading-[1.65] text-cream/80">
                    "{t.quote}"
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-cream/10 pt-5">
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br ${tint} text-[13px] font-bold text-cream ring-1 ring-cream/15`}
                      aria-hidden
                    >
                      {initials}
                    </span>
                    <div className="min-w-0">
                      <div className="truncate text-[13px] font-semibold text-cream">
                        {t.name}
                      </div>
                      <div className="truncate text-[11px] uppercase tracking-[0.14em] text-cream/50">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-brand" : "w-4 bg-cream/15 hover:bg-brand/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}



function HomePage() {
  const [contactForm, setContactForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSent, setContactSent] = useState(false);
  return (
    <>
      {/* ===================== HERO — DARK (reference) ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] pt-28 pb-16 text-cream lg:pt-32 lg:pb-20">
        {/* Subtle grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage:
              "radial-gradient(ellipse at center, #000 35%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, #000 35%, transparent 85%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        />
        <div aria-hidden className="animate-blob pointer-events-none absolute -top-40 -right-40 h-[640px] w-[640px] rounded-full bg-brand/25 blur-[140px]" />
        <div aria-hidden className="animate-blob-delayed pointer-events-none absolute -bottom-40 -left-40 h-[560px] w-[560px] rounded-full bg-brand-deep/40 blur-[140px]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-5 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="z-10 flex flex-col items-start space-y-8 lg:col-span-6 lg:pt-6">

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[2.25rem] font-black leading-[1.04] tracking-[-0.04em] text-cream sm:text-[2.75rem] md:text-6xl lg:text-[5.25rem]"
            >
              Your Trusted Care 🌿
              <br />
              <span className="bg-gradient-to-r from-brand via-[oklch(0.82_0.18_140)] to-brand bg-clip-text font-light italic tracking-[-0.03em] text-transparent">
                Starts Here.
              </span>
            </motion.h1>

            <p className="max-w-lg text-[17px] font-light leading-[1.7] tracking-[-0.005em] text-cream/70 lg:text-lg">
              Reliable, warm and professional homecare services designed to keep your loved
              ones safe, comfortable and happy — right at home.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/services"
                className="btn-shine group inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-base font-bold text-primary-foreground shadow-2xl shadow-brand/40 transition hover:-translate-y-1 hover:bg-brand-deep"
              >
                Explore Services
                <span className="grid h-6 w-6 place-items-center rounded-full bg-cream text-brand-deep transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <button
                type="button"
                className="group inline-flex items-center gap-3 rounded-full border border-cream/20 bg-cream/5 px-6 py-3 text-base font-semibold text-cream backdrop-blur transition hover:bg-cream/10"
              >
                <span className="live-rings relative grid h-10 w-10 place-items-center rounded-full bg-cream text-brand-deep transition group-hover:scale-110">
                  <Play className="breathing h-4 w-4 fill-current" />
                </span>
                Watch Video
              </button>

            </div>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center lg:col-span-6 lg:justify-end">
            <div className="float-y-slow relative aspect-[4/5] w-[72%] max-w-xs sm:w-full sm:max-w-md">

              <motion.div
                initial={{ opacity: 0, scale: 0.96, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: -1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="media-zoom relative h-full w-full overflow-hidden rounded-[60px] bg-cream/10 p-3 shadow-[0_40px_80px_-20px_rgba(20,60,30,0.25)] backdrop-blur-sm transition-transform duration-700 hover:rotate-0"
              >
                <img
                  src={heroNurseImg}
                  alt="Compassionate nurse holding the hand of a smiling elderly patient"
                  width={800}
                  height={1000}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full rounded-[50px] object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute left-2 top-6 z-20 hidden items-center gap-3 rounded-2xl border border-cream/10 bg-cream/10 px-4 py-3 shadow-2xl backdrop-blur-xl sm:-left-4 sm:top-12 sm:flex"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-primary-foreground">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-cream/60">Certified</p>
                  <p className="text-sm font-bold text-cream">Trained Nurses</p>
                </div>
              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute left-2 bottom-6 z-20 hidden items-center gap-3 rounded-2xl border border-cream/10 bg-cream/10 px-4 py-3 shadow-2xl backdrop-blur-xl sm:-left-2 sm:bottom-10 sm:flex"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-cream text-brand-deep">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-black leading-none text-cream"><CountUp value="5,000" />+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-cream/60">Happy Families</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="relative mt-12 border-y border-cream/10 bg-cream/[0.04] backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-5 sm:py-4 lg:px-8">
            {/* Mobile: 2x2 compact card grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:hidden">
              {trustStrip.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-xl border border-cream/10 bg-cream/[0.05] px-3 py-2.5"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-brand/20 text-brand">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[10.5px] font-bold uppercase leading-tight tracking-[0.08em] text-cream/85">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            {/* Desktop / tablet: horizontal strip */}
            <div className="hidden flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:flex">
              {trustStrip.map(({ icon: Icon, label }, i) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-brand/15 text-brand">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-cream/80">
                    {label}
                  </span>
                  {i < trustStrip.length - 1 && (
                    <span aria-hidden className="ml-7 hidden h-1 w-1 rounded-full bg-cream/25 lg:inline-block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT — LIGHT A (warm cream sanctuary) ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/40 via-cream to-secondary/30 py-16 lg:py-20">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-32 bottom-10 h-[460px] w-[460px] rounded-full bg-[oklch(0.85_0.12_140)]/30 blur-3xl" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(0.18 0.012 165) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.18 0.012 165) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, #000 30%, transparent 80%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-12 lg:gap-20 lg:px-8">
          <motion.div {...fadeUp} className="relative lg:col-span-6">
            <div className="relative aspect-[5/6] w-full max-w-xl">
              <div aria-hidden className="absolute -left-5 -top-5 h-full w-full rounded-[44px] border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent" />
              <div aria-hidden className="absolute -right-6 -bottom-6 h-40 w-40 rounded-full bg-gradient-to-br from-brand to-brand-deep opacity-90 blur-[2px]" />

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="media-zoom relative h-full w-full overflow-hidden rounded-[40px] bg-cream p-3 shadow-[0_40px_80px_-30px_rgba(17,25,23,0.35)]"
              >
                <img
                  src={physioImg}
                  alt="A physiotherapist working with an elderly patient"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full rounded-[30px] object-cover object-bottom"
                />
              </motion.div>

            </div>
          </motion.div>

          <motion.div {...fadeUp} className="text-center lg:col-span-6 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-background/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-deep shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              About Us
            </span>

            <h2 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-[-0.04em] text-brand-deep sm:text-5xl lg:text-[3.5rem]">
              Care that feels{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-brand to-brand-deep bg-clip-text font-light italic text-transparent">
                  like family
                </span>
                <span aria-hidden className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-brand/0 via-brand to-brand/0" />
              </span>
              .
            </h2>

            <p className="mt-6 text-[17px] leading-[1.75] text-foreground/75">
              Green Care Homes is a dedicated home healthcare and assisted living provider
              committed to improving the quality of life for seniors, patients, and families
              across Bangladesh.
            </p>
            <p className="mt-4 text-[15px] leading-[1.75] text-muted-foreground">
              We believe care is more than treatment — it's companionship, trust, comfort,
              and preserving human dignity. Whether at home or in our residence, every plan
              is shaped around the person we serve.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, title: "Certified Caregivers", desc: "Trained, vetted & verified" },
                { icon: Clock, title: "24/7 Availability", desc: "Always one call away" },
                { icon: HeartPulse, title: "Personalized Plans", desc: "Built around each story" },
                { icon: Sparkles, title: "Hygienic & Safe", desc: "Held to the highest standard" },
              ].map((p) => (
                <div
                  key={p.title}
                  className="group flex items-start gap-3 rounded-2xl border border-border/60 bg-background/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-soft"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand/15 to-brand/5 text-brand-deep transition group-hover:from-brand group-hover:to-brand-deep group-hover:text-primary-foreground">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-brand-deep">{p.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-deep to-[oklch(0.22_0.08_155)] p-5 text-cream shadow-soft">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand/30 blur-2xl" />
                <div className="relative flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-cream/15 text-leaf">
                    <HeartPulse className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-leaf">Our Mission</span>
                </div>
                <p className="relative mt-3 text-[13px] leading-[1.6] text-cream/85">
                  Compassionate, reliable, professional healthcare that enhances every individual's well-being — with dignity at the center.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-secondary/70 p-5 text-brand-deep shadow-sm">
                <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-brand/15 blur-2xl" />
                <div className="relative flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-brand/15 text-brand-deep">
                    <Sparkles className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-deep">Our Vision</span>
                </div>
                <p className="relative mt-3 text-[13px] leading-[1.6] text-foreground/75">
                  To be Bangladesh's most trusted home healthcare and assisted living provider — for every family, everywhere.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 rounded-full bg-brand-deep px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_18px_40px_-12px_oklch(0.52_0.16_142_/_0.55)] transition hover:-translate-y-0.5 hover:bg-brand"
              >
                Read our full story
                <span className="grid h-6 w-6 place-items-center rounded-full bg-cream text-brand-deep transition group-hover:rotate-45">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== SERVICES — LIGHT B (clean editorial paper) ===================== */}
      <section className="relative overflow-hidden border-y border-border/30 bg-white py-16 lg:py-20">
        {/* Distinct dotted micro-pattern (vs L-A's grid) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, oklch(0.32 0.06 155) 1px, transparent 0)",
            backgroundSize: "22px 22px",
            maskImage: "radial-gradient(ellipse at center, #000 40%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, #000 40%, transparent 90%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-cream/70 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-deep backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Our Services
            </span>
            <h2 className="mt-5 font-display text-4xl font-black leading-[1.02] tracking-[-0.04em] text-charcoal sm:text-5xl lg:text-[3.5rem]">
              Personalized care,{" "}
              <span className="bg-gradient-to-r from-brand-deep via-brand to-brand-deep bg-clip-text text-transparent">
                delivered with dignity.
              </span>
            </h2>
            <p className="mt-5 text-[16px] font-light leading-[1.75] tracking-[-0.005em] text-muted-foreground">
              A complete circle of care — from gentle nursing to specialist therapy —
              designed around every family we serve.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-[28px] border border-border/60 bg-cream/50 p-7 text-center shadow-[0_18px_45px_-28px_rgba(17,25,23,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_30px_60px_-25px_rgba(76,175,47,0.3)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/0 via-brand/0 to-brand/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-brand/20 to-leaf/10 blur-2xl transition-all duration-500 group-hover:scale-125" />
                <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex flex-1 flex-col items-center">
                  <span className="absolute right-0 top-0 font-display text-[13px] font-black tracking-[0.18em] text-brand/50">
                    0{i + 1}
                  </span>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep text-primary-foreground shadow-[0_14px_28px_-10px_rgba(76,175,47,0.55)] ring-1 ring-inset ring-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]">
                    <s.icon className="h-7 w-7" />
                  </span>

                  <h3 className="mt-7 font-display text-[1.45rem] font-black leading-[1.15] tracking-[-0.03em] text-charcoal">
                    {s.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 min-h-[4.65rem] text-[14.5px] font-light leading-[1.7] text-muted-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
                    {s.desc}
                  </p>

                  <div className="mt-auto flex w-full flex-col items-center gap-3 border-t border-border/50 pt-5">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground/70">
                      Learn more
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-brand-deep transition-all duration-500 group-hover:bg-brand group-hover:text-primary-foreground group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== QUOTE BAND — DARK (hero match) ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] py-16 text-cream lg:py-20">
        <div className="pointer-events-none absolute -left-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-brand/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-32 h-[460px] w-[460px] rounded-full bg-leaf/15 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-12 lg:gap-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[36px] border border-cream/15" />
              <div className="absolute -inset-8 rounded-[44px] border border-cream/5" />

              <div className="media-zoom relative overflow-hidden rounded-[28px] shadow-[0_50px_100px_-30px_rgba(20,60,30,0.35)] ring-1 ring-cream/10">
                <img
                  src={doctorPortrait}
                  alt="Dr. portrait — Green Care Homes lead physician"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.06_155)]/60 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-cream/15 bg-[oklch(0.16_0.06_155)]/70 px-4 py-3 backdrop-blur-xl">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-leaf text-primary-foreground shadow-[0_8px_20px_-6px_rgba(76,175,47,0.6)]">
                    <Stethoscope className="h-5 w-5" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[13px] font-bold text-cream">Dr. A. Rahman</p>
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-cream/60">
                      Lead Physician
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute -right-4 top-10 hidden rounded-2xl border border-cream/15 bg-[oklch(0.18_0.06_155)]/80 px-5 py-4 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] sm:block"
              >
                <p className="font-display text-3xl font-black text-leaf">20+</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cream/65">
                  Years Practice
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-leaf backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
              From Our Lead Physician
            </span>

            <span className="mt-6 block font-display text-[110px] leading-[0.7] text-leaf/80">
              "
            </span>

            <p className="mt-2 font-display text-[1.5rem] font-semibold leading-[1.2] tracking-[-0.02em] text-cream sm:text-[1.75rem] lg:text-[2rem]">
              Compassionate care with{" "}
              <span className="bg-gradient-to-r from-leaf via-[oklch(0.78_0.16_150)] to-leaf bg-clip-text text-transparent">
                dignity, respect
              </span>{" "}
              & responsibility.
            </p>

            <p className="mt-6 max-w-xl text-[17px] leading-[1.75] text-cream/80 sm:text-[18px]">
              Every individual we serve deserves trusted, personalized support that protects
              their well-being and honors their story. Our team brings clinical excellence and
              genuine warmth to every visit — quietly, consistently, and with the kind of care
              we'd want for our own family.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <span
                      key={i}
                      className="grid h-9 w-9 place-items-center rounded-full border-2 border-[oklch(0.20_0.07_152)] bg-gradient-to-br from-brand to-brand-deep text-[11px] font-bold text-cream"
                    >
                      {["A", "S", "R", "M"][i - 1]}
                    </span>
                  ))}
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-cream">Trusted by families</p>
                  <p className="text-[12px] text-cream/55">across Dhaka</p>
                </div>
              </div>

              <div className="h-10 w-px bg-cream/15" />

              <div className="flex items-center gap-2">
                <div className="flex gap-0.5 text-leaf">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-cream">4.9/5 rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS — LIGHT A ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/35 via-cream to-secondary/25 py-14 lg:py-18">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(0.18 0.012 165) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.18 0.012 165) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, #000 30%, transparent 80%)",
          }}
        />
        <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[oklch(0.85_0.12_140)]/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-background/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-deep backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              How it works
            </span>
            <h2 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-[-0.03em] text-brand-deep sm:text-5xl">
              Three calm steps to{" "}
              <span className="bg-gradient-to-r from-brand to-brand-deep bg-clip-text font-light italic text-transparent">
                care at home
              </span>
              .
            </h2>
            <p className="mt-5 text-[15px] leading-[1.7] text-muted-foreground">
              No long forms. No confusing paperwork. Just a clear, human path from your first
              call to the first day of care.
            </p>
          </motion.div>

          <div className="relative mt-14 grid gap-6 md:grid-cols-3">
            <div
              aria-hidden
              className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent md:block"
            />

            {howItWorks.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="card-premium group relative flex flex-col items-center px-6 py-8 text-center sm:px-7 sm:py-10"
              >
                <div className="relative">
                  <span className="relative z-10 grid h-20 w-20 place-items-center rounded-full border border-border/60 bg-background shadow-[0_18px_40px_-18px_rgba(45,125,31,0.35)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-brand/40 group-hover:shadow-[0_24px_50px_-18px_rgba(45,125,31,0.5)]">
                    <s.icon className="h-7 w-7 text-brand-deep transition-colors group-hover:text-brand" />
                  </span>
                  <span className="absolute -right-2 -top-2 z-20 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-deep text-[11px] font-black tracking-tight text-cream shadow-soft">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-brand-deep">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[18rem] text-[14px] leading-[1.65] text-muted-foreground">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY US — LIGHT B ===================== */}
      <section className="relative overflow-hidden border-y border-border/30 bg-white py-16 lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, oklch(0.32 0.06 155) 1px, transparent 0)",
            backgroundSize: "22px 22px",
            maskImage: "radial-gradient(ellipse at center, #000 40%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, #000 40%, transparent 90%)",
          }}
        />
        <div className="pointer-events-none absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-[480px] w-[480px] rounded-full bg-leaf/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-cream/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-deep backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Why Choose Us
              </span>
              <h2 className="mt-6 bg-gradient-to-br from-brand-deep via-charcoal to-brand-deep bg-clip-text text-4xl font-black leading-[1.05] text-transparent sm:text-5xl lg:text-[3.2rem]">
                Care families<br />truly remember.
              </h2>
              <p className="mt-6 text-[16px] leading-[1.75] text-foreground/70">
                Eight commitments that shape every visit, every shift, and every
                conversation — measured, warm, and unwaveringly consistent.
              </p>

              {/* Premium visual */}
              <div className="relative mt-10 hidden lg:block">
                <div className="pointer-events-none absolute -inset-6 rounded-[36px] bg-gradient-to-br from-brand/25 via-leaf/15 to-transparent blur-2xl" aria-hidden />
                <div className="relative overflow-hidden rounded-[28px] border border-border/60 bg-cream shadow-[0_30px_60px_-25px_rgba(17,25,23,0.35)]">
                  <img
                    src={physioImg}
                    alt="Compassionate caregiver supporting a senior patient"
                    loading="lazy"
                    className="h-[320px] w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-deep text-cream shadow-[0_8px_20px_-8px_rgba(76,175,47,0.7)]">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-white">Licensed & insured care</p>
                      <p className="text-[11px] text-white/80">Audited standards across Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.li
                    key={r.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="group relative overflow-hidden rounded-[24px] border border-border/60 bg-cream/50 p-6 shadow-[0_18px_45px_-28px_rgba(17,25,23,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_30px_60px_-25px_rgba(76,175,47,0.3)]"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-brand/20 to-leaf/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep text-cream shadow-[0_8px_20px_-8px_rgba(76,175,47,0.55)] ring-1 ring-inset ring-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[15px] font-bold leading-snug text-brand-deep">
                          {r.title}
                        </h3>
                        <p className="mt-1.5 text-[13px] leading-[1.65] text-muted-foreground">
                          {r.desc}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>


      {/* ===================== TESTIMONIALS — DARK ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] py-16 text-cream lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, #000 30%, transparent 80%)",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-brand/20 blur-[140px]" />
        <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-brand-deep/40 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Voices of families we serve
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-cream sm:text-5xl lg:text-[3.5rem]">
              Trusted in homes across Bangladesh.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream/70 sm:text-lg">
              Real stories from real families — the moments that remind us why we do
              this work.
            </p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* ===================== STATS — PREMIUM CARDS ===================== */}
      <StatsSection />


      {/* ===================== FAQ — LIGHT B ===================== */}
      <FaqSection
        eyebrow="FAQ · 01 / 06"
        title={
          <>
            Questions families{" "}
            <span className="italic font-light text-brand">ask quietly.</span>
          </>
        }
        description="Honest answers about caregivers, pricing and how we keep your loved one safe — written the way we'd explain it across a kitchen table."
        image={faqPortraitImg}
        imageAlt="Elderly gentleman resting peacefully in a sunlit room"
        items={faqs}
      />

      {/* ===================== CONTACT — DARK (hero match) ===================== */}
      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] py-16 text-cream lg:py-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }}
        />
        <div className="pointer-events-none absolute -right-40 -top-32 h-96 w-96 rounded-full bg-leaf/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 -bottom-32 h-96 w-96 rounded-full bg-brand/25 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-leaf">
              Contact us
            </div>
            <h2 className="mt-4 bg-gradient-to-b from-cream to-cream/75 bg-clip-text font-display text-[2.4rem] font-bold leading-[1.05] tracking-[-0.02em] text-transparent sm:text-[3rem]">
              Get in touch.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-cream/70">
              Drop us a line — we'll respond within the hour.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <motion.form
              {...fadeUp}
              onSubmit={async (e) => {
                e.preventDefault();
                if (contactSubmitting) return;
                setContactSubmitting(true);
                try {
                  const response = await fetch("/api/public/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...contactForm, service: "Home — Get in touch" }),
                  });
                  if (!response.ok) throw new Error(`Failed: ${response.status}`);
                  setContactSent(true);
                  setContactForm({ name: "", phone: "", email: "", message: "" });
                  toast.success("Message received — we'll be in touch shortly.");
                } catch (err) {
                  console.error(err);
                  toast.error("Something went wrong. Please call us directly.");
                } finally {
                  setContactSubmitting(false);
                }
              }}
              className="rounded-[24px] border border-border/60 bg-cream p-6 text-charcoal shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)] sm:p-8 lg:col-span-7"
            >
              <div className="grid gap-5">
                {[
                  { key: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { key: "phone", label: "Mobile", type: "tel", placeholder: "+880 1XXX-XXXXXX" },
                  { key: "email", label: "Email", type: "email", placeholder: "you@email.com" },
                ].map((f) => (
                  <label key={f.label} className="block">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      {f.label}
                    </span>
                    <input
                      type={f.type}
                      required={f.key !== "email"}
                      value={contactForm[f.key as "name" | "phone" | "email"]}
                      onChange={(e) => setContactForm({ ...contactForm, [f.key]: e.target.value })}
                      placeholder={f.placeholder}
                      className="mt-2 w-full border-0 border-b border-border bg-transparent pb-2.5 text-[15px] text-charcoal placeholder:text-muted-foreground/60 focus:border-brand focus:outline-none focus:ring-0"
                    />
                  </label>
                ))}
                <label className="block">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Message
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="How can we help?"
                    className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent pb-2.5 text-[15px] text-charcoal placeholder:text-muted-foreground/60 focus:border-brand focus:outline-none focus:ring-0"
                  />
                </label>

                <button
                  type="submit"
                  disabled={contactSubmitting}
                  className="group mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-brand-deep disabled:opacity-60"
                >
                  {contactSubmitting ? "Sending…" : contactSent ? "Sent ✓" : "Send message"}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </motion.form>


            <motion.div {...fadeUp} className="lg:col-span-5">
              <ul className="space-y-5">
                {[
                  { icon: Phone, label: "Phone", value: "+880 1992-869025", href: "tel:+8801992869025" },
                  { icon: Mail, label: "Email", value: "info@greencarehomesbd.com", href: "mailto:info@greencarehomesbd.com" },
                  { icon: MessageCircle, label: "WhatsApp", value: "+880 1992-869025", href: "https://wa.me/8801992869025" },
                  { icon: MapPin, label: "Address", value: "House-7, Dhaka Uddan Main Road,\nMohammadpur, Dhaka", href: "https://maps.google.com/?q=House+7+Dhaka+Uddan+Main+Road+Mohammadpur+Dhaka" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <li key={label}>
                    <a href={href} className="group flex items-start gap-4 transition-colors hover:text-leaf">
                      <span className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-cream/15 bg-cream/5 text-leaf transition-colors group-hover:border-leaf group-hover:bg-leaf group-hover:text-charcoal">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/50">
                          {label}
                        </div>
                        <div className="mt-1 whitespace-pre-line text-[15px] font-medium leading-snug text-cream/90">
                          {value}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="relative mt-7 overflow-hidden rounded-[22px] border border-cream/10 bg-cream/[0.04] p-6 backdrop-blur-xl">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-leaf/25 blur-3xl"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-brand/30 blur-3xl"
                />
                <div className="relative flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-leaf" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-leaf">
                    Available now · 24/7
                  </span>
                </div>
                <p className="relative mt-3 font-display text-[1.35rem] font-semibold leading-snug text-cream">
                  Care doesn't wait. Neither do we.
                </p>
                <div className="relative mt-5 grid grid-cols-3 gap-3 border-t border-cream/10 pt-5">
                  {[
                    { k: "< 1 hr", v: "Response" },
                    { k: "500+", v: "Families" },
                    { k: "8+ yrs", v: "Of care" },
                  ].map((s) => (
                    <div key={s.v}>
                      <div className="font-display text-xl font-bold text-cream"><CountUp value={s.k} /></div>
                      <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-cream/55">
                        {s.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== HEALTH TIPS — LIGHT A ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/35 via-cream to-secondary/25 py-16 lg:py-20">
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[oklch(0.85_0.12_140)]/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div
            {...fadeUp}
            className="mx-auto flex max-w-2xl flex-col items-center text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-deep">
              <BookOpen className="h-3.5 w-3.5 text-brand" />
              Health tips & care journal
            </span>
            <h2 className="mt-6 bg-gradient-to-br from-brand-deep via-charcoal to-brand-deep bg-clip-text font-display text-4xl font-bold leading-[1.05] text-transparent sm:text-5xl">
              Small wisdom that changes daily care.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Notes from our nurses, physiotherapists, and caregivers — practical
              ideas families can use this week.
            </p>
            <Link
              to="/blog-and-events"
              className="group mt-6 hidden items-center gap-2 rounded-full border border-brand-deep/20 px-5 py-3 text-sm font-semibold text-brand-deep transition hover:bg-brand-deep hover:text-cream lg:inline-flex"
            >
              All articles
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tips.map((t, i) => (
              <motion.article
                key={t.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-[28px] border border-border/60 bg-background shadow-[0_18px_45px_-28px_rgba(17,25,23,0.22)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_30px_60px_-25px_rgba(76,175,47,0.35)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.title}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/55 via-brand-deep/10 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-cream/30 bg-brand-deep/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cream backdrop-blur-md">
                    {t.tag}
                  </div>
                  <div className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-cream/95 text-brand-deep shadow-lg transition-transform duration-500 group-hover:rotate-[-12deg] group-hover:scale-110">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 text-brand" />
                      {t.date}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                    <span>{t.read}</span>
                  </div>
                  <h3 className="mt-4 font-display text-[20px] font-bold leading-snug text-brand-deep transition-colors group-hover:text-brand">
                    {t.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14px] leading-[1.7] text-muted-foreground">
                    {t.desc}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-deep">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 flex justify-center lg:hidden">
            <Link
              to="/blog-and-events"
              className="group inline-flex items-center gap-2 rounded-full border border-brand-deep/20 px-5 py-3 text-sm font-semibold text-brand-deep transition hover:bg-brand-deep hover:text-cream"
            >
              All articles
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA — LIGHT B (before footer) ===================== */}
      <section className="relative overflow-hidden border-t border-border/50 bg-background px-5 py-16 lg:px-8 lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, oklch(0.32 0.06 155) 1px, transparent 0)",
            backgroundSize: "22px 22px",
            maskImage: "radial-gradient(ellipse at center, #000 40%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, #000 40%, transparent 90%)",
          }}
        />
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-leaf/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl rounded-[2.5rem] border border-border/60 bg-cream/60 px-8 py-14 shadow-[0_30px_80px_-40px_rgba(17,49,23,0.35)] backdrop-blur sm:px-14 lg:px-20 lg:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-background/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-deep backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-brand" />
                Begin the conversation
              </span>
              <h3 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-[-0.03em] text-brand-deep sm:text-5xl lg:text-[3.5rem]">
                Care that arrives with warmth —{" "}
                <span className="bg-gradient-to-r from-brand to-brand-deep bg-clip-text font-light italic text-transparent">
                  and stays.
                </span>
              </h3>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Tell us about your loved one. We'll arrange a free care assessment
                and match the right caregiver — at home or in our green residence —
                within 24 hours.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-deep/70">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" />
                  Free assessment
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" />
                  24-hour deployment
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" />
                  No hidden charges
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[28px] border border-border/60 bg-background p-7 shadow-[0_18px_45px_-25px_rgba(17,49,23,0.3)] sm:p-8">
                <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand">
                  Talk to us
                </div>
                <a
                  href="tel:+8801992869025"
                  className="mt-3 block font-display text-3xl font-bold leading-tight text-brand-deep transition hover:text-brand sm:text-4xl"
                >
                  +880 1992-869025
                </a>
                <div className="mt-1 text-[13px] text-muted-foreground">
                  Available 24/7 · Bangla & English
                </div>

                <div className="mt-7 flex flex-col gap-3">
                  <a
                    href="tel:+8801992869025"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-cream shadow-[0_15px_40px_-15px_rgba(45,125,31,0.55)] transition hover:bg-brand"
                  >
                    <Phone className="h-4 w-4" />
                    Call our care team
                  </a>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-brand-deep/25 px-6 py-3.5 text-sm font-semibold text-brand-deep transition hover:border-brand-deep hover:bg-brand-deep hover:text-cream"
                  >
                    Send us a message
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
