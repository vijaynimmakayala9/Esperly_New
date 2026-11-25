"use client";

import { cardTheme } from "@/lib/cardThemes";
import { motion, useReducedMotion } from "motion/react";
import TuitionBooking from "./TuitionBooking";
import ParallaxBanner from "./ParallaxBanner";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Compass,
  GraduationCap,
  HeartHandshake,
  Layers3,
  Lightbulb,
  MessageCircle,
  MoveUpRight,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  WandSparkles,
} from "@/components/BrandIcons";

const details = {
  tuition: {
    badge: "ONE-TO-ONE ACADEMIC SUPPORT",
    kicker: "Build strong foundations. Grow with confidence.",
    promise: "A calmer, clearer way to master school learning.",
    process: [
      "Discover current strengths and learning gaps",
      "Create a focused, age-appropriate learning plan",
      "Learn concepts through guided practice",
      "Review progress and refine the next steps",
    ],
    features: [
      [
        "Concept-first teaching",
        "Move beyond memorization with clear explanations and worked examples.",
      ],
      [
        "Personalized practice",
        "Target topics that need extra attention without losing momentum.",
      ],
      [
        "Study confidence",
        "Build independent habits and prepare for assessments step by step.",
      ],
    ],
    faqs: [
      [
        "Can the learning plan be adapted?",
        "Yes. The focus areas can be discussed during an enquiry and tailored to the learner’s goals.",
      ],
      [
        "Is this suitable for different school curricula?",
        "Share your class and curriculum during the enquiry so the team can confirm the available support.",
      ],
      [
        "How do I get started?",
        "Use Book Free Demo or Contact Us to discuss suitable learning options.",
      ],
    ],
  },
  language: {
    badge: "LANGUAGE LEARNING TRACK",
    kicker: "New words. New worlds. New confidence.",
    promise: "Learn to understand, express and connect.",
    process: [
      "Discuss your current proficiency and goals",
      "Start with useful words and sound patterns",
      "Practice listening, speaking, reading and writing",
      "Build confidence through regular revision",
    ],
    features: [
      [
        "Everyday communication",
        "Learn useful phrases and practice expressing real ideas.",
      ],
      [
        "Guided pronunciation",
        "Build clarity through listening, repetition and feedback.",
      ],
      [
        "Practical language skills",
        "Combine vocabulary, grammar and communication in meaningful activities.",
      ],
    ],
    faqs: [
      [
        "Can beginners join?",
        "The learning focus can begin with foundational language skills. Confirm the suitable level during your enquiry.",
      ],
      [
        "Will there be speaking practice?",
        "Conversation and pronunciation can form part of the proposed learning plan.",
      ],
      [
        "How do I choose a track?",
        "Tell us the language and your goals when requesting a demo.",
      ],
    ],
  },
  booster: {
    badge: "CREATIVE LEARNING BOOSTER",
    kicker: "Explore your spark. Make room to grow.",
    promise: "Make creativity and self-expression part of learning.",
    process: [
      "Explore interests and current experience",
      "Learn essential techniques through guided activities",
      "Practice with small, enjoyable challenges",
      "Celebrate progress and explore new goals",
    ],
    features: [
      [
        "Creative expression",
        "Discover new ways to communicate ideas, movement and imagination.",
      ],
      [
        "Skill-building practice",
        "Develop techniques gradually through engaging exercises.",
      ],
      [
        "Confidence through doing",
        "Enjoy the process, try new things and grow at your own pace.",
      ],
    ],
    faqs: [
      [
        "Is prior experience needed?",
        "Beginner-friendly starting points can be discussed during an enquiry.",
      ],
      [
        "What should I prepare?",
        "Requirements depend on the activity. Ask about materials and setup before your session.",
      ],
      [
        "Can I explore another activity?",
        "Browse the other Learning Boosters and enquire about the option that interests you.",
      ],
    ],
  },
  course: {
    badge: "SHORT-TERM SKILL COURSE",
    kicker: "Small skills today. Big possibilities tomorrow.",
    promise: "Focused learning for skills that last.",
    process: [
      "Identify the skill you want to strengthen",
      "Start with practical foundations",
      "Practice through structured activities",
      "Apply the skill in everyday situations",
    ],
    features: [
      [
        "Focused skill development",
        "Work on one useful skill with a clear, manageable learning direction.",
      ],
      [
        "Practice-led sessions",
        "Turn ideas into practical ability through repeated application.",
      ],
      [
        "Progress you can notice",
        "Recognize new strengths and plan what to learn next.",
      ],
    ],
    faqs: [
      [
        "Who can explore this course?",
        "Suitability depends on the learner’s age and goals. Please enquire for guidance.",
      ],
      [
        "How long is the course?",
        "Duration and scheduling should be confirmed with the Esperly team.",
      ],
      [
        "How do I enquire?",
        "Choose Book Free Demo or Contact Us to ask about availability.",
      ],
    ],
  },
};

