import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ReactNode } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export type FaqItem = { q: string; a: string };

export interface FaqSectionProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  image: string;
  imageAlt?: string;
  caption?: string;
  captionLabel?: string;
  items: FaqItem[];
  /** Footer link text + path (defaults to contact). Pass null to hide. */
  footerText?: string;
  footerLinkText?: string;
  footerTo?: string;
  hideFooter?: boolean;
}

export function FaqSection({
  eyebrow = "FAQ",
  title,
  description,
  image,
  imageAlt = "Green Care Homes",
  caption = "\u201CCare that listens \u2014 before it speaks.\u201D",
  captionLabel = "Green Care Homes",
  items,
  footerText = "Didn't find your answer?",
  footerLinkText = "Talk to our care team",
  footerTo = "/contact",
  hideFooter = false,
}: FaqSectionProps) {
  return (
    <section className="relative overflow-hidden border-y border-border/30 bg-white py-16 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.32 0.06 155) 1px, transparent 0)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse at center, #000 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, #000 40%, transparent 90%)",
        }}
      />
      <div className="pointer-events-none absolute right-[-10%] top-1/3 h-[420px] w-[420px] rounded-full bg-brand/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-deep/70">
            <span className="h-px w-8 bg-brand/40" />
            {eyebrow}
            <span className="h-px w-8 bg-brand/40" />
          </div>

          <h2 className="mt-6 font-display text-[2.25rem] font-bold leading-[1.06] tracking-[-0.02em] text-brand-deep sm:text-[2.75rem] lg:text-[3.2rem]">
            {title}
          </h2>

          {description && (
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">
              {description}
            </p>
          )}
        </motion.div>

        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.aside {...fadeUp} className="lg:col-span-5">
            <div className="media-zoom relative h-full min-h-[420px] overflow-hidden rounded-[28px]">
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/70 via-brand-deep/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="font-display text-[17px] italic leading-snug text-cream/95">
                  {caption}
                </p>
                <div className="mt-3 h-px w-10 bg-cream/40" />
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/70">
                  {captionLabel}
                </p>
              </div>
            </div>
          </motion.aside>

          <motion.div {...fadeUp} className="flex flex-col lg:col-span-7">
            <Accordion
              type="single"
              collapsible
              defaultValue="faq-0"
              className="flex flex-col gap-2"
            >
              {items.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`faq-${i}`}
                  className="group/item overflow-hidden rounded-2xl border-0 transition-all duration-300 data-[state=closed]:rounded-none data-[state=closed]:border-b data-[state=closed]:border-brand-deep/10 data-[state=open]:bg-gradient-to-br data-[state=open]:from-[oklch(0.28_0.07_152)] data-[state=open]:to-[oklch(0.22_0.08_150)] data-[state=open]:shadow-xl data-[state=open]:shadow-[rgba(20,60,30,0.25)]"
                >
                  <AccordionTrigger className="group gap-6 px-2 py-7 text-left text-[17px] font-semibold leading-snug text-brand-deep transition-all hover:no-underline data-[state=open]:px-7 data-[state=open]:pt-7 data-[state=open]:pb-5 data-[state=open]:text-cream sm:text-[18px] [&>svg]:hidden">
                    <span className="flex items-baseline gap-5 pr-2">
                      <span className="font-display text-[12px] font-bold tracking-[0.22em] text-brand/70 group-data-[state=open]:text-[oklch(0.85_0.15_150)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 transition-colors group-hover:text-brand group-data-[state=open]:text-cream">
                        {item.q}
                      </span>
                    </span>
                    <span className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border/70 text-brand-deep transition-all group-hover:border-brand group-hover:text-brand group-data-[state=open]:rotate-180 group-data-[state=open]:border-transparent group-data-[state=open]:bg-[oklch(0.85_0.15_150)] group-data-[state=open]:text-[oklch(0.22_0.08_150)]">
                      <span className="absolute h-px w-3.5 bg-current" />
                      <span className="absolute h-3.5 w-px bg-current transition-transform group-data-[state=open]:scale-y-0" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-7 pb-7 pl-[4.5rem] pr-7 text-[15px] leading-[1.85] text-cream/80">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {!hideFooter && (
              <div className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-brand-deep/10 pt-8 text-[13px] text-muted-foreground">
                <span>{footerText}</span>
                <Link
                  to={footerTo}
                  className="group inline-flex items-center gap-3 rounded-full bg-brand-deep px-7 py-3.5 text-[13px] font-semibold text-cream transition-all hover:bg-brand hover:shadow-lg hover:shadow-[rgba(20,60,30,0.3)]"
                >
                  {footerLinkText}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
