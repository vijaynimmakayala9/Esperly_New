import PageExperience from "@/components/PageExperience";
import { PageHero } from "@/components/PageParts";
import { BookingForm } from "@/components/Interactive";
export const metadata = { title: "Book a Free Demo" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Let's get started"
        title="A learning journey starts with a conversation."
        description="Tell us a little about your child and the kind of learning support you're looking for."
      />
      <section className="mx-auto w-full max-w-7xl py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <BookingForm />
      </section>
      <PageExperience />
    </>
  );
}
