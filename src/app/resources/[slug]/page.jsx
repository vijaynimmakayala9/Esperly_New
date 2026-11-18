import PageExperience from "@/components/PageExperience";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "@/data/site";
import { PageHero, Callout } from "@/components/PageParts";
const content = {
  "study-habits": [
    [
      "Start small",
      "Short, regular study sessions often feel more manageable than occasional marathon sessions.",
    ],
    [
      "Make room for reflection",
      "At the end of each session, ask what felt clear and what still needs work.",
    ],
    [
      "Keep the routine flexible",
      "A simple schedule can provide structure without making learning feel rigid.",
    ],
  ],
  "math-confidence": [
    [
      "Normalize mistakes",
      "A wrong answer can reveal exactly which idea needs another explanation.",
    ],
    [
      "Talk through the process",
      "Invite your child to explain how they reached an answer, not just what the answer is.",
    ],
    [
      "Celebrate progress",
      "Notice effort, curiosity, and new strategies alongside correct solutions.",
    ],
  ],
  "exam-preparation": [
    [
      "Plan backward",
      "Break topics into manageable sessions well before the exam.",
    ],
    [
      "Practice actively",
      "Use recall, questions, and explanations instead of only rereading notes.",
    ],
    [
      "Protect rest",
      "Sleep and breaks are important parts of an effective study plan.",
    ],
  ],
  "choosing-a-tutor": [
    [
      "Look for clarity",
      "A good tutor can explain complex ideas in a way your child understands.",
    ],
    [
      "Value encouragement",
      "Students benefit from a safe environment where they can ask questions.",
    ],
    [
      "Discuss goals",
      "Agree on priorities, communication, and how progress will be reviewed.",
    ],
  ],
};
export function generateStaticParams() {
  return articles.map((x) => ({ slug: x.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  return { title: articles.find((x) => x.slug === slug)?.title || "Resource" };
}
export default async function Page({ params }) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  return (
    <>
      <PageHero
        eyebrow={a.category + " · " + a.read}
        title={a.title}
        description="Practical ideas for a more confident, consistent learning journey."
      />
      <article className="mx-auto max-w-3xl space-y-10 px-5 py-20">
        {content[slug].map(([h, t]) => (
          <section key={h}>
            <h2 className="text-2xl font-bold">{h}</h2>
            <p className="mt-4 text-lg leading-9 text-slate-600">{t}</p>
          </section>
        ))}
        <Link
          href="/resources"
          className="inline-block font-bold text-[#EB6664]"
        >
          ← All resources
        </Link>
      </article>
      <PageExperience />
      <Callout />
    </>
  );
}
