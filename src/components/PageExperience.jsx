"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  BookOpen,
  Sparkles,
  HeartHandshake,
  Target,
  Layers3,
  GraduationCap,
} from "lucide-react";

const pageContent = {
  about: [
    "A thoughtful approach to every learner",
    "Our learning philosophy",
    ["Listen first", "Make space for questions", "Celebrate steady progress"],
    "Discover a more personal approach to academic support.",
  ],
  "online-tuition": [
    "Learning that fits real life",
    "A flexible online experience",
    [
      "Learn from wherever you are",
      "Make lessons interactive",
      "Keep parents in the loop",
    ],
    "Explore how personalized online tuition can support everyday learning.",
  ],
  programs: [
    "The right support at every stage",
    "Choose a learning pathway",
    [
      "Explore grade-level goals",
      "Build strong foundations",
      "Prepare for the next milestone",
    ],
    "Compare programs and find a starting point for your learner.",
  ],
  subjects: [
    "Make difficult ideas click",
    "A world of subjects to explore",
    [
      "Start with fundamentals",
      "Practice with purpose",
      "Apply what you learn",
    ],
    "Browse subject-focused tuition pathways and learning goals.",
  ],
  curriculum: [
    "Confidence across curricula",
    "Learning with a clear direction",
    [
      "Understand the syllabus",
      "Focus on key concepts",
      "Review and reinforce",
    ],
    "Explore the curriculum options proposed for Esperly.",
  ],
  "how-it-works": [
    "A simple start, a brighter path",
    "Your journey, step by step",
    ["Share learning needs", "Explore a demo", "Plan the next steps"],
    "Get to know the proposed Esperly learning journey.",
  ],
  "why-esperly": [
    "Designed around the individual",
    "Little details, big difference",
    ["Personal attention", "Encouraging instruction", "Thoughtful feedback"],
    "See what makes a learner-first approach different.",
  ],
  tutors: [
    "Guidance that inspires confidence",
    "The human side of learning",
    ["Subject expertise", "Clear explanations", "Supportive communication"],
    "Tutor profiles will be added when approved and verified.",
  ],
  testimonials: [
    "Every learner has a story",
    "What progress can look like",
    ["Greater curiosity", "More confident practice", "Better learning habits"],
    "Verified family stories will appear when available.",
  ],
  resources: [
    "A little inspiration goes a long way",
    "Learn beyond the lesson",
    [
      "Explore study habits",
      "Discover learning tips",
      "Build lasting routines",
    ],
    "Find helpful ideas for learners and families.",
  ],
  faq: [
    "Clear answers, confident decisions",
    "What to consider before you begin",
    ["Set learning goals", "Ask about lesson formats", "Understand next steps"],
    "Questions are welcome at every stage of the journey.",
  ],
  contact: [
    "Let's start a conversation",
    "We're here to listen",
    ["Tell us your questions", "Share learning goals", "Explore next steps"],
    "Use the contact form to prepare your enquiry.",
  ],
  "book-demo": [
    "See how learning could feel",
    "Your demo journey",
    ["Share student details", "Choose preferences", "Review your request"],
    "A demo request is not a confirmed appointment until the team responds.",
  ],
  "become-a-tutor": [
    "Teach with purpose",
    "Make every explanation matter",
    ["Share your expertise", "Support different learners", "Inspire curiosity"],
    "Explore the proposed tutor application process.",
  ],
  login: [
    "A learning space worth looking forward to",
    "What's planned for the portal",
    ["Lessons and resources", "Learning milestones", "A clearer overview"],
    "The student portal is a preview; authentication is not active.",
  ],
  "privacy-policy": [
    "Privacy deserves clarity",
    "Understand how information is handled",
    ["Read the policy", "Ask questions", "Make informed choices"],
    "Review the policy details before sharing personal information.",
  ],
  terms: [
    "Clarity from the beginning",
    "Know what to expect",
    ["Review the terms", "Understand the service", "Contact us with questions"],
    "Read the terms carefully before using a service.",
  ],
};

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.55 },
};

