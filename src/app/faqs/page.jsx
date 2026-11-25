import { PhotoHero, PhotoCards, PhotoStrip } from "@/components/PhotoSections";
import { FAQ } from "@/components/Interactive";
export const metadata = {
  title: "FAQs | Esperly",
  description:
    "Answers to common questions about Esperly tuition and learning programs.",
};
export default function Page() {
  return (
    <main>
      <PhotoHero
        eyebrow="Frequently asked questions"
        title="Good questions deserve clear answers."
        description="Learn more about the proposed Esperly learning experience, explore next steps, and get in touch if you need more details."
        image="laptop"
      />
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold text-[#17243A] sm:text-3xl">
            Your questions, answered
          </h2>
          <FAQ />
        </div>
      </section>
      <PhotoCards
        eyebrow="Useful next steps"
        title="Explore before you decide"
        items={[
          {
            title: "Explore tuition",
            description:
              "Find a learning path for your student's class and goals.",
            image: "study",
            href: "/online-tuition",
          },
          {
            title: "How it works",
            description: "Understand the proposed learning and demo journey.",
            image: "classroom",
            href: "/how-it-works",
          },
          {
            title: "Contact our team",
            description: "Ask about classes, formats, and enrollment details.",
            image: "laptop",
            href: "/contact",
          },
        ]}
      />
      <PhotoStrip
        title="Still have a question? We're happy to hear it."
        image="books"
      />
    </main>
  );
}
