"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const fade = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

export default function EditorialHero() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative isolate flex min-h-[min(850px,100svh)] items-center overflow-hidden bg-[#FFF9F6] px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[calc(100svh-118px)] lg:px-10 lg:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 size-[min(85vw,850px)] rounded-full bg-[#FFDAD0]/60 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -left-44 size-[min(70vw,650px)] rounded-full bg-[#F1EDFF] blur-[90px]"
      />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-8 xl:gap-20">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="relative z-10 max-w-[720px]"
        >
          <motion.div
            variants={fade}
            transition={{ duration: 0.65 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#EB6664]/20 bg-white/85 px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[.15em] text-[#C85050] shadow-sm sm:text-xs"
          >
            <Sparkles size={15} /> A little more wonder in every lesson
          </motion.div>
          <motion.h1
            variants={fade}
            transition={{ duration: 0.7 }}
            className="mt-7 max-w-[750px] text-[clamp(3.1rem,6.6vw,7.1rem)] font-extrabold leading-[.99] tracking-[-.075em] text-[#17243A]"
          >
            Big dreams.
            <br />
            <span className="relative inline-block text-[#EB6664]">
              Bright minds
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-[6px] w-[80%] -rotate-2 rounded-full bg-[#FFB8A6] sm:-bottom-3 sm:h-[9px]"
              />
            </span>
            .
          </motion.h1>
          <motion.p
            variants={fade}
            transition={{ duration: 0.7 }}
            className="mt-9 max-w-[530px] text-base leading-8 text-[#596477] sm:text-lg lg:text-xl lg:leading-9"
          >
            Tuition that feels personal. Confidence that goes beyond the
            classroom. Help your child discover what they can do with
            thoughtful, one-to-one learning.
          </motion.p>
          <motion.div
            variants={fade}
            className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <Link
              href="/book-demo"
              className="group inline-flex min-h-14 items-center gap-4 rounded-full bg-[#EB6664] px-7 text-sm font-bold text-white shadow-[0_18px_45px_rgba(235,102,100,.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#D94E5B] hover:shadow-[0_24px_55px_rgba(235,102,100,.36)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EB6664]"
            >
              Book a free demo{" "}
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
            <Link
              href="/programs"
              className="inline-flex min-h-14 items-center gap-2 rounded-full border border-[#17243A]/15 bg-white/80 px-6 text-sm font-bold text-[#17243A] transition hover:border-[#EB6664] hover:bg-white"
            >
              Explore programs <ArrowUpRight size={17} />
            </Link>
          </motion.div>
          <motion.div
            variants={fade}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#17243A]/10 pt-6 text-xs font-semibold text-slate-600 sm:text-sm"
          >
            {[
              "One-to-one guidance",
              "Learn at your pace",
              "Confidence first",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="flex size-5 items-center justify-center rounded-full bg-[#E8F7EE] text-[#24835B]">
                  <Check size={13} strokeWidth={3} />
                </span>
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
        <div className="relative mx-auto w-full max-w-[620px] lg:max-w-none">
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, scale: 0.94, rotate: 2 }
            }
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto aspect-[1.05/1] w-[92%] rounded-[42px] bg-[#F7B9A9] p-3 shadow-[0_35px_95px_rgba(235,102,100,.17)] sm:aspect-[1.08/1] sm:rounded-[64px] sm:p-4 lg:w-full"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-[#FFE8DE] sm:rounded-[52px]">
              <Image
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1100&q=85"
                alt="Student learning at a desk"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#17243A]/30 to-transparent" />
            </div>
          </motion.div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="absolute -left-1 top-[14%] flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-[0_20px_55px_rgba(23,36,58,.13)] backdrop-blur sm:-left-5 sm:p-4 xl:-left-12"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-[#FFF0EE] text-[#EB6664]">
              <BookOpen size={21} />
            </span>
            <div>
              <p className="text-xs font-extrabold text-[#17243A] sm:text-sm">
                Learning made personal
              </p>
              <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                Every question matters
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -bottom-5 -right-1 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-[0_20px_55px_rgba(23,36,58,.13)] backdrop-blur sm:-right-5 sm:p-4 xl:-right-10"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-[#E8F7EE] text-[#24835B]">
              <TrendingUp size={21} />
            </span>
            <div>
              <p className="text-xs font-extrabold text-[#17243A] sm:text-sm">
                Little wins, big growth
              </p>
              <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                Progress at their own pace
              </p>
            </div>
          </motion.div>
          <div
            aria-hidden="true"
            className="absolute -right-2 -top-7 hidden rotate-12 text-[#EB6664] md:block"
          >
            <Sparkles size={42} />
          </div>
        </div>
      </div>
      <Link
        href="/how-it-works"
        className="absolute bottom-5 right-7 hidden items-center gap-2 text-xs font-bold uppercase tracking-[.15em] text-[#17243A]/55 transition hover:text-[#EB6664] xl:inline-flex"
      >
        Discover the difference <ArrowDownRight size={17} />
      </Link>
    </section>
  );
}
