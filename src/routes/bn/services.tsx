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
  Award,
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

const services = [
  {
    slug: "residence",
    icon: Home,
    image: svcResidenceImg,
    title: "গ্রিন লিভিং রেসিডেন্স",
    tagline: "আবাসিক অ্যাসিস্টেড লিভিং",
    desc: "উষ্ণ, পরিচ্ছন্ন আবাসিক পরিবেশে ২৪/৭ নার্সিং, পুষ্টিকর তিনবেলা খাবার, দৈনিক ক্লিনিক্যাল রাউন্ড, ফিজিওথেরাপি ও আন্তরিক সঙ্গ — মর্যাদা বজায় রেখে।",
  },
  {
    slug: "nursing",
    icon: Stethoscope,
    image: svcNursingImg,
    title: "জেন্টল নার্সিং কেয়ার",
    tagline: "বাসায় ও ক্লিনিক্যাল নার্সিং",
    desc: "সরকার-স্বীকৃত নার্স দ্বারা ঔষধ ব্যবস্থাপনা, ক্ষত পরিচর্যা, পোস্ট-অপারেটিভ রিকভারি এবং বাসায় নিরবচ্ছিন্ন রোগী পর্যবেক্ষণ।",
  },
  {
    slug: "caregiver",
    icon: HeartPulse,
    image: svcCaregiverImg,
    title: "কেয়ারগিভার হোম সার্ভিস",
    tagline: "প্রতিদিনের পার্সোনাল কেয়ার",
    desc: "প্রশিক্ষিত কেয়ারগিভার — গোসল, পোশাক পরা, হাঁটাচলায় সহায়তা, খাবার ও মমতাময় সঙ্গ — সবকিছু আপনার দরজায়।",
  },
  {
    slug: "physiotherapy",
    icon: Activity,
    image: svcPhysioImg,
    title: "বাসায় ফিজিওথেরাপি",
    tagline: "পুনর্বাসন ও মুভমেন্ট থেরাপি",
    desc: "BPT/DPT সনদপ্রাপ্ত ফিজিওথেরাপিস্ট দ্বারা স্ট্রোক রিকভারি, অর্থোপেডিক রিহ্যাব ও ব্যথা ব্যবস্থাপনা — সবই বাসার আরামে।",
  },
  {
    slug: "daycare",
    icon: Baby,
    image: svcDaycareImg,
    title: "প্রবীণ ও শিশুদের ডে কেয়ার",
    tagline: "তত্ত্বাবধানে দিনের যত্ন",
    desc: "দিনের বেলায় নিরাপদ, স্নেহময় পরিবেশে বাবা-মা ও শিশুদের জন্য সুসংগঠিত যত্ন, পুষ্টিকর খাবার ও দক্ষ তত্ত্বাবধান।",
  },
  {
    slug: "respite",
    icon: Users,
    image: svcRespiteImg,
    title: "রেসপাইট ও কম্প্যানিয়ন কেয়ার",
    tagline: "পরিবারের স্বল্পমেয়াদি স্বস্তি",
    desc: "ভ্রমণ, অসুস্থতা বা বিশ্রামের সময় বিশ্বস্ত স্বল্পমেয়াদি কেয়ারগিভার — যত্নে কোনো আপস ছাড়াই পরিবারের জন্য নিঃশ্বাস ফেলার সুযোগ।",
  },
];

