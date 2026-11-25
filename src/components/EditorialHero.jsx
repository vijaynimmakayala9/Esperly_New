"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Check,
  GraduationCap,
  Sparkles,
  TrendingUp,
  Star,
  Play,
  MoveUpRight,
} from "@/components/BrandIcons";

const features = [
  "One-to-one guidance",
  "Learn at your pace",
  "Confidence first",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function EditorialHero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 45],
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#FFE9DF] via-[#FFF9F6] to-[#E4E9FF]"
    >
      {/* Background glow */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? {}
            : {
                scale: [1, 1.15, 1],
                opacity: [0.5, 0.8, 0.5],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full bg-[#FFDAD0]/60 blur-[100px]"
      />

      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? {} : { x: [0, 35, 0], y: [0, -20, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-40 -left-32 h-[450px] w-[450px] rounded-full bg-violet-200/45 blur-[100px]"
      />

      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#17243A_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[650px] lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-16 xl:gap-16">
        {/* LEFT CONTENT */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="relative z-10 min-w-0"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#EB6664]/20 bg-white/90 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#C85050] shadow-[0_5px_20px_rgba(235,102,100,.08)] sm:px-4 sm:text-xs"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#EB6664]/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#EB6664]" />
            </span>
            A little more wonder in every lesson
            <Sparkles size={14} className="shrink-0" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-6 max-w-[750px] text-[clamp(2.8rem,5.5vw,5.75rem)] font-black leading-[1.04] tracking-[-0.065em] text-[#17243A] sm:mt-7"
          >
            Big dreams.
            <br />
            <span className="relative inline-block bg-gradient-to-r from-[#EB6664] via-[#E75C78] to-[#B9569A] bg-clip-text text-transparent">
              Bright minds
              <motion.span
                aria-hidden="true"
                initial={reduceMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.7,
                  ease: "easeOut",
                }}
                className="absolute -bottom-1 left-0 h-[5px] w-[82%] origin-left -rotate-2 rounded-full bg-gradient-to-r from-[#EB6664] to-[#FFB8A6] sm:-bottom-2 sm:h-[7px]"
              />
            </span>
            <span className="text-[#17243A]">.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-7 max-w-[520px] text-sm leading-7 text-[#596477] sm:text-base sm:leading-8 lg:text-lg"
          >
            Tuition that feels personal. Confidence that goes beyond the
            classroom. Help your child discover what they can achieve with
            thoughtful, one-to-one learning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Link
              href="/book-demo"
              className="group inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#EB6664] to-[#E75C78] px-6 text-sm font-bold text-white shadow-[0_15px_40px_rgba(235,102,100,.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(235,102,100,.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EB6664] sm:min-h-14 sm:px-7"
            >
              Book a free demo
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={17} />
              </span>
            </Link>

            <Link
              href="/programs"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#17243A]/10 bg-white/90 px-6 text-sm font-bold text-[#17243A] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#EB6664]/40 hover:shadow-lg sm:min-h-14"
            >
              Explore programs
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>

          {/* Trust highlights */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#17243A]/10 pt-6 text-xs font-semibold text-slate-600 sm:text-sm"
          >
            {features.map((feature) => (
              <span key={feature} className="inline-flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8F7EE] text-[#24835B]">
                  <Check size={12} strokeWidth={3} />
                </span>
                {feature}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[580px] min-w-0 pb-8 pt-5 sm:px-6 sm:pb-10 lg:max-w-none lg:px-0"
        >
          {/* Outer radiant glow */}
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? {}
                : {
                    scale: [1, 1.08, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-8 rounded-[60px] bg-gradient-to-br from-[#EB6664]/40 via-pink-300/35 to-violet-300/40 blur-[55px]"
          />

          {/* Decorative ring */}
          <div className="pointer-events-none absolute inset-4 rounded-[48px] border border-[#EB6664]/15 sm:inset-5 sm:rounded-[60px]" />

          {/* Main image */}
          <motion.div
            style={{ y: imageY }}
            className="relative mx-auto aspect-[1.08/1] w-[90%] overflow-hidden rounded-[32px] border-[6px] border-white bg-[#F7B9A9] shadow-[0_30px_85px_rgba(23,36,58,.17)] sm:aspect-[1.1/1] sm:rounded-[48px] sm:border-[8px] lg:w-[92%]"
          >
            <Image
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1100&q=85"
              alt="Student studying with learning materials"
              fill
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 75vw, 45vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Image gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17243A]/40 via-transparent to-[#EB6664]/10" />

            {/* Image bottom label */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-2xl border border-white/20 bg-[#17243A]/50 px-4 py-3 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7">
              <div className="min-w-0">
                <p className="text-xs font-bold sm:text-sm">
                  Every learner has potential
                </p>
                <p className="mt-1 text-[10px] text-white/75 sm:text-xs">
                  We help them discover it
                </p>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EB6664]">
                <GraduationCap size={18} />
              </span>
            </div>
          </motion.div>

          {/* Floating glass card — Top left */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="absolute left-0 top-[13%] z-10 max-w-[190px] sm:-left-1 sm:max-w-none lg:-left-4"
          >
            <motion.div
              animate={reduceMotion ? {} : { y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center gap-2 rounded-2xl border border-white/80 bg-white/95 p-2.5 shadow-[0_15px_45px_rgba(23,36,58,.15)] backdrop-blur-xl sm:gap-3 sm:p-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF0EE] text-[#EB6664] sm:h-11 sm:w-11">
                <BookOpen size={20} />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-extrabold leading-4 text-[#17243A] sm:text-sm">
                  Learning made personal
                </p>
                <p className="mt-1 text-[9px] text-slate-500 sm:text-xs">
                  Every question matters
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating glass card — Bottom right */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-2 right-0 z-10 max-w-[195px] sm:-right-1 sm:max-w-none lg:-right-3"
          >
            <motion.div
              animate={reduceMotion ? {} : { y: [0, 8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center gap-2 rounded-2xl border border-white/80 bg-white/95 p-2.5 shadow-[0_15px_45px_rgba(23,36,58,.15)] backdrop-blur-xl sm:gap-3 sm:p-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8F7EE] text-[#24835B] sm:h-11 sm:w-11">
                <TrendingUp size={20} />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-extrabold leading-4 text-[#17243A] sm:text-sm">
                  Little wins, big growth
                </p>
                <p className="mt-1 text-[9px] text-slate-500 sm:text-xs">
                  Progress at their pace
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating sparkle */}
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? {}
                : {
                    rotate: [0, 15, -10, 0],
                    scale: [1, 1.12, 1],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-1 top-0 hidden text-[#EB6664] sm:block"
          >
            <Sparkles size={36} />
          </motion.div>

          {/* Decorative mini badge */}
          <motion.div
            aria-hidden="true"
            animate={reduceMotion ? {} : { y: [0, -6, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute bottom-[18%] left-0 hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/90 text-[#EB6664] shadow-lg sm:flex"
          >
            <Star size={23} fill="#EB6664" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="/how-it-works"
        className="absolute bottom-5 right-8 hidden items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#17243A]/50 transition hover:text-[#EB6664] xl:inline-flex"
      >
        Discover the difference
        <ArrowDownRight size={16} />
      </Link>
    </section>
  );
}
