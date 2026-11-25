"use client";

import { cardTheme } from "@/lib/cardThemes";
import Link from "next/link";
import ParallaxImage from "@/components/ParallaxImage";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import ParallaxBanner from "./ParallaxBanner";
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  BookOpen,
  HeartHandshake,
  Target,
} from "@/components/BrandIcons";

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

const photos = [
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
];
const icons = [BookOpen, Target, HeartHandshake];

export default function PageExperience() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const section = pathname?.split("/").filter(Boolean)[0] || "programs";
  const [headline, subtitle, points, summary] =
    pageContent[section] || pageContent.programs;
  const reveal = (delay = 0) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.16 },
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <div className="w-full overflow-x-clip">
      {/* Editorial learning experience — designed as a mid-page section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#FFF9F6] via-white to-[#F8F4FF] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-36 top-20 h-80 w-80 rounded-full bg-[#EB6664]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl"
        />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <motion.div {...reveal()}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#EB6664]/20 bg-white/85 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#D95359] shadow-sm">
              <Sparkles size={15} /> Learning, reimagined
            </span>
            <h2 className="mt-6 max-w-xl text-[clamp(2rem,3.7vw,3.5rem)] font-black leading-[1.12] tracking-[-0.05em] text-[#17243A]">
              {headline}
              <span className="text-[#EB6664]">.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
              {summary}
            </p>
            <div className="mt-8 space-y-3">
              {points.map((point, i) => (
                <motion.div
                  key={point}
                  {...reveal(0.08 + i * 0.07)}
                  className={`group flex items-center gap-4 rounded-2xl border ${cardTheme(i)} p-3.5 shadow-[0_8px_30px_rgba(23,36,58,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#EB6664]/30 hover:shadow-[0_14px_36px_rgba(23,36,58,0.09)] sm:px-5`}
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFF0EE] to-[#FFE0DA] text-sm font-black text-[#D95359]">
                    0{i + 1}
                  </span>
                  <span className="flex-1 text-sm font-semibold text-[#17243A] sm:text-base">
                    {point}
                  </span>
                  <CheckCircle2 size={19} className="shrink-0 text-[#EB6664]" />
                </motion.div>
              ))}
            </div>
            <Link
              href="/book-demo"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#D95359] transition-colors hover:text-[#17243A]"
            >
              Discover your learning journey{" "}
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>

          <motion.div
            {...reveal(0.12)}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#FFDDD8] via-[#EDE6FF] to-[#FFF5EE] opacity-80 blur-2xl"
            />
            <div className="group relative overflow-hidden rounded-[30px] border border-white/80 bg-white p-3 shadow-[0_30px_80px_rgba(23,36,58,0.12)] sm:p-4">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[22px] sm:aspect-[6/5]">
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1100&q=85"
                  alt="Student studying with books and notes"
                  fill
                  sizes="(max-width:1024px) 90vw, 44vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#111C30]/75 via-transparent to-transparent"
                />
                <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 text-white sm:bottom-7 sm:left-7">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#EB6664] shadow-lg">
                    <GraduationCap size={23} />
                  </span>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-white/75">
                      The Esperly experience
                    </span>
                    <span className="mt-1 block text-base font-bold sm:text-lg">
                      Small steps. Big possibilities.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-2 hidden items-center gap-2 rounded-2xl border border-white bg-white px-4 py-3 text-sm font-bold text-[#17243A] shadow-[0_15px_40px_rgba(23,36,58,0.12)] sm:flex lg:-right-6">
              <span className="flex size-9 items-center justify-center rounded-xl bg-[#FFF0EE] text-[#EB6664]">
                <Sparkles size={18} />
              </span>
              Learning with purpose
            </div>
          </motion.div>
        </div>
      </section>

      {/* Supporting feature cards */}
      <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div {...reveal()} className="mb-10 max-w-2xl sm:mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.19em] text-[#D95359]">
              <span className="h-px w-7 bg-[#EB6664]" /> Explore the experience
            </span>
            <h2 className="mt-4 text-[clamp(1.9rem,3.2vw,3rem)] font-black leading-tight tracking-[-0.045em] text-[#17243A]">
              {subtitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              Thoughtful learning experiences built around curiosity, clarity,
              and steady progress.
            </p>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
            {points.map((point, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.article
                  key={point}
                  {...reveal(i * 0.09)}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[26px] border ${cardTheme(i)} p-3 shadow-[0_10px_35px_rgba(23,36,58,0.045)] transition-all duration-500 hover:-translate-y-2 hover:border-[#EB6664]/30 hover:shadow-[0_24px_55px_rgba(23,36,58,0.1)] sm:p-4`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[18px]">
                    <ParallaxImage
                      src={photos[i % photos.length]}
                      alt={point}
                      fill
                      sizes="(max-width:768px) 90vw, 32vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 flex size-10 items-center justify-center rounded-xl border border-white/70 bg-white/90 text-[#EB6664] shadow-sm backdrop-blur-md">
                      <Icon size={19} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-2 pb-3 pt-6 sm:px-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#EB6664]">
                      0{i + 1} / ESPERLY
                    </span>
                    <h3 className="mt-3 text-xl font-extrabold leading-snug tracking-[-0.03em] text-[#17243A]">
                      {point}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
                      A thoughtful part of the learning experience, designed to
                      support confidence and curiosity.
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xs font-semibold text-slate-400">
                        Learn • Practice • Grow
                      </span>
                      <span className="flex size-9 items-center justify-center rounded-full bg-[#FFF0EE] text-[#EB6664] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#EB6664] group-hover:text-white">
                        <ArrowUpRight size={17} />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <ParallaxBanner
        title="More wonder in every lesson."
        description="Make space for curiosity, creativity, and confident learning."
      />
    </div>
  );
}
