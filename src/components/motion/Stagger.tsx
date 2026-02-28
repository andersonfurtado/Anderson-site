"use client";

import { m } from "framer-motion";

export function StaggerContainer({
  children,
  className,
  style,
  delayChildren = 0.05,
  staggerChildren = 0.07,
  once = true,
  amount = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delayChildren?: number;
  staggerChildren?: number;
  once?: boolean;
  amount?: number;
}) {
  return (
    <m.div
      className={className}
      style={style}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <m.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
    >
      {children}
    </m.div>
  );
}
