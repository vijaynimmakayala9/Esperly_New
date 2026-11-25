import PageExperience from "@/components/PageExperience";
import { PageHero, InfoGrid, Callout } from "@/components/PageParts";
export const metadata = { title: "Learning stories" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Learning stories"
        title="Progress worth celebrating."
        description="Authentic parent and student stories will be shared here with permission once available."
      />
      <section className="mx-auto w-full max-w-7xl py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <InfoGrid
          items={[
            ["Meaningful progress", "Every learner\u2019s journey is unique."],
            ["Growing confidence", "Learning is more than test scores."],
            [
              "Real experiences",
              "We publish testimonials only when verified and approved.",
            ],
          ]}
        />
      </section>
      <PageExperience />
      <Callout />
    </>
  );
}