const process = [
  {
    step: "০১",
    icon: Phone,
    title: "যোগাযোগ করুন",
    desc: "ফোন, WhatsApp বা ফর্ম — যেকোনো সময়। আমাদের কেয়ার অ্যাডভাইজার বিক্রয়কর্মী নন, ধৈর্য ধরে আপনার পরিস্থিতি শোনেন।",
  },
  {
    step: "০২",
    icon: ClipboardList,
    title: "ফ্রি অ্যাসেসমেন্ট",
    desc: "আমাদের ক্লিনিক্যাল লিড সরাসরি গিয়ে অথবা ভিডিও কলে রোগীর প্রয়োজন, বাসার পরিবেশ ও পরিবারের পছন্দ বোঝেন।",
  },
  {
    step: "০৩",
    icon: Sparkles,
    title: "কাস্টম কেয়ার প্ল্যান",
    desc: "স্বচ্ছ মূল্যসহ লিখিত প্ল্যান তৈরি করি। পরিবার পর্যালোচনা ও অনুমোদন করে — কোনো চাপ নেই।",
  },
  {
    step: "০৪",
    icon: HeartPulse,
    title: "যত্ন শুরু",
    desc: "ম্যাচিং, প্রশিক্ষিত কেয়ারগিভার ২৪ ঘণ্টার মধ্যে উপস্থিত। সুপারভাইজরের তত্ত্বাবধানে — সবসময় এক ফোন দূরে।",
  },
];

const plans = [
  {
    name: "হোম ভিজিট",
    badge: "প্রতি ভিজিট থেকে",
    summary: "ছোট, নির্ধারিত প্রয়োজনের জন্য — নার্সিং ভিজিট, ফিজিওথেরাপি সেশন বা ড্রেসিং।",
    includes: [
      "প্রতি ভিজিটে সনদপ্রাপ্ত পেশাদার",
      "ভাইটাল ও কেয়ার নোট পরিবারের সঙ্গে শেয়ার",
      "ব্যাকআপ কেয়ারগিভারের নিশ্চয়তা",
      "নমনীয় সময়সূচি, কোনো চুক্তি নেই",
    ],
    accent: false,
  },
  {
    name: "লাইভ-ইন কেয়ার",
    badge: "সর্বাধিক জনপ্রিয়",
    summary: "বাসায় ২৪ ঘণ্টা যত্ন। যেসব প্রবীণদের জন্য নিরবচ্ছিন্ন সহায়তা ও সঙ্গ অপরিহার্য।",
    includes: [
      "২৪/৭ প্রশিক্ষিত কেয়ারগিভার",
      "শিফট রোটেশন ও সুপারভাইজরের নিয়মিত পরিদর্শন",
      "ঔষধ ও খাবার ব্যবস্থাপনা",
      "পরিবারের জন্য নির্দিষ্ট যোগাযোগ ব্যক্তি",
    ],
    accent: true,
  },
  {
    name: "রেসিডেনশিয়াল কেয়ার",
    badge: "আমাদের রেসিডেন্সে",
    summary: "গ্রিন লিভিং রেসিডেন্সে পূর্ণাঙ্গ অ্যাসিস্টেড লিভিং — যাঁদের একটি সুসজ্জিত, তত্ত্বাবধানযুক্ত আবাস প্রয়োজন।",
    includes: [
      "একক বা শেয়ার্ড রুম",
      "অন-সাইট নার্স ও ফিজিওথেরাপি",
      "সব বেলার খাবার, বিনোদন ও পরিচ্ছন্নতা",
      "পরিবারের পরিদর্শন সবসময় স্বাগত",
    ],
    accent: false,
  },
];

