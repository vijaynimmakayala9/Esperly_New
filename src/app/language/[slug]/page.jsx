import { notFound } from "next/navigation";
import LearningDetail from "@/components/LearningDetail";
const offerings = {
  english: {
    title: "English",
    description:
      "Develop reading, writing, speaking and listening. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Conversation", "Vocabulary", "Reading and writing"],
  },
  hindi: {
    title: "Hindi",
    description:
      "Build everyday Hindi language understanding. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Vocabulary", "Conversation", "Reading practice"],
  },
  tamil: {
    title: "Tamil",
    description:
      "Explore Tamil language skills through guided practice. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Vocabulary", "Pronunciation", "Reading practice"],
  },
  telugu: {
    title: "Telugu",
    description:
      "Develop Telugu speaking and literacy foundations. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Conversation", "Vocabulary", "Script practice"],
  },
  kannada: {
    title: "Kannada",
    description:
      "Explore Kannada language foundations and usage. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Pronunciation", "Vocabulary", "Reading practice"],
  },
  malayalam: {
    title: "Malayalam",
    description:
      "Build Malayalam language confidence step by step. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Conversation", "Script awareness", "Vocabulary"],
  },
  sanskrit: {
    title: "Sanskrit",
    description:
      "Explore Sanskrit language structure and vocabulary. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Pronunciation", "Grammar foundations", "Reading practice"],
  },
  french: {
    title: "French",
    description:
      "Start communicating in French through practical lessons. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Everyday phrases", "Pronunciation", "Basic grammar"],
  },
  german: {
    title: "German",
    description:
      "Build beginner German vocabulary and conversation skills. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Everyday phrases", "Grammar basics", "Pronunciation"],
  },
  spanish: {
    title: "Spanish",
    description:
      "Explore Spanish communication and core language patterns. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Conversation", "Vocabulary", "Pronunciation"],
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
      eyebrow="Language track"
      title={item.title}
      description={item.description}
      highlights={item.highlights}
      kind="language"
      related={Object.entries(offerings)
        .filter(([key]) => key !== slug)
        .slice(0, 3)
        .map(([key, value]) => ({
          title: value.title,
          href: `/language/${key}`,
        }))}
    />
  );
}
