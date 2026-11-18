import PageExperience from "@/components/PageExperience";
import { PageHero, InfoGrid, Callout } from "@/components/PageParts";
export const metadata = { title: "The process" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="The process"
        title="A simpler path to better learning."
        description="From the first conversation to ongoing support, discover how the Esperly learning journey is designed."
      />
      <section className="mx-auto max-w-7xl px-5 py-24">
        <InfoGrid
          items={[
            [
              "01 \u00b7 Connect",
              "Share your child\u2019s grade, interests, and learning goals.",
            ],
            [
              "02 \u00b7 Plan",
              "Explore a learning approach that suits your needs.",
            ],
            [
              "03 \u00b7 Grow",
              "Build understanding with practice, support, and encouragement.",
            ],
          ]}
        />
      </section>
      <PageExperience />
      <Callout />
    </>
  );
}
