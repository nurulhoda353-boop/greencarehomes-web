import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  CalendarDays,
  Clock,
  MapPin,
  BookOpen,
  Sparkles,
  Mail,
  Send,
  Tag,
  User,
  
  Heart,
  Users,
  Activity,
  HeartPulse,
  Phone,
} from "lucide-react";
import { useState } from "react";
import blogSeniorImg from "@/assets/blog-senior-wellness.jpg?format=webp&quality=80&w=1400";
import blogCaregiverImg from "@/assets/blog-caregiver-notes.jpg?format=webp&quality=80&w=1400";
import blogRecoveryImg from "@/assets/blog-recovery.jpg?format=webp&quality=80&w=1400";
import faqCareImg from "@/assets/faq-care.jpg?format=webp&quality=80&w=1400";
import aboutPhysioImg from "@/assets/about-physio.jpg?format=webp&quality=80&w=1400";
import svcDaycareImg from "@/assets/svc-daycare.jpg?format=webp&quality=80&w=1400";
import { toast } from "sonner";
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

const featured = {
  tag: "Caregiver Notes",
  date: "May 18, 2026",
  read: "8 min read",
  author: "Dr. Rashed Karim",
  title: "The quiet revolution in Bangladesh's home healthcare — and why families are switching",
  excerpt:
    "From scattered freelance nurses to coordinated, clinician-led care plans — a look at how home healthcare is finally maturing into a profession families can trust.",
  image: faqCareImg,
};

const posts = [
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
  {
    tag: "Family Care",
    date: "Apr 10, 2026",
    read: "5 min read",
    title: "Caring for a parent without burning out yourself",
    desc: "Respite, boundaries, and small systems that protect the family caregiver — because their wellbeing decides the patient's.",
    image: aboutPhysioImg,
  },
  {
    tag: "Day Care",
    date: "Mar 28, 2026",
    read: "4 min read",
    title: "Why structured daytime care helps seniors sleep better at night",
    desc: "The science behind routine, sunlight, and social engagement — and how a few hours of day care transforms evenings at home.",
    image: svcDaycareImg,
  },
  {
    tag: "Nutrition",
    date: "Mar 14, 2026",
    read: "6 min read",
    title: "A Bangladeshi senior-friendly meal plan for stronger bones",
    desc: "Calcium, vitamin D, and protein — translated into the daily dishes families already cook. Practical, affordable, doctor-reviewed.",
    image: blogSeniorImg,
  },
];

const categories = [
  { icon: Heart, label: "Senior Wellness", count: 14 },
  { icon: Activity, label: "Recovery & Rehab", count: 9 },
  { icon: Users, label: "Family Care", count: 11 },
  { icon: HeartPulse, label: "Caregiver Notes", count: 7 },
  { icon: BookOpen, label: "Nutrition", count: 6 },
  { icon: Sparkles, label: "Mental Wellbeing", count: 5 },
];

const events = [
  {
    day: "12",
    month: "Jun",
    title: "Free Geriatric Health Camp — Mohammadpur",
    desc: "Open blood pressure, sugar, and bone-density screening for seniors. On-site physiotherapist and nutritionist consultations.",
    location: "Green Living Residence, Mohammadpur",
    time: "9:00 AM — 1:00 PM",
    tag: "Community",
  },
  {
    day: "24",
    month: "Jun",
    title: "Caregiver Family Workshop — Stroke Recovery at Home",
    desc: "A two-hour interactive workshop for families caring for a loved one post-stroke. Hosted by our clinical lead and senior physiotherapist.",
    location: "Online (Zoom) + In-person",
    time: "6:00 PM — 8:00 PM",
    tag: "Workshop",
  },
  {
    day: "08",
    month: "Jul",
    title: "World Elders' Day — Open House at Green Living Residence",
    desc: "Tour the residence, meet our care team, share a meal with our seniors, and learn how the Green Care ecosystem supports your family.",
    location: "Green Living Residence, Mohammadpur",
    time: "11:00 AM — 4:00 PM",
    tag: "Open House",
  },
];

