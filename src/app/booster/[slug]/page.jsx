import { notFound } from "next/navigation";
import LearningDetail from "@/components/LearningDetail";
const offerings = {
  dance: {
    title: "Dance",
    description:
      "Explore movement, rhythm and creative expression. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Rhythm", "Coordination", "Creative confidence"],
  },
  drawing: {
    title: "Drawing",
    description:
      "Develop observation and visual storytelling. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Shapes and lines", "Shading", "Creative composition"],
  },
  singing: {
    title: "Singing",
    description:
      "Explore melody, breathing and musical expression. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Pitch awareness", "Breathing", "Performance practice"],
  },
  yoga: {
    title: "Yoga",
    description:
      "Learn movement and mindfulness fundamentals. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Balance", "Breathing", "Flexibility"],
  },
  zumba: {
    title: "Zumba",
    description:
      "Explore upbeat movement and coordinated exercise. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Rhythm", "Coordination", "Active participation"],
  },
  painting: {
    title: "Painting",
    description:
      "Experiment with color, texture and artistic expression. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Color mixing", "Brush technique", "Creative projects"],
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
      eyebrow="Learning booster"
      title={item.title}
      description={item.description}
      highlights={item.highlights}
      kind="booster"
      related={Object.entries(offerings)
        .filter(([key]) => key !== slug)
        .slice(0, 3)
        .map(([key, value]) => ({
          title: value.title,
          href: `/booster/${key}`,
        }))}
    />
  );
}
