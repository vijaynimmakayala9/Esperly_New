"use client";
import Link from "next/link";
import AnimatedIcon from "./AnimatedIcon";
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
} from "lucide-react";
const icons = { Sprout, BookOpen, GraduationCap, Atom, Target, Users };
export function Button({
  href = "/book-demo",
  children,
  outline = false,
  dark = false,
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EB6664] ${outline ? "border border-slate-200 bg-white text-[#17243A] hover:border-[#EB6664]" : dark ? "bg-white text-[#17243A] hover:bg-[#FFF0EE]" : "bg-gradient-to-r from-[#EB6664] via-[#F47F77] to-[#FFAA8F] text-white shadow-[0_12px_32px_rgba(235,102,100,.25)] hover:shadow-[0_18px_40px_rgba(235,102,100,.35)]"}`}
    >
      {children}
      <ArrowUpRight
        size={17}
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
export function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
export function Heading({
  eyebrow,
  title,
  description,
  light = false,
  center = false,
}) {
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      <p
        className={`mb-4 text-xs font-bold uppercase tracking-[.24em] ${light ? "text-[#FFB8A6]" : "text-[#EB6664]"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.12] tracking-[-.05em] ${light ? "text-white" : "text-[#17243A]"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-8 ${light ? "text-slate-300" : "text-slate-500"}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
export function ProgramCard({ item, index = 0 }) {
  const Icon = icons[item.icon] || BookOpen;
  return (
    <Reveal delay={Math.min(index * 0.07, 0.28)} className="h-full">
      <Link
        href={"/programs/" + item.slug}
        className="group flex h-full min-h-72 flex-col rounded-[28px] border border-[#F3E9E6] bg-white p-7 shadow-[0_12px_45px_rgba(23,36,58,.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#EB6664]/40 hover:shadow-[0_22px_55px_rgba(235,102,100,.12)]"
      >
        <span className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF0EE] text-[#EB6664] group-hover:rotate-6 transition-transform">
          <AnimatedIcon icon={Icon} size={26} />
        </span>
        <span className="mb-2 text-xs font-bold uppercase tracking-widest text-[#EB6664]">
          {item.tag}
        </span>
        <h3 className="text-xl font-bold tracking-tight text-[#17243A]">
          {item.title}
        </h3>
        <p className="mt-3 grow text-sm leading-7 text-slate-500">
          {item.description}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#D94E5B]">
          Explore program{" "}
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      </Link>
    </Reveal>
  );
}
export function SubjectCard({ item }) {
  return (
    <Link
      href={"/subjects/" + item.slug}
      className="group flex items-center gap-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#EB6664]/30 hover:shadow-xl"
    >
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#FFF0EE] text-3xl font-semibold text-[#EB6664]">
        <span className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125">
          {item.emoji}
        </span>
      </span>
      <span>
        <strong className="block text-lg text-[#17243A]">{item.title}</strong>
        <span className="mt-1 block text-sm leading-6 text-slate-500">
          {item.description}
        </span>
      </span>
      <ArrowUpRight
        className="ml-auto shrink-0 text-[#EB6664] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
        size={18}
      />
    </Link>
  );
}
export function Check({ children }) {
  return (
    <div className="flex items-center gap-3 text-sm text-slate-600">
      <CheckCircle2 className="shrink-0 text-[#EB6664]" size={19} />
      {children}
    </div>
  );
}
