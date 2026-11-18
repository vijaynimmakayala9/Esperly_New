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
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-24 md:grid-cols-3">
        {curricula.map((c) => (
          <Link
            key={c.slug}
            href={"/curriculum/" + c.slug}
            className="rounded-3xl border border-slate-100 bg-white p-9 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="text-xs font-bold text-[#EB6664]">CURRICULUM</span>
            <h2 className="mt-4 text-3xl font-bold">{c.title}</h2>
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
