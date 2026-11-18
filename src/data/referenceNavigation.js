export const tuitionGroups = [
  {
    label: "Elementary Level",
    type: "class",
    items: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"],
  },
  {
    label: "Middle Level",
    type: "class",
    items: ["Class 6", "Class 7", "Class 8"],
  },
  {
    label: "Secondary Level",
    type: "class",
    items: ["Class 9", "Class 10", "Class 11", "Class 12"],
  },
  {
    label: "Short Term Courses",
    type: "course",
    items: [
      "Abacus",
      "Phonics Classes",
      "Public Speaking",
      "Personality Development",
      "Vedic Maths",
      "English Grammar",
    ],
  },
];
export const boosters = [
  "Dance",
  "Drawing",
  "Singing",
  "Yoga",
  "Zumba",
  "Painting",
];
export const languageGroups = [
  { label: "Primary Language", items: ["English"] },
  {
    label: "Regional Languages",
    items: ["Hindi", "Tamil", "Telugu", "Kannada", "Malayalam", "Sanskrit"],
  },
  { label: "Foreign Languages", items: ["French", "German", "Spanish"] },
];
export const moreLinks = [
  { label: "About Us", href: "/aboutus" },
  { label: "Blogs", href: "/blogs" },
  { label: "FAQ's", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund Policy", href: "/refund-policy" },
];
export const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
export const tuitionHref = (group, item) =>
  group.type === "course"
    ? `/course/${slugify(item)}`
    : `/tuition/${slugify(item)}`;
export const boosterHref = (item) => `/booster/${slugify(item)}`;
export const languageHref = (item) => `/language/${slugify(item)}`;
