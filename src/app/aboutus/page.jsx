import { PhotoHero, PhotoCards, PhotoStrip } from "@/components/PhotoSections";
export const metadata = {
  title: "About Us | Esperly",
  description: "Discover Esperly's learner-first approach to online tuition.",
};
export default function Page() {
  return (
    <main>
      <PhotoHero
        eyebrow="About Esperly"
        title="Learning should feel personal, inspiring, and possible."
        description="Esperly is designed to help learners build strong foundations, ask better questions, and grow in confidence with thoughtful tuition and enrichment pathways."
        image="classroom"
      />
      <PhotoCards
        eyebrow="What guides us"
        title="A thoughtful approach to every learner"
        items={[
          {
            title: "Personal attention",
            description:
              "Support that responds to each student's pace, questions, and goals.",
            image: "study",
          },
          {
            title: "Curiosity first",
            description:
              "Lessons that encourage exploration, practice, and meaningful understanding.",
            image: "books",
          },
          {
            title: "Progress with purpose",
            description:
              "Clear learning goals and consistent encouragement at every stage.",
            image: "writing",
          },
        ]}
      />
      <PhotoStrip
        title="Confidence grows when every question has room to be heard."
        image="laptop"
      />
      <PhotoCards
        eyebrow="Explore Esperly"
        title="Find the learning pathway that fits"
        items={[
          {
            title: "Online tuition",
            description: "Academic support across classes and subjects.",
            image: "classroom",
            href: "/online-tuition",
          },
          {
            title: "Learning boosters",
            description: "Creative enrichment alongside academic learning.",
            image: "writing",
            href: "/booster/drawing",
          },
          {
            title: "Language tracks",
            description: "Explore communication and language learning.",
            image: "library",
            href: "/language/english",
          },
        ]}
      />
    </main>
  );
}
