import PageExperience from "@/components/PageExperience";
import { PageHero, Callout } from "@/components/PageParts";
import { FAQ } from "@/components/Interactive";
export const metadata = { title: "Frequently Asked Questions" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Questions answered"
        title="Here to make things clearer."
        description="Explore the basics of online learning and how Esperly aims to support your child."
      />
      <section className="mx-auto w-full max-w-7xl py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <FAQ />
      </section>
      <PageExperience />
      <Callout />
    </>
  );
}
