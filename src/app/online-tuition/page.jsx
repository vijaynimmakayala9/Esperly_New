import PageExperience from "@/components/PageExperience";
import { PageHero, InfoGrid, Callout } from "@/components/PageParts";
export const metadata = { title: "Online tuition" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Online tuition"
        title="The classroom is wherever curiosity lives."
        description="Explore flexible online learning designed around the student, not the other way around."
      />
      <section className="mx-auto max-w-7xl px-5 py-24">
        <InfoGrid
          items={[
            [
              "Personal attention",
              "Create room for questions and individualized support.",
            ],
            [
              "Engaging lessons",
              "Bring concepts to life with interactive explanations.",
            ],
            [
              "Flexible approach",
              "Discuss learning needs, pace, and schedules.",
            ],
          ]}
        />
      </section>
      <PageExperience />
      <Callout />
    </>
  );
}
