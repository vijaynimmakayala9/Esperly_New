import ParallaxStory from "@/components/ParallaxStory";
import ParallaxBanner from "@/components/ParallaxBanner";
import { cardTheme } from "@/lib/cardThemes";
import EducationArt from "@/components/EducationArt";
import PremiumShowcase from "@/components/PremiumShowcase";
import AnimatedIcon from "@/components/AnimatedIcon";
import EditorialHero from "@/components/EditorialHero";
import Link from "next/link";
import ParallaxImage from "@/components/ParallaxImage";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Heart,
  Lightbulb,
  MessageCircle,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  Video,
  ChartNoAxesCombined,
  Clock,
  GraduationCap,
} from "@/components/BrandIcons";
import {
  Button,
  Heading,
  Reveal,
  ProgramCard,
  SubjectCard,
  Check,
} from "@/components/UI";
import { FAQ, Slider } from "@/components/Interactive";
import { programs, subjects, articles } from "@/data/site";
export default function Home() {
  return (
    <>
      <EditorialHero />
      <section className="relative overflow-hidden border-y border-[#EB6664]/10 bg-gradient-to-r from-white via-[#FFF8F6] to-white px-4 py-7 sm:px-6 sm:py-9 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 text-center sm:gap-4 md:grid-cols-5">
          {[
            [Users, "Personal attention"],
            [Video, "Interactive classes"],
            [Clock, "Flexible schedules"],
            [Target, "Goal-led lessons"],
            [Heart, "Confidence first"],
          ].map(([Icon, label], i) => (
            <div
              key={label}
              className={`group flex min-w-0 flex-col items-center justify-center gap-3 rounded-2xl border ${cardTheme(i)} px-3 py-5 text-xs font-semibold text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#EB6664]/25 hover:shadow-[0_14px_35px_rgba(235,102,100,.12)] sm:text-sm`}
            >
              <AnimatedIcon
                icon={Icon.displayName || Icon.name}
                size={24}
                className="text-[#EB6664]"
              />
              {label}
            </div>
          ))}
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#EAF4FF] to-[#F5F0FF] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Heading
            eyebrow="The Esperly difference"
            title="More than tuition. A better way to learn."
            description="Because great learning happens when a child feels understood, encouraged, and excited to try."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                Lightbulb,
                "Learning that fits",
                "Lessons shaped around individual strengths and learning needs.",
              ],
              [
                Users,
                "One-to-one attention",
                "Space to ask questions, practice, and find clarity.",
              ],
              [
                Video,
                "Engaging live sessions",
                "Meaningful conversations that make concepts click.",
              ],
              [
                CalendarDays,
                "Your schedule, your pace",
                "A learning routine designed to fit everyday life.",
              ],
              [
                ChartNoAxesCombined,
                "Thoughtful progress",
                "Focus on understanding, improvement, and next steps.",
              ],
              [
                Heart,
                "Confidence that grows",
                "Encouragement that makes trying feel easier.",
              ],
            ].map(([Icon, title, desc], i) => (
              <Reveal
                key={title}
                delay={i * 0.06}
                className={`group relative overflow-hidden rounded-[26px] border ${cardTheme(i)} p-5 shadow-[0_8px_30px_rgba(23,36,58,.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#EB6664]/30 hover:shadow-[0_24px_55px_rgba(235,102,100,.14)] sm:p-7`}
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFE7DF] to-[#F5E9FF] text-[#EB6664] shadow-sm transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <AnimatedIcon
                    icon={Icon.displayName || Icon.name}
                    size={26}
                  />
                </span>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <PremiumShowcase />
      <section className="bg-gradient-to-b from-white via-[#E8FAF2] to-[#F5FCFF] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-3">
          {[
            ["book", "Explore ideas", "Animated learning moments"],
            ["science", "Discover more", "Curiosity-led subjects"],
            ["progress", "Celebrate growth", "Progress worth noticing"],
          ].map(([name, title, desc], i) => (
            <div
              key={name}
              className={`group relative overflow-hidden rounded-[26px] border ${cardTheme(i)} p-5 text-center shadow-[0_8px_25px_rgba(23,36,58,.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#EB6664]/35 hover:shadow-[0_25px_60px_rgba(235,102,100,.16)] sm:p-7`}
            >
              <EducationArt
                name={name}
                className="mx-auto h-36 w-44"
                glow
                label={title}
              />
              <h3 className="text-xl font-bold text-[#17243A]">{title}</h3>
              <p className="mt-2 text-sm text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFE5DC] via-[#FFF4D9] to-[#E8DEFF] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <Heading
              eyebrow="Find your path"
              title="A learning program for every chapter."
              description="From first discoveries to big academic milestones, explore a path that works for your learner."
            />
            <Button href="/programs" outline>
              All programs
            </Button>
          </div>
          <Slider>
            {programs.map((p, i) => (
              <ProgramCard key={p.slug} item={p} index={i} />
            ))}
          </Slider>
        </div>
      </section>
      <ParallaxStory />
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#101827] via-[#1E2943] to-[#452C56] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-[#EB6664]/25 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[30px] border border-white/20 bg-white/[.09] p-4 shadow-[0_30px_80px_rgba(0,0,0,.25)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#FFB9AD]/40 sm:p-6">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-bold text-white">
                  Your learning space
                </span>
                <span className="rounded-full bg-[#EB6664]/20 px-3 py-1 text-xs text-[#FFB8A6]">
                  Concept preview
                </span>
              </div>
              <div className="rounded-2xl bg-white p-6">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF0EE] text-[#EB6664]">
                    <BookOpen />
                  </span>
                  <div>
                    <p className="font-bold">Today's learning focus</p>
                    <p className="text-xs text-slate-500">
                      Mathematics · Building understanding
                    </p>
                  </div>
                </div>
                <div className="flex h-44 items-center justify-center rounded-2xl bg-[#FFF9F6] text-center">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17243A]">
                    a² + b² = c²
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {["Discover", "Practice", "Grow"].map((t, i) => (
                    <span
                      key={t}
                      className={`rounded-xl py-3 text-center text-xs font-bold ${i === 1 ? "bg-[#EB6664] text-white" : "bg-[#FFF0EE] text-[#D94E5B]"}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-slate-400">
                Illustrative learning dashboard concept
              </p>
            </div>
          </Reveal>
          <div>
            <Heading
              eyebrow="Learning reimagined"
              title="Learning that adapts to every mind."
              description="Less one-size-fits-all. More aha moments. An approach designed to meet learners where they are and help them move forward."
              light
            />
            <div className="mt-7 space-y-4">
              {[
                "Individual attention",
                "Learning at a comfortable pace",
                "Goal-oriented sessions",
                "Regular feedback",
                "Support for parents",
              ].map((x) => (
                <div
                  key={x}
                  className="flex items-center gap-3 text-sm text-slate-200"
                >
                  <CheckCircle2 size={20} className="text-[#FFB8A6]" />
                  {x}
                </div>
              ))}
            </div>
            <div className="mt-9">
              <Button href="/programs">Discover your learning path</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFF4D9] to-[#FFF0EE] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <Heading
              eyebrow="Explore subjects"
              title="Every subject. Every breakthrough."
              description="Build foundations, explore big ideas, and find joy in understanding something new."
            />
            <Button href="/subjects" outline>
              View all subjects
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((s) => (
              <SubjectCard key={s.slug} item={s} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-white via-[#F0E9FF] to-[#EAF4FF] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Heading
            eyebrow="Simple by design"
            title="Your journey starts in four easy steps."
            center
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Tell us about your child",
                "Share goals, challenges, and what matters most.",
              ],
              [
                "02",
                "Explore the right fit",
                "Discuss subjects and a personalized learning approach.",
              ],
              [
                "03",
                "Connect with a tutor",
                "Find guidance suited to your learning needs.",
              ],
              [
                "04",
                "Keep moving forward",
                "Build understanding through practice and support.",
              ],
            ].map(([num, title, desc]) => (
              <Reveal
                key={num}
                className={`group relative overflow-hidden rounded-[26px] border ${cardTheme(Number(num)-1)} p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#EB6664]/30 hover:shadow-[0_20px_50px_rgba(235,102,100,.12)] sm:p-7`}
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-[#EB6664]/25">
                  {num}
                </span>
                <h3 className="mt-6 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#17243A] via-[#222A48] to-[#3E2B55] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-7 lg:gap-14 lg:grid-cols-2">
          <div>
            <Heading
              eyebrow="A closer look"
              title="A more engaging way to learn, wherever you are."
              description="Imagine a focused space for questions, explanations, and those satisfying moments when everything makes sense."
              light
            />
            <div className="mt-9">
              <Button href="/tuitions">Explore online tuition</Button>
            </div>
          </div>
          <Reveal>
            <div className="rounded-[28px] border border-white/20 bg-white/[.08] p-4 shadow-[0_25px_75px_rgba(0,0,0,.3)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#FFB9AD]/40">
              <div className="mb-4 flex items-center justify-between text-xs text-white/60">
                <span>Esperly classroom concept</span>
                <span className="rounded-full bg-[#EB6664] px-3 py-1 text-white">
                  Illustrative preview
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-[1.4fr_1fr]">
                <div className="flex min-h-60 flex-col justify-between rounded-2xl bg-[#FFF9F6] p-5">
                  <p className="text-sm font-bold text-[#17243A]">
                    Let's solve it together
                  </p>
                  <div className="text-center text-3xl sm:text-4xl font-extrabold text-[#EB6664]">
                    x + 8 = 15
                  </div>
                  <p className="text-xs text-slate-500">
                    Interactive whiteboard concept
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-3">
                  <div className="rounded-2xl bg-[#EB6664]/25 p-5 text-center text-sm font-semibold text-white">
                    <Users className="mx-auto mb-3" />
                    Tutor guidance
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5 text-center text-sm font-semibold text-white">
                    <MessageCircle className="mx-auto mb-3" />
                    Ask anything
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#EAF4FF] to-[#F5F0FF] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="group relative aspect-[5/4] overflow-hidden rounded-[30px] border-[5px] border-white bg-[#FFF0EE] shadow-[0_25px_65px_rgba(23,36,58,.12)] sm:rounded-[36px]">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1100&q=85"
                alt="Students learning together"
                fill
                sizes="(max-width:1024px) 100vw,50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>
          <div>
            <Heading
              eyebrow="For parents, too"
              title="Support that goes beyond the classroom."
              description="A great learning journey is a partnership. We believe parents deserve clarity, communication, and a positive experience at every stage."
            />
            <div className="mt-8 space-y-4">
              <Check>Guidance aligned with learning goals</Check>
              <Check>Thoughtful feedback and encouragement</Check>
              <Check>Clear next steps for continued growth</Check>
            </div>
            <div className="mt-9">
              <Button href="/why-esperly">Why Esperly</Button>
            </div>
          </div>
        </div>
      </section>
      <ParallaxBanner image="/images/learning-parallax.webp" title="A little progress. A world of possibility." />
      <section className="relative overflow-hidden bg-gradient-to-br from-[#111827] via-[#22283F] to-[#382A4A] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Heading
            eyebrow="Our philosophy"
            title="Every learning story deserves to be heard."
            description="We look forward to sharing genuine parent and student experiences here as Esperly grows. No fabricated reviews or ratings."
            light
            center
          />
          <div className="mx-auto mt-9 max-w-3xl rounded-[28px] border border-white/15 bg-white/[.07] p-6 text-center shadow-[0_25px_65px_rgba(0,0,0,.15)] backdrop-blur-xl sm:p-8 lg:p-10">
            <Heart className="mx-auto text-[#FFB8A6]" size={35} />
            <p className="mt-5 text-xl font-semibold leading-9 text-white">
              Confidence grows when learners feel seen, supported, and inspired
              to keep going.
            </p>
            <p className="mt-5 text-sm text-slate-400">
              The belief behind Esperly
            </p>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#E8FAF2] to-[#F5FCFF] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <Heading
              eyebrow="The learning journal"
              title="Insights for smarter learning."
            />
            <Button href="/resources" outline>
              All resources
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((a, i) => (
              <Link
                key={a.slug}
                href={"/resources/" + a.slug}
                className={`group overflow-hidden rounded-[26px] border ${cardTheme(i)} p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#EB6664]/30 hover:shadow-[0_20px_50px_rgba(235,102,100,.12)] sm:p-6`}
              >
                <div
                  className={`mb-6 flex h-32 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-[1.03] ${i % 2 ? "bg-[#F1EDFF]" : "bg-[#FFF0EE]"}`}
                >
                  <BookOpen size={45} className="text-[#EB6664]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EB6664]">
                  {a.category}
                </span>
                <h3 className="mt-3 text-lg font-bold leading-7">{a.title}</h3>
                <p className="mt-5 text-xs text-slate-500">
                  {a.read} · Read article →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-white via-[#FFF4D9] to-[#FFF0EE] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-7 lg:gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <Heading
            eyebrow="Good to know"
            title="Everything you need to know."
            description="A few helpful answers before you begin."
          />
          <FAQ />
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#D95667] via-[#EB6664] to-[#FF9B81] px-4 py-12 text-center text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <Reveal className="mx-auto max-w-3xl">
          <Sparkles className="mx-auto mb-6" size={34} />
          <h2 className="text-3xl sm:text-[2.125rem] font-extrabold tracking-[-.05em] md:text-5xl">
            Big dreams begin with the right guidance.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
            Give your child the attention, encouragement, and support to learn
            with confidence.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/book-demo" dark>
              Book a Free Demo
            </Button>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Contact us <ArrowRight className="ml-2" size={17} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
