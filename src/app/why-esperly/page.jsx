import PageExperience from "@/components/PageExperience";
import { PageHero, InfoGrid, Callout } from "@/components/PageParts";
export const metadata = { title: "Why Esperly" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Why Esperly"
        title="Because every learner deserves to feel understood."
        description="We believe personal attention and positive encouragement can change how students experience learning."
      />
      <section className="mx-auto w-full max-w-7xl py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <InfoGrid
          items={[
            ["Individual focus", "Put the learner\u2019s needs at the center."],
            [
              "Confidence first",
              "Make questions, curiosity, and progress feel welcome.",
            ],
            [
              "Parent partnership",
              "Support a clear, collaborative learning journey.",
            ],
          ]}
        />
      </section>
      <PageExperience />
      <Callout />
    </>
  );
}
