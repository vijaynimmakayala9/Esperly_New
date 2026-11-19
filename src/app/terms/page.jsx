import { PhotoStrip } from "@/components/PhotoSections";
import PageExperience from "@/components/PageExperience";
import { PageHero, InfoGrid, Callout } from "@/components/PageParts";
export const metadata = { title: "Terms" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Clear expectations for a better experience."
        description="This page is a pre-launch placeholder, not legally approved terms of service."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <InfoGrid
          items={[
            [
              "Service details",
              "Programs and availability require confirmation.",
            ],
            [
              "Payments and cancellations",
              "Commercial policies will be published before accepting bookings.",
            ],
            ["Responsible use", "Final terms will be reviewed before launch."],
          ]}
        />
      </section>
      <PageExperience />
      <PhotoStrip
        title="Clear expectations help everyone learn."
        image="library"
      />
      <Callout />
    </>
  );
}
