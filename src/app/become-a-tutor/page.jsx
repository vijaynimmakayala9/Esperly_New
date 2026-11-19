import PageExperience from "@/components/PageExperience";
import { PageHero, InfoGrid, Callout } from "@/components/PageParts";
export const metadata = { title: "Teach with purpose" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Teach with purpose"
        title="Inspire curiosity. Make learning personal."
        description="Interested in teaching with Esperly? Explore the values and approach behind our future tutor community."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <InfoGrid
          items={[
            ["Teach with empathy", "Create a welcoming space for questions."],
            [
              "Share your expertise",
              "Make difficult ideas easier to understand.",
            ],
            ["Help learners grow", "Celebrate steady, meaningful progress."],
          ]}
        />
      </section>
      <PageExperience />
      <Callout />
    </>
  );
}
