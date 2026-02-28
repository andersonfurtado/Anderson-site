"use client";

import { m, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.2,
  });

  return (
    <m.div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        transformOrigin: "0% 50%",
        zIndex: 200,
        background: "var(--gradient-hero)",
        scaleX,
      }}
    />
  );
}
