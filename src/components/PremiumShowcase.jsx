"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  BadgeCheck,
  Sparkles,
  BookOpen,
  WandSparkles,
  PlayCircle,
  Check,
  ArrowRight,
} from "lucide-react";
import LottieArt from "./LottieArt";

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

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function PremiumShowcase() {
  const reduced = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#FFF9F6] px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
      {/* Atmospheric gradients and fine dot texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/3 size-[450px] rounded-full bg-[#EB6664]/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-36 size-[560px] rounded-full bg-[#BCA6F6]/20 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.3] [background-image:radial-gradient(#EBCFCB_0.8px,transparent_0.8px)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <motion.div
          initial={reduced ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: reduced ? 0 : 0.1 }}
        >
          <motion.div variants={reveal} transition={{ duration: 0.55 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#EB6664]/20 bg-white/85 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#D95352] shadow-sm">
              <Sparkles size={15} /> The Esperly difference
            </span>
          </motion.div>

          <motion.h2
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="mt-6 max-w-2xl text-[clamp(2.5rem,4.5vw,4.6rem)] font-extrabold leading-[1.08] tracking-[-0.055em] text-[#17243A]"
          >
            Learning should feel{" "}
            <span className="bg-gradient-to-r from-[#EB6664] via-[#F07879] to-[#B77CC8] bg-clip-text text-transparent">
              extraordinary.
            </span>
          </motion.h2>

          <motion.p
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg"
          >
            Every thoughtful detail is designed to make learning approachable,
            inspiring, and exciting to explore.
          </motion.p>

          <div className="mt-9 space-y-3.5">
            {perks.map(({ Icon, title, detail }, i) => (
              <motion.div
                key={title}
                initial={reduced ? false : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: reduced ? 0 : i * 0.1 }}
                className="group relative flex items-center gap-4 overflow-hidden rounded-[22px] border border-[#EFDCD8] bg-white/90 p-4 shadow-[0_10px_35px_rgba(23,36,58,0.035)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#EB6664]/40 hover:shadow-[0_20px_48px_rgba(235,102,100,0.10)] sm:p-5"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-[#EB6664] transition-transform duration-300 group-hover:scale-y-100"
                />
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFF0EE] to-[#FFE1DB] text-[#E15A58] transition-colors duration-300 group-hover:bg-[#EB6664] sm:size-14">
                  <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-extrabold text-[#17243A] sm:text-base">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                    {detail}
                  </p>
                </div>
                <Check
                  className="hidden size-4 shrink-0 text-[#EB6664] sm:block"
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <Link
              href="/programs"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#17243A] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_25px_rgba(23,36,58,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EB6664] hover:shadow-[0_16px_30px_rgba(235,102,100,0.24)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EB6664]"
            >
              Explore learning programs
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Sparkles size={15} className="text-[#EB6664]" /> A little
              curiosity goes a long way
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[610px]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-5 rounded-[48px] bg-gradient-to-tr from-[#FFD6CF]/70 via-[#EAE0FF]/65 to-[#DDF8F0]/65 blur-2xl sm:-inset-8"
          />
          <div className="relative overflow-hidden rounded-[30px] border border-white/90 bg-white/95 p-4 shadow-[0_35px_90px_rgba(23,36,58,0.10)] sm:rounded-[38px] sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-[#17243A] sm:text-sm">
                <span className="size-2.5 rounded-full bg-[#EB6664] shadow-[0_0_0_5px_rgba(235,102,100,0.12)]" />
                The joy of discovery
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF0EE] px-3 py-1.5 text-[10px] font-bold text-[#D95352] sm:text-xs">
                <Sparkles size={12} /> Learning in motion
              </span>
            </div>

            {/* Stable, visible dimensions for the Lottie renderer. */}
            <div className="relative my-5 flex min-h-[260px] items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-[#FFF9F6] via-[#FFF4F2] to-[#F3EFFF] sm:min-h-[350px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-6 top-7 size-16 rounded-full border border-[#EB6664]/15"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-6 right-8 size-24 rounded-full border border-violet-300/35"
              />
              <LottieArt
                name="learning"
                className="relative z-10 mx-auto h-[250px] w-full max-w-[420px] sm:h-[340px]"
                glow
                loop
                speed={0.85}
                label="Animated illustration celebrating learning and discovery"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#F7E9E5] bg-[#FFF9F6] px-4 py-3.5">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-[#17243A] sm:text-sm">
                <PlayCircle size={19} className="text-[#EB6664]" /> Curiosity in
                every lesson
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#EB6664]">
                Esperly <ArrowRight size={13} />
              </span>
            </div>
          </div>

          <motion.div
            aria-hidden="true"
            animate={
              reduced ? undefined : { y: [0, -9, 0], rotate: [-3, -1, -3] }
            }
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-6 top-[27%] hidden items-center gap-2 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-[0_15px_35px_rgba(23,36,58,0.12)] sm:flex"
          >
            <span className="flex size-8 items-center justify-center rounded-xl bg-[#FFF0EE] text-[#EB6664]">
              <Sparkles size={17} />
            </span>
            <span className="text-xs font-extrabold text-[#17243A]">
              Aha! moments
            </span>
          </motion.div>
          <motion.div
            aria-hidden="true"
            animate={reduced ? undefined : { y: [0, 8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="pointer-events-none absolute -right-3 bottom-[22%] hidden items-center gap-2 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-[0_15px_35px_rgba(23,36,58,0.12)] sm:flex"
          >
            <BookOpen size={17} className="text-[#EB6664]" />
            <span className="text-xs font-extrabold text-[#17243A]">
              Grow every day
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
