import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import {
  ArrowRight,
  Calendar as CalendarIcon,
  CheckCircle2,
  Clock,
  Home,
  Stethoscope,
  HeartPulse,
  Activity,
  Baby,
  Users,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Leaf,
  Loader2,
  ChevronRight,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SITE_URL } from "@/config/site";

const BASE = SITE_URL;

export const Route = createFileRoute("/bn/book-appointment")({
  head: () => ({
    meta: [
      { title: "অ্যাপয়েন্টমেন্ট বুক করুন | Greencare Homes" },
      {
        name: "description",
        content:
          "আপনার প্রিয়জনের জন্য হোম কেয়ার, নার্সিং, কেয়ারগিভার, ফিজিওথেরাপি বা অ্যাসিস্টেড লিভিং সেবার অ্যাপয়েন্টমেন্ট বুক করুন Greencare Homes-এ।",
      },
      { property: "og:title", content: "অ্যাপয়েন্টমেন্ট বুক করুন | Greencare Homes" },
      {
        property: "og:description",
        content:
          "বিনামূল্যে কেয়ার পরামর্শ — সেবা ও পছন্দের তারিখ বেছে নিন, আমাদের কেয়ার কোঅর্ডিনেটর ৩০ মিনিটের মধ্যেই কল করবেন।",
      },
      { property: "og:url", content: `${BASE}/bn/book-appointment` },
      { property: "og:locale", content: "bn_BD" },
      { property: "og:image", content: `${BASE}/og-cover.jpg` },
      { name: "twitter:image", content: `${BASE}/og-cover.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/bn/book-appointment` },
      { rel: "alternate", hrefLang: "bn-BD", href: `${BASE}/bn/book-appointment` },
      { rel: "alternate", hrefLang: "en", href: `${BASE}/book-appointment` },
      { rel: "alternate", hrefLang: "x-default", href: `${BASE}/book-appointment` },
    ],
  }),
  component: BookAppointmentPage,
});

const services = [
  { slug: "residence", label: "গ্রিন লিভিং রেসিডেন্স", icon: Home },
  { slug: "nursing", label: "জেন্টল নার্সিং কেয়ার", icon: Stethoscope },
  { slug: "caregiver", label: "কেয়ারগিভার সহায়তা", icon: HeartPulse },
  { slug: "physiotherapy", label: "ফিজিওথেরাপি", icon: Activity },
  { slug: "daycare", label: "সিনিয়র ডে কেয়ার", icon: Baby },
  { slug: "respite", label: "রেস্পাইট কেয়ার", icon: Users },
] as const;

