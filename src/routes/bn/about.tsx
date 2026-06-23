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
    title: "সর্বাগ্রে সহানুভূতি",
    desc: "প্রতিটি স্পর্শ, প্রতিটি কথা — সত্যিকারের মমতায় গড়া। আমরা প্রতিটি রোগীকে পরিবারের সদস্যের মতো যত্ন করি, কারণ উষ্ণতা ছাড়া যত্ন কখনো পূর্ণ হয় না।",
  },
  {
    icon: Shield,
    title: "আপসহীন নিরাপত্তা",
    desc: "ইনফেকশন কন্ট্রোল থেকে ওষুধ ব্যবস্থাপনা — প্রতিটি ধাপে এমন কঠোর মান বজায় রাখি, যার ওপর পরিবার নির্দ্বিধায় ভরসা রাখতে পারে।",
  },
  {
    icon: Award,
    title: "সেবায় উৎকর্ষতা",
    desc: "নিয়মিত প্রশিক্ষণ, পারফরম্যান্স পর্যালোচনা ও পরিবারের ফিডব্যাক — আমাদের সেবার মান সবসময় উঁচুতে ধরে রাখে।",
  },
  {
    icon: Users,
    title: "পরিবার-কেন্দ্রিক যত্ন",
    desc: "পরিবার আমাদের কাছে দর্শক নয়, সহযাত্রী। প্রতিটি কেয়ার প্ল্যানে স্বজনদের যুক্ত রাখি, যোগাযোগ থাকে স্বচ্ছ ও খোলা।",
  },
];

const ecosystem = [
  {
    icon: Home,
    title: "গ্রিন লিভিং রেসিডেন্স",
    desc: "নিরাপদ, পরিচ্ছন্ন আবাসিক পরিবেশে ২৪/৭ নার্সিং সহায়তা ও আন্তরিক সঙ্গ।",
  },
  {
    icon: HeartPulse,
    title: "কেয়ারগিভার হোম সার্ভিস",
    desc: "ব্যক্তিগত যত্ন, চলাফেরায় সহায়তা ও মানসিক সঙ্গ — সরাসরি আপনার বাসায়।",
  },
  {
    icon: Stethoscope,
    title: "জেন্টল নার্সিং কেয়ার",
    desc: "পেশাদার নার্সদের ওষুধ ব্যবস্থাপনা, স্বাস্থ্য মনিটরিং ও হাসপাতাল-পরবর্তী রিকভারি যত্ন।",
  },
  {
    icon: Activity,
    title: "বাসায় ফিজিওথেরাপি",
    desc: "সনদপ্রাপ্ত ফিজিওথেরাপিস্টরা আপনার ঘরের আরামেই পৌঁছে দেন বিশেষায়িত পুনর্বাসন সেবা।",
  },
  {
    icon: Baby,
    title: "বয়স্ক ও শিশু ডে কেয়ার",
    desc: "সারাদিনের তত্ত্বাবধানে নিরাপদ, স্নেহময় ও সুসংগঠিত পরিবেশে যত্ন।",
  },
  {
    icon: Users,
    title: "রেস্পাইট ও কম্প্যানিয়ন কেয়ার",
    desc: "পরিবারের জন্য নির্ভরযোগ্য স্বল্পমেয়াদি বিরতি ও রোগীর জন্য মানসিক সহায়তা।",
  },
];