export default function LearningDetail({
  eyebrow,
  title,
  description,
  highlights = [],
  kind = "tuition",
  related = [],
}) {
  const reduceMotion = useReducedMotion();
  const info = details[kind] || details.tuition;
  const topics = highlights.length
    ? highlights
    : ["Foundational skills", "Guided practice", "Learning confidence"];
  return (
    <main className="overflow-hidden bg-[#FFFCFA] text-[#17243A] selection:bg-[#EB6664]/20">
      {/* Hero: light editorial panel + dark premium learning card */}
      <section className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#FFF2ED] via-[#FFFCFA] to-[#F1ECFF]">
        {/* Ambient background */}
        <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-[#EB6664]/10 blur-3xl sm:h-72 sm:w-72" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-violet-300/20 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-9 sm:px-6 sm:py-11 lg:grid-cols-2 lg:items-stretch lg:gap-10 lg:px-8 lg:py-12 xl:gap-12">
          {/* LEFT SIDE */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex min-w-0 flex-col justify-center"
          >
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-4 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-500 sm:text-xs"
            >
              <Link href="/" className="hover:text-[#EB6664]">
                Home
              </Link>
              <ChevronRight size={12} />
              <span>{eyebrow}</span>
              <ChevronRight size={12} />
              <span className="text-[#EB6664]">{title}</span>
            </nav>

            {/* Badge */}
            <span className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-[#EB6664]/20 bg-white px-3 py-1.5 text-[10px] font-extrabold tracking-wider text-[#D65557] shadow-sm sm:px-4">
              <Sparkles size={14} className="shrink-0" />
              {info.badge}
            </span>

            {/* Heading */}
            <h1 className="mt-4 max-w-2xl text-[clamp(1.85rem,3.6vw,3.15rem)] font-black leading-[1.12] tracking-[-0.045em] text-[#17243A]">
              Discover your potential with{" "}
              <span className="bg-gradient-to-r from-[#EB6664] to-[#BD578B] bg-clip-text text-transparent">
                {title}
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              {description}
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={kind === "tuition" && /^Class \d+$/.test(title) ? "#tuition-booking" : "/book-demo"}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#EB6664] px-5 py-2.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(235,102,100,.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D65357] hover:shadow-xl"
              >
                Book Free Demo
                <ArrowUpRight size={16} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-[#17243A] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Talk to Our Team
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Highlights */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-500">
              {[
                "Personalized direction",
                "Guided practice",
                "Confidence building",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#EB6664]" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex min-w-0 w-full items-stretch lg:h-full"
          >
            {/* Radiant outer glow */}
            <motion.div
              aria-hidden="true"
              animate={
                reduceMotion
                  ? {}
                  : {
                      scale: [1, 1.06, 1],
                      opacity: [0.45, 0.75, 0.45],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -inset-2 rounded-[32px] bg-gradient-to-r from-[#EB6664]/35 via-fuchsia-400/25 to-violet-400/35 blur-2xl"
            />

            {/* Main radiant card */}
            <div className="relative flex w-full min-w-0 flex-col justify-center overflow-hidden rounded-[26px] border border-white/25 bg-gradient-to-br from-[#14243C] via-[#302749] to-[#542C58] p-5 text-white shadow-[0_25px_65px_rgba(23,36,58,.28)] sm:rounded-[30px] sm:p-6 lg:h-full xl:p-7">
              {/* Animated background lights */}
              <motion.div
                aria-hidden="true"
                animate={reduceMotion ? {} : { x: [0, 22, 0], y: [0, -14, 0] }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#EB6664]/40 blur-[80px]"
              />

              <motion.div
                aria-hidden="true"
                animate={reduceMotion ? {} : { x: [0, -16, 0], y: [0, 16, 0] }}
                transition={{
                  duration: 11,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-violet-500/35 blur-[80px]"
              />

              {/* Top row */}
              <div className="relative z-10 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold tracking-wide text-white/85 backdrop-blur-xl">
                  <GraduationCap size={14} />
                  THE ESPERLY WAY
                </span>

                <motion.div
                  animate={reduceMotion ? {} : { y: [0, -6, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br from-[#FF8D7D] to-[#EB6664] shadow-[0_10px_25px_rgba(235,102,100,.35)]"
                >
                  <WandSparkles size={19} />
                </motion.div>
              </div>

              {/* Heading */}
              <div className="relative z-10 mt-5">
                <h2 className="max-w-md text-[clamp(1.4rem,2.6vw,2rem)] font-extrabold leading-tight tracking-tight">
                  {info.promise}
                </h2>

                <p className="mt-2 text-xs leading-5 text-white/70 sm:text-sm">
                  Your focus areas for {title}.
                </p>
              </div>

              {/* Topic cards */}
              <div className="relative z-10 mt-5 flex flex-col gap-2.5">
                {topics.map((topic, i) => (
                  <motion.div
                    key={`${topic}-${i}`}
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: reduceMotion ? 0 : Math.min(i * 0.07, 0.35),
                    }}
                    whileHover={
                      reduceMotion ? undefined : { x: 4, scale: 1.01 }
                    }
                    className="group relative flex min-w-0 items-center gap-3 rounded-xl border border-white/20 bg-white/[0.09] px-3 py-2.5 shadow-[0_6px_20px_rgba(0,0,0,.08)] backdrop-blur-xl transition-colors duration-300 hover:border-[#FFB9AD]/60 hover:bg-white/[0.18] sm:px-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#FFB9AD]/20 bg-[#EB6664]/25 text-xs font-extrabold text-[#FFB9AD]">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0 flex-1 break-words text-xs font-semibold leading-5 sm:text-sm">
                      {topic}
                    </span>

                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-[#FFB9AD]"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="relative z-10 mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-white/15 pt-4 text-[11px] text-white/65">
                <span>Explore • Practice • Grow</span>

                <span className="inline-flex items-center gap-1 font-semibold text-[#FFB9AD]">
                  Your next step
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#EB6664]">
            What you will explore
          </p>
          <h2 className="mt-4 text-2xl sm:text-[1.75rem] font-black tracking-tight sm:text-4xl">
            A learning journey built around{" "}
            <span className="text-[#EB6664]">real progress.</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Every learner has a different starting point. These focus areas
            offer a clear direction for exploring {title.toLowerCase()}.
          </p>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {topics.map((topic, i) => (
            <motion.article
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: reduceMotion ? 0 : Math.min(i * 0.08, 0.4),
              }}
              key={topic}
              className={`group relative overflow-hidden rounded-[26px] border ${cardTheme(i)} p-6 shadow-[0_14px_40px_rgba(23,36,58,.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#EB6664]/35 hover:shadow-[0_25px_65px_rgba(235,102,100,.15)] sm:p-7`}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFE4DE] to-[#F4E9FF] text-[#D65557]">
                  {i === 0 ? (
                    <Target size={26} />
                  ) : i === 1 ? (
                    <Lightbulb size={26} />
                  ) : (
                    <TrendingUp size={26} />
                  )}
                </span>
                <span className="text-2xl sm:text-[1.75rem] font-black text-slate-100">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-extrabold sm:text-xl">
                {topic}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Build understanding and confidence in {topic.toLowerCase()} with
                age- and goal-appropriate activities.
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#EB6664]">
                Explore this skill <ArrowUpRight size={15} />
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      {kind === "tuition" && /^Class \d+$/.test(title) && <TuitionBooking key={title} title={title} />}
      <ParallaxBanner
        eyebrow="PERSONALIZED LEARNING"
        title={`A brighter path for ${title}.`}
        description="Discover inspiring learning moments with supportive guidance and meaningful practice."
      />
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#101C30] via-[#202843] to-[#432D51] py-14 text-white sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -right-20 -top-28 h-96 w-96 rounded-full bg-[#EB6664]/25 blur-[95px]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-28 h-80 w-80 rounded-full bg-violet-500/20 blur-[90px]"
        />
        <div className="relative mx-auto grid max-w-7xl gap-7 lg:gap-12 px-5 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#FFB5AA]">
              Why this approach works
            </span>
            <h2 className="mt-5 text-2xl sm:text-[1.75rem] font-black tracking-tight sm:text-4xl">
              Thoughtful support,{" "}
              <span className="text-[#FFB5AA]">every step.</span>
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-white/65">
              {info.kicker} Explore a supportive approach that puts the
              learner’s needs first.
            </p>
            <Link
              href="/how-it-works"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              How Esperly Works <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="grid gap-4">
            {info.features.map(([name, copy], i) => (
              <motion.div
                key={name}
                initial={reduceMotion ? false : { opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : i * 0.1,
                }}
                className="group flex gap-4 rounded-[24px] border border-white/15 bg-gradient-to-br from-[#304A69] to-[#242D49] p-5 shadow-[0_15px_45px_rgba(0,0,0,.1)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#FFB5AA]/40 hover:bg-white/[.12] sm:p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EB6664]/20 text-[#FFB5AA]">
                  {i === 0 ? (
                    <Compass size={23} />
                  ) : i === 1 ? (
                    <Layers3 size={23} />
                  ) : (
                    <HeartHandshake size={23} />
                  )}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{name}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/60">{copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="text-center">
          <span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#EB6664]">
            Simple steps
          </span>
          <h2 className="mt-4 text-2xl sm:text-[1.75rem] font-black tracking-tight sm:text-4xl">
            Your path from curiosity to confidence
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-600">
            A clear way to begin exploring {title} with Esperly.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {info.process.map((step, i) => (
            <motion.div
              key={step}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: reduceMotion ? 0 : i * 0.07 }}
              className={`group relative overflow-hidden rounded-[26px] border ${cardTheme(i)} p-6 shadow-[0_12px_35px_rgba(23,36,58,.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#EB6664]/40 hover:shadow-[0_20px_55px_rgba(235,102,100,.12)] sm:p-7`}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EB6664] text-lg font-black text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-bold leading-7">{step}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                A thoughtful step toward stronger understanding and independent
                growth.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF0EB] via-[#FFF9F6] to-[#EFEAFF] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#D65557]">
              Learning outcomes
            </p>
            <h2 className="mt-4 text-2xl sm:text-[1.75rem] font-black tracking-tight sm:text-4xl">
              More than a lesson. A stronger foundation.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              The goal is to make progress feel approachable, purposeful and
              motivating.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Greater clarity and understanding",
              "More consistent practice habits",
              "Confidence to ask questions",
              "A clearer next learning goal",
            ].map((outcome) => (
              <div
                key={outcome}
                className={`group flex items-center gap-3 rounded-2xl border ${cardTheme(outcome)} p-4 text-sm font-semibold shadow-[0_10px_30px_rgba(23,36,58,.06)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#EB6664]/30 hover:shadow-lg sm:p-5`}
              >
                <CheckCircle2 size={20} className="shrink-0 text-[#EB6664]" />
                {outcome}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-7 lg:gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#EB6664]">
              Common questions
            </p>
            <h2 className="mt-4 text-2xl sm:text-[1.75rem] font-black tracking-tight sm:text-4xl">
              Questions? We've got you.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Explore the answers below or contact the team to discuss {title}.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#EB6664]"
            >
              Contact Esperly <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="space-y-3">
            {info.faqs.map(([question, answer]) => (
              <details
                key={question}
                className={`group rounded-[20px] border ${cardTheme(question)} p-5 shadow-[0_8px_25px_rgba(23,36,58,.04)] transition-all duration-300 open:border-[#EB6664]/40 open:shadow-[0_14px_35px_rgba(235,102,100,.09)]`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold marker:hidden">
                  {question}
                  <span className="text-[#EB6664] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#EB6664]">
                Keep exploring
              </p>
              <h2 className="mt-3 text-2xl sm:text-[1.75rem] font-black">
                Discover more learning paths
              </h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map(({ title: relatedTitle, href }) => (
              <Link
                key={href}
                href={href}
                className={`group flex items-center justify-between gap-4 rounded-[22px] border ${cardTheme(href)} p-5 font-bold shadow-[0_10px_30px_rgba(23,36,58,.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#EB6664]/45 hover:shadow-[0_20px_45px_rgba(235,102,100,.12)] sm:p-6`}
              >
                {relatedTitle}
                <ArrowUpRight
                  size={18}
                  className="text-[#EB6664] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            ))}
          </div>
        </section>
      )}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#14243C] via-[#302747] to-[#583052] py-14 text-white sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-28 h-80 w-80 rounded-full bg-[#EB6664]/25 blur-[85px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-[85px]"
        />
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#FFB5AA]">
              Ready to begin?
            </span>
            <h2 className="mt-4 max-w-2xl text-2xl sm:text-[1.75rem] font-black tracking-tight sm:text-4xl">
              Make your next chapter a learning adventure.
            </h2>
            <p className="mt-4 text-white/65">
              Ask about {title} and find a learning path that fits.
            </p>
          </div>
          <Link
            href={kind === "tuition" && /^Class \d+$/.test(title) ? "#tuition-booking" : "/book-demo"}
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#EB6664] to-[#F38C7A] px-7 py-3.5 text-sm font-bold shadow-[0_15px_40px_rgba(235,102,100,.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(235,102,100,.45)]"
          >
            Book a Free Demo <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
