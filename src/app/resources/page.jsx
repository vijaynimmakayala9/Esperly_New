import PageExperience from "@/components/PageExperience";
import { articles } from "@/data/site";
import { PageHero, Callout } from "@/components/PageParts";
import { SearchFilter } from "@/components/Interactive";
export const metadata = { title: "Learning Resources" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Learning journal"
        title="Helpful ideas for curious minds."
        description="Thoughtful resources for parents and learners, from everyday study habits to academic confidence."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SearchFilter items={articles} kind="resources" />
      </section>
      <PageExperience />
      <Callout />
    </>
  );
}
