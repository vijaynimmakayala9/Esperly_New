import { PhotoHero, PhotoCards, PhotoStrip } from "@/components/PhotoSections";
import { articles } from "@/data/site";
import { SearchFilter } from "@/components/Interactive";
export const metadata = {
  title: "Blogs | Esperly",
  description: "Study ideas and learning resources for students and families.",
};
export default function Page() {
  return (
    <main>
      <PhotoHero
        eyebrow="Esperly journal"
        title="Ideas that make learning feel a little brighter."
        description="Explore practical study habits, thoughtful parenting tips, and new ways to build confidence beyond the classroom."
        image="books"
      />
      <PhotoCards
        eyebrow="Start exploring"
        title="Learning inspiration for every day"
        items={[
          {
            title: "Build a study routine",
            description:
              "Small, repeatable habits can make focused practice easier.",
            image: "writing",
            href: "/resources",
          },
          {
            title: "Learn with curiosity",
            description:
              "Questions and exploration can help concepts feel more approachable.",
            image: "classroom",
            href: "/resources",
          },
          {
            title: "Find time to read",
            description:
              "Create a reading-friendly space that supports language and imagination.",
            image: "library",
            href: "/resources",
          },
        ]}
      />
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <h2 className="mb-7 text-2xl font-extrabold text-[#17243A] sm:text-3xl">
          Browse all resources
        </h2>
        <SearchFilter items={articles} kind="resources" />
      </section>
      <PhotoStrip
        title="A great learning habit can start with one small step."
        image="study"
      />
    </main>
  );
}
