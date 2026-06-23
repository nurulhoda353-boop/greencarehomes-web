import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  strength?: number;
  className?: string;
  as?: "button" | "a";
  href?: string;
}

/**
 * Premium magnetic hover effect. Subtle pull towards cursor + soft shadow.
 * Falls back gracefully when reduced motion is preferred.
 */
export function MagneticButton({
  children,
  strength = 0.25,
  className,
  ...rest
}: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = e.clientX - r.left - r.width / 2;
    const py = e.clientY - r.top - r.height / 2;
    x.set(px * strength);
    y.set(py * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={cn("relative", className)}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </motion.button>
  );
}
