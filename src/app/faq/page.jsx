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
      <section className="mx-auto max-w-3xl px-5 py-24">
        <FAQ />
      </section>
      <PageExperience />
      <Callout />
    </>
  );
}
