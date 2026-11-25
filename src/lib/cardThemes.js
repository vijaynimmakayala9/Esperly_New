// Static Tailwind tokens keep every palette available in production builds.
export const cardThemes = [
  "bg-gradient-to-br from-[#DCEBFF] via-[#EDF5FF] to-[#F8FBFF] border-blue-200/80",
  "bg-gradient-to-br from-[#E8DEFF] via-[#F1EAFF] to-[#FCFAFF] border-violet-200/80",
  "bg-gradient-to-br from-[#D1F4E5] via-[#E7FAF1] to-[#F7FFFB] border-emerald-200/80",
  "bg-gradient-to-br from-[#FFE5CE] via-[#FFF0DF] to-[#FFFAF4] border-orange-200/80",
  "bg-gradient-to-br from-[#FCE0ED] via-[#FFF0F6] to-[#FFFAFC] border-pink-200/80",
  "bg-gradient-to-br from-[#FFF0B8] via-[#FFF7DA] to-[#FFFCF1] border-amber-200/80",
];
export function cardTheme(key = 0) {
  if (typeof key === "number") return cardThemes[Math.abs(key) % cardThemes.length];
  const value = String(key).toLowerCase();
  if (/math|physics|computer/.test(value)) return cardThemes[0];
  if (/science|biology|environment/.test(value)) return cardThemes[2];
  if (/english|language|writing/.test(value)) return cardThemes[4];
  if (/exam|test|revision/.test(value)) return cardThemes[5];
  return cardThemes[Array.from(value).reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % cardThemes.length];
}
