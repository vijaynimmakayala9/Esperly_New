import PageExperience from "@/components/PageExperience";
import { subjects } from "@/data/site";
import { PageHero, Callout } from "@/components/PageParts";
import { SubjectCard } from "@/components/UI";
export const metadata = { title: "Explore Subjects" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Explore subjects"
        title="Find your next breakthrough."
        description="Discover subject-focused learning designed to make challenging concepts feel approachable."
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-24 md:grid-cols-2">
        {subjects.map((x) => (
          <SubjectCard key={x.slug} item={x} />
        ))}
      </section>
      <PageExperience />
      <Callout />
    </>
  );
}