const faqs = [
  {
    q: "Green Care Homes কবে প্রতিষ্ঠিত হয়েছে?",
    a: "Green Care Homes ২০২৬ সালের শুরুতে একদল চিকিৎসক ও কেয়ার পেশাজীবীর হাতে গড়ে ওঠে। প্রতিষ্ঠান হিসেবে তরুণ হলেও, আমাদের প্রতিষ্ঠাতা দলের বাংলাদেশে বয়স্ক যত্ন, নার্সিং ও হোম হেলথকেয়ারে সম্মিলিতভাবে ১৫ বছরের বেশি অভিজ্ঞতা রয়েছে।",
  },
  {
    q: "আপনাদের কেয়ার ইকোসিস্টেম কেন আলাদা?",
    a: "বেশিরভাগ প্রতিষ্ঠান বিচ্ছিন্ন সেবা দেয় — কোথাও নার্স, কোথাও ফিজিওথেরাপিস্ট। আমরা একটি সংযুক্ত ইকোসিস্টেম গড়েছি যেখানে রেসিডেন্স, হোম নার্সিং, ফিজিওথেরাপি, ডে কেয়ার ও রেস্পাইট কেয়ার একই কেয়ার প্ল্যানের অধীনে চলে — পরিবার যেন একটিই যোগাযোগ পয়েন্ট পায়।",
  },
  {
    q: "আপনাদের নার্স ও কেয়ারগিভাররা কি সনদপ্রাপ্ত?",
    a: "হ্যাঁ। আমাদের প্রতিটি নার্সের রয়েছে স্বীকৃত নার্সিং সনদ, প্রতিটি ফিজিওথেরাপিস্ট BPT/DPT সনদধারী, এবং প্রতিটি কেয়ারগিভার বাসায় পাঠানোর আগে বয়স্ক যত্ন, ইনফেকশন কন্ট্রোল ও জরুরি সাড়াদান বিষয়ে আমাদের নিজস্ব প্রশিক্ষণ সম্পন্ন করেন।",
  },
  {
    q: "বাসায় নিরাপত্তা ও বিশ্বস্ততা কীভাবে নিশ্চিত করেন?",
    a: "প্রতিটি কর্মীর ব্যাকগ্রাউন্ড যাচাই ও আইডি ব্যাজ থাকে, একজন ক্লিনিক্যাল লিডের তত্ত্বাবধানে কাজ চলে। পরিচ্ছন্নতা ও ওষুধ ব্যবস্থাপনার লিখিত প্রোটোকল অনুসরণ করা হয়, পরিবারের সঙ্গে নিয়মিত যোগাযোগ রাখা হয় এবং যেকোনো অভিযোগের জন্য ২৪/৭ সরাসরি এসকেলেশন লাইন খোলা থাকে।",
  },
  {
    q: "বাংলাদেশের কোন এলাকায় আপনারা সেবা দেন?",
    a: "আমাদের সদর দপ্তর ঢাকায়, এবং বর্তমানে ঢাকা ও পার্শ্ববর্তী জেলাগুলোতে সেবা দিচ্ছি। আমাদের আবাসিক কেন্দ্রটি মোহাম্মদপুরে অবস্থিত। ২০২৬ সালজুড়ে নতুন জেলায় সম্প্রসারণ চলছে — আপনার এলাকায় সেবা পাওয়া যাবে কিনা জানতে যোগাযোগ করুন।",
  },
  {
    q: "প্রিয়জনের জন্য কেয়ার কীভাবে শুরু করব?",
    a: "একটি ফোন বা মেসেজ-ই যথেষ্ট। আমরা একজন ক্লিনিক্যাল লিডের সঙ্গে বিনামূল্যে বাসায় বা ভিডিও কলে অ্যাসেসমেন্ট সাজাই, স্বচ্ছ মূল্যে সৎ একটি কেয়ার প্ল্যান উপস্থাপন করি — এবং পরিবার নিশ্চিন্ত হলে তবেই কাজ শুরু হয়। কোনো চাপ নেই, কোনো গোপন খরচ নেই।",
  },
];

