"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";
import learning from "@/animations/learning.json";
import book from "@/animations/book.json";
import spark from "@/animations/spark.json";
import progress from "@/animations/progress.json";
import calendar from "@/animations/calendar.json";
import science from "@/animations/science.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const animations = { learning, book, spark, progress, calendar, science };
export default function LottieArt({
  name = "learning",
  className = "h-40 w-40",
  label = "Animated learning illustration",
}) {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const onVisibility = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);
  return (
    <div className={className} role="img" aria-label={label}>
      <Lottie
        animationData={animations[name] || learning}
        loop={!reduced}
        autoplay={!reduced && visible}
        className="h-full w-full"
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    </div>
  );
}
