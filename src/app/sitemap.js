import { programs, subjects, curricula, articles } from "@/data/site";
import {
  tuitionGroups,
  boosters,
  languageGroups,
  moreLinks,
  slugify,
} from "@/data/referenceNavigation";
export default function sitemap() {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://esperly.onrender.com";
  const staticPaths = [
    "",
    "about",
    "aboutus",
    "online-tuition",
    "programs",
    "subjects",
    "curriculum",
    "how-it-works",
    "why-esperly",
    "tutors",
    "testimonials",
    "resources",
    "blogs",
    "faq",
    "faqs",
    "contact",
    "book-demo",
    "login",
    "become-a-tutor",
    "privacy-policy",
    "terms",
    "refund-policy",
  ];
  const offerings = [
    ...tuitionGroups.flatMap((group) =>
      group.items.map(
        (item) =>
          `${group.type === "course" ? "course" : "tuition"}/${slugify(item)}`,
      ),
    ),
    ...boosters.map((item) => `booster/${slugify(item)}`),
    ...languageGroups.flatMap((group) =>
      group.items.map((item) => `language/${slugify(item)}`),
    ),
  ];
  const paths = [
    ...staticPaths,
    ...programs.map((x) => `programs/${x.slug}`),
    ...subjects.map((x) => `subjects/${x.slug}`),
    ...curricula.map((x) => `curriculum/${x.slug}`),
    ...articles.map((x) => `resources/${x.slug}`),
    ...offerings,
  ];
  return [...new Set(paths)].map((path) => ({
    url: `${base}/${path}`,
    lastModified: new Date(),
  }));
}
