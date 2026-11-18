import { notFound } from "next/navigation";
import PremiumDetail from "@/components/PremiumDetail";
import { curricula } from "@/data/site";

export function generateStaticParams() {
  return curricula.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = curricula.find((entry) => entry.slug === slug);
  return { title: item ? `${item.title} | Esperly` : "Esperly" };
}

export default async function DetailPage({ params }) {
  const { slug } = await params;
  const item = curricula.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const description = `Explore a personalized learning approach for the ${item.title} curriculum. Board and subject availability must be confirmed with Esperly.`;
  return <PremiumDetail type="curriculum" item={item} items={curricula} description={description} />;
}
