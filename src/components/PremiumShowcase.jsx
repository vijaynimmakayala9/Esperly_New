"use client";

import LottieArt from "./LottieArt";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  BadgeCheck,
  Sparkles,
  BookOpen,
  WandSparkles,
  PlayCircle,
} from "lucide-react";
import AnimatedIcon from "./AnimatedIcon";
const perks = [
  {
    Icon: BookOpen,
    title: "Made for curious minds",
    detail: "Lessons that turn questions into discoveries.",
  },
  {
    Icon: WandSparkles,
    title: "Little moments of magic",
    detail: "Beautifully simple, encouraging learning journeys.",
  },
  {
    Icon: BadgeCheck,
    title: "Guidance that feels personal",
    detail: "A thoughtful approach for every learner.",
  },
];
export default function PremiumShowcase() {
  const reduced = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden bg-[#FFF9F6] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,#ffe2dc_0%,transparent_45%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#EB6664]/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-[#D94E5B]">
            <Sparkles size={15} /> A more delightful way to learn
          </span>
          <h2 className="mt-7 max-w-xl text-[clamp(2.6rem,4.6vw,4.5rem)] font-extrabold leading-[1.08] tracking-[-.055em] text-[#17243A]">
            Learning should feel{" "}
            <span className="text-[#EB6664]">extraordinary.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
            Every thoughtful detail is designed to make learning approachable,
            inspiring, and exciting to explore.
          </p>
          <div className="mt-9 space-y-4">
            {perks.map(({ Icon, title, detail }, i) => (
              <motion.div
                key={title}
                initial={reduced ? false : { opacity: 0, x: -22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group flex items-center gap-4 rounded-[22px] border border-white bg-white/80 p-4 shadow-[0_12px_35px_rgba(23,36,58,.04)] transition-all hover:-translate-y-1 hover:border-[#EB6664]/30 hover:shadow-lg"
              >
                <AnimatedIcon
                  icon={Icon.displayName || Icon.name || "BookOpen"}
                  delay={i * 0.1}
                  className="size-14 rounded-2xl bg-[#FFF0EE] text-[#EB6664] group-hover:bg-[#EB6664] group-hover:text-white"
                />
                <div>
                  <h3 className="font-bold text-[#17243A]">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <Link
            href="/programs"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#17243A] px-7 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#EB6664]"
          >
            Explore learning programs <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="relative mx-auto w-full max-w-[600px]">
          <motion.div
            animate={reduced ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[40px] border border-white/90 bg-white p-4 shadow-[0_35px_90px_rgba(235,102,100,.16)] sm:p-7"
          >
            <div className="flex items-center justify-between pb-4">
              <span className="flex items-center gap-2 text-sm font-extrabold text-[#17243A]">
                <span className="size-2.5 rounded-full bg-[#EB6664]" /> The joy
                of discovery
              </span>
              <span className="rounded-full bg-[#FFF0EE] px-3 py-1.5 text-[11px] font-bold text-[#D94E5B]">
                Learning in motion
              </span>
            </div>
            <LottieArt
              name="learning"
              className="mx-auto aspect-square w-full max-w-[480px]"
              label="Floating animated learning shapes"
            />
            <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-[#FFF9F6] px-4 py-3">
              <span className="flex items-center gap-2 text-sm font-semibold text-[#17243A]">
                <PlayCircle size={18} className="text-[#EB6664]" /> Curiosity in
                every lesson
              </span>
              <span className="text-xs font-bold text-[#EB6664]">ESPERLY</span>
            </div>
          </motion.div>
          <motion.div
            animate={
              reduced ? undefined : { y: [0, 8, 0], rotate: [-3, 0, -3] }
            }
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-3 top-1/4 hidden rounded-2xl border border-white bg-white px-4 py-3 shadow-xl sm:flex sm:items-center sm:gap-2"
          >
            <Sparkles className="text-[#EB6664]" size={19} />
            <span className="text-xs font-bold text-[#17243A]">
              Aha! moments
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
