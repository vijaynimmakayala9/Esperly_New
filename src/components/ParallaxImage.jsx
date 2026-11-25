"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

// Keep the moving image inside an overscanned, clipped frame.
export default function ParallaxImage({ className = "", strength = 8, fixed = false, fill = true, ...props }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const distance = Math.max(0, Math.min(10, strength));
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${distance}%`, `${distance}%`]);
  const layer = className.split(/\s+/).filter(c => /^-?z-/.test(c)).join(" ");
  const imageClass = className.split(/\s+/).filter(c => !/^-?z-/.test(c)).join(" ");
  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${fixed ? "[clip-path:inset(0)]" : ""} ${layer}`}>
      {fixed && !reduced && (
        <div className="pointer-events-none fixed inset-0 hidden h-[100lvh] w-full md:block">
          <Image {...props} fill={fill} className={imageClass} />
        </div>
      )}
      <motion.div className={`${reduced ? "absolute inset-0" : "absolute inset-x-0 -inset-y-[15%]"} ${fixed && !reduced ? "md:hidden" : ""}`} style={reduced ? undefined : { y }}>
        <Image {...props} fill={fill} className={imageClass} />
      </motion.div>
    </div>
  );
}
