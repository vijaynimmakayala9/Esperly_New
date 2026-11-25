import PageExperience from "@/components/PageExperience";
import { PageHero, InfoGrid, Callout } from "@/components/PageParts";
export const metadata = { title: "Our story" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A little more heart in every learning moment."
        description="Esperly is built around a simple belief: learning should feel personal, positive, and full of possibility."
      />
      <section className="mx-auto w-full max-w-7xl py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <InfoGrid
          items={[
            [
              "Our mission",
              "Make supportive, individualized learning easier to explore.",
            ],
            [
              "Our philosophy",
              "Meet learners with patience, curiosity, and encouragement.",
            ],
            [
              "Our values",
              "Clarity, kindness, consistency, and meaningful progress.",
            ],
          ]}
        />
      </section>
      <PageExperience />
      <Callout />
    </>
  );
}
