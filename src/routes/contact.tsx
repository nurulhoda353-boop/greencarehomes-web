import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Leaf,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import faqCareImg from "@/assets/faq-care.jpg?format=webp&quality=80&w=1400";
import { FaqSection } from "@/components/site/FaqSection";
import { SITE_URL } from "@/config/site";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const channels = [
  { icon: Phone, label: "Call · 24/7", value: "+880 1992-869025", href: "tel:+8801992869025" },
  { icon: MessageCircle, label: "WhatsApp", value: "+880 1992-869025", href: "https://wa.me/8801992869025" },
  { icon: Mail, label: "Email", value: "info@greencarehomesbd.com", href: "mailto:info@greencarehomesbd.com" },
  { icon: MapPin, label: "Visit", value: "Mohammadpur, Dhaka-1207", href: "https://maps.google.com/?q=Dhaka+Uddan+Mohammadpur+Dhaka" },
];

const hours = [
  { label: "Care line", value: "24 / 7" },
  { label: "Office visits", value: "Sat–Thu · 9 AM – 7 PM" },
  { label: "Residence visits", value: "Daily · 10 AM – 8 PM" },
];

const faqs = [
  {
    q: "How quickly can someone visit for a free assessment?",
    a: "For Dhaka and nearby areas, our clinical lead can usually visit within 24 hours of your first call. Video assessments can often be arranged the same day.",
  },
  {
    q: "Is the first conversation really free?",
    a: "Yes — completely. Both the phone consultation and the in-home assessment are free, no obligation, and no follow-up pressure. You only proceed if and when your family is ready.",
  },
  {
    q: "What's the fastest way to reach you in an emergency?",
    a: "Call the care line directly — it is staffed 24/7. For non-urgent matters, WhatsApp is the quickest channel; for documentation-heavy questions, email is best.",
  },
  {
    q: "Can a family member visit the residence before deciding?",
    a: "Absolutely. We warmly encourage in-person visits to Green Living Residence so you can meet the team, see the rooms, and ask anything. No appointment is strictly required, but a quick call ahead lets us host you properly.",
  },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Green Care Homes" },
      {
        name: "description",
        content:
          "Reach Green Care Homes 24/7 — call, WhatsApp, email, or visit. Book a free home assessment for compassionate home healthcare across Bangladesh.",
      },
      { property: "og:title", content: "Contact — Green Care Homes" },
      { property: "og:description", content: "Call, message, or visit — our care advisors are available 24/7." },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { property: "og:image", content: `${SITE_URL}/og-cover.jpg` },
      { name: "twitter:image", content: `${SITE_URL}/og-cover.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  return (
    <>
      {/* ===================== 1 · HERO — DARK ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] pt-28 pb-20 text-cream lg:pt-32 lg:pb-24">
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
        <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full bg-brand/20 blur-[140px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-brand-deep/40 blur-[140px]" />

        <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/80 backdrop-blur-sm">
              <Leaf className="h-3.5 w-3.5 text-brand" />
              Contact Us
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mx-auto mt-6 font-display text-4xl font-extrabold leading-[1.06] text-cream sm:text-5xl lg:text-[3.75rem]"
          >
            We're here, whenever{" "}
            <span className="bg-gradient-to-r from-leaf to-cream bg-clip-text text-transparent italic font-light">
              your family needs us
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/72 sm:text-lg"
          >
            One call, one message — a calm conversation with a real care advisor.
            No call centres, no scripts, no pressure.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="tel:+8801992869025"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] transition hover:-translate-y-0.5 hover:bg-brand-deep"
            >
              <Phone className="h-4 w-4" /> +880 1992-869025
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cream/80 underline-offset-4 transition hover:text-cream hover:underline"
            >
              or write to us <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===================== 2 · FORM + SIDEBAR — LIGHT (single rhythm block) ===================== */}
      <section id="contact-form" className="relative bg-gradient-to-b from-background to-secondary/30 py-20 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">— Book a free assessment</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">
              Tell us about your family
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Share a few details and a care advisor will reach out within hours — usually the same day.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
            {/* Form */}
            <motion.form
              {...fadeUp}
              onSubmit={async (e) => {
                e.preventDefault();
                if (submitting) return;
                setSubmitting(true);
                try {
                  const response = await fetch("/api/public/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                  });
                  if (!response.ok) throw new Error(`Contact submit failed: ${response.status}`);
                  setSent(true);
                  toast.success("Message received — we'll be in touch shortly.");
                } catch (err) {
                  console.error(err);
                  toast.error("Something went wrong. Please call us directly.");
                } finally {
                  setSubmitting(false);
                }
              }}
              className="rounded-[28px] border border-border/50 bg-white p-5 shadow-soft sm:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-brand-deep">Your name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full name"
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-brand-deep outline-none placeholder:text-muted-foreground focus:border-brand focus:ring-4 focus:ring-brand/15"
                  />
                </label>
                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-brand-deep">Phone</span>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+880 1XXX-XXXXXX"
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-brand-deep outline-none placeholder:text-muted-foreground focus:border-brand focus:ring-4 focus:ring-brand/15"
                  />
                </label>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5">
                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-brand-deep">Email (optional)</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-brand-deep outline-none placeholder:text-muted-foreground focus:border-brand focus:ring-4 focus:ring-brand/15"
                  />
                </label>
                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-brand-deep">Service interest</span>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-brand-deep outline-none focus:border-brand focus:ring-4 focus:ring-brand/15"
                  >
                    <option value="">Select a service</option>
                    <option>Caregiver Home Service</option>
                    <option>Gentle Nursing Care</option>
                    <option>Physiotherapy at Home</option>
                    <option>Day Care for Aged & Child</option>
                    <option>Green Living Residence</option>
                    <option>Respite & Companion Care</option>
                    <option>Not sure — please advise</option>
                  </select>
                </label>
              </div>

              <label className="mt-4 block sm:mt-5">
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-deep">How can we help?</span>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="A few words about your loved one's situation — age, condition, what kind of support you're looking for."
                  className="mt-2 w-full rounded-xl border border-border bg-white p-4 text-sm text-brand-deep outline-none placeholder:text-muted-foreground focus:border-brand focus:ring-4 focus:ring-brand/15"
                />
              </label>

              <div className="mt-6 flex flex-col-reverse items-stretch gap-4 sm:mt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 text-brand" />
                  Your details stay private — used only to contact you back.
                </p>
                <button
                  type="submit"
                  disabled={submitting || sent}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] transition hover:-translate-y-0.5 hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {sent ? "Message sent!" : submitting ? "Sending…" : "Send message"} <Send className="h-4 w-4" />
                </button>
              </div>

              {sent && (
                <p className="mt-5 flex items-center gap-2 rounded-xl bg-brand-soft px-4 py-3 text-sm text-brand-deep">
                  <CheckCircle2 className="h-4 w-4 text-brand" />
                  Thank you — a care advisor will call you back shortly.
                </p>
              )}
            </motion.form>

            {/* Sidebar — channels + hours, no extra buttons */}
            <motion.aside {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="space-y-5">
              <div className="rounded-[28px] border border-border/50 bg-white p-5 shadow-soft sm:p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">— Direct channels</span>
                <ul className="mt-4 divide-y divide-border/60">
                  {channels.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="group flex items-center gap-4 py-3.5 transition hover:bg-secondary/40 -mx-2 px-2 rounded-xl"
                      >
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/60 text-brand-deep transition group-hover:bg-brand group-hover:text-cream">
                          <c.icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{c.label}</p>
                          <p className="mt-0.5 break-words text-[13px] font-bold text-brand-deep sm:text-sm">{c.value}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-brand" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-border/50 bg-secondary/40 p-5 sm:p-6">
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                  <Clock className="h-3 w-3" /> Hours
                </span>
                <ul className="mt-4 space-y-3">
                  {hours.map((h) => (
                    <li key={h.label} className="flex items-baseline justify-between gap-4 border-b border-border/50 pb-3 last:border-0 last:pb-0">
                      <span className="text-[12px] uppercase tracking-[0.12em] text-muted-foreground">{h.label}</span>
                      <span className="text-right text-[13px] font-semibold text-brand-deep">{h.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ===================== 3 · VISIT / MAP — DARK ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] py-20 text-cream lg:py-24">
        <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full bg-brand/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-brand-deep/30 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/80 backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              Visit our residence
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-cream sm:text-4xl">
              Green Living Residence, Mohammadpur
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-cream/70">
              Come see the home, meet the team, and share a cup of tea with our seniors.
              Families are warmly welcomed every day — a quick call ahead helps us host you properly.
            </p>

            <ul className="mt-7 space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                House-7, Dhaka Uddan Main Road, Mohammadpur, Dhaka
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                Family visits daily, 10:00 AM – 8:00 PM
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="https://maps.google.com/?q=House+7+Dhaka+Uddan+Main+Road+Mohammadpur+Dhaka"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] transition hover:-translate-y-0.5 hover:bg-brand-deep"
              >
                Open in Google Maps <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-brand/30 via-brand-deep/15 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-cream/10 bg-cream/[0.04] shadow-[0_30px_90px_-32px_rgba(0,0,0,0.65)] backdrop-blur-md">
              <iframe
                title="Green Care Homes location — Mohammadpur, Dhaka"
                src="https://www.google.com/maps?q=House+7+Dhaka+Uddan+Main+Road+Mohammadpur+Dhaka&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full border-0 sm:h-[420px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== 4 · FAQ — LIGHT ===================== */}
      <FaqSection
        eyebrow="FAQ · Before you reach out"
        title={
          <>
            Quick answers before that{" "}
            <span className="italic font-light text-brand">first call.</span>
          </>
        }
        description="A few of the things families most often ask before reaching out — so the conversation starts where it matters most."
        image={faqCareImg}
        imageAlt="Green Care Homes care advisor speaking with a family"
        caption={"\u201CA calm conversation is where every good care plan begins.\u201D"}
        items={faqs}
        footerText="Prefer to talk it through?"
        footerLinkText="Explore our services"
        footerTo="/services"
      />
    </>
  );
}