export const Route = createFileRoute("/blog-and-events")({
  head: () => ({
    meta: [
      { title: "Blog & Events — Green Care Homes" },
      {
        name: "description",
        content:
          "Stories, guides, and upcoming events on senior wellness, home healthcare, recovery, and family caregiving from Green Care Homes.",
      },
      { property: "og:title", content: "Blog & Events — Green Care Homes" },
      {
        property: "og:description",
        content: "Senior care guides, recovery stories, and upcoming community events from Bangladesh's trusted home healthcare team.",
      },
      { property: "og:url", content: `${SITE_URL}/blog-and-events` },
      { property: "og:image", content: `${SITE_URL}/og-cover.jpg` },
      { name: "twitter:image", content: `${SITE_URL}/og-cover.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog-and-events` }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

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

        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/80 backdrop-blur-sm">
              <Leaf className="h-3.5 w-3.5 text-brand" />
              Blog & Events
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.06] text-cream sm:text-5xl lg:text-[4rem]"
          >
            Stories, guides &{" "}
            <span className="bg-gradient-to-r from-leaf to-cream bg-clip-text text-transparent italic font-light">
              moments of care
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/72 sm:text-lg"
          >
            Practical advice for families, honest reflections from our caregivers, and a calendar of community
            events — written and curated by our clinical team.
          </motion.p>

          <motion.div
            {...stagger}
            className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4 sm:gap-6"
          >
            {[
              { value: "Weekly", label: "New care guides" },
              { value: "Monthly", label: "Family events" },
              { value: "Free", label: "For every reader" },
            ].map((s) => (
              <motion.div
                key={s.label}
                {...childFadeUp}
                className="rounded-3xl border border-cream/10 bg-cream/[0.05] px-4 py-5 backdrop-blur-sm"
              >
                <div className="font-display text-2xl font-extrabold text-cream sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-cream/55">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== FEATURED POST — LIGHT ===================== */}
      <section className="relative bg-gradient-to-b from-background via-background to-secondary/30 py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mb-10 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">— Featured</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">
              This week's read
            </h2>
          </motion.div>

          <motion.article
            {...fadeUp}
            className="group grid grid-cols-1 gap-8 overflow-hidden rounded-[32px] border border-border/50 bg-white p-3 shadow-soft lg:grid-cols-2 lg:gap-0 lg:p-0"
          >
            <div className="relative overflow-hidden rounded-[26px] lg:rounded-none">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="h-full min-h-[300px] w-full object-cover transition duration-700 group-hover:scale-[1.03] lg:min-h-[460px]"
              />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-deep backdrop-blur-sm">
                <Tag className="h-3 w-3 text-brand" />
                {featured.tag}
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 lg:p-12">
              <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" />{featured.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{featured.read}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-extrabold leading-[1.18] text-brand-deep sm:text-[2rem]">
                {featured.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.75] text-muted-foreground">{featured.excerpt}</p>

              <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.32_0.06_155)] to-[oklch(0.24_0.08_150)] text-cream">
                    <User className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-deep">{featured.author}</p>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Clinical Lead</p>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_12px_30px_rgba(76,175,47,0.30)] transition hover:-translate-y-0.5 hover:bg-brand-deep">
                  Read article <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* ===================== LATEST POSTS — WHITE ===================== */}
      <section className="relative bg-white py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">— Latest articles</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">
              Fresh writing from our care team
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Honest, practical guides written by the nurses, physiotherapists, and caregivers who walk into homes every day.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <motion.article
                key={p.title}
                {...childFadeUp}
                className="card-premium group flex flex-col overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-deep backdrop-blur-sm">
                    <Tag className="h-3 w-3 text-brand" />
                    {p.tag}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    <span className="flex items-center gap-1.5"><CalendarDays className="h-3 w-3" />{p.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" />{p.read}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-extrabold leading-snug text-brand-deep">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-4">
                    <span className="text-[11px] uppercase tracking-widest text-muted-foreground">Read more</span>
                    <ArrowRight className="h-4 w-4 text-brand transition group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== CATEGORIES — LIGHT TINT ===================== */}
      <section className="relative bg-gradient-to-b from-secondary/30 via-background to-background py-14 lg:py-16">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">— Explore by topic</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-brand-deep sm:text-3xl">Categories</h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
              Find the writing that matches the moment your family is in — recovery, nutrition, daily care, or peace of mind.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((c) => (
              <motion.button
                key={c.label}
                {...childFadeUp}
                className="card-premium group flex flex-col items-start gap-3 p-5 text-left"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.32_0.06_155)] to-[oklch(0.24_0.08_150)] text-cream">
                  <c.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-deep">{c.label}</p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-widest text-muted-foreground">{c.count} articles</p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== UPCOMING EVENTS — DARK ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] py-16 text-cream lg:py-20">
        <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full bg-brand/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-brand-deep/30 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/80 backdrop-blur-sm">
              <CalendarDays className="h-3.5 w-3.5 text-brand" />
              Upcoming Events
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-cream sm:text-4xl">
              Workshops, camps & open houses
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-cream/70">
              Free and low-cost events for families across Dhaka — designed to inform, support, and bring our care community together.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mt-12 space-y-5">
            {events.map((e) => (
              <motion.div
                key={e.title}
                {...childFadeUp}
                className="group grid grid-cols-[auto_1fr] items-start gap-6 rounded-3xl border border-cream/10 bg-cream/[0.04] p-6 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand/30 hover:bg-cream/[0.06] hover:shadow-[0_24px_55px_-25px_rgba(76,175,47,0.25)] sm:gap-8 sm:p-8 lg:grid-cols-[auto_1fr_auto]"
              >
                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep text-cream shadow-[0_18px_45px_-20px_rgba(76,175,47,0.55)] sm:h-24 sm:w-24">
                  <span className="font-display text-3xl font-black leading-none sm:text-4xl">{e.day}</span>
                  <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em]">{e.month}</span>
                </div>

                <div className="min-w-0">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/15 bg-cream/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand">
                    <Tag className="h-3 w-3" />{e.tag}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-extrabold text-cream sm:text-[1.5rem]">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">{e.desc}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-cream/55">
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-brand" />{e.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-brand" />{e.time}</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 self-center rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_12px_30px_rgba(76,175,47,0.30)] transition hover:-translate-y-0.5 hover:bg-brand-deep lg:self-auto"
                >
                  Reserve <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== NEWSLETTER — LIGHT CTA ===================== */}
      <section className="relative bg-gradient-to-b from-background via-background to-secondary/40 py-16 lg:py-20">
        <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-[36px] border border-border/40 bg-white p-8 shadow-soft sm:p-12"
          >
            <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-[280px] w-[280px] rounded-full bg-brand/15 blur-[100px]" />
            <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 h-[280px] w-[280px] rounded-full bg-brand-deep/10 blur-[100px]" />

            <div className="relative text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[oklch(0.32_0.06_155)] to-[oklch(0.24_0.08_150)] text-cream shadow-[0_12px_30px_-10px_rgba(20,60,30,0.45)]">
                <Mail className="h-5 w-5" />
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">
                Care notes, delivered monthly
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                One thoughtful email a month — practical articles, upcoming events, and gentle reminders. No spam, no selling.
              </p>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!email.trim() || subscribing) return;
                  setSubscribing(true);
                  try {
                    const res = await fetch("/api/public/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        name: "Newsletter Subscriber",
                        phone: "-",
                        email,
                        service: "Newsletter Subscription",
                        message: "Subscribed to monthly care notes from Blog & Events page.",
                      }),
                    });
                    if (!res.ok) throw new Error(`Failed: ${res.status}`);
                    setSubscribed(true);
                    setEmail("");
                    toast.success("Subscribed — thank you!");
                  } catch (err) {
                    console.error(err);
                    toast.error("Could not subscribe. Please try again.");
                  } finally {
                    setSubscribing(false);
                  }
                }}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-12 flex-1 rounded-full border border-border bg-white px-5 text-sm text-brand-deep outline-none placeholder:text-muted-foreground focus:border-brand focus:ring-4 focus:ring-brand/15"
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-bold text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] transition hover:-translate-y-0.5 hover:bg-brand-deep disabled:opacity-60"
                >
                  {subscribing ? "Sending…" : subscribed ? "Subscribed!" : "Subscribe"} <Send className="h-4 w-4" />
                </button>
              </form>

              {subscribed && (
                <p className="mt-4 text-sm text-brand-deep">Thank you — you'll hear from us soon.</p>
              )}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-bold text-brand-deep transition hover:border-brand/40 hover:shadow-soft"
            >
              <Phone className="h-4 w-4 text-brand" /> Talk to a care advisor <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
