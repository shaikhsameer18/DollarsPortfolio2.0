"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export function useReveal() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return { ref, inView };
}
