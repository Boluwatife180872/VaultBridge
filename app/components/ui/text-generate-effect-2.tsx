"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/app/libs/utils";

interface TextGenerateEffectProps {
  words: string; // Full sentence
  className?: string; // Tailwind classes (font-size, weight, alignment)
  filter?: boolean; // Initial blur
  duration?: number; // Animation duration per word
  staggerDelay?: number; // Delay between words
}

export const TextGenerateEffect2 = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  staggerDelay = 0.2,
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (!scope.current) return;

    animate(
      Array.from(scope.current.children),
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(staggerDelay),
      }
    );
  }, [scope, animate, filter, duration, staggerDelay]);

  return (
    <div
      ref={scope}
      className={cn(
        "text-center inline-block font-bold bg-clip-text text-transparent",
        className
      )}
      style={{
        background: "linear-gradient(90deg, #0F172A, #D4A84B)",
      }}
    >
      {wordsArray.map((word, idx) => (
        <motion.span
          key={idx}
          className="opacity-0 inline"
          style={{
            filter: filter ? "blur(10px)" : "none",
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </div>
  );
};
