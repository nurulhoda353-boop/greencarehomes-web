import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

interface RevealProps {
  children: ReactNode;
  as?: "div" | "section" | "article" | "li" | "span";
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const getInitial = (d: Direction, distance: number) => {
  switch (d) {
    case "up": return { opacity: 0, y: distance };
    case "down": return { opacity: 0, y: -distance };
    case "left": return { opacity: 0, x: distance };
    case "right": return { opacity: 0, x: -distance };
    case "scale": return { opacity: 0, scale: 0.92 };
    case "fade": return { opacity: 0 };
  }
};

export function Reveal({
  children,
  as = "div",
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 28,
  className,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  const variants: Variants = {
    hidden: getInitial(direction, distance),
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

/** Stagger container — children Reveal items will animate one after another. */
export function RevealStagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  once = true,
  amount = 0.15,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Pre-styled item that responds to RevealStagger parent. */
export function RevealItem({
  children,
  className,
  direction = "up",
  distance = 24,
  duration = 0.6,
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: getInitial(direction, distance),
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: { duration, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
