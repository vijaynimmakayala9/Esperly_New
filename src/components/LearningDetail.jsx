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
} from "lucide-react";

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
  const info = details[kind] || details.tuition;
  const topics = highlights.length
    ? highlights
    : ["Foundational skills", "Guided practice", "Learning confidence"];
  return (
    <main className="overflow-hidden bg-[#FFFCFA] text-[#17243A]">
      {/* Hero: light editorial panel + dark premium learning card */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#FFF6F3] via-[#FFFCFA] to-[#F3F0FF]">
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#EB6664]/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:px-8 lg:pb-28 lg:pt-28">
          <div>
            <div className="mb-7 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
              <Link href="/" className="hover:text-[#EB6664]">
                Home
              </Link>
              <ChevronRight size={13} />
              <span>{eyebrow}</span>
              <ChevronRight size={13} />
              <span className="text-[#EB6664]">{title}</span>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#EB6664]/20 bg-white/90 px-4 py-2 text-[11px] font-extrabold tracking-[.14em] text-[#D65557] shadow-sm">
              <Sparkles size={15} />
              {info.badge}
            </span>
            <h1 className="mt-7 max-w-2xl text-4xl font-black leading-[1.09] tracking-[-.045em] sm:text-5xl lg:text-[62px]">
              Discover your potential with{" "}
              <span className="bg-gradient-to-r from-[#EB6664] to-[#BD578B] bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              {description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 rounded-full bg-[#EB6664] px-7 py-4 text-sm font-bold text-white shadow-[0_16px_35px_rgba(235,102,100,.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#D65357]"
              >
                Book Free Demo <ArrowUpRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#17243A]/10 bg-white px-7 py-4 text-sm font-bold text-[#17243A] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                Talk to Our Team <ArrowRight size={17} />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#EB6664]" />
                Personalized direction
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#EB6664]" />
                Guided practice
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#EB6664]" />
                Confidence building
              </span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -inset-4 rotate-3 rounded-[40px] bg-[#EB6664]/10 blur-xl" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#19263C] via-[#17243A] to-[#342C50] p-7 text-white shadow-[0_35px_95px_rgba(23,36,58,.25)] sm:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#EB6664]/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold tracking-wider text-white/80">
                    <GraduationCap size={15} /> THE ESPERLY WAY
                  </span>
                  <span className="rounded-2xl bg-[#EB6664] p-3">
                    <WandSparkles size={23} />
                  </span>
                </div>
                <h2 className="mt-12 max-w-sm text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                  {info.promise}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  Your focus areas for {title}.
                </p>
                <div className="mt-8 space-y-3">
                  {topics.map((topic, i) => (
                    <div
                      key={topic}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.07] px-4 py-4 backdrop-blur-sm transition hover:bg-white/[.12]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EB6664]/20 text-sm font-extrabold text-[#FFB9AD]">
                        0{i + 1}
                      </span>
                      <span className="font-semibold">{topic}</span>
                      <CheckCircle2
                        size={17}
                        className="ml-auto shrink-0 text-[#FFB9AD]"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/60">
                  <span>Explore • Practice • Grow</span>
                  <span className="flex items-center gap-1 text-[#FFB9AD]">
                    Your next step <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#EB6664]">
            What you will explore
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            A learning journey built around{" "}
            <span className="text-[#EB6664]">real progress.</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Every learner has a different starting point. These focus areas
            offer a clear direction for exploring {title.toLowerCase()}.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {topics.map((topic, i) => (
            <article
              key={topic}
              className="group rounded-[28px] border border-[#EB6664]/10 bg-white p-7 shadow-[0_15px_45px_rgba(23,36,58,.055)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(235,102,100,.13)]"
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
                <span className="text-3xl font-black text-slate-100">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-extrabold">{topic}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Build understanding and confidence in {topic.toLowerCase()} with
                age- and goal-appropriate activities.
              </p>
              <div className="mt-7 flex items-center gap-2 text-xs font-bold text-[#EB6664]">
                Explore this skill <ArrowUpRight size={15} />
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#17243A] py-20 text-white lg:py-28">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#EB6664]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#FFB5AA]">
              Why this approach works
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
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
              <div
                key={name}
                className="flex gap-5 rounded-3xl border border-white/10 bg-white/[.06] p-6 backdrop-blur-sm"
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
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="text-center">
          <span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#EB6664]">
            Simple steps
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            Your path from curiosity to confidence
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-600">
            A clear way to begin exploring {title} with Esperly.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {info.process.map((step, i) => (
            <div
              key={step}
              className="relative rounded-[26px] border border-[#EB6664]/10 bg-gradient-to-b from-white to-[#FFF6F3] p-7 shadow-sm"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EB6664] text-lg font-black text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-7 text-lg font-bold leading-7">{step}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                A thoughtful step toward stronger understanding and independent
                growth.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gradient-to-br from-[#FFF1ED] via-[#FFF8F4] to-[#F3EEFF] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#D65557]">
              Learning outcomes
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
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
                className="flex gap-3 rounded-2xl border border-white bg-white/85 p-5 text-sm font-semibold shadow-sm"
              >
                <CheckCircle2 size={20} className="shrink-0 text-[#EB6664]" />
                {outcome}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#EB6664]">
              Common questions
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
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
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-[#EB6664]/30"
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
              <h2 className="mt-3 text-3xl font-black">
                Discover more learning paths
              </h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map(({ title: relatedTitle, href }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 font-bold shadow-sm transition hover:-translate-y-1 hover:border-[#EB6664]/40 hover:shadow-lg"
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
      <section className="bg-gradient-to-r from-[#17243A] via-[#252840] to-[#4B304B] py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#FFB5AA]">
              Ready to begin?
            </span>
            <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
              Make your next chapter a learning adventure.
            </h2>
            <p className="mt-4 text-white/65">
              Ask about {title} and find a learning path that fits.
            </p>
          </div>
          <Link
            href="/book-demo"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#EB6664] px-8 py-4 text-sm font-bold shadow-lg transition hover:-translate-y-1 hover:bg-[#D65357]"
          >
            Book a Free Demo <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
