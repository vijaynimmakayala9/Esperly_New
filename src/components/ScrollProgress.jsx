"use client";
import { motion, useScroll } from "motion/react";
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[100] h-1 w-full origin-left bg-[#EB6664]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
