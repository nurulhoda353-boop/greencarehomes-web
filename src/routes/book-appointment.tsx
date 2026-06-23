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

export const Route = createFileRoute("/book-appointment")({
  head: () => ({
    meta: [
      { title: "Book a Free Home Visit — GreenCare Homes" },
      { name: "description", content: "Schedule a free care consultation with GreenCare Homes. Pick a service, choose a date, and our care coordinator will confirm within 30 minutes." },
      { property: "og:title", content: "Book a Free Home Visit — GreenCare Homes" },
      { property: "og:description", content: "Schedule a free care consultation with GreenCare Homes. Pick a service, choose a date, and our care coordinator will confirm within 30 minutes." },
      { property: "og:url", content: `${SITE_URL}/book-appointment` },
      { property: "og:image", content: `${SITE_URL}/og-cover.jpg` },
      { name: "twitter:image", content: `${SITE_URL}/og-cover.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/book-appointment` }],
  }),
  component: BookAppointmentPage,
});

const services = [
  { slug: "residence", label: "Green Living Residence", icon: Home },
  { slug: "nursing", label: "Gentle Nursing Care", icon: Stethoscope },
  { slug: "caregiver", label: "Caregiver Support", icon: HeartPulse },
  { slug: "physiotherapy", label: "Physiotherapy", icon: Activity },
  { slug: "daycare", label: "Senior Daycare", icon: Baby },
  { slug: "respite", label: "Respite Care", icon: Users },
] as const;

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(20)
    .regex(/^[0-9+\-\s()]+$/, "Phone can only contain digits, +, -, spaces"),
  email: z.string().trim().email("Enter a valid email").max(255).optional().or(z.literal("")),
  patientFor: z.enum(["self", "parent", "relative", "other"]),
  service: z.string().min(1, "Please choose a service"),
  date: z.date({ message: "Pick a preferred date" }),
  time: z.string().min(1, "Pick a time slot"),
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
        headers: {
          "Content-Type": "application/json",
        },
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

      if (!response.ok) {
        throw new Error(`Appointment submit failed: ${response.status}`);
      }

      setSuccess(true);
      toast.success("Appointment request received. We'll call you shortly.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      toast.error("Could not submit. Please call us directly.");
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
              Your visit request is in good hands.
            </h1>
            <p className="mt-4 text-[15px] leading-[1.75] text-muted-foreground">
              Thank you, <span className="font-semibold text-brand-deep">{form.name}</span>. Our care coordinator
              will call you at <span className="font-semibold text-brand-deep">{form.phone}</span> within 30 minutes
              to confirm your {form.service && services.find((s) => s.slug === form.service)?.label} consultation
              on <span className="font-semibold text-brand-deep">{form.date && format(form.date, "PPP")}</span> at{" "}
              <span className="font-semibold text-brand-deep">{form.time}</span>.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/"
                className="group inline-flex items-center gap-3 rounded-full bg-brand-deep px-7 py-3.5 text-[13px] font-semibold text-cream transition-all hover:bg-brand hover:shadow-lg hover:shadow-[rgba(20,60,30,0.3)]"
              >
                Back to Home
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+8801992869025"
                className="inline-flex items-center gap-2 rounded-full border border-brand-deep/20 bg-white px-6 py-3.5 text-[13px] font-semibold text-brand-deep transition hover:border-brand hover:text-brand"
              >
                <Phone className="h-4 w-4" />
                +880 1992-869025
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* ============ HERO — DEEP GREEN, BRAND-CONSISTENT ============ */}
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
            <nav className="mb-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/60">
              <Link to="/" className="hover:text-cream">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/services" className="hover:text-cream">Services</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-cream">Book a Visit</span>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/85 backdrop-blur-sm">
              <Leaf className="h-3.5 w-3.5 text-brand" /> Free Home Visit
            </span>

            <h1 className="mt-6 font-display text-[2.5rem] font-bold leading-[1.04] tracking-[-0.02em] sm:text-[3.25rem] lg:text-[3.75rem]">
              Book a care visit,
              <span className="block italic font-light text-brand">in under sixty seconds.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.8] text-cream/75 sm:text-[16px]">
              Tell us a little about your loved one. A trained care coordinator will call you within
              30 minutes — no commitment, no pressure, just calm guidance from people who do this every day.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[13px] text-cream/80">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand" /> 100% Confidential</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-brand" /> 30-min response</span>
              <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand" /> No upfront payment</span>
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
            <Step number={1} title="Choose a service" />
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
                    <span className="text-[13px] font-semibold leading-tight text-brand-deep">{s.label}</span>
                  </button>
                );
              })}
            </div>
            {errors.service && <FieldError msg={errors.service} />}

            {/* Step 2 — Patient */}
            <div className="mt-10">
              <Step number={2} title="Who is the care for?" />
              <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {[
                  { v: "self", l: "Myself" },
                  { v: "parent", l: "Parent" },
                  { v: "relative", l: "Relative" },
                  { v: "other", l: "Other" },
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
              <Step number={3} title="Pick date & time" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <Label>Preferred date</Label>
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
                        {form.date ? format(form.date, "PPP") : "Select date"}
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
                  <Label>Preferred time</Label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((t) => {
                      const active = form.time === t;
                      return (
                        <button
                          type="button"
                          key={t}
                          onClick={() => set("time", t)}
                          className={cn(
                            "rounded-lg border py-2 text-[11px] font-semibold transition",
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
              <Step number={4} title="Your details" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full name *" value={form.name} onChange={(v) => set("name", v)} placeholder="e.g. Ahmed Rahman" error={errors.name} maxLength={100} />
                <Field label="Phone number *" value={form.phone} onChange={(v) => set("phone", v)} placeholder="+880 1XXX-XXXXXX" type="tel" error={errors.phone} maxLength={20} />
                <Field label="Email (optional)" value={form.email} onChange={(v) => set("email", v)} placeholder="you@example.com" type="email" error={errors.email} maxLength={255} />
                <Field label="Area / Address (optional)" value={form.address} onChange={(v) => set("address", v)} placeholder="Mohammadpur, Dhaka" error={errors.address} maxLength={300} />
              </div>
              <div className="mt-5">
                <Label>Tell us about the care needed (optional)</Label>
                <textarea
                  value={form.notes}
                  maxLength={1000}
                  onChange={(e) => set("notes", e.target.value)}
                  placeholder="Any medical conditions, mobility needs, preferred caregiver gender, etc."
                  rows={4}
                  className="w-full resize-none rounded-xl border border-border/70 bg-white px-4 py-3 text-[13.5px] text-brand-deep placeholder:text-muted-foreground/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                />
                <div className="mt-1 text-right text-[11px] text-muted-foreground">{form.notes.length}/1000</div>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="group mt-9 inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-deep px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-cream shadow-[0_18px_45px_-12px_rgba(20,60,30,0.45)] transition-all hover:bg-brand hover:shadow-lg hover:shadow-[rgba(20,60,30,0.3)] disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                </>
              ) : (
                <>
                  Confirm Appointment
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              By submitting, you agree to receive a confirmation call from GreenCare. We never share your data.
            </p>
          </motion.form>

          {/* SIDEBAR */}
          <motion.aside {...fadeUp} className="flex flex-col gap-5">
            <div className="rounded-[28px] border border-border/60 bg-white p-7 shadow-[0_15px_45px_-30px_rgba(20,60,30,0.18)]">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-deep/70">
                <span className="h-px w-6 bg-brand/40" />
                What happens next
              </div>
              <ul className="mt-5 space-y-5">
                {[
                  { n: "01", t: "We call within 30 min", d: "A care coordinator confirms your slot." },
                  { n: "02", t: "Free home assessment", d: "We evaluate care needs & environment." },
                  { n: "03", t: "Personalised care plan", d: "Transparent pricing — start within 24 hrs." },
                ].map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="font-display text-[12px] font-bold tracking-[0.22em] text-brand/70 pt-0.5">
                      {s.n}
                    </span>
                    <div>
                      <div className="text-[14px] font-semibold text-brand-deep">{s.t}</div>
                      <div className="mt-1 text-[12.5px] leading-[1.6] text-muted-foreground">{s.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[oklch(0.30_0.07_152)] to-[oklch(0.22_0.08_150)] p-7 text-cream">
              <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/20 blur-3xl" />
              <h3 className="relative font-display text-[20px] font-bold tracking-[-0.01em]">Need help now?</h3>
              <p className="relative mt-1.5 text-[13px] text-cream/75">Call our 24/7 care line.</p>
              <a
                href="tel:+8801992869025"
                className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 text-[13px] font-semibold text-brand-deep transition hover:bg-brand hover:text-cream"
              >
                <Phone className="h-4 w-4" /> +880 1992-869025
              </a>
              <div className="relative mt-6 space-y-2.5 text-[13px] text-cream/80">
                <div className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-brand" /> info@greencarehomesbd.com</div>
                <div className="flex items-center gap-2.5"><MapPin className="h-4 w-4 text-brand" /> House-7, Dhaka Uddan Main Road, Mohammadpur, Dhaka</div>
              </div>
            </div>

            <div className="rounded-[28px] border border-border/60 bg-secondary/40 p-7">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-deep">
                <ShieldCheck className="h-4 w-4 text-brand" /> Trusted by Dhaka families
              </div>
              <p className="mt-4 font-display text-[15px] italic leading-[1.65] text-brand-deep/85">
                &ldquo;Booked at midnight, our coordinator called by 8 AM with a nurse on the way the same day.&rdquo;
              </p>
              <div className="mt-3 h-px w-10 bg-brand/40" />
              <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-deep/70">
                Rumana A. · Dhanmondi
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
}

function Step({ number, title }: { number: number; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="grid h-9 w-9 place-items-center rounded-full border border-brand/30 bg-brand/[0.08] font-display text-[13px] font-bold text-brand-deep">
        {number}
      </span>
      <h2 className="font-display text-[20px] font-bold tracking-[-0.01em] text-brand-deep sm:text-[22px]">{title}</h2>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-deep/70">{children}</div>;
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
