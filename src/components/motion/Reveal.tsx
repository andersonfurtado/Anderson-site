"use client";

import { m, type Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 18 },
  down: { y: -18 },
  left: { x: 18 },
  right: { x: -18 },
};

export default function Reveal({
  children,
  className,
  style,
  delay = 0,
  direction = "up",
  once = true,
  amount = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  direction?: Direction;
  once?: boolean;
  amount?: number;
}) {
  const hidden = { opacity: 0, filter: "blur(6px)", ...offsets[direction] };
  const show = { opacity: 1, x: 0, y: 0, filter: "blur(0px)" };

  const variants: Variants = { hidden, show };

  return (
    <m.div
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ delay }}
    >
      {children}
    </m.div>
  );
}
