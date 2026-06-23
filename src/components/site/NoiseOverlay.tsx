/**
 * Cinematic film-grain overlay. Inline SVG turbulence avoids loading an image.
 * Sits fixed above background but below all UI; very low opacity so it
 * registers as texture, not noise.
 */
export function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] opacity-[0.035] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        backgroundSize: "160px 160px",
      }}
    />
  );
}
