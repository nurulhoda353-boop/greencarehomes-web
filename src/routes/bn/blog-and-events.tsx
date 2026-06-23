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

const BASE = SITE_URL;

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
  tag: "কেয়ারগিভার নোট",
  date: "১৮ মে, ২০২৬",
  read: "৮ মিনিট পড়া",
  author: "ডা. রাশেদ করিম",
  title: "বাংলাদেশে হোম হেলথকেয়ারের নীরব পরিবর্তন — কেন পরিবারগুলো পেশাদার সেবায় ঝুঁকছে",
  excerpt:
    "ছড়িয়ে-ছিটিয়ে থাকা ফ্রিল্যান্স নার্স থেকে শুরু করে চিকিৎসক-পরিচালিত সমন্বিত কেয়ার প্ল্যান — পরিবারের বিশ্বাসযোগ্য একটি পেশায় কীভাবে হোম হেলথকেয়ার পরিণত হচ্ছে, তারই একটি গভীর পর্যালোচনা।",
  image: faqCareImg,
};

const posts = [
  {
    tag: "প্রবীণ স্বাস্থ্য",
    date: "১৫ মে, ২০২৬",
    read: "৪ মিনিট পড়া",
    title: "প্রবীণ মা-বাবাকে দীর্ঘদিন সুস্থ রাখার ৫টি দৈনন্দিন অভ্যাস",
    desc: "পানি পান, হালকা চলাফেরা, রোদ পোহানো ও পরিবারের সঙ্গে সময় — ছোট ছোট নিয়মিত অভ্যাসই প্রবীণ জীবনে মান যোগ করে।",
    image: blogSeniorImg,
  },
  {
    tag: "কেয়ারগিভার নোট",
    date: "০২ মে, ২০২৬",
    read: "৬ মিনিট পড়া",
    title: "হোম কেয়ারগিভার নিয়োগের আগে প্রতিটি পরিবারের জানা জরুরি প্রশ্নগুলো",
    desc: "সঠিক প্রশ্নই সঠিক মানুষকে চিনিয়ে দেয়। প্রথম কেয়ার অ্যাসেসমেন্টে আমরা যে চেকলিস্ট প্রতিটি পরিবারের সঙ্গে শেয়ার করি।",
    image: blogCaregiverImg,
  },
  {
    tag: "রিকভারি",
    date: "২১ এপ্রিল, ২০২৬",
    read: "৫ মিনিট পড়া",
    title: "স্ট্রোক-পরবর্তী বাসায় পুনর্বাসন: কোমল ৩০ দিনের একটি শুরুর পরিকল্পনা",
    desc: "ফিজিওথেরাপিস্ট-অনুমোদিত একটি কাঠামো — ধীরে, নিরাপদে এবং রোগীর মর্যাদাকে কেন্দ্র করে পরিবার বাসায় অনুসরণ করতে পারেন।",
    image: blogRecoveryImg,
  },
  {
    tag: "পারিবারিক যত্ন",
    date: "১০ এপ্রিল, ২০২৬",
    read: "৫ মিনিট পড়া",
    title: "নিজেকে নিঃশেষ না করে মা-বাবার যত্ন নেওয়ার উপায়",
    desc: "রেসপাইট, সীমারেখা ও ছোট ছোট রুটিন — যা পরিবারের কেয়ারগিভারকে সুস্থ রাখে, কারণ তাঁর সুস্থতাই রোগীর সুস্থতা ঠিক করে।",
    image: aboutPhysioImg,
  },
  {
    tag: "ডে কেয়ার",
    date: "২৮ মার্চ, ২০২৬",
    read: "৪ মিনিট পড়া",
    title: "নিয়মিত দিনের যত্ন কেন প্রবীণদের রাতের ঘুম ভালো করে",
    desc: "রুটিন, রোদ ও সামাজিক সম্পৃক্ততার পেছনের বিজ্ঞান — এবং কয়েক ঘণ্টার ডে কেয়ার কীভাবে বাসার সন্ধ্যাগুলো বদলে দেয়।",
    image: svcDaycareImg,
  },
  {
    tag: "পুষ্টি",
    date: "১৪ মার্চ, ২০২৬",
    read: "৬ মিনিট পড়া",
    title: "শক্ত হাড়ের জন্য বাংলাদেশি প্রবীণদের উপযোগী একটি খাদ্য পরিকল্পনা",
    desc: "ক্যালসিয়াম, ভিটামিন ডি ও প্রোটিন — পরিবারের প্রতিদিনের রান্নায় এগুলো কীভাবে আনা যায়। চিকিৎসক-অনুমোদিত, সাশ্রয়ী, বাস্তবসম্মত।",
    image: blogSeniorImg,
  },
];