const faqs = [
  {
    q: "একই কেয়ার প্ল্যানে কি একাধিক সেবা যুক্ত করা যাবে?",
    a: "অবশ্যই — এটাই আমাদের ইকোসিস্টেমের মূল কথা। একটি পরিবার চাইলে হোম নার্সিং, সাপ্তাহিক ফিজিওথেরাপি ও রেসপাইট কেয়ার — সবই একই সমন্বিত প্ল্যানে, এক সুপারভাইজারের তত্ত্বাবধানে ও একটি স্বচ্ছ ইনভয়েসে নিতে পারবেন।",
  },
  {
    q: "কত দ্রুত একজন নার্স বা কেয়ারগিভার শুরু করতে পারেন?",
    a: "ঢাকা ও পার্শ্ববর্তী জেলাগুলোতে অধিকাংশ ক্ষেত্রে অ্যাসেসমেন্টের ১২–২৪ ঘণ্টার মধ্যে কেয়ারগিভার পাঠানো সম্ভব। জরুরি পোস্ট-হাসপাতাল নার্সিং অনেক সময় একই দিনেই শুরু করা যায়।",
  },
  {
    q: "নিযুক্ত কেয়ারগিভার পছন্দ না হলে কী হবে?",
    a: "কোনো প্রশ্ন ছাড়াই আমরা বদলে দিই। প্রতিটি নিয়োগ একজন সুপারভাইজারের তত্ত্বাবধানে এবং প্রতিস্থাপনের নিশ্চয়তা সহ — পরিবারের সন্তুষ্টিই আমাদের কাছে সবচেয়ে গুরুত্বপূর্ণ।",
  },
  {
    q: "মূল্য ও অন্তর্ভুক্তি কি স্বচ্ছ?",
    a: "সবসময়। ফ্রি অ্যাসেসমেন্টের পর আমরা লিখিত কেয়ার প্ল্যান দিই — প্রতিটি সেবার মূল্য, অন্তর্ভুক্ত সুবিধা ও অপশনাল অ্যাড-অন স্পষ্টভাবে উল্লেখ থাকে। কোনো লুকানো চার্জ নেই, কখনই না।",
  },
];

const bnStats = [
  { value: "১০+", label: "বছরের\nমমতাময় সেবা", icon: Award },
  { value: "ফ্রি", label: "প্রাথমিক\nঅ্যাসেসমেন্ট", icon: Users },
  { value: "১০০%", label: "যাচাইকৃত\nকেয়ারগিভার", icon: HeartPulse },
  { value: "৭", label: "জেলায়\nসেবা প্রদান", icon: ShieldCheck },
];

