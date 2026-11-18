import Link from "next/link";
import { ArrowRight, CheckCircle2, Heart, BookOpen } from "lucide-react";
import { Button, Heading, Reveal } from "./UI";
export function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF9F6] via-white to-[#FFF0EE] px-5 py-24 lg:px-8">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#EB6664]/10 blur-3xl" />
      <Reveal className="relative mx-auto w-full max-w-7xl text-center">
        <span className="text-xs font-bold uppercase tracking-[.25em] text-[#EB6664]">
          {eyebrow}
        </span>
        <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-[-.06em] text-[#17243A] md:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-500">
          {description}
        </p>
        <div className="mt-9">
          <Button>Book a Free Demo</Button>
        </div>
      </Reveal>
    </section>
  );
}
export function Callout() {
  return (
    <section className="bg-[#17243A] px-5 py-20 text-center text-white">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-4xl font-bold tracking-tight">
          Ready for a brighter learning journey?
        </h2>
        <p className="mt-5 text-slate-300">
          Explore a personalized approach to learning with Esperly.
        </p>
        <div className="mt-8">
          <Button>Book a Free Demo</Button>
        </div>
      </div>
    </section>
  );
}
export function InfoGrid({ items }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map(([title, desc], i) => (
        <Reveal
          key={title}
          delay={i * 0.05}
          className="rounded-[28px] border border-slate-100 bg-white p-8 shadow-sm"
        >
          <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF0EE] text-[#EB6664]">
            <BookOpen />
          </span>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-500">{desc}</p>
        </Reveal>
      ))}
    </div>
  );
}
