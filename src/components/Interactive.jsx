"use client";
import { useState } from "react";
import { ChevronDown, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { faqs } from "@/data/site";
export function FAQ({ items = faqs }) {
  const [active, setActive] = useState(0);
  return (
    <div className="space-y-3">
      {items.map((f, i) => (
        <div
          key={f.q}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
        >
          <button
            onClick={() => setActive(active === i ? -1 : i)}
            aria-expanded={active === i}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-[#17243A]"
          >
            {f.q}
            <ChevronDown
              className={`shrink-0 text-[#EB6664] transition-transform ${active === i ? "rotate-180" : ""}`}
              size={20}
            />
          </button>
          {active === i && (
            <p className="px-6 pb-6 text-sm leading-7 text-slate-500">{f.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
export function Slider({ children }) {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {children.map((c, i) => (
            <div key={i} className="w-full shrink-0 px-1 md:w-1/2 lg:w-1/3">
              {c}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-7 flex items-center justify-end gap-3">
        <button
          aria-label="Previous slide"
          onClick={() => setIndex(Math.max(0, index - 1))}
          className="rounded-full border border-slate-200 p-3 hover:bg-[#FFF0EE]"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          aria-label="Next slide"
          onClick={() => setIndex((index + 1) % children.length)}
          className="rounded-full bg-[#EB6664] p-3 text-white"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
const input =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#17243A] outline-none transition focus:border-[#EB6664] focus:ring-4 focus:ring-[#EB6664]/10";
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
export function BookingForm() {
  const [step, setStep] = useState(0),
    [form, setForm] = useState(initial);
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
  const change = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const field = (key, label, type = "text", options = []) => (
    <label key={key} className="block">
      <span className="mb-2 block text-xs font-semibold text-slate-600">
        {label}
      </span>
      {type === "select" ? (
        <select
          required
          className={input}
          value={form[key]}
          onChange={(e) => change(key, e.target.value)}
        >
          <option value="">Select an option</option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          required={key === "goal"}
          className={input}
          rows="4"
          value={form[key]}
          onChange={(e) => change(key, e.target.value)}
        />
      ) : (
        <input
          required={key !== "notes"}
          type={type}
          className={input}
          value={form[key]}
          onChange={(e) => change(key, e.target.value)}
        />
      )}
    </label>
  );
  return (
    <div className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_24px_70px_rgba(23,36,58,.08)] md:p-10">
      <div className="mb-9 flex gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full ${i <= step ? "bg-[#EB6664]" : "bg-slate-100"}`}
          />
        ))}
      </div>
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#EB6664]">
        Step {step + 1} of 4
      </p>
      <h2 className="mb-8 text-2xl font-bold text-[#17243A]">
        {
          [
            "Tell us about your learner",
            "Parent contact details",
            "Learning preferences",
            "Review your request",
          ][step]
        }
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (step < 3) setStep((s) => s + 1);
        }}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {step === 0 && fields.map((f) => field(...f))}
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
            <div className="col-span-full space-y-3">
              {Object.entries(form)
                .filter(([k]) => k !== "consent")
                .map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between gap-4 border-b border-slate-100 py-2 text-sm"
                  >
                    <span className="capitalize text-slate-500">{k}</span>
                    <span className="max-w-[65%] text-right font-medium text-[#17243A]">
                      {v || "—"}
                    </span>
                  </div>
                ))}
              <label className="flex items-start gap-3 pt-4 text-sm text-slate-600">
                <input
                  required
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => change("consent", e.target.checked)}
                  className="mt-1 accent-[#EB6664]"
                />
                I consent to being contacted about this enquiry.
              </label>
              <div className="rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-800">
                Demo requests are not yet connected to a booking service. This
                preview does not transmit your information or confirm a booking.
              </div>
            </div>
          )}
        </div>
        <div className="mt-9 flex justify-between gap-3">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="rounded-full border border-slate-200 px-6 py-3 font-semibold"
            >
              Back
            </button>
          ) : (
            <span />
          )}
          {step < 3 ? (
            <button className="rounded-full bg-[#EB6664] px-8 py-3 font-semibold text-white">
              Continue →
            </button>
          ) : (
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-full bg-slate-200 px-7 py-3 font-semibold text-slate-500"
            >
              Submission coming soon
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
export function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-5 rounded-[28px] bg-white p-8 shadow-xl shadow-slate-900/5"
    >
      {[
        ["Name", "text"],
        ["Email", "email"],
        ["Message", "textarea"],
      ].map(([name, type]) => (
        <label key={name} className="block">
          <span className="mb-2 block text-sm font-semibold">{name}</span>
          {type === "textarea" ? (
            <textarea required rows="5" className={input} />
          ) : (
            <input required type={type} className={input} />
          )}
        </label>
      ))}
      <button className="rounded-full bg-[#EB6664] px-7 py-3 font-semibold text-white">
        Preview enquiry
      </button>
      {sent && (
        <p role="status" className="text-sm text-amber-700">
          Preview only: connect an email or CRM service to deliver enquiries.
        </p>
      )}
    </form>
  );
}
export function SearchFilter({ items, kind }) {
  const [q, setQ] = useState("");
  return (
    <div>
      <input
        aria-label={`Search ${kind}`}
        placeholder={`Search ${kind}...`}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className={`${input} mb-7 max-w-lg`}
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items
          .filter((x) => x.title.toLowerCase().includes(q.toLowerCase()))
          .map((x) => (
            <a
              key={x.slug}
              href={"/" + kind + "/" + x.slug}
              className="rounded-3xl border border-slate-100 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#EB6664]">
                {x.category || x.tag || "Explore"}
              </span>
              <h3 className="mt-3 text-xl font-bold text-[#17243A]">
                {x.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                {x.description ||
                  "Explore learning guidance and helpful ideas."}
              </p>
              <span className="mt-5 block text-sm font-bold text-[#EB6664]">
                Read more →
              </span>
            </a>
          ))}
      </div>
    </div>
  );
}
