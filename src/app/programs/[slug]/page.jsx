import { notFound } from "next/navigation";
import PremiumDetail from "@/components/PremiumDetail";
import { programs } from "@/data/site";

export function generateStaticParams() {
  return programs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = programs.find((entry) => entry.slug === slug);
  return { title: item ? `${item.title} | Esperly` : "Esperly" };
}

export default async function DetailPage({ params }) {
  const { slug } = await params;
  const item = programs.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const description =
    item.description +
    " Explore a thoughtful, personalized approach to learning. Program availability is subject to confirmation.";
  return (
    <PremiumDetail
      type="programs"
      item={item}
      items={programs}
      description={description}
    />
  );
}