export const Route = createFileRoute("/bn/services")({
  head: () => ({
    meta: [
      { title: "আমাদের সেবা — Green Care Homes" },
      {
        name: "description",
        content:
          "রেসিডেনশিয়াল কেয়ার, হোম নার্সিং, ফিজিওথেরাপি, ডে কেয়ার ও রেসপাইট সেবা — বাংলাদেশজুড়ে মর্যাদাপূর্ণ যত্নের একটি সমন্বিত ইকোসিস্টেম।",
      },
      { property: "og:title", content: "আমাদের সেবা — Green Care Homes" },
      {
        property: "og:description",
        content:
          "হোম হেলথকেয়ার ও অ্যাসিস্টেড লিভিংয়ের সমন্বিত ইকোসিস্টেম — মর্যাদা, নিরাপত্তা ও পরিবারের কথা মাথায় রেখে।",
      },
      { property: "og:url", content: `${BASE}/bn/services` },
      { property: "og:locale", content: "bn_BD" },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/bn/services` },
      { rel: "alternate", hrefLang: "en", href: `${BASE}/services` },
      { rel: "alternate", hrefLang: "bn-BD", href: `${BASE}/bn/services` },
      { rel: "alternate", hrefLang: "x-default", href: `${BASE}/services` },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] pt-28 pb-14 text-cream lg:pt-32 lg:pb-16">
        <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-cream/80 backdrop-blur-sm">
              <Leaf className="h-3.5 w-3.5 text-brand" />
              আমাদের সেবা
            </span>
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-5 font-display text-4xl font-extrabold leading-[1.15] text-cream sm:text-5xl lg:text-[3.6rem]">
            প্রিমিয়াম যত্ন,{" "}
            <span className="bg-gradient-to-r from-leaf to-cream bg-clip-text text-transparent">একটি ইকোসিস্টেমে।</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.85] text-cream/75 sm:text-base">
            রেসিডেনশিয়াল লিভিং, হোম নার্সিং, ফিজিওথেরাপি, ডে কেয়ার ও রেসপাইট — একটি বিশ্বস্ত সম্পর্কের ছায়ায় সমন্বিতভাবে।
          </motion.p>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="tel:+8801992869025" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] transition hover:-translate-y-0.5 hover:bg-brand-deep">
              <Phone className="h-4 w-4" /> কেয়ার অ্যাডভাইজারের সাথে কথা বলুন
            </a>
            <Link to="/bn/contact" className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/[0.06] px-6 py-3 text-sm font-bold text-cream backdrop-blur-sm transition hover:bg-cream/[0.1]">
              ফ্রি অ্যাসেসমেন্ট <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative bg-gradient-to-b from-background via-background to-secondary/30 py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <span className="text-[11px] font-semibold tracking-[0.14em] text-brand">— আমরা যা দিই</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.18] text-brand-deep sm:text-[2.65rem]">
              স্বতন্ত্র সেবা, ইকোসিস্টেম-ভিত্তিক চিন্তা।
            </h2>
            <p className="mt-5 text-[15px] leading-[1.9] text-muted-foreground">
              আমরা যত্নকে বিচ্ছিন্ন কোনো কাজ হিসেবে দেখি না। প্রতিটি সেবা স্বতন্ত্রভাবে যেমন সম্পূর্ণ, তেমনি সমন্বিত যত্নের যাত্রায় স্বাভাবিকভাবেই মানিয়ে যায়।
            </p>
          </motion.div>

          <motion.div {...stagger} className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.article key={s.slug} {...childFadeUp} className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-border/50 bg-white shadow-[0_18px_50px_-30px_rgba(17,25,23,0.35)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_30px_60px_-25px_rgba(76,175,47,0.3)]">
                <div className="relative h-[260px] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]" />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/15" />
                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-cream backdrop-blur-md">
                      <span className="text-brand">০{i + 1}</span>
                      <span className="h-1 w-1 rounded-full bg-brand" />
                      সেবা
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-brand ring-1 ring-white/20 backdrop-blur-md transition group-hover:bg-brand group-hover:text-cream">
                      <s.icon className="h-[18px] w-[18px]" />
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-[24px] font-extrabold leading-[1.25] text-cream drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
                      {s.title}
                    </h3>
                    <span className="mt-2 block h-[3px] w-12 rounded-full bg-brand" />
                  </div>
                </div>
                <div className="relative flex flex-1 flex-col px-6 pt-6 pb-6">
                  <p className="text-[14.5px] leading-[1.95] text-muted-foreground">{s.desc}</p>
                  <div className="mt-auto pt-6 border-t border-border/50">
                    <Link to="/bn/services/$slug" params={{ slug: s.slug }} className="group/link inline-flex items-center gap-3 text-[12px] font-bold tracking-[0.12em] text-brand-deep">
                      বিস্তারিত ও মূল্য
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

      {/* FEATURED — DARK SPLIT */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] py-20 text-cream lg:py-24">
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 h-[460px] w-[460px] rounded-full bg-brand/20 blur-[130px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 h-[460px] w-[460px] rounded-full bg-brand-deep/40 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-brand/30 via-brand-deep/10 to-transparent blur-2xl" />
              <img src={heroNurseImg} alt="গ্রিন লিভিং রেসিডেন্স — Green Care Homes" loading="lazy" className="relative w-full rounded-[32px] object-cover shadow-[0_30px_80px_-30px_rgba(20,60,30,0.30)]" style={{ aspectRatio: "4/5" }} />
              <div className="absolute -bottom-5 -right-5 rounded-2xl border border-cream/15 bg-[oklch(0.18_0.012_165)]/95 px-5 py-3 backdrop-blur-md">
                <p className="text-[10px] tracking-[0.12em] text-cream/55">ফ্ল্যাগশিপ</p>
                <p className="text-sm font-bold text-cream">গ্রিন লিভিং রেসিডেন্স</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-cream/80 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              বিশেষ সেবা
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.2] text-cream sm:text-[2.6rem]">
              ক্লিনিক্যাল নিশ্চয়তা ও বাড়ির উষ্ণতা — দুটোই এক ছাদের নিচে।
            </h2>
            <p className="mt-5 text-[15px] leading-[1.85] text-cream/75">
              মোহাম্মদপুরে অবস্থিত আমাদের ফ্ল্যাগশিপ অ্যাসিস্টেড লিভিং রেসিডেন্স — যেখানে প্রবীণরা নিরবচ্ছিন্ন যত্ন পান, অথচ ঘরের ছন্দ, মর্যাদা ও উষ্ণতা হারান না।
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { icon: Clock, label: "২৪/৭ অন-সাইট নার্সিং" },
                { icon: HeartPulse, label: "দৈনিক ক্লিনিক্যাল রাউন্ড" },
                { icon: Users, label: "বিনোদন ও সঙ্গ" },
                { icon: ShieldCheck, label: "পরিচ্ছন্নতা ও নিরাপত্তা প্রোটোকল" },
              ].map((f) => (
                <div key={f.label} className="flex items-start gap-3 rounded-[22px] border border-cream/10 bg-cream/[0.05] p-4 backdrop-blur-sm transition hover:border-brand/25 hover:bg-cream/[0.07]">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand/30 to-brand/10 text-leaf ring-1 ring-leaf/20">
                    <f.icon className="h-4 w-4" />
                  </span>
                  <span className="text-[13.5px] leading-[1.6] font-medium text-cream/85">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/bn/contact" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] transition hover:-translate-y-0.5 hover:bg-brand-deep">
                পরিদর্শনের সময় নিন <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+8801992869025" className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/[0.06] px-6 py-3 text-sm font-bold text-cream backdrop-blur-sm transition hover:bg-cream/[0.1]">
                <Phone className="h-4 w-4" /> +৮৮০ ১৯৯২-৮৬৯০২৫
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative bg-white py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold tracking-[0.14em] text-brand">— যত্ন যেভাবে শুরু হয়</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.2] text-brand-deep sm:text-[2.65rem]">
              প্রথম ফোন থেকে প্রথম ভিজিট — শান্ত, প্রিমিয়াম প্রক্রিয়া।
            </h2>
            <p className="mt-5 text-[15px] leading-[1.85] text-muted-foreground">
              লম্বা ফর্ম নেই, চাপ নেই, বিক্রয়কর্মী নেই। আপনার প্রথম ফোন থেকে আপনার দরজায় যত্ন পৌঁছানো পর্যন্ত — একটি স্পষ্ট, মানবিক পথ।
            </p>
          </motion.div>

          <motion.div {...stagger} className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent lg:block" />
            {process.map((p) => (
              <motion.div key={p.step} {...childFadeUp} className="group relative rounded-[28px] border border-border/50 bg-gradient-to-b from-white to-secondary/30 p-7 text-center transition hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-soft">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-white ring-1 ring-border">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] text-cream shadow-[0_12px_30px_-10px_rgba(20,60,30,0.35)]">
                    <p.icon className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-5 font-display text-[12px] font-bold tracking-[0.12em] text-brand">ধাপ {p.step}</p>
                <h3 className="mt-2 font-display text-[18px] font-bold text-brand-deep">{p.title}</h3>
                <p className="mt-3 text-[13.5px] leading-[1.85] text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PLANS — DARK */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] py-20 text-cream lg:py-24">
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-[420px] w-[420px] rounded-full bg-brand/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 h-[420px] w-[420px] rounded-full bg-brand-deep/40 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-cream/80 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              কেয়ার মডেল
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-cream sm:text-[2.5rem]">
              আপনার পরিবারের জন্য সঠিক মডেলটি বেছে নিন
            </h2>
            <p className="mt-4 text-[15px] leading-[1.85] text-cream/75">
              চূড়ান্ত মূল্য ফ্রি অ্যাসেসমেন্টের পর জানানো হয় — যেন তা আপনার প্রিয়জনের আসল প্রয়োজন অনুযায়ী হয়, কোনো প্রস্তুত প্যাকেজ নয়।
            </p>
          </motion.div>

          <motion.div {...stagger} className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <motion.div key={plan.name} {...childFadeUp} className={`relative flex flex-col rounded-[28px] p-8 text-center backdrop-blur-sm transition ${plan.accent ? "border border-brand/40 bg-gradient-to-b from-brand/15 to-cream/[0.04] shadow-[0_28px_60px_-25px_rgba(76,175,47,0.45)] lg:-translate-y-3" : "border border-cream/10 bg-cream/[0.05] hover:-translate-y-1.5 hover:border-brand/30 hover:bg-cream/[0.08]"}`}>
                {plan.accent ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-[10px] font-bold tracking-[0.1em] text-primary-foreground shadow-[0_10px_25px_rgba(76,175,47,0.4)]">{plan.badge}</span>
                ) : (
                  <span className="text-[10px] font-bold tracking-[0.1em] text-cream/55">{plan.badge}</span>
                )}
                <h3 className="mt-4 font-display text-2xl font-extrabold text-cream">{plan.name}</h3>
                <p className="mt-3 text-[14px] leading-[1.8] text-cream/70">{plan.summary}</p>
                <ul className="mx-auto mt-7 inline-flex flex-col gap-3 border-t border-cream/10 pt-6 text-left">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[13.5px] leading-[1.7] text-cream/85">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/bn/contact" className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${plan.accent ? "bg-brand text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] hover:-translate-y-0.5 hover:bg-brand-deep" : "border border-cream/20 bg-cream/[0.06] text-cream hover:bg-cream/[0.12]"}`}>
                  কাস্টম কোটেশন নিন <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        eyebrow="প্রশ্নোত্তর · সেবা"
        title={<>সেবা সম্পর্কে যত প্রশ্ন, <span className="italic font-light text-brand">তার স্বচ্ছ উত্তর।</span></>}
        description="সময়সূচি, প্রতিস্থাপন, একাধিক সেবা একসঙ্গে নেওয়া ও মূল্য — পরিবারগুলো বাস্তবে যেসব জিজ্ঞেস করেন।"
        image={faqCareImg}
        imageAlt="Green Care Homes — পরিবারের পাশে কেয়ার টিম"
        caption={"\u201Cএক পরিকল্পনা, এক টিম, এক শান্ত ছন্দে যত্ন।\u201D"}
        captionLabel="Green Care Homes"
        items={faqs}
        footerText="আপনার প্রশ্নের উত্তর পাননি?"
        footerLinkText="আমাদের কেয়ার টিমের সঙ্গে কথা বলুন"
        footerTo="/bn/contact"
      />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] py-20 text-cream lg:py-24">
        <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand/25 blur-[130px]" />
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-cream/80 backdrop-blur-sm">
              <MessageCircle className="h-3.5 w-3.5 text-brand" />
              কথোপকথন শুরু করুন
            </span>
          </motion.div>
          <motion.h2 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-5 font-display text-3xl font-extrabold leading-[1.2] text-cream sm:text-[2.8rem]">
            আপনার পরিবারের দৈনন্দিন জীবনে আনুন প্রিমিয়াম, সমন্বিত যত্ন।
          </motion.h2>
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="mt-5 text-[15px] leading-[1.85] text-cream/75">
            আপনার প্রিয়জনের কথা আমাদের বলুন। আমরা শুনব, সঠিক সেবার মিশ্রণ পরামর্শ দেব এবং ২৪ ঘণ্টার মধ্যে ফ্রি অ্যাসেসমেন্টের ব্যবস্থা করব।
          </motion.p>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="tel:+8801992869025" className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] transition hover:-translate-y-0.5 hover:bg-brand-deep">
              <Phone className="h-4 w-4" /> +৮৮০ ১৯৯২-৮৬৯০২৫
            </a>
            <Link to="/bn/contact" className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/[0.06] px-7 py-3.5 text-sm font-bold text-cream backdrop-blur-sm transition hover:bg-cream/[0.1]">
              ফ্রি অ্যাসেসমেন্ট বুক করুন <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <StatsSection stats={bnStats} />
    </>
  );
}
