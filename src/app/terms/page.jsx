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
      <section className="mx-auto w-full max-w-7xl py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
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
