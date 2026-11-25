"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Sparkles } from "@/components/BrandIcons";

const groups = [
  ["Explore", ["About", "/about"], ["Programs", "/programs"], ["Subjects", "/subjects"], ["Curriculum", "/curriculum"], ["How it works", "/how-it-works"]],
  ["Discover", ["Tutors", "/tutors"], ["Resources", "/resources"], ["Why Esperly", "/why-esperly"], ["FAQs", "/faqs"], ["Testimonials", "/testimonials"]],
  ["Support", ["Contact", "/contact"], ["Book a demo", "/book-demo"], ["Become a tutor", "/become-a-tutor"], ["Privacy policy", "/privacy-policy"], ["Terms", "/terms"]],
];

const particles = [
  [7, 17, 3, 0], [13, 72, 2, 1], [21, 43, 2, 2], [29, 13, 3, 1],
  [37, 80, 2, 0], [44, 27, 2, 2], [52, 62, 3, 1], [59, 12, 2, 0],
  [65, 87, 2, 2], [72, 34, 3, 0], [79, 70, 2, 1], [86, 19, 2, 2],
  [92, 53, 3, 0], [96, 83, 2, 1], [17, 91, 2, 2], [33, 55, 2, 1],
];

function RadiantBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-48 -top-52 h-[560px] w-[560px] rounded-full bg-[#EB6664]/[0.14] blur-[115px]" />
      <div className="absolute -right-40 top-8 h-[530px] w-[530px] rounded-full bg-violet-500/[0.13] blur-[120px]" />
      <div className="absolute bottom-[-280px] left-1/3 h-[480px] w-[600px] rounded-full bg-sky-400/[0.07] blur-[120px]" />

      <svg viewBox="0 0 1440 650" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full opacity-70" fill="none">
        <defs>
          <linearGradient id="esperly-string-a" x1="0" y1="0" x2="1440" y2="650" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EB6664" stopOpacity="0" />
            <stop offset="0.28" stopColor="#EB6664" stopOpacity="0.48" />
            <stop offset="0.68" stopColor="#C4A1FF" stopOpacity="0.36" />
            <stop offset="1" stopColor="#C4A1FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="esperly-string-b" x1="1440" y1="0" x2="0" y2="650" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A78BFA" stopOpacity="0" />
            <stop offset="0.4" stopColor="#A78BFA" stopOpacity="0.38" />
            <stop offset="0.75" stopColor="#FFB9AC" stopOpacity="0.22" />
            <stop offset="1" stopColor="#FFB9AC" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 9 }, (_, i) => (
          <path
            key={`a-${i}`}
            d={`M -120 ${260 + i * 19} C 260 ${-100 + i * 13}, 560 ${640 - i * 16}, 980 ${240 + i * 15} S 1370 ${130 + i * 16}, 1560 ${270 + i * 18}`}
            stroke="url(#esperly-string-a)"
            strokeWidth={i === 4 ? 1.3 : 0.75}
          />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <path
            key={`b-${i}`}
            d={`M 1540 ${80 + i * 25} C 1120 ${-80 + i * 22}, 1000 ${580 - i * 12}, 580 ${310 + i * 17} S 100 ${520 - i * 13}, -100 ${360 + i * 12}`}
            stroke="url(#esperly-string-b)"
            strokeWidth="0.7"
          />
        ))}
      </svg>

      {particles.map(([left, top, size, color], i) => (
        <span
          key={i}
          className={`absolute rounded-full motion-safe:animate-pulse ${color === 0 ? "bg-[#FFB5A8] shadow-[0_0_14px_3px_rgba(235,102,100,0.35)]" : color === 1 ? "bg-violet-300 shadow-[0_0_14px_3px_rgba(196,181,253,0.28)]" : "bg-white/70 shadow-[0_0_12px_2px_rgba(255,255,255,0.20)]"} ${size === 3 ? "h-[3px] w-[3px]" : "h-[2px] w-[2px]"} ${i % 3 === 0 ? "motion-safe:animate-[pulse_4s_ease-in-out_infinite]" : i % 3 === 1 ? "motion-safe:animate-[pulse_6s_ease-in-out_infinite]" : "motion-safe:animate-[pulse_5s_ease-in-out_infinite]"}`}
          style={{ left: `${left}%`, top: `${top}%` }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101827]/20 via-[#101827]/45 to-[#101827]/95" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#101827] text-white">
      <RadiantBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <div className="grid gap-x-10 gap-y-11 py-12 sm:grid-cols-2 sm:py-14 lg:grid-cols-[1.6fr_repeat(3,minmax(0,1fr))] lg:gap-x-12 lg:py-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Esperly home" className="inline-flex items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFB9AC]">
              <Image src="/logo/lightlogo.png" alt="Esperly - Learn, Practice, Grow" width={180} height={60} className="h-12 w-auto object-contain" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300/80">
              A warmer, more personal approach to online learning. Helping every learner discover what they can become.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#FFB9AC]/20 bg-[#FFB9AC]/[0.07] px-3.5 py-2 text-xs font-semibold text-[#FFC0B5] backdrop-blur-sm">
              <Sparkles size={14} /> Learn. Practice. Grow.
            </div>
            <div className="mt-6">
              <Link href="/book-demo" className="group inline-flex items-center gap-2 text-sm font-bold text-[#FFB9AC] transition-colors hover:text-white">
                Explore personalized tuition <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {groups.map(([name, ...links]) => (
            <nav key={name} aria-label={`${name} footer links`}>
              <h3 className="mb-5 flex items-center gap-2 text-sm font-bold tracking-wide text-white">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#EB6664] shadow-[0_0_12px_rgba(235,102,100,0.65)]" />
                {name}
              </h3>
              <ul className="space-y-3.5">
                {links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors duration-200 hover:text-[#FFB9AC] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFB9AC]">
                      <span>{label}</span>
                      <ArrowUpRight size={13} className="-translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 py-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Esperly. All rights reserved.</span>
          <span className="inline-flex items-center gap-2"><BookOpen size={14} className="text-[#FFB9AC]/75" /> Designed for curious minds and brighter futures.</span>
        </div>
      </div>
    </footer>
  );
}
