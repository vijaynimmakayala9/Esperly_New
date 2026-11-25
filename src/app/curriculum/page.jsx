import { cardTheme } from "@/lib/cardThemes";
import PageExperience from "@/components/PageExperience";
import Link from "next/link";
import { curricula } from "@/data/site";
import { PageHero, Callout } from "@/components/PageParts";
export const metadata = { title: "Curriculum" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Curriculum pathways"
        title="Learning aligned with your school journey."
        description="Explore proposed curriculum pathways. Please confirm which boards and grades Esperly currently supports."
      />
      <section className="mx-auto grid w-full max-w-7xl gap-5 py-12 sm:py-16 lg:py-20 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
        {curricula.map((c, i) => (
          <Link
            key={c.slug}
            href={"/curriculum/" + c.slug}
            className={`rounded-3xl border ${cardTheme(i)} p-5 sm:p-7 transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-[#EB6664]/35 hover:shadow-xl`}
          >
            <span className="text-xs font-bold text-[#EB6664]">CURRICULUM</span>
            <h2 className="mt-4 text-2xl sm:text-[1.75rem] font-bold">
              {c.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Explore the approach, subjects, and learning goals for this
              pathway.
            </p>
            <span className="mt-6 block text-sm font-bold text-[#EB6664]">
              Explore pathway →
            </span>
          </Link>
        ))}
      </section>
      <PageExperience />
      <Callout />
    </>
  );
}
