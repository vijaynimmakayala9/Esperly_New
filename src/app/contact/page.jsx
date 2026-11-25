import { PhotoStrip } from "@/components/PhotoSections";
import PageExperience from "@/components/PageExperience";
import { PageHero } from "@/components/PageParts";
import { ContactForm } from "@/components/Interactive";
export const metadata = { title: "Contact" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="We'd love to hear from you."
        description="Have a question about tuition, learning support, or working with Esperly? Start the conversation."
      />
      <section className="mx-auto w-full max-w-7xl py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </section>
      <PageExperience />
      <PhotoStrip
        title="The next step begins with a conversation."
        image="laptop"
      />
    </>
  );
}