const timeSlots = [
  "সকাল ৯:০০", "সকাল ১০:০০", "সকাল ১১:০০", "দুপুর ১২:০০",
  "দুপুর ২:০০", "বিকাল ৩:০০", "বিকাল ৪:০০", "বিকাল ৫:০০",
] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const schema = z.object({
  name: z.string().trim().min(2, "অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন").max(100),
  phone: z
    .string()
    .trim()
    .min(10, "একটি সঠিক ফোন নম্বর দিন")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "ফোন নম্বরে শুধু সংখ্যা, +, - ও স্পেস ব্যবহার করুন"),
  email: z.string().trim().email("সঠিক ইমেইল ঠিকানা দিন").max(255).optional().or(z.literal("")),
  patientFor: z.enum(["self", "parent", "relative", "other"]),
  service: z.string().min(1, "অনুগ্রহ করে একটি সেবা নির্বাচন করুন"),
  date: z.date({ message: "পছন্দের একটি তারিখ বেছে নিন" }),
  time: z.string().min(1, "একটি সময় বেছে নিন"),
  address: z.string().trim().max(300).optional().or(z.literal("")),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormState = {
  name: string;
  phone: string;
  email: string;
  patientFor: "self" | "parent" | "relative" | "other";
  service: string;
  date: Date | undefined;
  time: string;
  address: string;
  notes: string;
};

function BookAppointmentPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    patientFor: "parent",
    service: "",
    date: undefined,
    time: "",
    address: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const minDate = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as string;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch("/api/public/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service,
          patient: form.patientFor,
          date: form.date ? form.date.toISOString().slice(0, 10) : "",
          time: form.time,
          address: form.address,
          notes: form.notes,
        }),
      });

      if (!response.ok) throw new Error(`Appointment submit failed: ${response.status}`);

      setSuccess(true);
      toast.success("আপনার অনুরোধ পেয়েছি। শিগগিরই কল করব।");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      toast.error("জমা দেওয়া যায়নি। অনুগ্রহ করে সরাসরি কল করুন।");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-background pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto w-[min(720px,92%)]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[36px] border border-brand/25 bg-white p-10 text-center shadow-[0_30px_80px_-30px_rgba(20,60,30,0.25)]"
          >
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand/12 text-brand-deep">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h1 className="mt-6 font-display text-3xl font-bold tracking-[-0.02em] text-brand-deep sm:text-4xl">
              আপনার ভিজিট অনুরোধ নিরাপদে আমাদের হাতে।
            </h1>
            <p className="mt-4 text-[15px] leading-[1.85] text-muted-foreground">
              ধন্যবাদ, <span className="font-semibold text-brand-deep">{form.name}</span>। আমাদের কেয়ার কোঅর্ডিনেটর{" "}
              <span className="font-semibold text-brand-deep">{form.phone}</span> নম্বরে ৩০ মিনিটের মধ্যেই কল করবেন —{" "}
              <span className="font-semibold text-brand-deep">
                {form.service && services.find((s) => s.slug === form.service)?.label}
              </span>{" "}
              সেবার জন্য আপনার{" "}
              <span className="font-semibold text-brand-deep">{form.date && format(form.date, "PPP")}</span> তারিখে{" "}
              <span className="font-semibold text-brand-deep">{form.time}</span>-এর অ্যাপয়েন্টমেন্ট নিশ্চিত করতে।
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/bn"
                className="group inline-flex items-center gap-3 rounded-full bg-brand-deep px-7 py-3.5 text-[13px] font-semibold text-cream transition-all hover:bg-brand hover:shadow-lg hover:shadow-[rgba(20,60,30,0.3)]"
              >
                হোমে ফিরুন
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+8801992869025"
                className="inline-flex items-center gap-2 rounded-full border border-brand-deep/20 bg-white px-6 py-3.5 text-[13px] font-semibold text-brand-deep transition hover:border-brand hover:text-brand"
              >
                <Phone className="h-4 w-4" />
                ০১৯৯২-৮৬৯০২৫
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] pt-28 pb-20 text-cream lg:pt-32 lg:pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.95 0.04 90) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute -right-32 top-1/4 h-[460px] w-[460px] rounded-full bg-brand/20 blur-[130px]" />
        <div aria-hidden className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-brand-deep/40 blur-[130px]" />

        <div className="relative mx-auto w-[min(1320px,92%)]">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <nav className="mb-7 inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider text-cream/60">
              <Link to="/bn" className="hover:text-cream">হোম</Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/bn/services" className="hover:text-cream">সেবা</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-cream">অ্যাপয়েন্টমেন্ট</span>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold tracking-wider text-cream/85 backdrop-blur-sm">
              <Leaf className="h-3.5 w-3.5 text-brand" /> বিনামূল্যে হোম ভিজিট
            </span>

            <h1 className="mt-6 font-display text-[2.25rem] font-bold leading-[1.2] tracking-[-0.01em] sm:text-[2.75rem] lg:text-[3.25rem]">
              এক মিনিটেই বুক করুন
              <span className="block italic font-light text-brand">আপনার কেয়ার ভিজিট।</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.85] text-cream/75 sm:text-[16px]">
              আপনার প্রিয়জনের ব্যাপারে কয়েকটি কথা জানান। একজন প্রশিক্ষিত কেয়ার কোঅর্ডিনেটর ৩০ মিনিটের মধ্যেই কল করবেন —
              কোনো অঙ্গীকার নয়, কোনো চাপ নয়, শুধু পেশাদার ও আন্তরিক পরামর্শ।
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[13px] text-cream/80">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand" /> ১০০% গোপনীয়</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-brand" /> ৩০ মিনিটে সাড়া</span>
              <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand" /> অগ্রিম পেমেন্ট নেই</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ FORM + SIDEBAR ============ */}
      <section className="relative bg-background py-16 lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, oklch(0.32 0.06 155) 1px, transparent 0)",
            backgroundSize: "22px 22px",
            maskImage: "radial-gradient(ellipse at top, #000 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at top, #000 30%, transparent 80%)",
          }}
        />

        <div className="relative mx-auto grid w-[min(1320px,92%)] gap-8 lg:grid-cols-[1.55fr_1fr]">
          {/* FORM */}
          <motion.form
            {...fadeUp}
            onSubmit={onSubmit}
            noValidate
            className="rounded-[32px] border border-border/50 bg-white p-7 shadow-[0_30px_80px_-40px_rgba(20,60,30,0.18)] sm:p-10"
          >
            {/* Step 1 — Service */}
            <Step number={1} title="সেবা নির্বাচন করুন" />
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {services.map((s) => {
                const active = form.service === s.slug;
                return (
                  <button
                    type="button"
                    key={s.slug}
                    onClick={() => set("service", s.slug)}
                    className={cn(
                      "group flex flex-col items-start gap-3 rounded-2xl border p-4 text-left transition-all",
                      active
                        ? "border-brand bg-brand/[0.06] shadow-[0_10px_30px_-15px_rgba(20,60,30,0.35)]"
                        : "border-border/70 bg-white hover:border-brand/40 hover:bg-secondary/40",
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-10 w-10 place-items-center rounded-xl transition",
                        active ? "bg-brand-deep text-cream" : "bg-secondary text-brand-deep",
                      )}
                    >
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="text-[13px] font-semibold leading-snug text-brand-deep">{s.label}</span>
                  </button>
                );
              })}
            </div>
            {errors.service && <FieldError msg={errors.service} />}

            {/* Step 2 — Patient */}
            <div className="mt-10">
              <Step number={2} title="কার জন্য যত্ন প্রয়োজন?" />
              <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {[
                  { v: "self", l: "আমার নিজের" },
                  { v: "parent", l: "মা-বাবার" },
                  { v: "relative", l: "আত্মীয়ের" },
                  { v: "other", l: "অন্য কারও" },
                ].map((o) => {
                  const active = form.patientFor === o.v;
                  return (
                    <button
                      type="button"
                      key={o.v}
                      onClick={() => set("patientFor", o.v as FormState["patientFor"])}
                      className={cn(
                        "rounded-xl border py-3 text-[13px] font-semibold transition",
                        active
                          ? "border-brand-deep bg-brand-deep text-cream"
                          : "border-border/70 bg-white text-brand-deep hover:border-brand/40",
                      )}
                    >
                      {o.l}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3 — Date / Time */}
            <div className="mt-10">
              <Step number={3} title="তারিখ ও সময় নির্বাচন করুন" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <Label>পছন্দের তারিখ</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className={cn(
                          "flex h-12 w-full items-center justify-between rounded-xl border bg-white px-4 text-left text-[13.5px] font-medium transition",
                          form.date ? "border-border text-brand-deep" : "border-border/70 text-muted-foreground",
                          errors.date && "border-destructive",
                        )}
                      >
                        {form.date ? format(form.date, "PPP") : "তারিখ বেছে নিন"}
                        <CalendarIcon className="h-4 w-4 text-brand-deep/60" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={form.date}
                        onSelect={(d) => set("date", d)}
                        disabled={(d) => d < minDate}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.date && <FieldError msg={errors.date} />}
                </div>

                <div>
                  <Label>পছন্দের সময়</Label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((t) => {
                      const active = form.time === t;
                      return (
                        <button
                          type="button"
                          key={t}
                          onClick={() => set("time", t)}
                          className={cn(
                            "rounded-lg border py-2 text-[11px] font-semibold leading-tight transition",
                            active
                              ? "border-brand-deep bg-brand-deep text-cream"
                              : "border-border/70 bg-white text-brand-deep hover:border-brand/40",
                          )}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                  {errors.time && <FieldError msg={errors.time} />}
                </div>
              </div>
            </div>

            {/* Step 4 — Your details */}
            <div className="mt-10">
              <Step number={4} title="আপনার তথ্য" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="পূর্ণ নাম *" value={form.name} onChange={(v) => set("name", v)} placeholder="যেমন: আহমেদ রহমান" error={errors.name} maxLength={100} />
                <Field label="ফোন নম্বর *" value={form.phone} onChange={(v) => set("phone", v)} placeholder="০১XXX-XXXXXX" type="tel" error={errors.phone} maxLength={20} />
                <Field label="ইমেইল (ঐচ্ছিক)" value={form.email} onChange={(v) => set("email", v)} placeholder="you@example.com" type="email" error={errors.email} maxLength={255} />
                <Field label="এলাকা / ঠিকানা (ঐচ্ছিক)" value={form.address} onChange={(v) => set("address", v)} placeholder="গুলশান, ঢাকা" error={errors.address} maxLength={300} />
              </div>
              <div className="mt-5">
                <Label>প্রয়োজনীয় যত্ন সম্পর্কে আমাদের জানান (ঐচ্ছিক)</Label>
                <textarea
                  value={form.notes}
                  maxLength={1000}
                  onChange={(e) => set("notes", e.target.value)}
                  placeholder="যেকোনো রোগ, চলাফেরার সীমাবদ্ধতা, পছন্দের কেয়ারগিভারের লিঙ্গ ইত্যাদি।"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-border/70 bg-white px-4 py-3 text-[13.5px] leading-[1.8] text-brand-deep placeholder:text-muted-foreground/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                />
                <div className="mt-1 text-right text-[11px] text-muted-foreground">{form.notes.length}/১০০০</div>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="group mt-9 inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-deep px-6 py-4 text-[13px] font-semibold tracking-wider text-cream shadow-[0_18px_45px_-12px_rgba(20,60,30,0.45)] transition-all hover:bg-brand hover:shadow-lg hover:shadow-[rgba(20,60,30,0.3)] disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> জমা হচ্ছে...
                </>
              ) : (
                <>
                  অ্যাপয়েন্টমেন্ট নিশ্চিত করুন
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              জমা দিয়ে আপনি Greencare Homes থেকে নিশ্চিতকরণ কল গ্রহণে সম্মত হচ্ছেন। আপনার তথ্য কখনোই শেয়ার করা হবে না।
            </p>
          </motion.form>

          {/* SIDEBAR */}
          <motion.aside {...fadeUp} className="flex flex-col gap-5">
            <div className="rounded-[28px] border border-border/60 bg-white p-7 shadow-[0_15px_45px_-30px_rgba(20,60,30,0.18)]">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider text-brand-deep/70">
                <span className="h-px w-6 bg-brand/40" />
                পরবর্তী ধাপগুলো
              </div>
              <ul className="mt-5 space-y-5">
                {[
                  { n: "০১", t: "৩০ মিনিটে কল", d: "একজন কেয়ার কোঅর্ডিনেটর আপনার সময় নিশ্চিত করবেন।" },
                  { n: "০২", t: "বিনামূল্যে হোম অ্যাসেসমেন্ট", d: "যত্নের প্রয়োজন ও বাসার পরিবেশ মূল্যায়ন করা হবে।" },
                  { n: "০৩", t: "ব্যক্তিকেন্দ্রিক কেয়ার প্ল্যান", d: "স্বচ্ছ মূল্যে — ২৪ ঘণ্টার মধ্যে সেবা শুরু।" },
                ].map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="font-display text-[12px] font-bold tracking-wider text-brand/70 pt-0.5">
                      {s.n}
                    </span>
                    <div>
                      <div className="text-[14px] font-semibold text-brand-deep">{s.t}</div>
                      <div className="mt-1 text-[12.5px] leading-[1.7] text-muted-foreground">{s.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[oklch(0.30_0.07_152)] to-[oklch(0.22_0.08_150)] p-7 text-cream">
              <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/20 blur-3xl" />
              <h3 className="relative font-display text-[20px] font-bold tracking-[-0.01em]">এখনই সাহায্য দরকার?</h3>
              <p className="relative mt-1.5 text-[13px] text-cream/75">আমাদের ২৪/৭ কেয়ার লাইনে কল করুন।</p>
              <a
                href="tel:+8801992869025"
                className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 text-[13px] font-semibold text-brand-deep transition hover:bg-brand hover:text-cream"
              >
                <Phone className="h-4 w-4" /> ০১৯৯২-৮৬৯০২৫
              </a>
              <div className="relative mt-6 space-y-2.5 text-[13px] text-cream/80">
                <div className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-brand" /> info@greencarehomesbd.com</div>
                <div className="flex items-center gap-2.5"><MapPin className="h-4 w-4 text-brand" /> হাউস-৭, ঢাকা উদ্যান মেইন রোড, মোহাম্মদপুর, ঢাকা</div>
              </div>
            </div>

            <div className="rounded-[28px] border border-border/60 bg-secondary/40 p-7">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider text-brand-deep">
                <ShieldCheck className="h-4 w-4 text-brand" /> ঢাকার পরিবারগুলোর বিশ্বাস
              </div>
              <p className="mt-4 font-display text-[15px] italic leading-[1.75] text-brand-deep/85">
                &ldquo;রাত ১২টায় বুক করেছিলাম — সকাল ৮টার মধ্যে কোঅর্ডিনেটর কল করেছেন, একই দিনে নার্স পাঠিয়েছেন।&rdquo;
              </p>
              <div className="mt-3 h-px w-10 bg-brand/40" />
              <div className="mt-3 text-[11px] font-semibold tracking-wider text-brand-deep/70">
                রুমানা এ. · ধানমন্ডি
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
}

function Step({ number, title }: { number: number; title: string }) {
  const bnNum = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"][number] ?? String(number);
  return (
    <div className="flex items-center gap-4">
      <span className="grid h-9 w-9 place-items-center rounded-full border border-brand/30 bg-brand/[0.08] font-display text-[13px] font-bold text-brand-deep">
        {bnNum}
      </span>
      <h2 className="font-display text-[19px] font-bold leading-snug tracking-[-0.01em] text-brand-deep sm:text-[22px]">{title}</h2>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="mb-2 text-[11px] font-semibold tracking-wider text-brand-deep/70">{children}</div>;
}

function FieldError({ msg }: { msg: string }) {
  return <div className="mt-2 text-[12px] font-medium text-destructive">{msg}</div>;
}

function Field({
  label, value, onChange, placeholder, type = "text", error, maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        value={value}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "h-12 w-full rounded-xl border bg-white px-4 text-[13.5px] font-medium text-brand-deep placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-brand/15",
          error ? "border-destructive focus:border-destructive" : "border-border/70 focus:border-brand",
        )}
      />
      {error && <FieldError msg={error} />}
    </div>
  );
}
