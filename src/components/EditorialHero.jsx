
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";

import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Check,
  GraduationCap,
  Sparkles,
  TrendingUp,
} from "@/components/BrandIcons";

/* ==================================================
   CONFIGURATION
================================================== */

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1400&q=85";

const features = [
  "One-to-one guidance",
  "Learn at your pace",
  "Confidence first",
];

const highlights = [
  {
    title: "Learning made personal",
    description: "Every question matters",
    icon: BookOpen,
    theme: "coral",
  },
  {
    title: "Little wins, big growth",
    description: "Progress at their pace",
    icon: TrendingUp,
    theme: "green",
  },
];

const ease = [0.22, 1, 0.36, 1];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB6664] focus-visible:ring-offset-4";

const cardThemes = {
  coral: "bg-[#FFF0ED] text-[#D94E50]",
  green: "bg-[#EAF6EF] text-[#24835B]",
};

/* ==================================================
   HERO BACKGROUND
================================================== */

function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF0E8] via-[#FFFAF7] to-[#EDF0FC]" />

      {/* Warm ambient glow */}
      <div className="absolute -left-40 -top-48 h-[480px] w-[480px] rounded-full bg-[#FFD9CE]/60 blur-[110px] sm:h-[650px] sm:w-[650px]" />

      {/* Lavender ambient glow */}
      <div className="absolute -right-48 top-[10%] h-[480px] w-[480px] rounded-full bg-[#DDD9FA]/65 blur-[110px] lg:h-[720px] lg:w-[720px]" />

      {/* Bottom glow */}
      <div className="absolute -bottom-48 left-[20%] h-[400px] w-[400px] rounded-full bg-[#FFD8C8]/35 blur-[100px]" />

      {/* Subtle dotted texture */}
      <div className="absolute inset-0 opacity-[0.045] [background-image:radial-gradient(#17243A_1px,transparent_1px)] [background-size:26px_26px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      {/* Decorative orbital rings */}
      <div className="absolute -right-40 top-12 hidden h-[650px] w-[650px] rounded-full border border-[#EB6664]/10 lg:block" />

      <div className="absolute -right-24 top-28 hidden h-[520px] w-[520px] rounded-full border border-[#EB6664]/10 lg:block" />

      {/* Smooth section transition */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/50 to-transparent" />
    </div>
  );
}

/* ==================================================
   PRIMARY CTA
================================================== */

