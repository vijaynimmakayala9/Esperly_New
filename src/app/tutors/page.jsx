import PageExperience from "@/components/PageExperience";
import { PageHero, InfoGrid, Callout } from "@/components/PageParts";
export const metadata = { title: "Our tutors" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our tutors"
        title="Great learning starts with a great connection."
        description="Meet the educators behind the learning experience. Verified tutor profiles will appear here when approved."
      />
      <section className="mx-auto w-full max-w-7xl py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <InfoGrid
          items={[
            ["Subject expertise", "Explore tutors by relevant learning areas."],
            [
              "Teaching approach",
              "Look for patient explanations and engaging lessons.",
            ],
            ["The right fit", "Discuss your child\u2019s goals and needs."],
          ]}
        />
      </section>
      <PageExperience />
      <Callout />
    </>
  );
}
