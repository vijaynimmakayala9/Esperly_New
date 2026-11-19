import { PhotoStrip } from "@/components/PhotoSections";
import PageExperience from "@/components/PageExperience";
import { PageHero, InfoGrid, Callout } from "@/components/PageParts";
export const metadata = { title: "Privacy" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Your privacy matters."
        description="This is a pre-launch information page, not a finalized legal privacy policy. A reviewed policy will be published before collecting personal information."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <InfoGrid
          items={[
            [
              "Data collection",
              "No demo or contact form data is currently transmitted by this prototype.",
            ],
            [
              "Third-party services",
              "Hosting, analytics, and booking services must be documented before launch.",
            ],
            [
              "Your choices",
              "Contact and privacy request channels will be provided at launch.",
            ],
          ]}
        />
      </section>
      <PageExperience />
      <PhotoStrip
        title="Protecting trust starts with clarity."
        image="library"
      />
      <Callout />
    </>
  );
}
