import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Heart,
  BookOpen,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { Button, Reveal } from "./UI";

export function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#FFF8F6] via-white to-[#F8F4FF] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      {/* Ambient backgrounds */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#EB6664]/10 blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-28 h-96 w-96 rounded-full bg-violet-300/25 blur-[100px]"
      />

      {/* Decorative pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#17243A_1px,transparent_1px)] [background-size:26px_26px]"
      />

      <Reveal className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        {/* Eyebrow */}
        <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#EB6664]/15 bg-white/85 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#D95359] shadow-[0_8px_24px_rgba(235,102,100,0.08)] backdrop-blur-md sm:text-xs">
          <Sparkles size={14} className="shrink-0" />
          {eyebrow}
        </span>

        {/* Heading */}
        <h1 className="mx-auto mt-6 max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)] font-black leading-[1.08] tracking-[-0.055em] text-[#17243A]">
          {title}
        </h1>

        {/* Accent divider */}
        <div
          aria-hidden="true"
          className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#EB6664] to-[#F5A28F]"
        />

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
          {description}
        </p>
      </Reveal>

      {/* Bottom transition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#EB6664]/20 to-transparent"
      />
    </section>
  );
}

export function Callout() {
  return (
    <section className="relative isolate overflow-hidden bg-[#17243A] px-5 py-16 text-center text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      {/* Background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-[#EB6664]/20 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-violet-500/15 blur-[110px]"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:28px_28px]"
      />

      <Reveal className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#FFC0B5] backdrop-blur-md sm:text-xs">
          <GraduationCap size={16} />
          YOUR NEXT CHAPTER STARTS HERE
        </span>

        <h2 className="mx-auto mt-6 max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.12] tracking-[-0.05em]">
          Ready for a{" "}
          <span className="bg-gradient-to-r from-[#FFB3A7] to-[#F58D7D] bg-clip-text text-transparent">
            brighter learning
          </span>{" "}
          journey?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
          Explore a personalized approach to learning with Esperly. Discover
          lessons designed to encourage curiosity, build confidence, and support
          meaningful progress.
        </p>

        <div className="mt-8">
          <Link
            href="/book-demo"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#EB6664] to-[#F58D7D] px-7 py-3.5 text-sm font-bold text-white shadow-[0_14px_40px_rgba(235,102,100,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(235,102,100,0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Book a Free Demo
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* Supporting details */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-white/65">
          {[
            "Personalized learning",
            "Supportive guidance",
            "Flexible online lessons",
          ].map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <CheckCircle2 size={15} className="shrink-0 text-[#FFB3A7]" />
              {item}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Border accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#EB6664]/60 to-transparent"
      />
    </section>
  );
}

export function InfoGrid({ items = [] }) {
  const icons = [BookOpen, Heart, GraduationCap];

  return (
    <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
      {items.map(([title, desc], i) => {
        const Icon = icons[i % icons.length];

        return (
          <Reveal
            key={`${title}-${i}`}
            delay={i * 0.08}
            className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-[#EAE6E8] bg-white p-6 shadow-[0_12px_35px_rgba(23,36,58,0.035)] transition-all duration-500 hover:-translate-y-2 hover:border-[#EB6664]/30 hover:shadow-[0_24px_55px_rgba(23,36,58,0.09)] sm:p-8"
          >
            {/* Hover gradient */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#FFF6F3] via-white to-[#F9F5FF] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />

            {/* Icon */}
            <div className="relative z-10 mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#EB6664]/10 bg-gradient-to-br from-[#FFF0EE] to-[#FFE1DB] text-[#EB6664] shadow-[0_8px_20px_rgba(235,102,100,0.08)] transition-all duration-500 group-hover:rotate-[-5deg] group-hover:scale-110 group-hover:shadow-[0_12px_25px_rgba(235,102,100,0.16)]">
              <Icon size={25} strokeWidth={1.8} />
            </div>

            {/* Content */}
            <h3 className="relative z-10 text-xl font-extrabold leading-snug tracking-[-0.03em] text-[#17243A]">
              {title}
            </h3>

            <p className="relative z-10 mt-3 flex-1 text-sm leading-7 text-slate-500">
              {desc}
            </p>

            {/* Bottom decorative line */}
            <div className="relative z-10 mt-7 h-px w-full bg-gradient-to-r from-[#EB6664]/20 via-slate-100 to-transparent" />

            <div className="relative z-10 mt-4 flex items-center justify-between">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.13em] text-[#EB6664]">
                ESPERLY EXPERIENCE
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF0EE] text-[#EB6664] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#EB6664] group-hover:text-white">
                <ArrowRight size={16} />
              </span>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
