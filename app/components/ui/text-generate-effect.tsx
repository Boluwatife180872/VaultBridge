"use client";

import { useEffect } from "react";
import { useAnimate, stagger } from "motion/react";
import { cn } from "@/app/libs/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
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
        delay: stagger(0.1),
      }
    );
  }, [scope, animate, filter, duration]);

  return (
    <p
      ref={scope}
      className={cn(
        "text-sm md:text-base leading-relaxed tracking-wide",
        className
      )}
      style={{ color: "#204260" }} // ← YOUR EXACT COLOR FIX
    >
      {wordsArray.map((word, idx) => (
        <span
          key={idx}
          className="inline opacity-0"
          style={{
            filter: filter ? "blur(10px)" : "none",
            color: "#204260", // ← Ensures the animated spans keep the color
          }}
        >
          {word}
          {idx !== wordsArray.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
};
