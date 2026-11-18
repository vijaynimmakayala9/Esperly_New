import { notFound } from "next/navigation";
import LearningDetail from "@/components/LearningDetail";
const offerings = {
  "class-1": {
    title: "Class 1",
    description:
      "Early literacy, counting and curiosity. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Reading foundations", "Number sense", "Playful learning"],
  },
  "class-2": {
    title: "Class 2",
    description:
      "Build confidence in reading, writing and core arithmetic. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: [
      "Reading fluency",
      "Addition and subtraction",
      "Daily practice",
    ],
  },
  "class-3": {
    title: "Class 3",
    description:
      "Strengthen language, mathematics and problem-solving. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Multiplication", "Reading comprehension", "Problem solving"],
  },
  "class-4": {
    title: "Class 4",
    description:
      "Develop strong foundations for upper primary learning. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Fractions", "Writing skills", "Science concepts"],
  },
  "class-5": {
    title: "Class 5",
    description:
      "Prepare for the transition to middle school. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: [
      "Decimals and fractions",
      "Independent study",
      "Concept clarity",
    ],
  },
  "class-6": {
    title: "Class 6",
    description:
      "Navigate new subjects and deeper concepts. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Core mathematics", "Science foundations", "Study habits"],
  },
  "class-7": {
    title: "Class 7",
    description:
      "Develop reasoning and consistent academic practice. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: [
      "Algebra basics",
      "Scientific thinking",
      "Writing and revision",
    ],
  },
  "class-8": {
    title: "Class 8",
    description:
      "Prepare confidently for secondary-level academics. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Pre-algebra", "Science application", "Exam preparation"],
  },
  "class-9": {
    title: "Class 9",
    description:
      "Build a strong foundation for board-level subjects. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: [
      "Math fundamentals",
      "Physics and chemistry",
      "Structured revision",
    ],
  },
  "class-10": {
    title: "Class 10",
    description:
      "Organize focused preparation for important examinations. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: [
      "Board exam concepts",
      "Practice and revision",
      "Time management",
    ],
  },
  "class-11": {
    title: "Class 11",
    description:
      "Manage more advanced coursework and subject depth. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: [
      "Stream-specific support",
      "Conceptual understanding",
      "Study planning",
    ],
  },
  "class-12": {
    title: "Class 12",
    description:
      "Prepare for final school examinations with a clear plan. Learn about the focus areas and enquire about Esperly sessions.",
    highlights: ["Advanced concepts", "Mock practice", "Exam readiness"],
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
      eyebrow="School tuition"
      title={item.title}
      description={item.description}
      highlights={item.highlights}
      kind="tuition"
      related={Object.entries(offerings)
        .filter(([key]) => key !== slug)
        .slice(0, 3)
        .map(([key, value]) => ({
          title: value.title,
          href: `/tuition/${key}`,
        }))}
    />
  );
}
