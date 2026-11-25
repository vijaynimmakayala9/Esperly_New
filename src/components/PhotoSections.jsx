"use client";

import { cardTheme } from "@/lib/cardThemes";
import ParallaxImage from "@/components/ParallaxImage";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Sparkles, BookOpen, CheckCircle2 } from "@/components/BrandIcons";

const photos = {
  study:
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1100&q=85",
  classroom:
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1100&q=85",
  books:
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1100&q=85",
  writing:
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1100&q=85",
  laptop:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1100&q=85",
  library:
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1100&q=85",
};

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

function photoFor(key, fallback = "study") {
  return (
    photos[key] ||
    (typeof key === "string" && /^(https?:\/\/|\/)/.test(key)
      ? key
      : photos[fallback])
  );
}

export function PhotoHero({
  eyebrow,
  title,
  description,
  image = "study",
  dark = false,
}) {
  const reduced = useReducedMotion();
  return (
    <section
      className={`relative isolate overflow-hidden ${dark ? "bg-[#17243A] text-white" : "bg-gradient-to-br from-[#FFF9F6] via-white to-[#F8F3FF] text-[#17243A]"}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-8 size-72 rounded-full bg-[#EB6664]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-violet-300/15 blur-3xl"
      />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:py-24">
        <motion.div
          {...(reduced ? {} : reveal)}
          className="relative z-10 max-w-xl"
        >
          {eyebrow && (
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.16em] ${dark ? "border-white/20 bg-white/10 text-[#FFB9AC]" : "border-[#EB6664]/20 bg-white/85 text-[#D95457] shadow-sm"}`}
            >
              <Sparkles size={14} />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-6 text-[clamp(2.3rem,4.5vw,4.25rem)] font-black leading-[1.08] tracking-[-.055em]">
            {title}
          </h1>
          <p
            className={`mt-5 max-w-lg text-base leading-8 ${dark ? "text-white/75" : "text-slate-600"}`}
          >
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/book-demo"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-[#EB6664] to-[#F58D7D] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_32px_rgba(235,102,100,.24)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(235,102,100,.34)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EB6664]"
            >
              Book a free demo{" "}
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              href="/contact"
              className={`inline-flex min-h-12 items-center rounded-full border px-6 py-3 text-sm font-bold transition-colors ${dark ? "border-white/25 bg-white/5 text-white hover:bg-white/15" : "border-[#17243A]/15 bg-white text-[#17243A] hover:border-[#EB6664]/50 hover:bg-[#FFF0EE]"}`}
            >
              Contact us
            </Link>
          </div>
          <div
            className={`mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold ${dark ? "text-white/70" : "text-slate-500"}`}
          >
            {["Personalized guidance", "Flexible learning"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#EB6664]" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          {...(reduced ? {} : reveal)}
          transition={{ ...reveal.transition, delay: 0.12 }}
          className="relative mx-auto w-full max-w-[590px]"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-[#EB6664]/20 via-violet-300/20 to-transparent blur-2xl"
          />
          <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] border-[5px] border-white/80 shadow-[0_28px_75px_rgba(23,36,58,.18)] sm:rounded-[36px]">
            <ParallaxImage
              src={photoFor(image)}
              alt={`${eyebrow || "Esperly"} — students and learning`}
              fill
              priority
              sizes="(max-width:1024px) 100vw, 45vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17243A]/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/90 px-4 py-2 text-xs font-bold text-[#17243A] shadow-lg backdrop-blur-xl sm:bottom-6 sm:left-6">
              <BookOpen size={15} className="text-[#EB6664]" /> Learn. Grow.
              Thrive.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function PhotoCards({ eyebrow, title, items = [] }) {
  const reduced = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 size-96 rounded-full bg-[#FFF0EE] blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl">
        <motion.div {...(reduced ? {} : reveal)} className="max-w-3xl">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.18em] text-[#D95457]">
              <Sparkles size={15} />
              {eyebrow}
            </span>
          )}
          <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,3.1rem)] font-black leading-tight tracking-[-.045em] text-[#17243A]">
            {title}
          </h2>
          <div className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-[#EB6664] to-[#FFB5A5]" />
        </motion.div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.article
              key={`${item.title}-${i}`}
              {...(reduced ? {} : reveal)}
              transition={{
                ...reveal.transition,
                delay: reduced ? 0 : Math.min(i, 5) * 0.07,
              }}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[26px] border ${cardTheme(i)} shadow-[0_12px_32px_rgba(23,36,58,.045)] transition-[border-color,box-shadow] duration-300 hover:border-[#EB6664]/35 hover:shadow-[0_22px_55px_rgba(23,36,58,.11)]`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F8F0EE]">
                <ParallaxImage
                  src={photoFor(
                    item.image,
                    ["study", "classroom", "books"][i % 3],
                  )}
                  alt={item.title}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17243A]/25 to-transparent"
                />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#D95457] backdrop-blur-lg">
                  ESPERLY / {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl font-extrabold tracking-[-.025em] text-[#17243A]">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                {item.href && (
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-extrabold text-[#D95457] transition-colors hover:text-[#B9414A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EB6664]"
                  >
                    Explore more{" "}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PhotoStrip({
  title = "Learning comes alive with the right support.",
  image = "classroom",
}) {
  const reduced = useReducedMotion();
  return (
    <section className="relative isolate flex min-h-[340px] items-center overflow-hidden bg-[#17243A] py-16 text-white sm:min-h-[380px] md:min-h-[62svh] sm:py-20">
      <ParallaxImage
        src={photoFor(image, "classroom")}
        alt="Students learning together"
        fixed
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#101827]/90 via-[#17243A]/75 to-[#17243A]/45" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#101827]/45 via-transparent to-[#EB6664]/10" />
      <motion.div
        {...(reduced ? {} : reveal)}
        className="relative mx-auto w-full max-w-7xl px-5 sm:px-8"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.16em] text-[#FFB9AC] backdrop-blur-lg">
          <Sparkles size={14} /> The Esperly approach
        </span>
        <h2 className="mt-5 max-w-2xl text-[clamp(2rem,3.5vw,3.3rem)] font-black leading-[1.12] tracking-[-.045em]">
          {title}
        </h2>
        <Link
          href="/book-demo"
          className="group mt-7 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/30 bg-white/15 px-6 py-3 text-sm font-bold text-white backdrop-blur-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-[#EB6664] hover:bg-[#EB6664] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Explore a demo{" "}
          <ArrowUpRight
            size={17}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </motion.div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#EB6664]/60 to-transparent"
      />
    </section>
  );
}
