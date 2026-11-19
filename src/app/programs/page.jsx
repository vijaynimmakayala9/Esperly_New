import PageExperience from "@/components/PageExperience";
import { programs } from "@/data/site";
import { PageHero, Callout } from "@/components/PageParts";
import { ProgramCard } from "@/components/UI";
export const metadata = { title: "Tuition Programs" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our programs"
        title="A program for every learning milestone."
        description="Explore personalized tuition options for different ages, stages, and goals. Offerings shown are proposed and subject to confirmation."
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((x, i) => (
          <ProgramCard key={x.slug} item={x} index={i} />
        ))}
      </section>
      <PageExperience />
      <Callout />
    </>
  );
}