export const Route = createFileRoute("/bn/about")({
  head: () => ({
    meta: [
      { title: "আমাদের সম্পর্কে — Green Care Homes" },
      { name: "description", content: "ঢাকাভিত্তিক বিশ্বস্ত হোম হেলথকেয়ার ও অ্যাসিস্টেড লিভিং — Green Care Homes-এর যাত্রা, মূল্যবোধ ও সংযুক্ত কেয়ার ইকোসিস্টেম।" },
      { property: "og:title", content: "আমাদের সম্পর্কে — Green Care Homes" },
      { property: "og:description", content: "বাংলাদেশে চিকিৎসক-নেতৃত্বাধীন, পরিবার-কেন্দ্রিক হোম কেয়ারের নতুন মান।" },
      { property: "og:url", content: `${BASE}/bn/about` },
      { property: "og:locale", content: "bn_BD" },
      { property: "og:image", content: `${BASE}/og-cover.jpg` },
      { name: "twitter:image", content: `${BASE}/og-cover.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/bn/about` },
      { rel: "alternate", hrefLang: "bn-BD", href: `${BASE}/bn/about` },
      { rel: "alternate", hrefLang: "en", href: `${BASE}/about` },
      { rel: "alternate", hrefLang: "x-default", href: `${BASE}/about` },
    ],
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
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold tracking-wider text-cream/80 backdrop-blur-sm">
              <Leaf className="h-3.5 w-3.5 text-brand" />
              Green Care Homes সম্পর্কে
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.2] text-cream sm:text-5xl lg:text-[3.25rem]"
          >
            <span className="bg-gradient-to-r from-leaf to-cream bg-clip-text text-transparent">মমতার</span> ভিত্তিতে গড়া যত্ন,{" "}
            বিশ্বাসের ছায়ায় বেড়ে ওঠা
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base leading-[1.85] text-cream/75 sm:text-lg"
          >
            আমরা ঢাকাভিত্তিক একটি হোম হেলথকেয়ার ও অ্যাসিস্টেড লিভিং সেবা — একটি বিশ্বাসকে কেন্দ্র করে গড়া: প্রতিটি বয়োজ্যেষ্ঠ এবং প্রতিটি রোগীর অধিকার রয়েছে মর্যাদার সঙ্গে জীবন কাটানোর, পরিবারের মতো আপন যত্নের ছায়ায়।
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {[
              { icon: Award, label: "চিকিৎসক-নেতৃত্বাধীন" },
              { icon: Heart, label: "পরিবার-প্রথম যত্ন" },
              { icon: MapPin, label: "ঢাকা-ভিত্তিক" },
              { icon: Sparkles, label: "প্রতিষ্ঠা ২০২৬" },
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

      {/* ===================== OUR STORY ===================== */}
      <section className="relative bg-gradient-to-b from-background via-background to-secondary/30 py-16 lg:py-20">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <motion.div {...fadeUp} className="order-2 text-center lg:order-1 lg:text-left">
            <span className="text-[11px] font-semibold tracking-wider text-brand">— আমাদের গল্প</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.25] text-brand-deep sm:text-[2.5rem]">
              হোম কেয়ারের এক নতুন মান,{" "}
              <span className="italic font-medium text-brand">২০২৬-এ যার শুরু</span>
            </h2>
            <p className="mt-6 text-[15px] leading-[1.85] text-muted-foreground">
              Green Care Homes ২০২৬ সালের শুরুতে গড়ে ওঠে একদল কর্মরত চিকিৎসক ও কেয়ার পেশাজীবীর হাতে — যাঁরা বারবার একই শূন্যতা দেখেছেন: বাংলাদেশের পরিবারগুলো তাঁদের সবচেয়ে প্রিয়জনের জন্য নির্ভরযোগ্য, মর্যাদাপূর্ণ ও সংযুক্ত যত্ন খুঁজে পাচ্ছেন না।
            </p>
            <p className="mt-4 text-[15px] leading-[1.85] text-muted-foreground">
              আমরা প্রতিষ্ঠান হিসেবে তরুণ, তবে অভিজ্ঞতায় সমৃদ্ধ। আমাদের প্রতিষ্ঠাতা দলের রয়েছে জেরিয়াট্রিক চিকিৎসা, নার্সিং ও হোম হেলথকেয়ারে ১৫ বছরের বেশি সম্মিলিত কাজের অভিজ্ঞতা — এবং প্রথম দিন থেকেই আমরা গড়ছি একটি সংযুক্ত ইকোসিস্টেম, বিচ্ছিন্ন সেবা নয়।
            </p>

            <div className="mt-9 flex items-center justify-center gap-4 border-t border-border/50 pt-6 lg:justify-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[oklch(0.32_0.06_155)] to-[oklch(0.24_0.08_150)] text-cream shadow-[0_12px_30px_-10px_rgba(20,60,30,0.35)]">
                <Award className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-brand-deep">চিকিৎসক-প্রতিষ্ঠিত ও নেতৃত্বাধীন</p>
                <p className="text-xs text-muted-foreground">কেয়ার প্ল্যান গড়েন কর্মরত চিকিৎসা পেশাজীবীরা</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-brand/20 via-brand-deep/10 to-transparent blur-xl" />
              <img
                src={heroNurseImg}
                alt="Green Care Homes-এর মমতাময়ী কেয়ারগিভার বাসায় যত্ন দিচ্ছেন"
                loading="lazy"
                decoding="async"
                className="relative w-full rounded-[28px] object-cover shadow-soft"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-brand/20 bg-white/95 px-5 py-3 shadow-soft backdrop-blur-sm">
                <p className="text-xs font-bold text-brand-deep">প্রতিষ্ঠা ২০২৬</p>
                <p className="text-[11px] text-muted-foreground">চিকিৎসক-নেতৃত্বাধীন, পরিবার-প্রথম</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== VALUES ===================== */}
      <section className="relative bg-white py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold tracking-wider text-brand">যা আমাদের চালায়</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">আমাদের মূল্যবোধ</h2>
            <p className="mt-4 text-[15px] leading-[1.85] text-muted-foreground">
              চারটি নীতি — যা আমাদের প্রতিটি সিদ্ধান্ত, প্রতিটি কেয়ারগিভার এবং প্রতিটি যত্নের মুহূর্তকে পথ দেখায়।
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
                <p className="mt-2 text-sm leading-[1.8] text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== ECOSYSTEM — DARK ===================== */}
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
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold tracking-wider text-cream/80 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              গ্রিন কেয়ার ইকোসিস্টেম
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-cream sm:text-4xl">একটি সংযুক্ত যত্নের নেটওয়ার্ক</h2>
            <p className="mt-4 text-[15px] leading-[1.85] text-cream/70">
              আমাদের সেবাগুলো বিচ্ছিন্ন নয় — একে অপরের পরিপূরক একটি সংযুক্ত ইকোসিস্টেম। বাসার ভিজিট থেকে আবাসিক যত্ন — প্রতিটি সেবা নকশা করা হয়েছে নির্বিঘ্নে একসঙ্গে কাজ করার জন্য।
            </p>
          </motion.div>

          <motion.div {...stagger} className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((item, i) => (
              <motion.div key={item.title} {...childFadeUp} className="card-premium-dark group p-7">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/30 to-brand/10 text-leaf ring-1 ring-leaf/20 transition group-hover:scale-[1.02]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-cream">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-[1.8] text-cream/60">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute top-5 right-5 text-[11px] font-bold text-cream/20">০{i + 1}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeUp} className="mt-10 text-center">
            <Link
              to="/bn/services"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] transition hover:bg-brand-deep hover:-translate-y-0.5"
            >
              সব সেবা দেখুন <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===================== CEO SPOTLIGHT ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background py-16 lg:py-24">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[oklch(0.32_0.06_155)]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold tracking-wider text-brand">নেতৃত্ব</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">
              আমাদের <span className="italic font-light text-brand">সিইও</span>-র বার্তা
            </h2>
          </motion.div>

          <motion.div {...fadeUp} className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="relative lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand/20 via-transparent to-[oklch(0.32_0.06_155)]/20 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-border/40 bg-white shadow-[0_30px_80px_-30px_rgba(20,60,30,0.45)]">
                  <img
                    src={ceoImg}
                    alt="মোঃ শরিফুল ইসলাম — Green Care Homes-এর সিইও"
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5">
                    <p className="font-display text-lg font-bold text-cream">মোঃ শরিফুল ইসলাম</p>
                    <p className="text-[11px] font-medium tracking-wider text-cream/80">প্রতিষ্ঠাতা ও সিইও</p>
                  </div>
                </div>

                <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-border/40 bg-white px-4 py-3 shadow-soft sm:block">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-brand" />
                    <span className="text-[11px] font-semibold tracking-wider text-brand-deep">দূরদর্শী নেতৃত্ব</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-3xl border border-border/40 bg-white/80 p-7 backdrop-blur-sm sm:p-9">
                <span className="absolute -top-5 left-7 font-display text-7xl leading-none text-brand/30">&ldquo;</span>
                <p className="font-display text-xl leading-[1.7] text-brand-deep sm:text-2xl">
                  Green Care Homes-এর জন্ম একটি সরল বিশ্বাস থেকে — প্রতিটি বয়োজ্যেষ্ঠ মানুষের অধিকার আছে মর্যাদা, আরাম ও পরিবারের মতো উষ্ণ যত্নের ছায়ায় বয়সের প্রতিটি অধ্যায় পার করার।
                </p>
                <p className="mt-5 text-[15px] leading-[1.9] text-muted-foreground sm:text-base">
                  প্রতিষ্ঠাতা হিসেবে আমি অসংখ্য পরিবারের পাশে হেঁটেছি — যাঁরা তাঁদের প্রিয়জনের জীবনের সবচেয়ে কোমল অধ্যায়গুলো পেরিয়ে যাচ্ছিলেন। সেই অভিজ্ঞতা থেকেই Green Care Homes-কে আমরা শুধু একটি সেবা নয়, একটি অঙ্গীকার হিসেবে গড়েছি — প্রতিটি ভিজিট, প্রতিটি শিফট, প্রতিটি কথোপকথনে উপস্থিতি, পেশাদারিত্ব ও সত্যিকারের সহানুভূতির অঙ্গীকার।
                </p>
                <p className="mt-4 text-[15px] leading-[1.9] text-muted-foreground sm:text-base">
                  আপনার সবচেয়ে মূল্যবান মানুষটির যত্নের ভার আমাদের ওপর রাখার জন্য আন্তরিক কৃতজ্ঞতা।
                </p>

                <div className="mt-7 flex items-center gap-4 border-t border-border/40 pt-5">
                  <div className="h-px flex-1 bg-gradient-to-r from-brand/40 to-transparent" />
                  <div className="text-right">
                    <p className="font-display text-lg font-bold text-brand-deep">মোঃ শরিফুল ইসলাম</p>
                    <p className="text-[11px] font-medium tracking-wider text-brand">প্রতিষ্ঠাতা ও চিফ এক্সিকিউটিভ অফিসার</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== LEADERSHIP TEAM ===================== */}
      <section className="relative bg-gradient-to-b from-background via-background to-secondary/30 py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold tracking-wider text-brand">আমাদের মানুষ</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">নেতৃত্ব ও কেয়ার টিম</h2>
            <p className="mt-4 text-[15px] leading-[1.85] text-muted-foreground">
              ক্লিনিক্যাল দক্ষতার সঙ্গে আন্তরিক মানবিক উষ্ণতা মেশানো অভিজ্ঞ পেশাজীবীরা — যাঁরা Green Care Homes-এর যত্নকে রূপ দিচ্ছেন।
            </p>
          </motion.div>

          <motion.div {...stagger} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "ডা. এ. রহমান",
                initials: "এআর",
                role: "প্রতিষ্ঠাতা ও মেডিকেল ডিরেক্টর",
                desc: "জেরিয়াট্রিক ও ফ্যামিলি মেডিসিনে ১৫+ বছরের অভিজ্ঞতাসম্পন্ন কর্মরত চিকিৎসক। হাসপাতাল-পরবর্তী যত্ন ও বাসার জীবনের মধ্যে সেতু গড়তে Green Care Homes প্রতিষ্ঠা করেছেন।",
                since: "প্রতিষ্ঠাতা সদস্য",
              },
              {
                name: "নার্স সুলতানা জাহান",
                initials: "এসজে",
                role: "হেড অফ নার্সিং অপারেশনস",
                desc: "অস্ত্রোপচার-পরবর্তী ও প্যালিয়েটিভ কেয়ারে বিশেষজ্ঞ রেজিস্টার্ড নার্স। আমাদের নার্সিং প্রশিক্ষণ ও মান নিয়ন্ত্রণ প্রোটোকল গড়ে তুলেছেন ও পরিচালনা করছেন।",
                since: "প্রতিষ্ঠাতা সদস্য",
              },
              {
                name: "রেজাউল করিম",
                initials: "আরকে",
                role: "কেয়ার ইকোসিস্টেম ডিরেক্টর",
                desc: "হোম কেয়ার, রেসিডেন্স ও ফিজিওথেরাপি টিমের মধ্যে সমন্বয় ঘটান — যাতে প্রতিটি পরিবার একটি সংযুক্ত ও নির্বিঘ্ন কেয়ার প্ল্যানের অভিজ্ঞতা পায়।",
                since: "প্রতিষ্ঠাতা সদস্য",
              },
            ].map((person) => (
              <motion.div
                key={person.name}
                {...childFadeUp}
                className="group rounded-3xl border border-border/40 bg-gradient-to-b from-white to-secondary/40 p-7 transition hover:-translate-y-1 hover:border-brand/20 hover:shadow-soft"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] text-cream text-base font-bold shadow-[0_12px_30px_-10px_rgba(20,60,30,0.35)]">
                    {person.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-brand-deep">{person.name}</h3>
                    <p className="text-xs tracking-wider text-muted-foreground">{person.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-[1.8] text-muted-foreground">{person.desc}</p>
                <p className="mt-4 text-[11px] font-medium tracking-wider text-brand">{person.since}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <FaqSection
        eyebrow="FAQ · আমাদের সম্পর্কে"
        title={
          <>
            পরিবার যেসব প্রশ্ন{" "}
            <span className="italic font-light text-brand">আমাদের জিজ্ঞেস করে</span>
          </>
        }
        description="প্রিয়জনের জন্য যত্ন বেছে নেওয়ার সময় যে বিষয়গুলো সবচেয়ে গুরুত্বপূর্ণ — তার সৎ ও স্পষ্ট উত্তর।"
        items={faqs}
        image={faqCareImg}
        imageAlt="Green Care Homes-এ রোগীর পাশে মমতাময়ী নার্স"
        caption={"\u201Cআমরা সেই যত্ন দিই — যেমন যত্ন আমরা নিজেদের পরিবারের জন্য চাই।\u201D"}
        footerText="এখনো কোনো প্রশ্ন আছে?"
        footerLinkText="সরাসরি আমাদের জিজ্ঞেস করুন"
      />

      {/* ===================== TRUST STRIP ===================== */}
      <section className="relative bg-gradient-to-b from-secondary/30 via-background to-background py-12 lg:py-14">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...stagger} className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {[
              { icon: CheckCircle2, label: "স্বাস্থ্য মন্ত্রণালয় অনুমোদিত" },
              { icon: HeartPulse, label: "ISO-অনুপ্রাণিত হাইজিন প্রোটোকল" },
              { icon: Shield, label: "ব্যাকগ্রাউন্ড যাচাইকৃত কর্মী" },
              { icon: Clock, label: "২৪/৭ জরুরি সাড়াদান" },
            ].map((item) => (
              <motion.div key={item.label} {...childFadeUp} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <item.icon className="h-5 w-5 text-brand" />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] py-16 text-cream lg:py-20">
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-brand/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-brand-deep/30 blur-[120px]" />

        <motion.div {...fadeUp} className="relative mx-auto flex max-w-3xl flex-col items-center px-5 text-center lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold tracking-wider text-cream/80 backdrop-blur-sm">
            <Heart className="h-3.5 w-3.5 text-brand" />
            কথা শুরু করুন
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-cream sm:text-4xl">আরও জানতে চান?</h2>
          <p className="mt-4 max-w-xl text-base leading-[1.85] text-cream/75">
            প্রিয়জনের জন্য কেয়ার অপশন খুঁজছেন, কিংবা আমাদের দলের অংশ হতে চান — আমরা কথা বলতে প্রস্তুত। কোনো চাপ নয়, শুধু সৎ পরামর্শ।
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+8801992869025"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] transition hover:bg-brand-deep hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              কল করুন: ০১৯৯২-৮৬৯০২৫
            </a>
            <Link
              to="/bn/contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream/[0.08]"
            >
              যোগাযোগ করুন <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>
      <StatsSection />
    </>
  );
}
