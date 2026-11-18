import { notFound } from "next/navigation";
import LearningDetail from "@/components/LearningDetail";
const offerings = {
  abacus: {
    title: "Abacus",
    description:
      "Explore mental arithmetic through structured number activities. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: [
      "Number recognition",
      "Mental calculation",
      "Accuracy and speed",
    ],
  },
  "phonics-classes": {
    title: "Phonics Classes",
    description:
      "Develop sound-letter connections and confident early reading. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Letter sounds", "Blending words", "Reading fluency"],
  },
  "public-speaking": {
    title: "Public Speaking",
    description:
      "Practice expressing ideas clearly in front of others. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Speech structure", "Voice and delivery", "Confidence"],
  },
  "personality-development": {
    title: "Personality Development",
    description:
      "Develop communication, self-awareness and positive habits. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Communication", "Self-expression", "Social confidence"],
  },
  "vedic-maths": {
    title: "Vedic Maths",
    description:
      "Explore calculation strategies and mathematical patterns. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Mental math", "Number patterns", "Calculation practice"],
  },
  "english-grammar": {
    title: "English Grammar",
    description:
      "Strengthen sentence structure and everyday written English. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Parts of speech", "Sentence building", "Writing accuracy"],
  },
};
export function generateStaticParams() {
  return Object.keys(offerings).map((slug) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = offerings[slug];
  return item
    ? { title: `${item.title} | Esperly`, description: item.description }
    : { title: "Not Found" };
}
export default async function Page({ params }) {
  const { slug } = await params;
  const item = offerings[slug];
  if (!item) notFound();
  return (
    <LearningDetail
      eyebrow="Short-term course"
      title={item.title}
      description={item.description}
      highlights={item.highlights}
      kind="course"
      related={Object.entries(offerings)
        .filter(([key]) => key !== slug)
        .slice(0, 3)
        .map(([key, value]) => ({
          title: value.title,
          href: `/course/${key}`,
        }))}
    />
  );
}
