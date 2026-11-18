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
      <section className="mx-auto max-w-3xl px-5 py-20">
        <ContactForm />
      </section>
      <PageExperience />
    </>
  );
}