function PrimaryButton() {
  return (
    <Link
      href="/book-demo"
      className={`group relative inline-flex min-h-[56px] w-full items-center justify-between gap-5 overflow-hidden rounded-full bg-gradient-to-r from-[#C94D50] via-[#D9565B] to-[#C94D68] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_32px_rgba(201,77,80,0.23)] transition-all duration-300 hover:shadow-[0_18px_42px_rgba(201,77,80,0.32)] motion-safe:hover:-translate-y-1 motion-safe:active:translate-y-0 sm:w-auto sm:min-w-[210px] ${focusRing}`}
    >
      {/* Animated button sheen */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 motion-safe:group-hover:translate-x-full"
      />

      <span className="relative z-10">
        Book a free demo
      </span>

      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 motion-safe:group-hover:rotate-12">
        <ArrowUpRight
          size={17}
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

/* ==================================================
   SECONDARY CTA
================================================== */

function SecondaryButton() {
  return (
    <Link
      href="/programs"
      className={`group inline-flex min-h-[56px] w-full items-center justify-between gap-5 rounded-full border border-[#17243A]/10 bg-white/85 px-6 py-3 text-sm font-bold text-[#17243A] shadow-[0_5px_18px_rgba(23,36,58,0.04)] transition-all duration-300 hover:border-[#EB6664]/40 hover:bg-white hover:shadow-[0_12px_28px_rgba(23,36,58,0.08)] motion-safe:hover:-translate-y-1 sm:w-auto ${focusRing}`}
    >
      Explore programs

      <ArrowUpRight
        size={17}
        aria-hidden="true"
        className="shrink-0 text-[#D94E50] transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
      />
    </Link>
  );
}

/* ==================================================
   TRUST HIGHLIGHTS
================================================== */

function TrustHighlights() {
  return (
    <ul className="grid grid-cols-1 gap-x-5 gap-y-3 min-[380px]:grid-cols-2 sm:flex sm:flex-wrap">
      {features.map((feature) => (
        <li
          key={feature}
          className="flex min-w-0 items-center gap-2.5 text-xs font-semibold leading-5 text-[#526176] sm:text-[13px]"
        >
          <span
            aria-hidden="true"
            className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#E7F4EC] text-[#24835B]"
          >
            <Check size={13} strokeWidth={2.8} />
          </span>

          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

/* ==================================================
   REUSABLE HIGHLIGHT CARD
================================================== */

function HighlightCard({
  item,
  className = "",
  reducedMotion = false,
  delay = 0,
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: 12,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: reducedMotion ? 0 : 0.65,
        delay: reducedMotion ? 0 : delay,
        ease,
      }}
      className={`group flex min-w-0 items-center gap-3 rounded-[20px] border border-white/90 bg-white/95 p-3.5 shadow-[0_12px_35px_rgba(23,36,58,0.09)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(23,36,58,0.14)] sm:p-4 lg:backdrop-blur-xl ${className}`}
    >
      <span
        aria-hidden="true"
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] transition-transform duration-300 motion-safe:group-hover:scale-110 sm:h-12 sm:w-12 ${cardThemes[item.theme]}`}
      >
        <Icon size={21} strokeWidth={1.9} />
      </span>

      <div className="min-w-0">
        <p className="text-xs font-bold leading-snug tracking-[-0.015em] text-[#17243A] sm:text-sm">
          {item.title}
        </p>

        <p className="mt-1 text-[11px] leading-relaxed text-[#65738A] sm:text-xs">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ==================================================
   PREMIUM PARALLAX IMAGE
================================================== */

function HeroVisual({ reducedMotion }) {
  const imageRef = useRef(null);

  // Track the image frame rather than the entire section.
  // This keeps the effect consistent on mobile and desktop.
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  // Vertical parallax movement.
  const rawImageY = useTransform(
    scrollYProgress,
    [0, 1],
    [-45, 45]
  );

  // Smooth spring interpolation.
  const imageY = useSpring(rawImageY, {
    stiffness: 100,
    damping: 30,
    mass: 0.6,
    restDelta: 0.001,
  });

  // Cinematic scroll-based zoom.
  const rawImageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.12, 1.06, 1.12]
  );

  const imageScale = useSpring(rawImageScale, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  return (
    <motion.div
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: 24,
              scale: 0.98,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: reducedMotion ? 0 : 0.85,
        delay: reducedMotion ? 0 : 0.15,
        ease,
      }}
      className="relative mx-auto w-full min-w-0 max-w-[640px] lg:max-w-none"
    >
      {/* Ambient image glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[8%] top-[8%] h-[70%] rounded-[60px] bg-gradient-to-br from-[#EB6664]/25 via-[#FFB8A6]/30 to-[#C9B8F5]/40 blur-[55px]"
      />

      {/* Main image composition */}
      <div className="relative lg:px-5 lg:pb-8 lg:pt-5 xl:px-8">
        {/* Decorative outer frame */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden rounded-[44px] border border-[#EB6664]/20 lg:block xl:rounded-[56px]"
        />

        {/* Fixed image viewport */}
        <figure
          ref={imageRef}
          className="group relative isolate m-0 aspect-[4/3] overflow-hidden rounded-[26px] border-[5px] border-white bg-[#F0DFD8] shadow-[0_24px_65px_rgba(23,36,58,0.14)] sm:aspect-[5/4] sm:rounded-[36px] sm:border-[7px] lg:aspect-[4/4.5] xl:aspect-[1.05/1] xl:rounded-[44px]"
        >
          {/* ======================================
              SCROLL-BASED PARALLAX IMAGE

              Extra vertical overscan prevents
              blank edges during image movement.
          ======================================= */}

          <motion.div
            style={{
              y: reducedMotion ? 0 : imageY,
              scale: reducedMotion ? 1 : imageScale,
            }}
            className={`absolute inset-x-0 ${
              reducedMotion
                ? "inset-y-0"
                : "-inset-y-14 will-change-transform"
            } motion-reduce:inset-0 motion-reduce:will-change-auto`}
          >
            <Image
              src={HERO_IMAGE}
              alt="Open books and learning materials arranged on a study desk"
              fill
              priority
              quality={85}
              sizes="(max-width: 639px) 92vw, (max-width: 1023px) 640px, (max-width: 1279px) 45vw, 580px"
              className="select-none object-cover object-center"
              draggable={false}
            />
          </motion.div>

          {/* Stationary image shading */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17243A]/90 via-[#17243A]/5 to-transparent"
          />

          {/* Cinematic warm color overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#EB6664]/10 via-transparent to-[#17243A]/10"
          />

          {/* Top image badge */}
          <div className="absolute left-3 top-3 z-10 flex max-w-[calc(100%-24px)] items-center gap-2 rounded-full border border-white/40 bg-white/95 px-3 py-2 shadow-sm backdrop-blur-md sm:left-5 sm:top-5 sm:px-4">
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full bg-[#EB6664]"
            />

            <span className="text-[10px] font-bold uppercase leading-relaxed tracking-[0.12em] text-[#17243A] sm:text-[11px]">
              Learning with purpose
            </span>
          </div>

          {/* Stationary image caption */}
          <figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-4 text-white sm:p-7 xl:p-8">
            <div className="min-w-0">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FFD4C8] sm:text-xs">
                The Esperly approach
              </p>

              <p className="max-w-[340px] text-lg font-bold leading-tight tracking-[-0.035em] sm:text-2xl xl:text-[28px]">
                Every learner has potential.
              </p>

              <p className="mt-2 text-xs leading-relaxed text-white/90 sm:text-sm">
                We help them discover it.
              </p>
            </div>

            <span
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/15 backdrop-blur-md sm:h-14 sm:w-14"
            >
              <GraduationCap size={24} />
            </span>
          </figcaption>
        </figure>

        {/* Desktop floating card — left */}
        <div className="absolute left-0 top-[20%] z-20 hidden w-[225px] xl:block">
          <HighlightCard
            item={highlights[0]}
            reducedMotion={reducedMotion}
            delay={0.55}
          />
        </div>

        {/* Desktop floating card — right */}
        <div className="absolute bottom-0 right-0 z-20 hidden w-[225px] xl:block">
          <HighlightCard
            item={highlights[1]}
            reducedMotion={reducedMotion}
            delay={0.7}
          />
        </div>

        {/* Decorative sparkle */}
        <motion.div
          aria-hidden="true"
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.7,
                  rotate: -20,
                }
          }
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: reducedMotion ? 0 : 0.8,
            delay: reducedMotion ? 0 : 0.5,
            ease,
          }}
          className="pointer-events-none absolute -right-1 -top-2 hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-white/90 text-[#EB6664] shadow-[0_8px_24px_rgba(235,102,100,0.12)] lg:flex xl:-right-2 xl:-top-3"
        >
          <Sparkles size={24} />
        </motion.div>
      </div>

      {/* Mobile and tablet highlight cards */}
      <div className="relative mt-4 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:mt-5 xl:hidden">
        {highlights.map((item, index) => (
          <HighlightCard
            key={item.title}
            item={item}
            reducedMotion={reducedMotion}
            delay={0.3 + index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ==================================================
   MAIN EDITORIAL HERO
================================================== */

export default function EditorialHero() {
  const reducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.1,
        delayChildren: reducedMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0 : 0.65,
        ease,
      },
    },
  };

  return (
    <section
      aria-labelledby="editorial-hero-heading"
      className="relative isolate w-full overflow-hidden bg-[#FFF8F4]"
    >
      <HeroBackground />

      {/* ======================================
          RESPONSIVE MAIN LAYOUT
      ======================================= */}

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 py-12 sm:gap-12 sm:py-16 lg:min-h-[660px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10 lg:py-20 xl:gap-14 px-4 sm:px-6 lg:px-8">

        {/* ======================================
            LEFT CONTENT
        ======================================= */}

        <motion.div
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
          variants={containerVariants}
          className="relative z-10 min-w-0"
        >
          {/* Eyebrow badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-[#EB6664]/20 bg-white/85 px-3.5 py-2.5 shadow-[0_5px_18px_rgba(235,102,100,0.06)] sm:px-4"
          >
            <Sparkles
              size={15}
              aria-hidden="true"
              className="shrink-0 text-[#D94E50]"
            />

            <span className="text-[10px] font-bold uppercase leading-relaxed tracking-[0.12em] text-[#B94747] sm:text-[11px]">
              A little more wonder in every lesson
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            id="editorial-hero-heading"
            variants={itemVariants}
            className="mt-6 max-w-[760px] text-[clamp(2.35rem,7vw,4.5rem)] font-extrabold leading-[1.06] tracking-[-0.06em] text-[#17243A] sm:mt-7 lg:text-[clamp(3rem,4.6vw,5.1rem)] xl:text-[clamp(4rem,4.8vw,5.5rem)]"
          >
            <span className="block">
              Big dreams.
            </span>

            <span className="relative mt-1 block w-fit max-w-full">
              <span className="relative z-10 bg-gradient-to-r from-[#D94E50] via-[#D65A70] to-[#A95192] bg-clip-text text-transparent">
                Bright minds.
              </span>

              {/* Animated editorial underline */}
              <motion.span
                aria-hidden="true"
                initial={
                  reducedMotion
                    ? false
                    : { scaleX: 0 }
                }
                animate={{ scaleX: 1 }}
                transition={{
                  duration: reducedMotion ? 0 : 0.9,
                  delay: reducedMotion ? 0 : 0.6,
                  ease,
                }}
                className="absolute -bottom-1 left-[2%] h-[4px] w-[76%] origin-left -rotate-1 rounded-full bg-gradient-to-r from-[#EB6664]/65 to-[#FFB8A6]/20 sm:-bottom-2 sm:h-[6px]"
              />
            </span>
          </motion.h1>

          {/* Supporting description */}
          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-[540px] text-[15px] leading-[1.85] text-[#526176] sm:mt-8 sm:text-base sm:leading-8 xl:text-lg"
          >
            Tuition that feels personal. Confidence that
            goes beyond the classroom. Help your child
            discover what they can achieve with thoughtful,
            one-to-one learning.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <PrimaryButton />
            <SecondaryButton />
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-8 max-w-[600px] border-t border-[#17243A]/10 pt-6 sm:mt-10 sm:pt-7"
          >
            <TrustHighlights />
          </motion.div>
        </motion.div>

        {/* ======================================
            RIGHT PARALLAX VISUAL
        ======================================= */}

        <HeroVisual
          reducedMotion={reducedMotion}
        />
      </div>

      {/* ======================================
          BOTTOM EDITORIAL NAVIGATION
      ======================================= */}

      <div className="relative mx-auto hidden w-full max-w-7xl items-center justify-between gap-6 pb-7 lg:flex px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="flex items-center gap-3"
        >
          <span className="h-px w-9 shrink-0 bg-[#EB6664]/50" />

          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#65738A]">
            Thoughtfully designed for every learner
          </span>
        </div>

        <Link
          href="/how-it-works"
          className={`group inline-flex shrink-0 items-center gap-3 rounded-full text-[11px] font-bold uppercase tracking-[0.13em] text-[#526176] transition-colors duration-300 hover:text-[#C94D50] ${focusRing}`}
        >
          Discover the difference

          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#17243A]/10 bg-white/70 text-[#D94E50] transition-all duration-300 group-hover:border-[#EB6664] group-hover:bg-[#EB6664] group-hover:text-white">
            <ArrowDownRight size={16} />
          </span>
        </Link>
      </div>
    </section>
  );
}