const categories = [
  { icon: Heart, label: "প্রবীণ স্বাস্থ্য", count: 14 },
  { icon: Activity, label: "রিকভারি ও পুনর্বাসন", count: 9 },
  { icon: Users, label: "পারিবারিক যত্ন", count: 11 },
  { icon: HeartPulse, label: "কেয়ারগিভার নোট", count: 7 },
  { icon: BookOpen, label: "পুষ্টি", count: 6 },
  { icon: Sparkles, label: "মানসিক সুস্থতা", count: 5 },
];

const events = [
  {
    day: "১২",
    month: "জুন",
    title: "ফ্রি জেরিয়াট্রিক হেলথ ক্যাম্প — মোহাম্মদপুর",
    desc: "প্রবীণদের জন্য রক্তচাপ, সুগার ও হাড়ের ঘনত্ব পরীক্ষা। ফিজিওথেরাপিস্ট ও পুষ্টিবিদের সঙ্গে সরাসরি পরামর্শের সুযোগ।",
    location: "গ্রিন লিভিং রেসিডেন্স, মোহাম্মদপুর",
    time: "সকাল ৯টা — দুপুর ১টা",
    tag: "কমিউনিটি",
  },
  {
    day: "২৪",
    month: "জুন",
    title: "কেয়ারগিভার পারিবারিক কর্মশালা — বাসায় স্ট্রোক রিকভারি",
    desc: "স্ট্রোক-পরবর্তী প্রিয়জনের যত্ন নেওয়া পরিবারের জন্য দুই ঘণ্টার ইন্টারঅ্যাক্টিভ কর্মশালা। পরিচালনায় আমাদের ক্লিনিক্যাল লিড ও সিনিয়র ফিজিওথেরাপিস্ট।",
    location: "অনলাইন (Zoom) ও সরাসরি অংশগ্রহণ",
    time: "সন্ধ্যা ৬টা — রাত ৮টা",
    tag: "কর্মশালা",
  },
  {
    day: "০৮",
    month: "জুলাই",
    title: "বিশ্ব প্রবীণ দিবস — গ্রিন লিভিং রেসিডেন্সে ওপেন হাউস",
    desc: "রেসিডেন্স ঘুরে দেখুন, আমাদের কেয়ার টিমের সঙ্গে পরিচিত হোন, প্রবীণদের সঙ্গে আহার ভাগ করুন এবং জানুন গ্রিন কেয়ার ইকোসিস্টেম কীভাবে আপনার পরিবারকে সহায়তা করে।",
    location: "গ্রিন লিভিং রেসিডেন্স, মোহাম্মদপুর",
    time: "সকাল ১১টা — বিকাল ৪টা",
    tag: "ওপেন হাউস",
  },
];

