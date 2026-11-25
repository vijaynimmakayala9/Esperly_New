"use client";

import { cardTheme } from "@/lib/cardThemes";
import { Children, useId, useRef, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Search,
  Sparkles,
  CalendarDays,
  UserRound,
  BookOpen,
  Send,
  ShieldCheck,
  GraduationCap,
  ArrowUpRight,
} from "@/components/BrandIcons";
import { faqs } from "@/data/site";

const inputClass =
  "w-full min-h-12 rounded-2xl border border-[#E9E5E8] bg-white/90 px-4 py-3 text-sm text-[#17243A] shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-[#EB6664]/35 focus:border-[#EB6664] focus:ring-4 focus:ring-[#EB6664]/10";
const labelClass = "mb-2 block text-xs font-bold tracking-wide text-[#34415B]";
const revealCard =
  "border shadow-[0_14px_40px_rgba(23,36,58,.045)] transition-all duration-300 hover:border-[#EB6664]/30 hover:shadow-[0_22px_55px_rgba(23,36,58,.09)]";

export function FAQ({ items = faqs }) {
  const [active, setActive] = useState(0);
  const id = useId();
  return (
    <div className="space-y-3.5">
      {items.map((f, i) => {
        const open = active === i;
        return (
          <div
            key={`${f.q}-${i}`}
            className={`group overflow-hidden rounded-[22px] ${revealCard} ${cardTheme(i)} ${open ? "ring-1 ring-[#EB6664]/35" : ""}`}
          >
            <h3>
              <button
                type="button"
                id={`${id}-question-${i}`}
                aria-controls={`${id}-answer-${i}`}
                aria-expanded={open}
                onClick={() => setActive(open ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm font-bold leading-6 text-[#17243A] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#EB6664] sm:px-7 sm:py-6 sm:text-base"
              >
                <span className="flex items-start gap-3">
                  <span className="pt-0.5 text-xs font-black text-[#EB6664]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {f.q}
                </span>
                <span
                  className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${open ? "rotate-180 bg-[#EB6664] text-white" : "bg-[#FFF0EE] text-[#EB6664] group-hover:bg-[#FFE0DA]"}`}
                >
                  <ChevronDown size={18} />
                </span>
              </button>
            </h3>
            <div
              id={`${id}-answer-${i}`}
              role="region"
              aria-labelledby={`${id}-question-${i}`}
              hidden={!open}
            >
              <p className="px-5 pb-6 pl-12 text-sm leading-7 text-slate-600 sm:px-7 sm:pb-7 sm:pl-14">
                {f.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Slider({ children }) {
  const slides = Children.toArray(children);
  const trackRef = useRef(null);
  const [position, setPosition] = useState(0);
  const scroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild;
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };
  return (
    <div className="relative w-full">
      <div
        ref={trackRef}
        onScroll={(e) => {
          const el = e.currentTarget;
          const width =
            el.firstElementChild?.getBoundingClientRect().width || 1;
          const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
          setPosition(Math.round(el.scrollLeft / (width + gap)));
        }}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-0 flex-[0_0_100%] snap-start sm:flex-[0_0_calc((100%-1.25rem)/2)] lg:flex-[0_0_calc((100%-2.5rem)/3)]"
          >
            {slide}
          </div>
        ))}
      </div>
      {slides.length > 1 && (
        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em] text-slate-400">
            <span className="text-[#EB6664]">
              {String(Math.min(position + 1, slides.length)).padStart(2, "0")}
            </span>
            <span className="h-px w-7 bg-slate-200" />
            {String(slides.length).padStart(2, "0")}
          </div>
          <div className="flex gap-2.5">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => scroll(-1)}
              className="flex size-11 items-center justify-center rounded-full border border-[#E9E5E8] bg-white text-[#17243A] transition hover:-translate-y-0.5 hover:border-[#EB6664] hover:text-[#EB6664] focus-visible:outline-2 focus-visible:outline-[#EB6664]"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => scroll(1)}
              className="flex size-11 items-center justify-center rounded-full bg-[#EB6664] text-white shadow-[0_10px_25px_rgba(235,102,100,.2)] transition hover:-translate-y-0.5 hover:bg-[#D95359] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EB6664]"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const initial = {
  student: "",
  grade: "",
  curriculum: "",
  subject: "",
  parent: "",
  email: "",
  phone: "",
  goal: "",
  date: "",
  time: "",
  notes: "",
  consent: false,
};
const bookingSteps = [
  {
    title: "Tell us about your learner",
    subtitle: "A few details help us understand where to begin.",
    icon: GraduationCap,
  },
  {
    title: "Parent contact details",
    subtitle: "How should the Esperly team reach you?",
    icon: UserRound,
  },
  {
    title: "Learning preferences",
    subtitle: "Share the goals and timing that work for you.",
    icon: CalendarDays,
  },
  {
    title: "Review your request",
    subtitle: "Check everything before moving forward.",
    icon: ShieldCheck,
  },
];
const fields = [
  ["student", "Student name", "text"],
  ["grade", "Class / grade", "select", ["1–5", "6–8", "9–10", "11–12"]],
  [
    "curriculum",
    "Curriculum",
    "select",
    ["CBSE", "ICSE", "State Board", "IGCSE", "IB", "Other"],
  ],
  [
    "subject",
    "Subject",
    "select",
    [
      "Mathematics",
      "Science",
      "English",
      "Physics",
      "Chemistry",
      "Biology",
      "Other",
    ],
  ],
];
const reviewLabels = {
  student: "Student name",
  grade: "Class / grade",
  curriculum: "Curriculum",
  subject: "Subject",
  parent: "Parent / guardian",
  email: "Email address",
  phone: "Phone number",
  goal: "Learning goals",
  date: "Preferred date",
  time: "Preferred time",
  notes: "Additional notes",
};

export function BookingForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initial);
  const formRef = useRef(null);
  const change = (key, value) =>
    setForm((previous) => ({ ...previous, [key]: value }));
  const field = (key, label, type = "text", options = []) => (
    <label
      key={key}
      className={`block ${key === "goal" || key === "notes" ? "sm:col-span-2" : ""}`}
    >
      <span className={labelClass}>{label}</span>
      {type === "select" ? (
        <select
          required
          className={inputClass}
          value={form[key]}
          onChange={(e) => change(key, e.target.value)}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          required={key === "goal"}
          rows={key === "goal" ? 4 : 3}
          placeholder={
            key === "goal"
              ? "Tell us what your learner would like to improve..."
              : "Anything else we should know?"
          }
          className={`${inputClass} resize-y`}
          value={form[key]}
          onChange={(e) => change(key, e.target.value)}
        />
      ) : (
        <input
          required
          type={type}
          min={
            type === "date" ? new Date().toISOString().slice(0, 10) : undefined
          }
          autoComplete={
            key === "parent"
              ? "name"
              : key === "email"
                ? "email"
                : key === "phone"
                  ? "tel"
                  : "off"
          }
          placeholder={
            key === "student"
              ? "Student's full name"
              : key === "parent"
                ? "Parent / guardian name"
                : key === "email"
                  ? "you@example.com"
                  : key === "phone"
                    ? "Your contact number"
                    : undefined
          }
          className={inputClass}
          value={form[key]}
          onChange={(e) => change(key, e.target.value)}
        />
      )}
    </label>
  );
  const StepIcon = bookingSteps[step].icon;
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-[#EB6664]/10 bg-white p-5 shadow-[0_25px_80px_rgba(23,36,58,.08)] sm:rounded-[32px] sm:p-8 lg:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-[#EB6664]/10 blur-[70px]"
      />
      <div className="relative">
        <div
          className="mb-8 flex items-center gap-2"
          aria-label={`Step ${step + 1} of 4`}
        >
          {bookingSteps.map((item, i) => (
            <div
              key={item.title}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${i <= step ? "bg-[#EB6664]" : "bg-[#F2EDEF]"}`}
            />
          ))}
        </div>
        <div className="mb-7 flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFF0EE] to-[#FFE0D9] text-[#EB6664]">
            <StepIcon size={23} />
          </div>
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[.18em] text-[#EB6664]">
              Step {step + 1} of 4
            </p>
            <h2 className="mt-1 text-xl font-extrabold tracking-tight text-[#17243A] sm:text-2xl">
              {bookingSteps[step].title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {bookingSteps[step].subtitle}
            </p>
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            if (step < 3) setStep((s) => s + 1);
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {step === 0 && fields.map((item) => field(...item))}
            {step === 1 && (
              <>
                {field("parent", "Parent / guardian name")}
                {field("email", "Email address", "email")}
                {field("phone", "Phone number", "tel")}
              </>
            )}
            {step === 2 && (
              <>
                {field("goal", "Learning goals", "textarea")}
                {field("date", "Preferred date", "date")}
                {field("time", "Preferred time", "time")}
                {field("notes", "Additional notes (optional)", "textarea")}
              </>
            )}
            {step === 3 && (
              <div className="space-y-3 sm:col-span-2">
                <div className="overflow-hidden rounded-2xl border border-[#EEE7E7] bg-[#FFFBFA] px-4 sm:px-6">
                  {Object.entries(reviewLabels).map(([key, label]) => (
                    <div
                      key={key}
                      className="flex flex-wrap items-start justify-between gap-2 border-b border-[#F1E8E7] py-3 text-sm last:border-b-0"
                    >
                      <span className="text-slate-500">{label}</span>
                      <span className="max-w-full break-words text-right font-semibold text-[#17243A] sm:max-w-[65%]">
                        {form[key] || "—"}
                      </span>
                    </div>
                  ))}
                </div>
                <label className="flex items-start gap-3 pt-3 text-sm leading-6 text-slate-600">
                  <input
                    required
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => change("consent", e.target.checked)}
                    className="mt-1 size-4 shrink-0 accent-[#EB6664]"
                  />
                  I consent to being contacted about this enquiry.
                </label>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-6 text-amber-900">
                  This is a preview. Demo requests are not connected to a
                  booking service, and no information is transmitted or booking
                  confirmed.
                </div>
              </div>
            )}
          </div>
          <div className="mt-8 flex items-center justify-between gap-3 border-t border-[#F1ECEC] pt-6">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#E9E5E8] px-5 text-sm font-bold text-[#17243A] transition hover:bg-[#FFF4F1]"
              >
                <ArrowLeft size={16} /> Back
              </button>
            ) : (
              <span className="text-xs text-slate-400">
                Your journey starts here
              </span>
            )}
            {step < 3 ? (
              <button
                type="submit"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#EB6664] px-6 text-sm font-bold text-white shadow-[0_10px_25px_rgba(235,102,100,.22)] transition hover:-translate-y-0.5 hover:bg-[#D95359]"
              >
                Continue <ArrowRight size={17} />
              </button>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-full bg-slate-100 px-5 text-sm font-bold text-slate-500"
              >
                Submission coming soon
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export function ContactForm() {
  const [preview, setPreview] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setPreview(true);
      }}
      onChange={() => setPreview(false)}
      className="relative space-y-5 overflow-hidden rounded-[28px] border border-[#EB6664]/10 bg-white p-5 shadow-[0_25px_70px_rgba(23,36,58,.07)] sm:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-52 rounded-full bg-[#EB6664]/10 blur-[65px]"
      />
      <div className="relative mb-6">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#EB6664]">
          <Sparkles size={15} /> Let's connect
        </span>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#17243A]">
          Send us a message
        </h2>
        <p className="mt-2 text-sm leading-7 text-slate-500">
          Have a question about learning with Esperly? Share it here.
        </p>
      </div>
      <div className="relative grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Your name</span>
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Full name"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>Email address</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className={labelClass}>Your message</span>
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Tell us how we can help..."
            className={`${inputClass} resize-y`}
          />
        </label>
      </div>
      <button
        type="submit"
        className="relative inline-flex min-h-12 items-center gap-2 rounded-full bg-[#EB6664] px-7 text-sm font-bold text-white shadow-[0_12px_30px_rgba(235,102,100,.22)] transition hover:-translate-y-0.5 hover:bg-[#D95359]"
      >
        Preview enquiry <Send size={16} />
      </button>
      {preview && (
        <p
          role="status"
          className="relative rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
        >
          Preview only: your message has not been sent. Connect an email or CRM
          service to deliver enquiries.
        </p>
      )}
    </form>
  );
}

export function SearchFilter({ items = [], kind = "programs" }) {
  const [query, setQuery] = useState("");
  const filtered = items.filter((item) =>
    `${item.title || ""} ${item.category || ""} ${item.tag || ""} ${item.description || ""}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );
  return (
    <div className="w-full">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <label className="relative block w-full max-w-lg">
          <span className="sr-only">Search {kind}</span>
          <Search
            aria-hidden="true"
            size={19}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#EB6664]"
          />
          <input
            type="search"
            placeholder={`Search ${kind}...`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`${inputClass} pl-12`}
          />
        </label>
        <span className="text-xs font-bold uppercase tracking-[.14em] text-slate-400">
          {filtered.length} {filtered.length === 1 ? "result" : "results"}
        </span>
      </div>
      {filtered.length ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <Link
              key={`${item.slug}-${i}`}
              href={`/${kind}/${item.slug}`}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[26px] p-6 sm:p-7 ${revealCard} ${cardTheme(i)} hover:-translate-y-1.5`}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#FFF7F4] via-white to-[#F8F5FF] opacity-0 transition-opacity duration-300 group-hover:opacity-30"
              />
              <div className="relative flex items-center justify-between">
                <span className="rounded-full bg-[#FFF0EE] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.13em] text-[#D95359]">
                  {item.category || item.tag || "Explore"}
                </span>
                <BookOpen size={18} className="text-[#EB6664]/70" />
              </div>
              <h3 className="relative mt-6 text-xl font-extrabold leading-snug tracking-tight text-[#17243A]">
                {item.title}
              </h3>
              <p className="relative mt-3 flex-1 text-sm leading-7 text-slate-500">
                {item.description ||
                  "Explore learning guidance and helpful ideas."}
              </p>
              <span className="relative mt-7 inline-flex items-center gap-2 border-t border-[#F0E8E7] pt-4 text-sm font-bold text-[#D95359]">
                Explore more{" "}
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-[26px] border border-dashed border-[#EB6664]/25 bg-[#FFF9F7] px-6 py-14 text-center">
          <Search size={28} className="mx-auto text-[#EB6664]" />
          <h3 className="mt-4 text-lg font-bold text-[#17243A]">
            No matching results
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Try a different keyword or clear your search.
          </p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="mt-5 rounded-full bg-[#EB6664] px-5 py-2.5 text-sm font-bold text-white"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
