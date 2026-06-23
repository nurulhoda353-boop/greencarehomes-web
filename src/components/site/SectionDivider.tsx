/**
 * Subtle SVG wave divider that smooths the seam between adjoining sections.
 * `from` is the color of the section the wave belongs to (top), `to` is the
 * background it transitions into (bottom). Use sparingly between sections of
 * meaningfully different surface treatments.
 */
export function SectionDivider({
  from = "oklch(0.24 0.08 150)",
  to = "var(--color-cream, oklch(0.97 0.01 95))",
  flip = false,
  className = "",
}: {
  from?: string;
  to?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`relative w-full leading-[0] ${className}`}
      style={{ background: from }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`block h-[60px] w-full sm:h-[80px] ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,40 C240,80 480,0 720,32 C960,64 1200,16 1440,48 L1440,80 L0,80 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
