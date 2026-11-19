
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Lottie from "lottie-react";
import { useReducedMotion } from "motion/react";

import learning from "@/animations/learning.json";
import book from "@/animations/book.json";
import spark from "@/animations/spark.json";
import progress from "@/animations/progress.json";
import calendar from "@/animations/calendar.json";
import science from "@/animations/science.json";

const animations = {
  learning,
  book,
  spark,
  progress,
  calendar,
  science,
};

// Normalize missing interpolation handles in custom Lottie files.
function normalizeAnimation(source) {
  const data = JSON.parse(JSON.stringify(source));

  data.layers?.forEach((layer) => {
    if (!layer.ks) return;

    ["p", "r", "s", "o"].forEach((key) => {
      const property = layer.ks[key];

      if (
        property?.a !== 1 ||
        !Array.isArray(property.k)
      ) {
        return;
      }

      property.k = property.k.map((frame, index, frames) => {
        if (index === frames.length - 1) {
          return frame;
        }

        return {
          ...frame,
          o: frame.o ?? { x: 0.33, y: 0 },
          i: frame.i ?? { x: 0.67, y: 1 },
        };
      });
    });
  });

  return data;
}

export default function LottieArt({
  name = "learning",
  className = "h-40 w-40",
  label = "Animated learning illustration",
  glow = false,
  loop = true,
  speed = 1,
}) {
  const lottieRef = useRef(null);
  const containerRef = useRef(null);

  const reducedMotion = useReducedMotion();

  const [inView, setInView] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const [hasError, setHasError] = useState(false);

  const animationData = useMemo(() => {
    return normalizeAnimation(
      animations[name] || animations.learning
    );
  }, [name]);

  // Detect viewport visibility.
  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "120px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Pause when browser tab is hidden.
  useEffect(() => {
    const updateVisibility = () => {
      setPageVisible(!document.hidden);
    };

    updateVisibility();

    document.addEventListener(
      "visibilitychange",
      updateVisibility
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        updateVisibility
      );
    };
  }, []);

  const shouldPlay =
    !reducedMotion &&
    inView &&
    pageVisible &&
    !hasError;

  // Manage playback and speed.
  useEffect(() => {
    const instance = lottieRef.current;

    if (!instance) return;

    instance.setSpeed(
      Number.isFinite(speed) && speed > 0 ? speed : 1
    );

    if (reducedMotion) {
      instance.goToAndStop(0, true);
    } else if (shouldPlay) {
      instance.play();
    } else {
      instance.pause();
    }
  }, [shouldPlay, reducedMotion, speed, animationData]);

  useEffect(() => {
    setHasError(false);
  }, [name]);

  return (
    <div
      ref={containerRef}
      className={`relative isolate ${className}`}
      role="img"
      aria-label={label}
    >
      {/* Ambient Esperly glow */}
      {glow && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[12%] rounded-full bg-gradient-to-br from-[#EB6664]/25 via-pink-300/20 to-violet-400/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[25%] rounded-full bg-[#EB6664]/10 blur-2xl"
          />
        </>
      )}

      <div className="relative z-10 h-full w-full">
        {hasError ? (
          <div className="flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-[#FFF0EE] to-[#F4EEFF]">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                📚
              </div>
              <p className="mt-3 text-sm font-semibold text-[#17243A]">
                Learn. Practice. Grow.
              </p>
            </div>
          </div>
        ) : (
          <Lottie
            key={name}
            lottieRef={lottieRef}
            animationData={animationData}
            loop={loop && !reducedMotion}
            autoplay={false}
            className="h-full w-full"
            renderer="svg"
            rendererSettings={{
              preserveAspectRatio: "xMidYMid meet",
              progressiveLoad: false,
            }}
            onDOMLoaded={() => {
              const instance = lottieRef.current;

              if (!instance) return;

              instance.setSpeed(
                Number.isFinite(speed) && speed > 0
                  ? speed
                  : 1
              );

              if (reducedMotion) {
                instance.goToAndStop(0, true);
              } else if (shouldPlay) {
                instance.play();
              }
            }}
            onDataFailed={() => setHasError(true)}
          />
        )}
      </div>
    </div>
  );
}
