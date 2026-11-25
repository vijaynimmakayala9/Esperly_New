import ParallaxImage from "./ParallaxImage";
import { Button, Reveal } from "./UI";
import { BookOpen, Sparkles } from "./BrandIcons";

const images = {
  tuition: "/images/learning-parallax.webp",
  subjects: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=85",
  programs: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=85",
  curriculum: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=85",
  home: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=85",
};
export default function ParallaxStory({ kind = "home", title = "Make room for curiosity.", description = "Explore learning with clear goals, thoughtful guidance and space to grow at your own pace." }) {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-[#EAF4FF] via-[#FFF9F6] to-[#EDE5FF] px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="group relative aspect-[5/4] overflow-hidden rounded-[32px] border-[6px] border-white bg-[#DCEBFF] shadow-[0_24px_70px_rgba(23,36,58,.16)]">
            <ParallaxImage src={images[kind] || images.tuition} alt="Educational learning environment" sizes="(max-width:1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17243A]/65 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/30 bg-white/90 p-4 text-[#17243A] backdrop-blur-md"><BookOpen size={24}/><span className="text-sm font-bold">Learn · Practice · Grow</span></div>
          </div>
        </Reveal>
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#B9414A]"><Sparkles size={16}/> The Esperly experience</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#17243A] sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">{description}</p>
          <div className="mt-7"><Button href="/book-demo">Explore a free demo</Button></div>
        </Reveal>
      </div>
    </section>
  );
}
