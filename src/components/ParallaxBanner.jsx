"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function ParallaxBanner({
  eyebrow = "THE ESPERLY EXPERIENCE",
  title = "Learning without limits.",
  description = "Discover a more inspiring way to learn, explore, and grow.",
  href = "/book-demo",
  image = "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1800&q=85",
}) {
  return (
    <section
      className="relative isolate flex min-h-[420px] w-full items-center justify-center bg-[#17243A] bg-cover bg-center bg-no-repeat bg-scroll text-white md:min-h-[50svh] md:bg-fixed"
      style={{ backgroundImage: `url("${image}")` }}
    >
      {/* Dark cinematic overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#0D1729]/65"
      />

      {/* Balanced gradient for centered content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101827]/75 via-[#17243A]/20 to-[#101827]/55"
      />

      {/* Subtle brand-colored glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(235,102,100,0.12),transparent_65%)]"
      />

      {/* Centered middle-section content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-16 text-center sm:px-6 md:py-20 lg:px-8">
        <div className="flex w-full max-w-[760px] flex-col items-center">
          {/* Section label */}
          <span className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#FFC0B5] backdrop-blur-md sm:text-xs">
            <Sparkles size={14} className="shrink-0" />
            {eyebrow}
          </span>

          {/* Compact section heading */}
          <h2 className="mt-5 max-w-[720px] text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.12] tracking-[-0.045em] text-white">
            {title}
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[560px] text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
            {description}
          </p>

          {/* CTA */}
          <Link
            href={href}
            className="group mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/15 bg-[#EB6664] px-7 py-3 text-sm font-bold text-white shadow-[0_12px_35px_rgba(235,102,100,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D95557] hover:shadow-[0_16px_40px_rgba(235,102,100,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explore a free demo
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      {/* Subtle top and bottom dividers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#EB6664]/70 to-transparent"
      />
    </section>
  );
}
