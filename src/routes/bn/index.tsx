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
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import physioImg from "@/assets/about-physio.jpg?format=webp&quality=80&w=1400";
import heroNurseImg from "@/assets/hero-nurse.jpg?format=webp&quality=80&w=1400";
import doctorPortrait from "@/assets/doctor-portrait.jpg?format=webp&quality=80&w=1400";
import faqPortraitImg from "@/assets/faq-portrait.jpg?format=webp&quality=80&w=1400";
import blogSeniorImg from "@/assets/blog-senior-wellness.jpg?format=webp&quality=80&w=1400";
import blogCaregiverImg from "@/assets/blog-caregiver-notes.jpg?format=webp&quality=80&w=1400";
import blogRecoveryImg from "@/assets/blog-recovery.jpg?format=webp&quality=80&w=1400";
import { CountUp } from "@/components/site/CountUp";
import { StatsSection } from "@/components/site/StatsSection";
import { FaqSection } from "@/components/site/FaqSection";
import { toast } from "sonner";
import { SITE_URL } from "@/config/site";

const BASE = SITE_URL;

export const Route = createFileRoute("/bn/")({
  head: () => ({
    meta: [
      { title: "Greencare Homes — প্রবীণ ও পরিবারের জন্য মমতাময় যত্ন" },
      {
        name: "description",
        content:
          "বাংলাদেশজুড়ে পেশাদার হোম হেলথকেয়ার, নার্সিং, ফিজিওথেরাপি ও অ্যাসিস্টেড লিভিং সেবা। প্রবীণ, রোগী ও পরিবারের জন্য ২৪/৭ মমতাময় যত্ন।",
      },
      { property: "og:title", content: "Greencare Homes — প্রবীণ ও পরিবারের জন্য মমতাময় যত্ন" },
      { property: "og:description", content: "উন্নত জীবনের জন্য নিবেদিত স্বাস্থ্যসেবা সহায়তা। বাংলাদেশজুড়ে ২৪/৭ মমতাময় যত্ন।" },
      { property: "og:url", content: `${BASE}/bn` },
      { property: "og:locale", content: "bn_BD" },
      { property: "og:image", content: `${BASE}/og-cover.jpg` },
      { name: "twitter:image", content: `${BASE}/og-cover.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/bn` },
      { rel: "alternate", hrefLang: "en", href: `${BASE}/` },
      { rel: "alternate", hrefLang: "bn-BD", href: `${BASE}/bn` },
      { rel: "alternate", hrefLang: "x-default", href: `${BASE}/` },
      { rel: "preload", as: "image", href: heroNurseImg, fetchPriority: "high" },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Home,
    title: "গ্রিন লিভিং রেসিডেন্স",
    desc: "প্রবীণদের জন্য নিরাপদ, পরিচ্ছন্ন ও আরামদায়ক আবাসিক যত্ন — প্রতিদিনের সহায়তা, আন্তরিক সঙ্গ ও প্রশান্ত জীবনযাপন।",
  },
  {
    icon: Stethoscope,
    title: "জেন্টল নার্সিং কেয়ার",
    desc: "ঔষধ ব্যবস্থাপনা, ভাইটাল মনিটরিং, ক্ষত পরিচর্যা ও হাসপাতাল-পরবর্তী সুস্থতার জন্য পেশাদার নার্সিং সহায়তা।",
  },
  {
    icon: HeartPulse,
    title: "কেয়ারগিভার হোম সার্ভিস",
    desc: "প্রশিক্ষিত কেয়ারগিভার — ব্যক্তিগত যত্ন, চলাফেরায় সহায়তা, পরিচ্ছন্নতা ও আন্তরিক সঙ্গ, ঘরের আরামে।",
  },
  {
    icon: Activity,
    title: "বাসায় ফিজিওথেরাপি",
    desc: "সার্টিফায়েড ফিজিওথেরাপিস্টদের মাধ্যমে রিহ্যাব, ব্যথা উপশম, মুভমেন্ট থেরাপি ও গাইডেড এক্সারসাইজ — বাসায় বসেই।",
  },
  {
    icon: Baby,
    title: "প্রবীণ ও শিশুদের ডে কেয়ার",
    desc: "দিনের বেলায় বিশ্বস্ত তত্ত্বাবধান ও সহায়ক যত্ন — প্রবীণ মা-বাবা ও শিশুদের জন্য নিরাপদ, যত্নশীল পরিবেশ।",
  },
  {
    icon: Users,
    title: "রেসপাইট ও কম্প্যানিয়ন কেয়ার",
    desc: "পরিবারের বিশ্রামের সময়ে স্বল্পমেয়াদি দক্ষ যত্ন — মানসিক সহায়তা, সঙ্গ ও ধারাবাহিক পরিচর্যা।",
  },
];

const reasons = [
  { icon: Award, title: "পেশাদারভাবে প্রশিক্ষিত কেয়ারগিভার", desc: "দক্ষতা ও সহানুভূতির জন্য যাচাইকৃত সার্টিফায়েড নার্স ও অ্যাটেনডেন্ট।" },
  { icon: Clock, title: "২৪/৭ যত্ন ও জরুরি সহায়তা", desc: "দিন-রাত, ছুটির দিন — সারাক্ষণ পাশে থাকার নিশ্চয়তা।" },
  { icon: Shield, title: "নিরাপদ ও পরিচ্ছন্ন পরিবেশ", desc: "কঠোর প্রটোকল, জীবাণুমুক্ত যন্ত্রপাতি ও সংক্রমণ নিয়ন্ত্রণের মান।" },
  { icon: HeartPulse, title: "ব্যক্তিকেন্দ্রিক কেয়ার প্ল্যান", desc: "প্রত্যেকের শারীরিক ও মানসিক প্রয়োজনে তৈরি বিশেষ পরিকল্পনা।" },
  { icon: Users, title: "মমতাময়, বিশ্বস্ত সেবা", desc: "মর্যাদা, শ্রদ্ধা ও ধারাবাহিকতায় গড়া উষ্ণ সম্পর্ক।" },
  { icon: Home, title: "বাসা ও আবাসিক — দুই বিকল্প", desc: "ঘরে ভিজিট অথবা আমাদের প্রশান্ত রেসিডেন্স — আপনি বেছে নিন।" },
  { icon: Sparkles, title: "সাশ্রয়ী ও নির্ভরযোগ্য সহায়তা", desc: "গুণমান বজায় রেখে স্বচ্ছ মূল্য — কোনো লুকানো চার্জ নেই।" },
  { icon: Stethoscope, title: "রোগীকেন্দ্রিক দৃষ্টিভঙ্গি", desc: "ক্লিনিক্যাল দক্ষতার সঙ্গে আন্তরিক মানবিক যত্ন।" },
];

const trustStrip = [
  { icon: Users, label: "৫০০+ পরিবারের আস্থা" },
  { icon: ShieldCheck, label: "লাইসেন্সপ্রাপ্ত কেয়ারগিভার" },
  { icon: Clock, label: "২৪/৭ অন-কল সহায়তা" },
  { icon: MapPin, label: "বাংলাদেশজুড়ে সেবা" },
];

const howItWorks = [
  {
    step: "০১",
    icon: Phone,
    title: "কল বা মেসেজ করুন",
    desc: "দিন হোক বা রাত — যেকোনো সময় যোগাযোগ করুন। আমাদের কেয়ার অ্যাডভাইজার মন দিয়ে শুনবেন, কোনো চাপ নেই।",
  },
  {
    step: "০২",
    icon: ClipboardList,
    title: "বিনামূল্যে হোম অ্যাসেসমেন্ট",
    desc: "আমরা বাসায় গিয়ে রোগীর প্রয়োজন বুঝি এবং পরিবারের সঙ্গে মিলে স্বচ্ছ একটি কেয়ার প্ল্যান তৈরি করি।",
  },
  {
    step: "০৩",
    icon: HeartPulse,
    title: "ঘরেই শুরু হয় যত্ন",
    desc: "উপযুক্ত প্রশিক্ষিত কেয়ারগিভার পৌঁছে যান — সাধারণত ২৪ ঘণ্টার মধ্যে। নিয়মিত তত্ত্বাবধান, এক কল দূরত্বে।",
  },
];

const testimonials = [
  {
    quote: "নার্সদের যত্ন ও মমতা অসাধারণ। সময়মতো ওষুধ, ফিজিওথেরাপি — সব পেয়েছি।",
    name: "ফারহানা আক্তার",
    role: "শিক্ষক",
  },
  {
    quote: "স্ট্রোক-পরবর্তী সুস্থতা ঘরে বসেই সহজ হয়েছে। ছয় মাসেই বাবা আবার হাঁটতে পারছেন।",
    name: "তানভীর হোসেন",
    role: "প্রকৌশলী",
  },
  {
    quote: "২৪/৭ কেয়ারগিভারদের প্রফেশনালিজম দেখে পুরো পরিবার নিশ্চিন্ত।",
    name: "শাহনাজ রহমান",
    role: "গৃহিণী",
  },
  {
    quote: "রেসিডেন্সটা সত্যিকারের বাড়ির মতো — পরিচ্ছন্ন, উষ্ণ আর আন্তরিক যত্নে ভরা।",
    name: "ডা. ইমরান চৌধুরী",
    role: "চিকিৎসক",
  },
  {
    quote: "মায়ের জন্য যে নার্স পেয়েছি, তিনি পরিবারের একজনের মতোই।",
    name: "নুসরাত জাহান",
    role: "ব্যাংকার",
  },
  {
    quote: "স্বচ্ছ মূল্য, প্রশিক্ষিত কেয়ারগিভার আর ঝামেলামুক্ত সেবা। অবশ্যই সুপারিশ করব।",
    name: "আরিফ মাহমুদ",
    role: "উদ্যোক্তা",
  },
];

const faqs = [
  {
    q: "কত দ্রুত একজন কেয়ারগিভার বা নার্স পাওয়া যাবে?",
    a: "ঢাকার বেশিরভাগ এলাকায় ১২–২৪ ঘণ্টার মধ্যে আমরা প্রশিক্ষিত কেয়ারগিভার পাঠাতে পারি। জরুরি নার্সিং ও হাসপাতাল-পরবর্তী যত্ন ছোট একটি অ্যাসেসমেন্ট কলের পর প্রায়শই সেদিনই শুরু করা যায়।",
  },
  {
    q: "আপনাদের কেয়ারগিভার ও নার্সরা কি যাচাইকৃত ও প্রশিক্ষিত?",
    a: "জি। প্রত্যেক সদস্যের ব্যাকগ্রাউন্ড চেক, পেশাদার সার্টিফিকেশন এবং প্রবীণ যত্ন, পরিচ্ছন্নতা প্রটোকল ও জরুরি প্রতিক্রিয়ার ওপর আমাদের অভ্যন্তরীণ প্রশিক্ষণ সম্পন্ন হওয়ার পরই নিয়োগ দেওয়া হয়।",
  },
  {
    q: "আপনারা কি ২৪/৭ লাইভ-ইন কেয়ার দেন?",
    a: "অবশ্যই। শিফট-ভিত্তিক (৮/১২ ঘণ্টা) এবং ২৪/৭ লাইভ-ইন — দুটিই আমরা দিয়ে থাকি। একজন ডেডিকেটেড সুপারভাইজার নিয়মিত খোঁজ রাখেন এবং প্রয়োজনে ব্যাকআপ কেয়ারগিভারও ব্যবস্থা করা হয়।",
  },
  {
    q: "গ্রিন লিভিং রেসিডেন্সে কী কী অন্তর্ভুক্ত?",
    a: "প্রাইভেট বা শেয়ারড রুম, তিন বেলা পুষ্টিকর খাবার ও স্ন্যাকস, দৈনিক নার্সিং রাউন্ড, ঔষধ ব্যবস্থাপনা, ফিজিওথেরাপি সেশন, পরিচ্ছন্নতা সহায়তা, বিনোদন এবং ২৪ ঘণ্টা অন-সাইট স্টাফ।",
  },
  {
    q: "মূল্য কীভাবে নির্ধারণ হয়?",
    a: "যত্নের ধরন, সময়কাল এবং সেবাটি বাসায় না আবাসিক — তার ওপর মূল্য নির্ভর করে। বিনামূল্যে অ্যাসেসমেন্টের পর আমরা লিখিতভাবে স্বচ্ছ একটি কোটেশন দিই — কোনো লুকানো চার্জ নেই।",
  },
  {
    q: "পরিবারের সদস্যরা কি যেকোনো সময় দেখা করতে পারেন?",
    a: "জি। আমরা পরিবারের সম্পৃক্ততাকে উষ্ণভাবে স্বাগত জানাই। রেসিডেন্সে ভিজিটিং আওয়ার যথেষ্ট খোলা, আর হোম কেয়ারে পরিবার সবসময় কেয়ার প্ল্যানিংয়ের অংশ।",
  },
];

const bnStats = [
  { value: "১০+", label: "বছরের\nমমতাময় যত্ন", icon: Award },
  { value: "ফ্রি", label: "প্রাথমিক\nঅ্যাসেসমেন্ট", icon: Users },
  { value: "১০০%", label: "যাচাইকৃত\nকেয়ারগিভার", icon: HeartPulse },
  { value: "৭", label: "জেলায়\nসেবা প্রদান", icon: MapPin },
];

const tips = [
  {
    tag: "প্রবীণ সুস্থতা",
    date: "১৫ মে, ২০২৬",
    read: "৪ মিনিট পড়া",
    title: "বয়স্ক বাবা-মাকে দীর্ঘদিন সুস্থ রাখতে ৫টি দৈনিক অভ্যাস",
    desc: "ছোট, ধারাবাহিক অভ্যাস — পানি পান, হালকা চলাফেরা, রোদ, সামাজিক যোগাযোগ — চুপিসারে বাবা-মায়ের জীবনে গুণগত বছর যোগ করে।",
    image: blogSeniorImg,
  },
  {
    tag: "কেয়ারগিভার নোটস",
    date: "০২ মে, ২০২৬",
    read: "৬ মিনিট পড়া",
    title: "হোম কেয়ারগিভার নিয়োগের আগে প্রতিটি পরিবারের যা জিজ্ঞেস করা উচিত",
    desc: "সঠিক প্রশ্নই সঠিক মানুষকে সামনে আনে। প্রথম কেয়ার অ্যাসেসমেন্টে আমরা যে ছোট চেকলিস্টটি পরিবারের সঙ্গে শেয়ার করি।",
    image: blogCaregiverImg,
  },
  {
    tag: "সুস্থতা পুনরুদ্ধার",
    date: "২১ এপ্রিল, ২০২৬",
    read: "৫ মিনিট পড়া",
    title: "স্ট্রোক-পরবর্তী ঘরে পুনরুদ্ধার: একটি সহজ ৩০ দিনের শুরুর পরিকল্পনা",
    desc: "ফিজিওথেরাপিস্ট-অনুমোদিত একটি কাঠামো — গতি নিয়ন্ত্রিত, নিরাপদ এবং চাপ নয়, মর্যাদাকে কেন্দ্র করে তৈরি।",
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

  const looped = [...testimonials, ...testimonials, ...testimonials];

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
            const initials = t.name.slice(0, 1);
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
            aria-label={`স্লাইড ${i + 1}-এ যান`}
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
      {/* ===================== HERO ===================== */}
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
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
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
              className="font-display text-[2.25rem] font-black leading-[1.12] tracking-[-0.03em] text-cream sm:text-[2.75rem] md:text-6xl lg:text-[4.75rem]"
            >
              আপনার প্রিয়জনের বিশ্বস্ত যত্ন
              <br />
              <span className="bg-gradient-to-r from-brand via-[oklch(0.82_0.18_140)] to-brand bg-clip-text font-light italic tracking-[-0.02em] text-transparent">
                এখান থেকেই শুরু।
              </span>
            </motion.h1>

            <p className="max-w-lg text-[17px] font-light leading-[1.8] tracking-[-0.005em] text-cream/70 lg:text-lg">
              নির্ভরযোগ্য, উষ্ণ ও পেশাদার হোমকেয়ার সেবা — যা আপনার প্রিয়জনকে ঘরেই
              নিরাপদ, আরামদায়ক ও আনন্দে রাখার জন্য তৈরি।
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/bn/services"
                className="btn-shine group inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-base font-bold text-primary-foreground shadow-2xl shadow-brand/40 transition hover:-translate-y-1 hover:bg-brand-deep"
              >
                সেবা দেখুন
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
                ভিডিও দেখুন
              </button>
            </div>
          </div>

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
                  alt="মমতাময় নার্স একজন হাস্যোজ্জ্বল প্রবীণের হাত ধরে আছেন"
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
                  <p className="text-[10px] font-bold uppercase tracking-widest text-cream/60">সার্টিফায়েড</p>
                  <p className="text-sm font-bold text-cream">প্রশিক্ষিত নার্স</p>
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
                  <p className="text-lg font-black leading-none text-cream"><CountUp value="৫,০০০" />+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-cream/60">সন্তুষ্ট পরিবার</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="relative mt-12 border-y border-cream/10 bg-cream/[0.04] backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-5 sm:py-4 lg:px-8">
            <div className="grid grid-cols-2 gap-2.5 sm:hidden">
              {trustStrip.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-xl border border-cream/10 bg-cream/[0.05] px-3 py-2.5"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-brand/20 text-brand">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[10.5px] font-bold leading-tight tracking-[0.04em] text-cream/85">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="hidden flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:flex">
              {trustStrip.map(({ icon: Icon, label }, i) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-brand/15 text-brand">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[12px] font-semibold tracking-[0.08em] text-cream/80">
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

      {/* ===================== ABOUT ===================== */}
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
                  alt="একজন ফিজিওথেরাপিস্ট প্রবীণ রোগীর সঙ্গে কাজ করছেন"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full rounded-[30px] object-cover object-bottom"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="text-center lg:col-span-6 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-background/80 px-4 py-1.5 text-[11px] font-bold tracking-[0.08em] text-brand-deep shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              আমাদের সম্পর্কে
            </span>

            <h2 className="mt-6 font-display text-4xl font-black leading-[1.15] tracking-[-0.03em] text-brand-deep sm:text-5xl lg:text-[3.25rem]">
              এমন যত্ন, যা{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-brand to-brand-deep bg-clip-text font-light italic text-transparent">
                  পরিবারের মতো
                </span>
                <span aria-hidden className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-brand/0 via-brand to-brand/0" />
              </span>{" "}
              মনে হয়।
            </h2>

            <p className="mt-6 text-[17px] leading-[1.85] text-foreground/75">
              Greencare Homes একটি নিবেদিত হোম হেলথকেয়ার ও অ্যাসিস্টেড লিভিং প্রতিষ্ঠান —
              যা বাংলাদেশের প্রবীণ, রোগী ও পরিবারের জীবনমান উন্নত করতে প্রতিশ্রুতিবদ্ধ।
            </p>
            <p className="mt-4 text-[15px] leading-[1.85] text-muted-foreground">
              আমরা বিশ্বাস করি — যত্ন মানে শুধু চিকিৎসা নয়; এটি সঙ্গ, আস্থা, স্বস্তি এবং মানুষের
              মর্যাদা রক্ষা। বাসায় হোক বা রেসিডেন্সে — প্রতিটি পরিকল্পনা সেই মানুষটিকে কেন্দ্র
              করেই তৈরি, যাঁকে আমরা সেবা দিই।
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, title: "সার্টিফায়েড কেয়ারগিভার", desc: "প্রশিক্ষিত ও যাচাইকৃত" },
                { icon: Clock, title: "২৪/৭ সহজলভ্য", desc: "সারাক্ষণ এক কল দূরে" },
                { icon: HeartPulse, title: "ব্যক্তিকেন্দ্রিক প্ল্যান", desc: "প্রতিটি গল্পের জন্য আলাদা" },
                { icon: Sparkles, title: "পরিচ্ছন্ন ও নিরাপদ", desc: "সর্বোচ্চ মানে রক্ষিত" },
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
                  <span className="text-[10px] font-bold tracking-[0.12em] text-leaf">আমাদের মিশন</span>
                </div>
                <p className="relative mt-3 text-[13px] leading-[1.7] text-cream/85">
                  মমতাময়, নির্ভরযোগ্য ও পেশাদার স্বাস্থ্যসেবা — যা মর্যাদাকে কেন্দ্রে রেখে প্রতিটি মানুষের সুস্থতা বাড়ায়।
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-secondary/70 p-5 text-brand-deep shadow-sm">
                <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-brand/15 blur-2xl" />
                <div className="relative flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-brand/15 text-brand-deep">
                    <Sparkles className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.12em] text-brand-deep">আমাদের ভিশন</span>
                </div>
                <p className="relative mt-3 text-[13px] leading-[1.7] text-foreground/75">
                  বাংলাদেশের সবচেয়ে বিশ্বস্ত হোম হেলথকেয়ার ও অ্যাসিস্টেড লিভিং প্রতিষ্ঠান হয়ে ওঠা — প্রতিটি পরিবারের জন্য, সর্বত্র।
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
              <Link
                to="/bn/about"
                className="group inline-flex items-center gap-3 rounded-full bg-brand-deep px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_18px_40px_-12px_oklch(0.52_0.16_142_/_0.55)] transition hover:-translate-y-0.5 hover:bg-brand"
              >
                আমাদের পুরো গল্প পড়ুন
                <span className="grid h-6 w-6 place-items-center rounded-full bg-cream text-brand-deep transition group-hover:rotate-45">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
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

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-cream/70 px-4 py-1.5 text-[11px] font-bold tracking-[0.08em] text-brand-deep backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              আমাদের সেবা
            </span>
            <h2 className="mt-5 font-display text-4xl font-black leading-[1.15] tracking-[-0.03em] text-charcoal sm:text-5xl lg:text-[3.25rem]">
              ব্যক্তিকেন্দ্রিক যত্ন,{" "}
              <span className="bg-gradient-to-r from-brand-deep via-brand to-brand-deep bg-clip-text text-transparent">
                মর্যাদার সঙ্গে পৌঁছে দেওয়া।
              </span>
            </h2>
            <p className="mt-5 text-[16px] font-light leading-[1.85] tracking-[-0.005em] text-muted-foreground">
              মৃদু নার্সিং থেকে বিশেষজ্ঞ থেরাপি — যত্নের একটি সম্পূর্ণ বৃত্ত,
              প্রতিটি পরিবারকে কেন্দ্র করে তৈরি।
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
                    ০{i + 1}
                  </span>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep text-primary-foreground shadow-[0_14px_28px_-10px_rgba(76,175,47,0.55)] ring-1 ring-inset ring-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]">
                    <s.icon className="h-7 w-7" />
                  </span>

                  <h3 className="mt-7 font-display text-[1.4rem] font-black leading-[1.3] tracking-[-0.02em] text-charcoal">
                    {s.title}
                  </h3>
                  <p className="mt-3 min-h-[5rem] text-[14.5px] font-light leading-[1.75] text-muted-foreground">
                    {s.desc}
                  </p>

                  <div className="mt-auto flex w-full flex-col items-center gap-3 border-t border-border/50 pt-5">
                    <span className="text-[11px] font-bold tracking-[0.08em] text-muted-foreground/70">
                      বিস্তারিত দেখুন
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

      {/* ===================== QUOTE BAND ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] py-16 text-cream lg:py-20">
        <div className="pointer-events-none absolute -left-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-brand/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-32 h-[460px] w-[460px] rounded-full bg-leaf/15 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
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
                  alt="Greencare Homes-এর প্রধান চিকিৎসকের প্রতিকৃতি"
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
                    <p className="text-[13px] font-bold text-cream">ডা. এ. রহমান</p>
                    <p className="text-[11px] font-medium tracking-[0.08em] text-cream/60">
                      প্রধান চিকিৎসক
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
                <p className="font-display text-3xl font-black text-leaf">২০+</p>
                <p className="mt-1 text-[10px] font-bold tracking-[0.12em] text-cream/65">
                  বছরের অভিজ্ঞতা
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
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-[11px] font-bold tracking-[0.08em] text-leaf backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
              আমাদের প্রধান চিকিৎসকের কথা
            </span>

            <span className="mt-6 block font-display text-[110px] leading-[0.7] text-leaf/80">
              "
            </span>

            <p className="mt-2 font-display text-[1.5rem] font-semibold leading-[1.4] tracking-[-0.01em] text-cream sm:text-[1.75rem] lg:text-[2rem]">
              মমতাময় যত্ন —{" "}
              <span className="bg-gradient-to-r from-leaf via-[oklch(0.78_0.16_150)] to-leaf bg-clip-text text-transparent">
                মর্যাদা, শ্রদ্ধা
              </span>{" "}
              ও দায়িত্বের সঙ্গে।
            </p>

            <p className="mt-6 max-w-xl text-[17px] leading-[1.85] text-cream/80 sm:text-[18px]">
              আমরা যাঁদের সেবা দিই — প্রত্যেকেই বিশ্বস্ত, ব্যক্তিকেন্দ্রিক সহায়তা প্রাপ্য,
              যা তাঁদের সুস্থতা রক্ষা করে এবং তাঁদের গল্পকে সম্মান জানায়। আমাদের টিম প্রতিটি ভিজিটে
              ক্লিনিক্যাল দক্ষতা ও আন্তরিক উষ্ণতা নিয়ে আসে — নীরবে, ধারাবাহিকভাবে, ঠিক যেমন
              যত্ন আমরা নিজের পরিবারের জন্য চাইতাম।
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <span
                      key={i}
                      className="grid h-9 w-9 place-items-center rounded-full border-2 border-[oklch(0.20_0.07_152)] bg-gradient-to-br from-brand to-brand-deep text-[11px] font-bold text-cream"
                    >
                      {["আ", "স", "র", "ম"][i - 1]}
                    </span>
                  ))}
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-cream">ঢাকার পরিবারগুলো</p>
                  <p className="text-[12px] text-cream/55">আমাদের সেবায় আস্থা রাখেন</p>
                </div>
              </div>

              <div className="h-10 w-px bg-cream/15" />

              <div className="flex items-center gap-2">
                <div className="flex gap-0.5 text-leaf">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-cream">৪.৯/৫ রেটিং</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
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
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-background/80 px-4 py-1.5 text-[11px] font-bold tracking-[0.08em] text-brand-deep backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              যেভাবে শুরু হয়
            </span>
            <h2 className="mt-6 font-display text-4xl font-black leading-[1.15] tracking-[-0.02em] text-brand-deep sm:text-5xl">
              তিনটি সহজ ধাপে{" "}
              <span className="bg-gradient-to-r from-brand to-brand-deep bg-clip-text font-light italic text-transparent">
                ঘরেই যত্ন
              </span>
              ।
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-muted-foreground">
              দীর্ঘ ফর্ম নয়, জটিল কাগজপত্র নয় — প্রথম কল থেকে যত্নের প্রথম দিন পর্যন্ত একটি
              স্পষ্ট, মানবিক পথ।
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
                <p className="mt-3 max-w-[18rem] text-[14px] leading-[1.75] text-muted-foreground">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY US ===================== */}
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
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-cream/70 px-4 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-brand-deep backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                কেন আমাদের বেছে নেবেন
              </span>
              <h2 className="mt-6 bg-gradient-to-br from-brand-deep via-charcoal to-brand-deep bg-clip-text text-4xl font-black leading-[1.15] text-transparent sm:text-5xl lg:text-[3rem]">
                এমন যত্ন,<br />যা পরিবার মনে রাখে।
              </h2>
              <p className="mt-6 text-[16px] leading-[1.85] text-foreground/70">
                আটটি প্রতিশ্রুতি — যা আমাদের প্রতিটি ভিজিট, প্রতিটি শিফট এবং প্রতিটি
                কথোপকথনকে রূপ দেয়। মেপে, উষ্ণভাবে, অটুট ধারাবাহিকতায়।
              </p>

              <div className="relative mt-10 hidden lg:block">
                <div className="pointer-events-none absolute -inset-6 rounded-[36px] bg-gradient-to-br from-brand/25 via-leaf/15 to-transparent blur-2xl" aria-hidden />
                <div className="relative overflow-hidden rounded-[28px] border border-border/60 bg-cream shadow-[0_30px_60px_-25px_rgba(17,25,23,0.35)]">
                  <img
                    src={physioImg}
                    alt="একজন মমতাময় কেয়ারগিভার প্রবীণ রোগীর পাশে"
                    loading="lazy"
                    className="h-[320px] w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-deep text-cream shadow-[0_8px_20px_-8px_rgba(76,175,47,0.7)]">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-white">লাইসেন্সপ্রাপ্ত ও বীমাকৃত যত্ন</p>
                      <p className="text-[11px] text-white/80">বাংলাদেশজুড়ে নিরীক্ষিত মান</p>
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
                        <p className="mt-1.5 text-[13px] leading-[1.75] text-muted-foreground">
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

      {/* ===================== TESTIMONIALS ===================== */}
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
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-brand backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              যাঁদের সেবা দিই, তাঁদের কণ্ঠস্বর
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.15] text-cream sm:text-5xl lg:text-[3.25rem]">
              বাংলাদেশের ঘরে ঘরে বিশ্বস্ত।
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream/70 sm:text-lg">
              সত্যিকারের পরিবারের সত্যিকারের গল্প — যে মুহূর্তগুলো আমাদের মনে করিয়ে দেয়, কেন আমরা
              এই কাজ করি।
            </p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <StatsSection stats={bnStats} />

      {/* ===================== FAQ ===================== */}
      <FaqSection
        eyebrow="প্রশ্নোত্তর · ০১ / ০৬"
        title={
          <>
            পরিবারের{" "}
            <span className="italic font-light text-brand">নীরব প্রশ্নগুলো।</span>
          </>
        }
        description="কেয়ারগিভার, মূল্য এবং প্রিয়জনকে নিরাপদ রাখার উপায় নিয়ে সৎ উত্তর — ঠিক যেমনটা পরিবারের সঙ্গে বসে কথা বলার মতো করে লেখা।"
        image={faqPortraitImg}
        imageAlt="একজন প্রবীণ ভদ্রলোক রোদে ভেজা ঘরে প্রশান্তিতে বিশ্রাম নিচ্ছেন"
        items={faqs}
        footerText="আপনার প্রশ্নের উত্তর পাননি?"
        footerLinkText="আমাদের কেয়ার টিমের সঙ্গে কথা বলুন"
        footerTo="/bn/contact"
      />

      {/* ===================== CONTACT ===================== */}
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
            <div className="text-[11px] font-semibold tracking-[0.12em] text-leaf">
              যোগাযোগ করুন
            </div>
            <h2 className="mt-4 bg-gradient-to-b from-cream to-cream/75 bg-clip-text font-display text-[2.4rem] font-bold leading-[1.15] tracking-[-0.01em] text-transparent sm:text-[3rem]">
              আমাদের সঙ্গে কথা বলুন।
            </h2>
            <p className="mt-4 text-[15px] leading-[1.8] text-cream/70">
              একটি বার্তা পাঠান — আমরা এক ঘণ্টার মধ্যেই উত্তর দেব।
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
                    body: JSON.stringify({ ...contactForm, service: "Home (BN) — যোগাযোগ" }),
                  });
                  if (!response.ok) throw new Error(`Failed: ${response.status}`);
                  setContactSent(true);
                  setContactForm({ name: "", phone: "", email: "", message: "" });
                  toast.success("বার্তা পেয়েছি — আমরা শীঘ্রই যোগাযোগ করব।");
                } catch (err) {
                  console.error(err);
                  toast.error("কিছু সমস্যা হয়েছে। অনুগ্রহ করে সরাসরি কল করুন।");
                } finally {
                  setContactSubmitting(false);
                }
              }}
              className="rounded-[24px] border border-border/60 bg-cream p-6 text-charcoal shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)] sm:p-8 lg:col-span-7"
            >
              <div className="grid gap-5">
                {[
                  { key: "name", label: "নাম", type: "text", placeholder: "আপনার নাম" },
                  { key: "phone", label: "মোবাইল", type: "tel", placeholder: "+৮৮০ ১XXX-XXXXXX" },
                  { key: "email", label: "ইমেইল", type: "email", placeholder: "you@email.com" },
                ].map((f) => (
                  <label key={f.label} className="block">
                    <span className="text-[10px] font-semibold tracking-[0.12em] text-muted-foreground">
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
                  <span className="text-[10px] font-semibold tracking-[0.12em] text-muted-foreground">
                    বার্তা
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="আমরা কীভাবে সাহায্য করতে পারি?"
                    className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent pb-2.5 text-[15px] text-charcoal placeholder:text-muted-foreground/60 focus:border-brand focus:outline-none focus:ring-0"
                  />
                </label>

                <button
                  type="submit"
                  disabled={contactSubmitting}
                  className="group mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-brand-deep disabled:opacity-60"
                >
                  {contactSubmitting ? "পাঠানো হচ্ছে…" : contactSent ? "পাঠানো হয়েছে ✓" : "বার্তা পাঠান"}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </motion.form>

            <motion.div {...fadeUp} className="lg:col-span-5">
              <ul className="space-y-5">
                {[
                  { icon: Phone, label: "ফোন", value: "+৮৮০ ১৯৯২-৮৬৯০২৫", href: "tel:+8801992869025" },
                  { icon: Mail, label: "ইমেইল", value: "info@greencarehomesbd.com", href: "mailto:info@greencarehomesbd.com" },
                  { icon: MessageCircle, label: "WhatsApp", value: "+৮৮০ ১৯৯২-৮৬৯০২৫", href: "https://wa.me/8801992869025" },
                  { icon: MapPin, label: "ঠিকানা", value: "হাউস-৭, ঢাকা উদ্যান মেইন রোড,\nমোহাম্মদপুর, ঢাকা", href: "https://maps.google.com/?q=House+7+Dhaka+Uddan+Main+Road+Mohammadpur+Dhaka" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <li key={label}>
                    <a href={href} className="group flex items-start gap-4 transition-colors hover:text-leaf">
                      <span className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-cream/15 bg-cream/5 text-leaf transition-colors group-hover:border-leaf group-hover:bg-leaf group-hover:text-charcoal">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10px] font-semibold tracking-[0.12em] text-cream/50">
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
                <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-leaf/25 blur-3xl" />
                <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-brand/30 blur-3xl" />
                <div className="relative flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-leaf" />
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.12em] text-leaf">
                    এখনই সচল · ২৪/৭
                  </span>
                </div>
                <p className="relative mt-3 font-display text-[1.35rem] font-semibold leading-snug text-cream">
                  যত্ন অপেক্ষা করে না। আমরাও না।
                </p>
                <div className="relative mt-5 grid grid-cols-3 gap-3 border-t border-cream/10 pt-5">
                  {[
                    { k: "< ১ ঘণ্টা", v: "প্রতিক্রিয়া" },
                    { k: "৫০০+", v: "পরিবার" },
                    { k: "৮+ বছর", v: "যত্নের" },
                  ].map((s) => (
                    <div key={s.v}>
                      <div className="font-display text-xl font-bold text-cream"><CountUp value={s.k} /></div>
                      <div className="mt-0.5 text-[10px] font-medium tracking-[0.08em] text-cream/55">
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

      {/* ===================== HEALTH TIPS ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/35 via-cream to-secondary/25 py-16 lg:py-20">
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[oklch(0.85_0.12_140)]/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-brand-deep">
              <BookOpen className="h-3.5 w-3.5 text-brand" />
              স্বাস্থ্য টিপস ও কেয়ার জার্নাল
            </span>
            <h2 className="mt-6 bg-gradient-to-br from-brand-deep via-charcoal to-brand-deep bg-clip-text font-display text-4xl font-bold leading-[1.15] text-transparent sm:text-5xl">
              ছোট জ্ঞান, যা দৈনিক যত্ন বদলে দেয়।
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              আমাদের নার্স, ফিজিওথেরাপিস্ট ও কেয়ারগিভারদের নোট — এই সপ্তাহেই পরিবার যা কাজে
              লাগাতে পারেন।
            </p>
            <Link
              to="/bn/blog-and-events"
              className="group mt-6 hidden items-center gap-2 rounded-full border border-brand-deep/20 px-5 py-3 text-sm font-semibold text-brand-deep transition hover:bg-brand-deep hover:text-cream lg:inline-flex"
            >
              সকল প্রবন্ধ
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
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-cream/30 bg-brand-deep/40 px-3 py-1 text-[10px] font-bold tracking-[0.08em] text-cream backdrop-blur-md">
                    {t.tag}
                  </div>
                  <div className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-cream/95 text-brand-deep shadow-lg transition-transform duration-500 group-hover:rotate-[-12deg] group-hover:scale-110">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.06em] text-muted-foreground/80">
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
                  <p className="mt-3 flex-1 text-[14px] leading-[1.8] text-muted-foreground">
                    {t.desc}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-deep">
                    প্রবন্ধটি পড়ুন
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 flex justify-center lg:hidden">
            <Link
              to="/bn/blog-and-events"
              className="group inline-flex items-center gap-2 rounded-full border border-brand-deep/20 px-5 py-3 text-sm font-semibold text-brand-deep transition hover:bg-brand-deep hover:text-cream"
            >
              সকল প্রবন্ধ
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
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
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-background/80 px-4 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-brand-deep backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-brand" />
                আলোচনা শুরু করুন
              </span>
              <h3 className="mt-6 font-display text-4xl font-black leading-[1.15] tracking-[-0.02em] text-brand-deep sm:text-5xl lg:text-[3.25rem]">
                উষ্ণতায় পৌঁছানো যত্ন —{" "}
                <span className="bg-gradient-to-r from-brand to-brand-deep bg-clip-text font-light italic text-transparent">
                  যা পাশে থাকে।
                </span>
              </h3>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                আপনার প্রিয়জনের কথা আমাদের বলুন। ২৪ ঘণ্টার মধ্যে বিনামূল্যে অ্যাসেসমেন্টের
                ব্যবস্থা করে আমরা সঠিক কেয়ারগিভার মিলিয়ে দেব — বাসায় বা আমাদের গ্রিন রেসিডেন্সে।
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] font-semibold tracking-[0.08em] text-brand-deep/70">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" />
                  ফ্রি অ্যাসেসমেন্ট
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" />
                  ২৪ ঘণ্টায় সেবা শুরু
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" />
                  লুকানো চার্জ নেই
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[28px] border border-border/60 bg-background p-7 shadow-[0_18px_45px_-25px_rgba(17,49,23,0.3)] sm:p-8">
                <div className="text-[10px] font-bold tracking-[0.14em] text-brand">
                  আমাদের সঙ্গে কথা বলুন
                </div>
                <a
                  href="tel:+8801992869025"
                  className="mt-3 block font-display text-3xl font-bold leading-tight text-brand-deep transition hover:text-brand sm:text-4xl"
                >
                  +৮৮০ ১৯৯২-৮৬৯০২৫
                </a>
                <div className="mt-1 text-[13px] text-muted-foreground">
                  ২৪/৭ সচল · বাংলা ও ইংরেজি
                </div>

                <div className="mt-7 flex flex-col gap-3">
                  <a
                    href="tel:+8801992869025"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-semibold text-cream shadow-[0_15px_40px_-15px_rgba(45,125,31,0.55)] transition hover:bg-brand"
                  >
                    <Phone className="h-4 w-4" />
                    কেয়ার টিমকে কল করুন
                  </a>
                  <Link
                    to="/bn/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-brand-deep/25 px-6 py-3.5 text-sm font-semibold text-brand-deep transition hover:border-brand-deep hover:bg-brand-deep hover:text-cream"
                  >
                    বার্তা পাঠান
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
