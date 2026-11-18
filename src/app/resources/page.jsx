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
      <section className="mx-auto max-w-7xl px-5 py-24">
        <SearchFilter items={articles} kind="resources" />
      </section>
      <PageExperience />
      <Callout />
    </>
  );
}
