"use client";

import { useInView as useFramerInView } from "framer-motion";
import { useRef } from "react";

export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useFramerInView(ref, { once: true, amount: threshold });
  return { ref, isInView };
}
