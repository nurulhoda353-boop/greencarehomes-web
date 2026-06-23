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

const BASE = SITE_URL;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const channels = [
  { icon: Phone, label: "কল · ২৪/৭", value: "০১৯৯২-৮৬৯০২৫", href: "tel:+8801992869025" },
  { icon: MessageCircle, label: "হোয়াটসঅ্যাপ", value: "০১৯৯২-৮৬৯০২৫", href: "https://wa.me/8801992869025" },
  { icon: Mail, label: "ইমেইল", value: "info@greencarehomesbd.com", href: "mailto:info@greencarehomesbd.com" },
  { icon: MapPin, label: "ভিজিট করুন", value: "মোহাম্মদপুর, ঢাকা-১২০৭", href: "https://maps.google.com/?q=Dhaka+Uddan+Mohammadpur+Dhaka" },
];

const hours = [
  { label: "কেয়ার লাইন", value: "২৪ / ৭" },
  { label: "অফিস ভিজিট", value: "শনি–বৃহস্পতি · সকাল ৯টা – সন্ধ্যা ৭টা" },
  { label: "রেসিডেন্স ভিজিট", value: "প্রতিদিন · সকাল ১০টা – রাত ৮টা" },
];

const faqs = [
  {
    q: "বিনামূল্যে অ্যাসেসমেন্টের জন্য কত দ্রুত কেউ আসতে পারেন?",
    a: "ঢাকা ও আশপাশের এলাকায় আপনার প্রথম কলের ২৪ ঘণ্টার মধ্যেই সাধারণত আমাদের ক্লিনিক্যাল লিড পৌঁছে যান। ভিডিও অ্যাসেসমেন্ট প্রায়ই একই দিনে সাজানো সম্ভব।",
  },
  {
    q: "প্রথম পরামর্শ কি সত্যিই বিনামূল্যে?",
    a: "হ্যাঁ — সম্পূর্ণ বিনামূল্যে। ফোনে পরামর্শ এবং বাসায় গিয়ে অ্যাসেসমেন্ট দুটোই ফ্রি, কোনো বাধ্যবাধকতা নেই, ফলোআপের চাপও নেই। পরিবার প্রস্তুত হলে তবেই আপনি এগোবেন।",
  },
  {
    q: "জরুরি সময়ে আপনাদের সবচেয়ে দ্রুত কীভাবে পাওয়া যায়?",
    a: "সরাসরি কেয়ার লাইনে কল করুন — এটি ২৪/৭ চালু থাকে। জরুরি নয় এমন বিষয়ের জন্য হোয়াটসঅ্যাপই দ্রুততম মাধ্যম; কাগজপত্র সংক্রান্ত বিস্তারিত আলোচনার জন্য ইমেইল সবচেয়ে উপযুক্ত।",
  },
  {
    q: "সিদ্ধান্তের আগে পরিবারের সদস্য কি রেসিডেন্স ভিজিট করতে পারেন?",
    a: "অবশ্যই। আমরা পরিবারকে গ্রিন লিভিং রেসিডেন্স সরাসরি দেখে যেতে উৎসাহিত করি — টিমের সঙ্গে পরিচয় হবে, রুমগুলো দেখবেন, যেকোনো প্রশ্ন করতে পারবেন। অ্যাপয়েন্টমেন্ট বাধ্যতামূলক নয়, তবে আগে থেকে একবার কল করে এলে আমরা আরও সুন্দরভাবে আপনাকে অভ্যর্থনা জানাতে পারব।",
  },
];

