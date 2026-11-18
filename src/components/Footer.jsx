import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
const groups = [
  [
    "Explore",
    ["About", "/about"],
    ["Programs", "/programs"],
    ["Subjects", "/subjects"],
    ["Curriculum", "/curriculum"],
    ["How it works", "/how-it-works"],
  ],
  [
    "Discover",
    ["Tutors", "/tutors"],
    ["Resources", "/resources"],
    ["Why Esperly", "/why-esperly"],
    ["FAQs", "/faq"],
    ["Testimonials", "/testimonials"],
  ],
  [
    "Support",
    ["Contact", "/contact"],
    ["Book a demo", "/book-demo"],
    ["Become a tutor", "/become-a-tutor"],
    ["Privacy policy", "/privacy-policy"],
    ["Terms", "/terms"],
  ],
];
export default function Footer() {
  return (
    <footer className="bg-[#111827] px-5 pt-20 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 pb-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link
            href="/"
            className="flex items-center gap-3 text-3xl font-extrabold tracking-tight"
          >
            <span className="rounded-xl bg-[#EB6664] p-2">
              <BookOpen size={24} />
            </span>
            esperly<span className="text-[#EB6664]">.</span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-8 text-slate-400">
            A warmer, more personal approach to online learning. Helping every
            learner discover what they can become.
          </p>
          <Link
            href="/book-demo"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#FFB8A6]"
          >
            Explore personalized tuition <ArrowUpRight size={17} />
          </Link>
        </div>
        {groups.map(([name, ...links]) => (
          <div key={name}>
            <h3 className="mb-5 text-sm font-bold">{name}</h3>
            <div className="space-y-3">
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-sm text-slate-400 transition-colors hover:text-[#FFB8A6]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 py-6 text-xs text-slate-500 md:flex-row">
        <span>© {new Date().getFullYear()} Esperly. All rights reserved.</span>
        <span>Designed for curious minds and brighter futures.</span>
      </div>
    </footer>
  );
}
