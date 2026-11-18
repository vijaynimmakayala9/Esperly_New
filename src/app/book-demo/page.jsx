import PageExperience from "@/components/PageExperience";
import LottieArt from "@/components/LottieArt";
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
      <section className="mx-auto max-w-3xl px-5 py-20">
        <BookingForm />
      </section>
      <PageExperience />
    </>
  );
}