export const Route = createFileRoute("/bn/contact")({
  head: () => ({
    meta: [
      { title: "যোগাযোগ | Green Care Homes" },
      {
        name: "description",
        content:
          "Green Care Homes-এর সঙ্গে যোগাযোগ করুন হোম কেয়ার, নার্সিং, কেয়ারগিভার, ফিজিওথেরাপি, অ্যাসিস্টেড লিভিং ও ডে কেয়ার সেবার জন্য।",
      },
      { property: "og:title", content: "যোগাযোগ | Green Care Homes" },
      { property: "og:description", content: "কল, মেসেজ বা সরাসরি ভিজিট — আমাদের কেয়ার পরামর্শকরা ২৪/৭ পাশে আছেন।" },
      { property: "og:url", content: `${BASE}/bn/contact` },
      { property: "og:locale", content: "bn_BD" },
      { property: "og:image", content: `${BASE}/og-cover.jpg` },
      { name: "twitter:image", content: `${BASE}/og-cover.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/bn/contact` },
      { rel: "alternate", hrefLang: "bn-BD", href: `${BASE}/bn/contact` },
      { rel: "alternate", hrefLang: "en", href: `${BASE}/contact` },
      { rel: "alternate", hrefLang: "x-default", href: `${BASE}/contact` },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  return (
    <>
      {/* ===================== HERO ===================== */}
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
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold tracking-wider text-cream/80 backdrop-blur-sm">
              <Leaf className="h-3.5 w-3.5 text-brand" />
              যোগাযোগ করুন
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mx-auto mt-6 font-display text-4xl font-extrabold leading-[1.2] text-cream sm:text-5xl lg:text-[3.25rem]"
          >
            যখনই পরিবারের প্রয়োজন,{" "}
            <span className="bg-gradient-to-r from-leaf to-cream bg-clip-text text-transparent italic font-light">
              আমরা পাশে আছি
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-base leading-[1.85] text-cream/75 sm:text-lg"
          >
            একটি কল, একটি মেসেজ — আসল কেয়ার পরামর্শকের সঙ্গে স্বস্তিদায়ক এক কথোপকথন।
            কোনো কল সেন্টার নয়, কোনো স্ক্রিপ্ট নয়, কোনো চাপ নয়।
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
              <Phone className="h-4 w-4" /> ০১৯৯২-৮৬৯০২৫
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cream/80 underline-offset-4 transition hover:text-cream hover:underline"
            >
              অথবা লিখে পাঠান <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===================== FORM + SIDEBAR ===================== */}
      <section id="contact-form" className="relative bg-gradient-to-b from-background to-secondary/30 py-20 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold tracking-wider text-brand">— বিনামূল্যে অ্যাসেসমেন্ট বুক করুন</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">
              আপনার পরিবারের কথা জানান
            </h2>
            <p className="mt-4 text-[15px] leading-[1.85] text-muted-foreground">
              কয়েকটি তথ্য শেয়ার করুন — কয়েক ঘণ্টার মধ্যে, সাধারণত একই দিনেই, একজন কেয়ার পরামর্শক আপনার সঙ্গে যোগাযোগ করবেন।
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
                  toast.success("বার্তা পেয়েছি — শিগগিরই যোগাযোগ করব।");
                } catch (err) {
                  console.error(err);
                  toast.error("কিছু একটা সমস্যা হয়েছে। অনুগ্রহ করে সরাসরি কল করুন।");
                } finally {
                  setSubmitting(false);
                }
              }}
              className="rounded-[28px] border border-border/50 bg-white p-5 shadow-soft sm:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                <label className="block">
                  <span className="text-[11px] font-bold tracking-wider text-brand-deep">আপনার নাম</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="পূর্ণ নাম"
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-brand-deep outline-none placeholder:text-muted-foreground focus:border-brand focus:ring-4 focus:ring-brand/15"
                  />
                </label>
                <label className="block">
                  <span className="text-[11px] font-bold tracking-wider text-brand-deep">ফোন নম্বর</span>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="০১XXX-XXXXXX"
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-brand-deep outline-none placeholder:text-muted-foreground focus:border-brand focus:ring-4 focus:ring-brand/15"
                  />
                </label>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5">
                <label className="block">
                  <span className="text-[11px] font-bold tracking-wider text-brand-deep">ইমেইল (ঐচ্ছিক)</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-brand-deep outline-none placeholder:text-muted-foreground focus:border-brand focus:ring-4 focus:ring-brand/15"
                  />
                </label>
                <label className="block">
                  <span className="text-[11px] font-bold tracking-wider text-brand-deep">আগ্রহী সেবা</span>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-brand-deep outline-none focus:border-brand focus:ring-4 focus:ring-brand/15"
                  >
                    <option value="">সেবা নির্বাচন করুন</option>
                    <option>কেয়ারগিভার হোম সার্ভিস</option>
                    <option>জেন্টল নার্সিং কেয়ার</option>
                    <option>বাসায় ফিজিওথেরাপি</option>
                    <option>বয়স্ক ও শিশু ডে কেয়ার</option>
                    <option>গ্রিন লিভিং রেসিডেন্স</option>
                    <option>রেস্পাইট ও কম্প্যানিয়ন কেয়ার</option>
                    <option>নিশ্চিত নই — পরামর্শ দিন</option>
                  </select>
                </label>
              </div>

              <label className="mt-4 block sm:mt-5">
                <span className="text-[11px] font-bold tracking-wider text-brand-deep">আমরা কীভাবে সাহায্য করতে পারি?</span>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="আপনার প্রিয়জনের পরিস্থিতি সম্পর্কে কয়েকটি কথা — বয়স, শারীরিক অবস্থা, কেমন সহায়তা খুঁজছেন।"
                  className="mt-2 w-full rounded-xl border border-border bg-white p-4 text-sm text-brand-deep outline-none placeholder:text-muted-foreground focus:border-brand focus:ring-4 focus:ring-brand/15"
                />
              </label>

              <div className="mt-6 flex flex-col-reverse items-stretch gap-4 sm:mt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 text-brand" />
                  আপনার তথ্য সম্পূর্ণ গোপন থাকবে — শুধু যোগাযোগের জন্য ব্যবহৃত হবে।
                </p>
                <button
                  type="submit"
                  disabled={submitting || sent}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] transition hover:-translate-y-0.5 hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {sent ? "বার্তা পাঠানো হয়েছে!" : submitting ? "পাঠানো হচ্ছে…" : "বার্তা পাঠান"} <Send className="h-4 w-4" />
                </button>
              </div>

              {sent && (
                <p className="mt-5 flex items-center gap-2 rounded-xl bg-brand-soft px-4 py-3 text-sm text-brand-deep">
                  <CheckCircle2 className="h-4 w-4 text-brand" />
                  ধন্যবাদ — শিগগিরই একজন কেয়ার পরামর্শক আপনাকে কল করবেন।
                </p>
              )}
            </motion.form>

            {/* Sidebar */}
            <motion.aside {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="space-y-5">
              <div className="rounded-[28px] border border-border/50 bg-white p-5 shadow-soft sm:p-6">
                <span className="text-[11px] font-semibold tracking-wider text-brand">— সরাসরি যোগাযোগ</span>
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
                          <p className="text-[10px] font-semibold tracking-wider text-muted-foreground">{c.label}</p>
                          <p className="mt-0.5 break-words text-[13px] font-bold text-brand-deep sm:text-sm">{c.value}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-brand" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-border/50 bg-secondary/40 p-5 sm:p-6">
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider text-brand">
                  <Clock className="h-3 w-3" /> সময়সূচি
                </span>
                <ul className="mt-4 space-y-3">
                  {hours.map((h) => (
                    <li key={h.label} className="flex items-baseline justify-between gap-4 border-b border-border/50 pb-3 last:border-0 last:pb-0">
                      <span className="text-[12px] tracking-wider text-muted-foreground">{h.label}</span>
                      <span className="text-right text-[13px] font-semibold text-brand-deep">{h.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ===================== MAP — DARK ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] py-20 text-cream lg:py-24">
        <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full bg-brand/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-brand-deep/30 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold tracking-wider text-cream/80 backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              আমাদের রেসিডেন্স ভিজিট করুন
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-cream sm:text-4xl">
              গ্রিন লিভিং রেসিডেন্স, মোহাম্মদপুর
            </h2>
            <p className="mt-4 text-[15px] leading-[1.85] text-cream/70">
              এসে দেখে যান আমাদের ঘর, পরিচিত হোন টিমের সঙ্গে, আমাদের বয়োজ্যেষ্ঠদের সঙ্গে এক কাপ চায়ে কাটান কিছুটা সময়।
              পরিবারকে আমরা প্রতিদিন উষ্ণভাবে স্বাগত জানাই — আগে থেকে এক কল করে এলে আমরা আরও ভালোভাবে আপনাকে অভ্যর্থনা জানাতে পারব।
            </p>

            <ul className="mt-7 space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                হাউস-৭, ঢাকা উদ্যান মেইন রোড, মোহাম্মদপুর, ঢাকা
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                পরিবারের ভিজিট প্রতিদিন, সকাল ১০:০০ – রাত ৮:০০
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="https://maps.google.com/?q=House+7+Dhaka+Uddan+Main+Road+Mohammadpur+Dhaka"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] transition hover:-translate-y-0.5 hover:bg-brand-deep"
              >
                Google Maps-এ দেখুন <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-brand/30 via-brand-deep/15 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-cream/10 bg-cream/[0.04] shadow-[0_30px_90px_-32px_rgba(0,0,0,0.65)] backdrop-blur-md">
              <iframe
                title="Green Care Homes অবস্থান — মোহাম্মদপুর, ঢাকা"
                src="https://www.google.com/maps?q=House+7+Dhaka+Uddan+Main+Road+Mohammadpur+Dhaka&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full border-0 sm:h-[420px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <FaqSection
        eyebrow="FAQ · যোগাযোগের আগে"
        title={
          <>
            প্রথম কলের আগে কিছু{" "}
            <span className="italic font-light text-brand">দ্রুত উত্তর।</span>
          </>
        }
        description="যোগাযোগের আগে পরিবার সাধারণত যেসব প্রশ্ন করে — যাতে কথোপকথন শুরু হয় ঠিক যেখানে শুরু হওয়া উচিত।"
        image={faqCareImg}
        imageAlt="Green Care Homes-এর কেয়ার পরামর্শক একটি পরিবারের সঙ্গে কথা বলছেন"
        caption={"\u201Cএকটি স্বস্তিদায়ক কথোপকথন থেকেই শুরু হয় প্রতিটি ভালো কেয়ার প্ল্যান।\u201D"}
        items={faqs}
        footerText="সরাসরি কথা বলতে চান?"
        footerLinkText="আমাদের সেবা দেখুন"
        footerTo="/bn/services"
      />
    </>
  );
}
