import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Animated count-up that parses a value string like "5,000+", "4.9", "10+", "7"
 * and animates from 0 → number on first scroll into view. Suffixes and
 * separators are preserved verbatim.
 */
export function CountUp({
  value,
  duration = 1.8,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState<string>("");

  // Parse leading number (supports decimals & thousands separators).
  // Also supports Bengali numerals (০-৯) by transliterating to ASCII for
  // parsing while preserving the original glyphs for display.
  const bnDigits = "০১২৩৪৫৬৭৮৯";
  const isBn = /[\u09E6-\u09EF]/.test(value);
  const asciiValue = isBn
    ? value.replace(/[\u09E6-\u09EF]/g, (d) => String(bnDigits.indexOf(d)))
    : value;
  const match = asciiValue.match(/^([\d.,]+)(.*)$/);
  const raw = match ? match[1].replace(/,/g, "") : "";
  const suffix = match ? match[2] : "";
  const target = parseFloat(raw);
  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  const hasSeparator = match ? match[1].includes(",") : false;

  useEffect(() => {
    if (reduce || !inView || !isFinite(target)) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = target * eased;
      let formatted = decimals > 0
        ? current.toFixed(decimals)
        : hasSeparator
          ? Math.round(current).toLocaleString("en-US")
          : Math.round(current).toString();
      if (isBn) {
        formatted = formatted.replace(/\d/g, (d) => bnDigits[Number(d)]);
      }
      setDisplay(`${formatted}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, decimals, suffix, value, reduce, hasSeparator]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      {display || (!isFinite(target) || reduce ? value : (isBn ? "০" : "0"))}
    </span>
  );
}
