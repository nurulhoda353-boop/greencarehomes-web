import { useEffect, useRef } from "react";

/**
 * Premium custom cursor — desktop only (pointer: fine).
 * Dot + trailing ring + magnetic pull + hover-expand + blend mode.
 * Perf-safe: all DOM work runs inside a single rAF loop.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("has-custom-cursor");
    dot.style.opacity = "1";
    ring.style.opacity = "1";

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let targetX = mouseX;
    let targetY = mouseY;
    let hovering = false;
    let rafId = 0;
    let frame = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const onDown = () => ring.classList.add("is-down");
    const onUp = () => ring.classList.remove("is-down");
    const onLeave = () => {
      if (!dot || !ring) return;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onEnter = () => {
      if (!dot || !ring) return;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const tick = () => {
      frame++;
      // Only run elementFromPoint every 3rd frame (~20fps) — cheap enough
      if (frame % 3 === 0) {
        const el = document.elementFromPoint(mouseX, mouseY);
        const magnet = el?.closest<HTMLElement>(
          'a, button, [role="button"], [data-cursor="magnet"]',
        );
        if (magnet) {
          const r = magnet.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
          targetX = mouseX + (cx - mouseX) * 0.25;
          targetY = mouseY + (cy - mouseY) * 0.25;
          if (!hovering) {
            hovering = true;
            ring.classList.add("is-hovering");
            dot.classList.add("is-hovering");
          }
        } else {
          targetX = mouseX;
          targetY = mouseY;
          if (hovering) {
            hovering = false;
            ring.classList.remove("is-hovering");
            dot.classList.remove("is-hovering");
          }
        }
      } else if (!hovering) {
        targetX = mouseX;
        targetY = mouseY;
      }

      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cc-ring" aria-hidden="true" style={{ opacity: 0 }} />
      <div ref={dotRef} className="cc-dot" aria-hidden="true" style={{ opacity: 0 }} />
    </>
  );
}