export const Route = createFileRoute("/bn/blog-and-events")({
  head: () => ({
    meta: [
      { title: "ব্লগ ও ইভেন্ট | Green Care Homes" },
      {
        name: "description",
        content:
          "Green Care Homes-এর ব্লগ ও ইভেন্ট থেকে প্রবীণ যত্ন, হোম কেয়ার, নার্সিং, কেয়ারগিভার, ফিজিওথেরাপি ও পরিবারের জন্য প্রয়োজনীয় কেয়ার গাইড সম্পর্কে জানুন।",
      },
      { property: "og:title", content: "ব্লগ ও ইভেন্ট | Green Care Homes" },
      {
        property: "og:description",
        content:
          "প্রবীণ যত্ন, রিকভারি, কেয়ারগিভার টিপস ও পরিবারের জন্য Green Care Homes-এর সাম্প্রতিক ব্লগ ও আসন্ন ইভেন্ট।",
      },
      { property: "og:url", content: `${BASE}/bn/blog-and-events` },
      { property: "og:locale", content: "bn_BD" },
      { property: "og:image", content: `${BASE}/og-cover.jpg` },
      { name: "twitter:image", content: `${BASE}/og-cover.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/bn/blog-and-events` },
      { rel: "alternate", hrefLang: "bn-BD", href: `${BASE}/bn/blog-and-events` },
      { rel: "alternate", hrefLang: "en", href: `${BASE}/blog-and-events` },
      { rel: "alternate", hrefLang: "x-default", href: `${BASE}/blog-and-events` },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  return (
    <div lang="bn" className="font-bangla">
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
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[12px] font-semibold tracking-wide text-cream/85 backdrop-blur-sm">
              <Leaf className="h-3.5 w-3.5 text-brand" />
              ব্লগ ও ইভেন্ট
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.18] text-cream sm:text-5xl lg:text-[3.75rem]"
          >
            যত্নের গল্প, গাইড ও{" "}
            <span className="bg-gradient-to-r from-leaf to-cream bg-clip-text text-transparent italic font-light">
              পরিবারের পাশে থাকার মুহূর্ত
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-[1.85] text-cream/75 sm:text-lg"
          >
            পরিবারের জন্য বাস্তবসম্মত পরামর্শ, আমাদের কেয়ারগিভারদের সৎ অভিজ্ঞতা এবং কমিউনিটি ইভেন্টের ক্যালেন্ডার —
            সবই আমাদের ক্লিনিক্যাল টিমের লেখা ও যাচাই করা।
          </motion.p>

          <motion.div {...stagger} className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4 sm:gap-6">
            {[
              { value: "সাপ্তাহিক", label: "নতুন কেয়ার গাইড" },
              { value: "মাসিক", label: "পারিবারিক ইভেন্ট" },
              { value: "ফ্রি", label: "সকল পাঠকের জন্য" },
            ].map((s) => (
              <motion.div
                key={s.label}
                {...childFadeUp}
                className="rounded-3xl border border-cream/10 bg-cream/[0.05] px-4 py-5 backdrop-blur-sm"
              >
                <div className="text-2xl font-extrabold text-cream sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-[12px] tracking-wide text-cream/60">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== FEATURED POST — LIGHT ===================== */}
      <section className="relative bg-gradient-to-b from-background via-background to-secondary/30 py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mb-10 text-center">
            <span className="text-[12px] font-semibold tracking-wide text-brand">— ফিচার্ড</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-brand-deep sm:text-4xl">
              এই সপ্তাহের পঠনযোগ্য লেখা
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
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-1.5 text-[12px] font-bold text-brand-deep backdrop-blur-sm">
                <Tag className="h-3 w-3 text-brand" />
                {featured.tag}
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 lg:p-12">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-muted-foreground">
                <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" />{featured.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{featured.read}</span>
              </div>
              <h3 className="mt-5 text-2xl font-extrabold leading-[1.4] text-brand-deep sm:text-[1.85rem]">
                {featured.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.9] text-muted-foreground">{featured.excerpt}</p>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/50 pt-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.32_0.06_155)] to-[oklch(0.24_0.08_150)] text-cream">
                    <User className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-deep">{featured.author}</p>
                    <p className="text-[11px] tracking-wide text-muted-foreground">ক্লিনিক্যাল লিড</p>
                  </div>
                </div>
                <Link
                  to="/bn/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_12px_30px_rgba(76,175,47,0.30)] transition hover:-translate-y-0.5 hover:bg-brand-deep"
                >
                  বিস্তারিত পড়ুন <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* ===================== LATEST POSTS — WHITE ===================== */}
      <section className="relative bg-white py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-[12px] font-semibold tracking-wide text-brand">— সর্বশেষ লেখা</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-brand-deep sm:text-4xl">
              আমাদের কেয়ার টিমের নতুন লেখাগুলো
            </h2>
            <p className="mt-4 text-[15px] leading-[1.9] text-muted-foreground">
              যাঁরা প্রতিদিন পরিবারের ঘরে গিয়ে যত্ন দেন — সেই নার্স, ফিজিওথেরাপিস্ট ও কেয়ারগিভারদের সৎ ও বাস্তবসম্মত গাইড।
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
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-brand-deep backdrop-blur-sm">
                    <Tag className="h-3 w-3 text-brand" />
                    {p.tag}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-muted-foreground">
                    <span className="flex items-center gap-1.5"><CalendarDays className="h-3 w-3" />{p.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" />{p.read}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-extrabold leading-[1.5] text-brand-deep">{p.title}</h3>
                  <p className="mt-2 text-sm leading-[1.85] text-muted-foreground">{p.desc}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-4">
                    <span className="text-[12px] tracking-wide text-brand-deep/70">বিস্তারিত পড়ুন</span>
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
            <span className="text-[12px] font-semibold tracking-wide text-brand">— বিষয় অনুযায়ী খুঁজুন</span>
            <h2 className="mt-3 text-2xl font-extrabold text-brand-deep sm:text-3xl">কেয়ার টিপস ও বিভাগ</h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-[1.85] text-muted-foreground">
              আপনার পরিবার এখন যে মুহূর্তে আছে — রিকভারি, পুষ্টি, দৈনন্দিন যত্ন, বা মানসিক শান্তি — তার সঙ্গে মানানসই লেখাগুলো খুঁজে নিন।
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
                  <p className="text-sm font-bold leading-snug text-brand-deep">{c.label}</p>
                  <p className="mt-0.5 text-[11px] tracking-wide text-muted-foreground">{c.count}টি লেখা</p>
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
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[12px] font-semibold tracking-wide text-cream/85 backdrop-blur-sm">
              <CalendarDays className="h-3.5 w-3.5 text-brand" />
              আসন্ন ইভেন্ট
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-cream sm:text-4xl">
              কর্মশালা, হেলথ ক্যাম্প ও ওপেন হাউস
            </h2>
            <p className="mt-4 text-[15px] leading-[1.9] text-cream/75">
              ঢাকার পরিবারগুলোর জন্য বিনামূল্যে ও স্বল্পমূল্যের ইভেন্ট — তথ্য দিতে, পাশে থাকতে এবং আমাদের কেয়ার কমিউনিটিকে এক সুতোয় বাঁধতে।
            </p>
          </motion.div>

          <motion.div {...stagger} className="mt-12 space-y-5">
            {events.map((e) => (
              <motion.div
                key={e.title}
                {...childFadeUp}
                className="group grid grid-cols-[auto_1fr] items-start gap-5 rounded-3xl border border-cream/10 bg-cream/[0.04] p-6 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand/30 hover:bg-cream/[0.06] hover:shadow-[0_24px_55px_-25px_rgba(76,175,47,0.25)] sm:gap-8 sm:p-8 lg:grid-cols-[auto_1fr_auto]"
              >
                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep text-cream shadow-[0_18px_45px_-20px_rgba(76,175,47,0.55)] sm:h-24 sm:w-24">
                  <span className="text-3xl font-black leading-none sm:text-4xl">{e.day}</span>
                  <span className="mt-1 text-[12px] font-bold tracking-wide">{e.month}</span>
                </div>

                <div className="min-w-0">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/15 bg-cream/[0.06] px-3 py-1 text-[11px] font-bold tracking-wide text-brand">
                    <Tag className="h-3 w-3" />{e.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-extrabold leading-[1.4] text-cream sm:text-[1.5rem]">{e.title}</h3>
                  <p className="mt-2 text-sm leading-[1.9] text-cream/70">{e.desc}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-cream/65">
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-brand" />{e.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-brand" />{e.time}</span>
                  </div>
                </div>

                <Link
                  to="/bn/contact"
                  className="inline-flex items-center justify-center gap-2 self-center rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_12px_30px_rgba(76,175,47,0.30)] transition hover:-translate-y-0.5 hover:bg-brand-deep lg:self-auto"
                >
                  রেজিস্টার করুন <ArrowRight className="h-4 w-4" />
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
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-brand-deep sm:text-4xl">
                আমাদের সঙ্গে যুক্ত থাকুন
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[15px] leading-[1.9] text-muted-foreground">
                মাসে একটি যত্নশীল ইমেইল — কাজে লাগার মতো লেখা, আসন্ন ইভেন্ট ও কোমল রিমাইন্ডার। কোনো স্প্যাম নয়, কোনো বিক্রি নয়।
              </p>

              <form
                onSubmit={async (ev) => {
                  ev.preventDefault();
                  if (!email.trim() || subscribing) return;
                  setSubscribing(true);
                  try {
                    const res = await fetch("/api/public/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        name: "নিউজলেটার সাবস্ক্রাইবার",
                        phone: "-",
                        email,
                        service: "Newsletter Subscription (BN)",
                        message: "ব্লগ ও ইভেন্ট পেজ থেকে মাসিক কেয়ার নোটে সাবস্ক্রাইব করেছেন।",
                      }),
                    });
                    if (!res.ok) throw new Error(`Failed: ${res.status}`);
                    setSubscribed(true);
                    setEmail("");
                    toast.success("সাবস্ক্রাইব সম্পন্ন — ধন্যবাদ!");
                  } catch (err) {
                    console.error(err);
                    toast.error("সাবস্ক্রাইব করা যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।");
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
                  {subscribing ? "পাঠানো হচ্ছে…" : subscribed ? "সাবস্ক্রাইব সম্পন্ন!" : "সাবস্ক্রাইব করুন"} <Send className="h-4 w-4" />
                </button>
              </form>

              {subscribed && (
                <p className="mt-4 text-sm text-brand-deep">ধন্যবাদ — খুব শীঘ্রই আপনি আমাদের কাছ থেকে শুনবেন।</p>
              )}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mt-12 text-center">
            <Link
              to="/bn/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-bold text-brand-deep transition hover:border-brand/40 hover:shadow-soft"
            >
              <Phone className="h-4 w-4 text-brand" /> কেয়ার অ্যাডভাইজরের সঙ্গে কথা বলুন <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
