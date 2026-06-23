import { ShieldCheck, Award, HeartHandshake, BadgeCheck, Stethoscope, Clock4 } from "lucide-react";
import { Reveal } from "./Reveal";

const badges = [
  { Icon: ShieldCheck, label: "Licensed & insured caregivers" },
  { Icon: BadgeCheck, label: "Background-verified staff" },
  { Icon: Stethoscope, label: "Hospital-trained nurses" },
  { Icon: HeartHandshake, label: "500+ families served" },
  { Icon: Clock4, label: "24/7 emergency response" },
  { Icon: Award, label: "Award-winning care quality" },
];

export function TrustBadges() {
  return (
    <section className="relative border-y border-charcoal/5 bg-gradient-to-r from-sage via-white to-sage py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <Reveal>
          <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Why families choose Green Care Homes
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
          {badges.map(({ Icon, label }, i) => (
            <Reveal key={label} delay={i * 0.05} className="flex flex-col items-center gap-2 text-center">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand/15 to-brand/5 ring-1 ring-brand/15">
                <Icon className="h-5 w-5 text-brand-deep" strokeWidth={1.8} />
              </div>
              <span className="text-[11px] font-medium leading-tight text-charcoal/75 sm:text-xs">
                {label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
