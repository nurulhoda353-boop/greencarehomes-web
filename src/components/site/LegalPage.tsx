import { motion } from "framer-motion";
import { ShieldCheck, FileText } from "lucide-react";

export type LegalSection = {
  heading: string;
  body: string | string[];
};

type Props = {
  variant: "privacy" | "terms";
  title: string;
  eyebrow: string;
  intro: string;
  updatedLabel: string;
  updatedDate: string;
  sections: LegalSection[];
  footer?: string;
};

export function LegalPage({
  variant,
  title,
  eyebrow,
  intro,
  updatedLabel,
  updatedDate,
  sections,
  footer,
}: Props) {
  const Icon = variant === "privacy" ? ShieldCheck : FileText;

  return (
    <main className="relative isolate overflow-hidden bg-cream pb-24 pt-32 text-charcoal sm:pt-40">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[24rem] w-[24rem] rounded-full bg-leaf/10 blur-[110px]" />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        {/* Eyebrow chip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-white/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-deep shadow-[0_8px_24px_-12px_rgba(76,175,47,0.45)] backdrop-blur-md">
            <Icon className="h-3.5 w-3.5 text-leaf" strokeWidth={2.2} />
            {eyebrow}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-center font-display text-4xl font-black leading-[1.1] tracking-tight text-charcoal sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>

        {/* Updated date */}
        <p className="mt-5 text-center text-[13px] text-charcoal/55">
          {updatedLabel}: <span className="font-semibold text-brand-deep">{updatedDate}</span>
        </p>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-2xl text-center text-[16px] leading-relaxed text-charcoal/75"
        >
          {intro}
        </motion.p>

        {/* Content card */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 overflow-hidden rounded-[32px] border border-leaf/15 bg-white/70 p-7 shadow-[0_30px_80px_-40px_rgba(45,125,31,0.35)] backdrop-blur-xl sm:p-10"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-leaf/60 to-transparent"
          />

          <div className="space-y-9">
            {sections.map((s, i) => (
              <section key={i}>
                <div className="flex items-start gap-3">
                  <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-leaf/25 bg-leaf/10 text-[11px] font-bold text-brand-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-[20px] font-bold leading-snug text-charcoal sm:text-[22px]">
                    {s.heading}
                  </h2>
                </div>
                <div className="mt-3 space-y-3 pl-10 text-[15px] leading-relaxed text-charcoal/75">
                  {Array.isArray(s.body)
                    ? s.body.map((p, j) => <p key={j}>{p}</p>)
                    : <p>{s.body}</p>}
                </div>
              </section>
            ))}
          </div>

          {footer && (
            <div className="mt-10 rounded-2xl border border-leaf/20 bg-leaf/[0.06] p-5 text-[14px] leading-relaxed text-charcoal/80">
              {footer}
            </div>
          )}
        </motion.article>
      </div>
    </main>
  );
}
