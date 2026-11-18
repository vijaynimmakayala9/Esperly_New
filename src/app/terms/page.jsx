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
      <section className="mx-auto max-w-7xl px-5 py-24">
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
      <Callout />
    </>
  );
}