export default function PageExperience() {
  const path = usePathname();
  const reduced = useReducedMotion();
  const section = path.split("/").filter(Boolean)[0] || "programs";
  const [headline, subtitle, points, summary] =
    pageContent[section] || pageContent.programs;
  return (
    <div className="overflow-hidden">
      <section className="relative bg-[#FFF9F6] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div {...(reduced ? {} : reveal)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#EB6664]/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-[#D94E5B]">
              <Sparkles size={15} /> Learning, reimagined
            </span>
            <h2 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.1] tracking-[-.05em] text-[#17243A] sm:text-5xl lg:text-6xl">
              {headline}
              <span className="text-[#EB6664]">.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
              {summary}
            </p>
            <div className="mt-8 space-y-4">
              {points.map((point, i) => (
                <div
                  key={point}
                  className="group flex items-center gap-4 rounded-2xl border border-[#F4E6E2] bg-white/85 px-5 py-4 shadow-[0_12px_32px_rgba(23,36,58,.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF0EE] font-bold text-[#EB6664]">
                    0{i + 1}
                  </span>
                  <span className="font-semibold text-[#17243A]">{point}</span>
                  <CheckCircle2 className="ml-auto size-5 text-[#EB6664]" />
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            {...(reduced ? {} : reveal)}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="absolute -inset-5 rounded-[48px] bg-gradient-to-br from-[#FFDED8] via-[#F1EDFF] to-[#E5F8F1] blur-2xl" />
            <div className="relative overflow-hidden rounded-[36px] border border-white bg-white p-5 shadow-[0_30px_90px_rgba(23,36,58,.1)] sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-sm font-bold text-[#17243A]">
                  <span className="size-2.5 rounded-full bg-[#EB6664]" /> The
                  Esperly experience
                </span>
                <span className="rounded-full bg-[#FFF0EE] px-3 py-1.5 text-[11px] font-semibold text-[#D94E5B]">
                  Animated illustration
                </span>
              </div>
              <img
                src={
                  reduced
                    ? "/animations/learning-cap-still.webp"
                    : "/animations/learning-cap.gif"
                }
                alt="Animated coral graduation cap floating above an open book"
                loading="lazy"
                width="384"
                height="384"
                className="mx-auto my-4 aspect-square w-full max-w-[390px] rounded-3xl object-contain"
              />
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[#FFF9F6] p-4">
                <span className="flex items-center gap-2 text-sm font-bold text-[#17243A]">
                  <GraduationCap size={18} className="text-[#EB6664]" /> Small
                  steps. Big possibilities.
                </span>
                <Sparkles size={19} className="text-[#EB6664]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#EB6664]">
              Explore the experience
            </span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-.05em] text-[#17243A] sm:text-5xl">
              {subtitle}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {points.map((point, i) => {
              const Icon = [BookOpen, Target, HeartHandshake][i];
              return (
                <motion.div
                  key={point}
                  {...(reduced ? {} : reveal)}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-100 bg-gradient-to-br from-white to-[#FFF9F6] p-8 shadow-sm transition-all hover:-translate-y-2 hover:border-[#EB6664]/30 hover:shadow-xl"
                >
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-[#FFF0EE] text-[#EB6664] transition-transform group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={26} />
                  </span>
                  <span className="mt-8 block text-xs font-bold tracking-[.2em] text-[#EB6664]">
                    0{i + 1} / ESPERLY
                  </span>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[#17243A]">
                    {point}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    A thoughtful part of the learning experience, designed to
                    support confidence and curiosity.
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-[#17243A] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#FFB8A6]">
              The next chapter
            </span>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              A more inspiring way to keep learning.
            </h2>
            <p className="mt-3 max-w-xl text-slate-300">
              Explore the learning options and find the next step that works for
              your family.
            </p>
          </div>
          <Link
            href="/book-demo"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#EB6664] px-7 py-4 font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#D94E5B]"
          >
            Explore a free demo <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
    </div>
  );
}
