import PageExperience from "@/components/PageExperience";
import { PageHero, InfoGrid, Callout } from "@/components/PageParts";
export const metadata = { title: "Student portal" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Student portal"
        title="Your learning space is on its way."
        description="Account access is not yet enabled. The student portal will become available when authentication is connected."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <InfoGrid
          items={[
            [
              "Secure access",
              "Authentication will be required before accounts go live.",
            ],
            ["Learning resources", "A future home for lessons and materials."],
            ["Progress overview", "A planned space for learning milestones."],
          ]}
        />
      </section>
      <PageExperience />
      <Callout />
    </>
  );
}
