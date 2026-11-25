
"use client";

import { cardTheme } from "@/lib/cardThemes";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Atom,
  Target,
  Sprout,
  Users,
  CheckCircle2,
  Sparkles,
  Calculator,
  FlaskConical,
  Leaf,
} from "@/components/BrandIcons";

import AnimatedIcon from "./AnimatedIcon";

const icons = {
  Sprout,
  BookOpen,
  GraduationCap,
  Atom,
  Target,
  Users,
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB6664] focus-visible:ring-offset-4";

const smoothEase = [0.22, 1, 0.36, 1];

/* -------------------------------------------
   PREMIUM BUTTON
-------------------------------------------- */

export function Button({
  href = "/book-demo",
  children,
  outline = false,
  dark = false,
  className = "",
  ...props
}) {
  const variant = outline
    ? "border border-[#EBDDD9] bg-white/90 text-[#17243A] shadow-[0_8px_24px_rgba(23,36,58,0.04)] hover:border-[#EB6664]/50 hover:bg-[#FFF6F4]"
    : dark
      ? "border border-white/60 bg-white text-[#17243A] shadow-[0_12px_35px_rgba(0,0,0,0.08)] hover:bg-[#FFF0EE]"
      : "border border-[#EB6664]/20 bg-gradient-to-r from-[#EB6664] via-[#F47F77] to-[#FFAA8F] text-white shadow-[0_12px_30px_rgba(235,102,100,0.25)] hover:shadow-[0_20px_45px_rgba(235,102,100,0.35)]";

  return (
    <Link
      href={href}
      className={`group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold tracking-[0.01em] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 ${focusRing} ${variant} ${className}`}
      {...props}
    >
      {!outline && !dark && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
      )}

      <span className="relative z-10">{children}</span>

      <span
        className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-45 ${
          outline || dark
            ? "bg-[#FFF0EE] text-[#EB6664]"
            : "bg-white/20 text-white"
        }`}
      >
        <ArrowUpRight size={15} strokeWidth={2.2} />
      </span>
    </Link>
  );
}

/* -------------------------------------------
   SCROLL REVEAL
-------------------------------------------- */

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 28,
}) {
  const reducedMotion = useReducedMotion();

  const offsets = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return (
    <motion.div
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              scale: 0.985,
              ...offsets[direction],
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.12,
        margin: "0px 0px -40px 0px",
      }}
      transition={{
        duration: 0.7,
        delay: reducedMotion ? 0 : delay,
        ease: smoothEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------
   SECTION HEADING
-------------------------------------------- */

export function Heading({
  eyebrow,
  title,
  description,
  light = false,
  center = false,
  className = "",
}) {
  return (
    <Reveal
      className={`max-w-3xl ${
        center ? "mx-auto text-center" : ""
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] ${
            light
              ? "border-white/15 bg-white/10 text-[#FFB8A6]"
              : "border-[#EB6664]/15 bg-[#FFF1EF] text-[#E65B5B]"
          }`}
        >
          <Sparkles size={13} strokeWidth={2} />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={`text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.055em] ${
          light ? "text-white" : "text-[#17243A]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${
            center ? "mx-auto" : ""
          } ${
            light ? "text-slate-300" : "text-[#65738B]"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

/* -------------------------------------------
   PREMIUM PROGRAM CARD
-------------------------------------------- */

export function ProgramCard({ item, index = 0 }) {
  const Icon = icons[item.icon] || BookOpen;

  return (
    <Reveal
      delay={Math.min(index * 0.075, 0.3)}
      className="h-full"
    >
      <Link
        href={`/programs/${item.slug}`}
        aria-label={`Explore ${item.title}`}
        className={`group relative isolate flex h-full min-h-[300px] flex-col overflow-hidden rounded-[30px] border ${cardTheme(index)} p-6 shadow-[0_12px_40px_rgba(23,36,58,0.045)] transition-all duration-500 hover:-translate-y-2 hover:border-[#EB6664]/35 hover:shadow-[0_24px_65px_rgba(235,102,100,0.13)] sm:p-8 ${focusRing}`}
      >
        {/* Subtle hover background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-64 w-64 rounded-full bg-gradient-to-br from-[#FFE5E0] via-[#FFF3EE] to-transparent opacity-40 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-100"
        />

        {/* Top decoration */}
        <div className="mb-8 flex items-start justify-between gap-4">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-[24px] bg-[#EB6664]/10 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"
            />

            <span className="relative flex h-16 w-16 items-center justify-center rounded-[22px] border border-[#FFE2DD] bg-gradient-to-br from-[#FFF4F1] to-[#FFE4DE] text-[#EB6664] shadow-[0_8px_20px_rgba(235,102,100,0.08)] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110">
              <AnimatedIcon icon={Icon} size={28} />
            </span>
          </div>

          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F1E5E2] bg-white text-[#EB6664] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-[#EB6664] group-hover:bg-[#EB6664] group-hover:text-white">
            <ArrowUpRight size={19} />
          </span>
        </div>

        {item.tag && (
          <span className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#E75F60]">
            {item.tag}
          </span>
        )}

        <h3 className="text-xl font-bold leading-snug tracking-[-0.035em] text-[#17243A] transition-colors duration-300 group-hover:text-[#D94E5B] sm:text-[22px]">
          {item.title}
        </h3>

        <p className="mt-3 grow text-sm leading-7 text-[#68768C]">
          {item.description}
        </p>

        <div className="mt-8 border-t border-[#F3EBE8] pt-5">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-[#D94E5B]">
            Explore program
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/* -------------------------------------------
   PREMIUM SUBJECT CARD
-------------------------------------------- */

export function SubjectCard({ item }) {
  const SubjectIcon = ({ mathematics: Calculator, science: Atom, english: BookOpen, physics: Atom, chemistry: FlaskConical, biology: Leaf })[item.slug] || BookOpen;
  return (
    <Link
      href={`/subjects/${item.slug}`}
      aria-label={`Explore ${item.title}`}
      className={`group relative flex min-h-[126px] items-center gap-4 overflow-hidden rounded-[26px] border ${cardTheme(item.slug)} p-5 shadow-[0_8px_30px_rgba(23,36,58,0.035)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#EB6664]/35 hover:shadow-[0_18px_45px_rgba(235,102,100,0.1)] sm:gap-5 sm:p-6 ${focusRing}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FFF2EF]/0 via-[#FFF2EF]/30 to-[#FFF2EF]/80 opacity-0 transition-opacity duration-500 group-hover:opacity-30"
      />

      <span className="relative flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-[20px] border border-[#FFE5DF] bg-gradient-to-br from-[#FFF5F2] to-[#FFE8E2] shadow-[0_6px_18px_rgba(235,102,100,0.07)]">
        <span className="text-[30px] leading-none transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-125">
          <SubjectIcon size={32} />
        </span>
      </span>

      <span className="relative min-w-0 flex-1">
        <strong className="block text-base font-bold tracking-[-0.025em] text-[#17243A] transition-colors duration-300 group-hover:text-[#D94E5B] sm:text-lg">
          {item.title}
        </strong>

        <span className="mt-1 block text-sm leading-6 text-[#68768C]">
          {item.description}
        </span>
      </span>

      <span className="relative hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#F1E5E2] bg-white text-[#EB6664] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-[#EB6664] group-hover:bg-[#EB6664] group-hover:text-white sm:flex">
        <ArrowUpRight size={18} />
      </span>
    </Link>
  );
}

/* -------------------------------------------
   PREMIUM CHECK ITEM
-------------------------------------------- */

export function Check({ children, className = "" }) {
  return (
    <div
      className={`group flex items-start gap-3 text-sm leading-6 text-[#64728A] ${className}`}
    >
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF0EE] text-[#EB6664] transition-colors duration-300 group-hover:bg-[#EB6664] group-hover:text-white">
        <CheckCircle2 size={15} strokeWidth={2.3} />
      </span>

      <span>{children}</span>
    </div>
  );
}
