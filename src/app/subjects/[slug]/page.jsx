import { notFound } from "next/navigation";
import PremiumDetail from "@/components/PremiumDetail";
import { subjects } from "@/data/site";

export function generateStaticParams() {
  return subjects.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = subjects.find((entry) => entry.slug === slug);
  return { title: item ? `${item.title} | Esperly` : "Esperly" };
}

export default async function DetailPage({ params }) {
  const { slug } = await params;
  const item = subjects.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const description =
    item.description +
    " Explore concepts with clarity, confidence, and curiosity. Subject availability is subject to confirmation.";
  return (
    <PremiumDetail
      type="subjects"
      item={item}
      items={subjects}
      description={description}
    />
  );
}
