"use client";

import { motion, useReducedMotion } from "motion/react";
import * as LucideIcons from "lucide-react";

// Accept serializable icon names across the Next.js Server/Client boundary.
export default function AnimatedIcon({
  icon = "BookOpen",
  size = 25,
  className = "",
  delay = 0,
}) {
  const reduced = useReducedMotion();
  const Icon = typeof icon === "string" ? LucideIcons[icon] : icon;
  const SafeIcon = Icon || LucideIcons.BookOpen;

  return (
    <motion.span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center ${className}`}
      initial={false}
      whileHover={
        reduced ? undefined : { rotate: [0, -12, 12, 0], scale: 1.14 }
      }
      whileInView={reduced ? undefined : { y: [0, -4, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay, ease: "easeInOut" }}
    >
      <SafeIcon size={size} strokeWidth={1.8} />
    </motion.span>
  );
}
