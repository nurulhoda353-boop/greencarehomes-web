import { motion } from "framer-motion";
import { Award, Users, HeartPulse, MapPin, type LucideIcon } from "lucide-react";
import { CountUp } from "./CountUp";

type Stat = {
  value: string;
  label: string;
  icon: LucideIcon;
};

// Conservative trust statements — no inflated/unverified numbers.
const defaultStats: Stat[] = [
  { value: "24/7", label: "Care line\n& Emergency response", icon: HeartPulse },
  { value: "Free", label: "Initial home\nassessment", icon: Award },
  { value: "100%", label: "Background-verified\ncaregivers", icon: Users },
  { value: "1", label: "Residence in\nMohammadpur, Dhaka", icon: MapPin },
];

export function StatsSection({ stats = defaultStats }: { stats?: Stat[] }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-sage/40 to-background py-20 lg:py-24">
      {/* soft dotted backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.24 0.08 150) 1px, transparent 0)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse at center, #000 35%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, #000 35%, transparent 85%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand/[0.07] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-leaf/[0.10] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-stretch sm:justify-center sm:gap-x-3 sm:gap-y-6 lg:gap-x-4">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-[22px] border border-brand-deep/[0.06] bg-white/85 px-3 py-6 text-center shadow-[0_2px_6px_rgba(17,25,23,0.03),0_18px_40px_-22px_rgba(45,125,31,0.18)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_4px_10px_rgba(17,25,23,0.04),0_28px_56px_-22px_rgba(45,125,31,0.28)] sm:w-[200px] sm:rounded-[28px] sm:px-6 sm:py-9 lg:w-[230px]"
              >
                {/* corner glow */}
                <span aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand/10 blur-2xl sm:hidden" />

                {/* icon bubble */}
                <div className="relative">
                  <span className="absolute inset-0 -m-1 rounded-full bg-brand/15 blur-md" aria-hidden />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-brand/12 ring-1 ring-brand/15 sm:h-14 sm:w-14">
                    <s.icon className="h-5 w-5 text-brand-deep sm:h-6 sm:w-6" strokeWidth={1.75} />
                  </div>
                </div>

                {/* number */}
                <div className="mt-3 font-display text-[1.85rem] font-bold leading-none tracking-[-0.04em] text-brand sm:mt-5 sm:text-[2.75rem] lg:text-[3rem]">
                  <CountUp value={s.value} />
                </div>

                {/* divider */}
                <div className="mt-2.5 h-[2px] w-6 rounded-full bg-brand/45 transition-all duration-500 group-hover:w-10 sm:mt-3 sm:w-7" />

                {/* label */}
                <p className="mt-3 whitespace-pre-line text-[10px] font-semibold uppercase tracking-[0.18em] leading-[1.5] text-charcoal/80 sm:mt-4 sm:text-[11px] sm:tracking-[0.2em]">
                  {s.label}
                </p>
              </motion.div>

              {/* dot separator between cards (not after last) */}
              {i < stats.length - 1 && (
                <span
                  aria-hidden
                  className="mx-1 hidden h-1.5 w-1.5 shrink-0 rounded-full bg-brand-deep/30 sm:mx-2 sm:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
