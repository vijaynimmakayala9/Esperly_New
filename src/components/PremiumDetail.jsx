import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Compass,
  GraduationCap,
  Lightbulb,
  Sparkles,
  Target,
  WandSparkles,
} from "lucide-react";

const themes = {
  programs: {
    eyebrow: "PERSONALIZED LEARNING PATHWAYS",
    gradient: "from-[#FFF1EE] via-[#FFF9F6] to-[#F0EAFF]",
    badge: "bg-[#FFE4DE] text-[#C34E50]",
    accent: "#EB6664",
    icon: GraduationCap,
  },
  subjects: {
    eyebrow: "DISCOVER YOUR NEXT BREAKTHROUGH",
    gradient: "from-[#EDF8FF] via-white to-[#FFF0EE]",
    badge: "bg-[#E2F3FF] text-[#376AA2]",
    accent: "#EB6664",
    icon: Lightbulb,
  },
  curriculum: {
    eyebrow: "LEARNING WITH DIRECTION",
    gradient: "from-[#F1EDFF] via-white to-[#E9F9F1]",
    badge: "bg-[#EAE2FF] text-[#6851A5]",
    accent: "#EB6664",
    icon: Compass,
  },
};

export default function PremiumDetail({ type, item, items, description }) {
  const theme = themes[type] || themes.programs;
  const Icon = theme.icon;
  const cards =
    type === "programs"
      ? [
          [
            "A plan that fits",
            "Explore goals and a learning pace that suits the student.",
            Target,
          ],
          [
            "Clear explanations",
            "Build understanding with examples and guided practice.",
            Lightbulb,
          ],
          [
            "Confidence to grow",
            "Develop routines, curiosity, and steady learning habits.",
            Sparkles,
          ],
          [
            "Meaningful practice",
            "Revisit difficult concepts without rushing ahead.",
            BookOpen,
          ],
        ]
      : type === "subjects"
        ? [
            [
              "Concept-first lessons",
              "Break challenging topics into approachable ideas.",
              Lightbulb,
            ],
            [
              "Practice with purpose",
              "Apply concepts through thoughtful exercises.",
              Target,
            ],
            [
              "Ask more questions",
              "Explore the reasoning behind every answer.",
              WandSparkles,
            ],
            [
              "Connect the dots",
              "Link fundamentals to more advanced learning.",
              BookOpen,
            ],
          ]
        : [
            [
              "Syllabus awareness",
              "Explore relevant learning objectives and topic areas.",
              Compass,
            ],
            [
              "Flexible explanations",
              "Approach concepts in ways that suit the learner.",
              Lightbulb,
            ],
            [
              "Review and reinforce",
              "Make space for revision and meaningful practice.",
              Target,
            ],
            [
              "Learning confidence",
              "Focus on steady understanding and progress.",
              Sparkles,
            ],
          ];
  return (
    <main className="overflow-hidden bg-white text-[#17243A]">
      <section
        className={`relative isolate overflow-hidden bg-gradient-to-br ${theme.gradient} px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24`}
      >
        <div className="pointer-events-none absolute -right-24 top-16 size-80 rounded-full bg-[#EB6664]/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 size-72 rounded-full bg-[#A9A0FF]/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.12fr_.88fr] lg:gap-16">
          <div>
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-white/90 ${theme.badge} px-4 py-2 text-xs font-extrabold tracking-[.16em] shadow-sm`}
            >
              <Sparkles size={15} />
              {theme.eyebrow}
            </div>
            <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-slate-500">
              <Link href="/" className="hover:text-[#EB6664]">
                Home
              </Link>
              <span>/</span>
              <Link
                href={`/${type}`}
                className="capitalize hover:text-[#EB6664]"
              >
                {type}
              </Link>
              <span>/</span>
              <span className="truncate text-[#D94E5B]">{item.title}</span>
            </div>
            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.07] tracking-[-.065em] sm:text-6xl lg:text-[76px]">
              {item.title}
              <span className="text-[#EB6664]">.</span>
              <br />
              <span className="bg-gradient-to-r from-[#D94E5B] to-[#F59C83] bg-clip-text text-transparent">
                Learn brilliantly.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              {description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#EB6664] to-[#F58D7D] px-7 py-4 font-bold text-white shadow-[0_14px_30px_rgba(235,102,100,.27)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(235,102,100,.35)]"
              >
                Explore a free demo <ArrowUpRight size={19} />
              </Link>
              <Link
                href={`/${type}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#E9D8D7] bg-white px-7 py-4 font-bold shadow-[0_8px_24px_rgba(23,36,58,.06)] transition hover:-translate-y-1 hover:border-[#EB6664]"
              >
                View all {type} <ArrowRight size={18} />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {["Personal attention", "Curiosity-led", "Flexible learning"].map(
                (x) => (
                  <span
                    key={x}
                    className="inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm"
                  >
                    <CheckCircle2 size={16} className="text-[#EB6664]" />
                    {x}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[530px]">
            <div className="absolute -inset-4 rounded-[48px] bg-gradient-to-tr from-[#EB6664]/25 via-[#B9ACFF]/20 to-[#7EE5C2]/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[38px] border border-white/90 bg-white/85 p-5 shadow-[0_32px_90px_rgba(30,40,70,.16)] backdrop-blur-xl sm:p-8">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-bold">
                  <span className="size-2.5 rounded-full bg-[#EB6664]" />{" "}
                  Learning studio
                </span>
                <span className="rounded-full bg-[#FFF0EE] px-3 py-1 text-xs font-bold text-[#D94E5B]">
                  ESPERLY
                </span>
              </div>
              <div className="relative mt-6 overflow-hidden rounded-[28px] border border-[#F7E7E4] bg-gradient-to-br from-[#FFF4F0] via-[#F9F4FF] to-[#EFFCF6] p-4">
                <img
                  src="/animations/learning-cap.gif"
                  alt="Animated graduation cap and open book"
                  width="400"
                  height="400"
                  loading="lazy"
                  className="mx-auto aspect-square w-full max-w-[350px] object-contain"
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-[#F6E6E2] bg-[#FFF9F6] p-4">
                  <Target size={21} className="text-[#EB6664]" />
                  <p className="mt-2 text-sm font-bold">Your goals</p>
                  <p className="mt-1 text-xs text-slate-500">At the center</p>
                </div>
                <div className="rounded-2xl border border-[#E7E4F8] bg-[#F7F5FF] p-4">
                  <Sparkles size={21} className="text-[#8C73D8]" />
                  <p className="mt-2 text-sm font-bold">Your potential</p>
                  <p className="mt-1 text-xs text-slate-500">Worth exploring</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-2 -top-5 flex size-16 items-center justify-center rounded-3xl border border-white bg-[#FFF0EE] text-[#EB6664] shadow-xl sm:-right-6">
              <Icon size={31} />
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#EB6664]">
              THE ESPERLY APPROACH
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-[-.05em] sm:text-5xl">
              Designed to make learning{" "}
              <span className="text-[#EB6664]">click.</span>
            </h2>
            <p className="mt-5 text-slate-600">
              A supportive experience built around clarity, encouragement, and
              individual learning needs.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(([title, body, CardIcon], i) => (
              <article
                key={title}
                className={`group rounded-[30px] border p-7 shadow-[0_14px_35px_rgba(23,36,58,.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#EB6664]/40 hover:shadow-[0_24px_55px_rgba(235,102,100,.13)] ${i % 2 ? "border-[#E7E3FF] bg-gradient-to-br from-white to-[#F7F4FF]" : "border-[#F7E2DD] bg-gradient-to-br from-white to-[#FFF5F2]"}`}
              >
                <div className="flex size-14 items-center justify-center rounded-2xl border border-white bg-white text-[#EB6664] shadow-md transition-transform group-hover:rotate-6 group-hover:scale-110">
                  <CardIcon size={27} />
                </div>
                <div className="mt-8 text-xs font-extrabold tracking-[.18em] text-[#EB6664]">
                  0{i + 1} / LEARNING
                </div>
                <h3 className="mt-3 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-[#17243A] via-[#202C42] to-[#333252] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[#FFC4B6]">
              A DIFFERENT WAY TO LEARN
            </span>
            <h2 className="mt-6 text-4xl font-black tracking-[-.05em] sm:text-5xl">
              A little more clarity.{" "}
              <span className="text-[#FF9B8C]">A lot more possibility.</span>
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-300">
              Explore a flexible learning experience where questions are welcome
              and progress is personal.
            </p>
            <Link
              href="/how-it-works"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 font-bold transition hover:bg-white/20"
            >
              How it works <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Understand", "Explore", "Practice", "Grow"].map((x, i) => (
              <div
                key={x}
                className="rounded-[26px] border border-white/15 bg-white/10 p-7 shadow-[0_16px_45px_rgba(0,0,0,.12)] backdrop-blur-md"
              >
                <div className="text-4xl font-black text-[#FFB8A6]">
                  0{i + 1}
                </div>
                <div className="mt-5 text-xl font-bold">{x}</div>
                <div className="mt-2 text-sm text-slate-300">
                  Every step matters in a learner's journey.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#FFF9F6] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-[.2em] text-[#EB6664]">
                KEEP EXPLORING
              </span>
              <h2 className="mt-3 text-4xl font-black tracking-[-.05em]">
                More to discover
              </h2>
            </div>
            <Link
              href={`/${type}`}
              className="inline-flex items-center gap-2 font-bold text-[#D94E5B]"
            >
              Explore all <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {items
              .filter((x) => x.slug !== item.slug)
              .slice(0, 3)
              .map((x, i) => (
                <Link
                  key={x.slug}
                  href={`/${type}/${x.slug}`}
                  className="group rounded-[28px] border border-[#F4E2DE] bg-white p-7 shadow-[0_12px_36px_rgba(23,36,58,.06)] transition-all hover:-translate-y-2 hover:border-[#EB6664]/50 hover:shadow-xl"
                >
                  <span
                    className={`inline-flex size-12 items-center justify-center rounded-2xl ${i === 1 ? "bg-[#F1EDFF] text-[#7B66B8]" : "bg-[#FFF0EE] text-[#EB6664]"}`}
                  >
                    <BookOpen size={23} />
                  </span>
                  <h3 className="mt-6 text-xl font-extrabold">{x.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {x.description ||
                      "Explore a supportive, personalized approach to learning."}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#EB6664]">
                    Discover more{" "}
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-[36px] border border-[#F3CBC4] bg-gradient-to-r from-[#FFF0EE] via-[#FFF9F6] to-[#F1EDFF] p-8 shadow-[0_20px_65px_rgba(235,102,100,.12)] sm:p-12 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-[-.04em] sm:text-4xl">
              Ready for your next breakthrough?
            </h2>
            <p className="mt-3 text-slate-600">
              Share your goals and explore the next step with Esperly.
            </p>
          </div>
          <Link
            href="/book-demo"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#EB6664] px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#D94E5B]"
          >
            Explore a free demo <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
