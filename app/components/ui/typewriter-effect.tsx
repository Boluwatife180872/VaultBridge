"use client";

import { motion } from "motion/react";
import { cn } from "@/app/libs/utils";

interface Word {
  text: string;
  className?: string;
}

interface TypewriterProps {
  linesDesktop: Word[][];
  linesMobile: Word[][];
  className?: string;
  cursorClassName?: string;
}

export function TypewriterEffectSmooth({
  linesDesktop,
  linesMobile,
  className,
  cursorClassName,
}: TypewriterProps) {
  const renderLine = (lines: Word[][]) => (
    <div className="flex flex-col items-center">
      {lines.map((line, lineIdx) => (
        <div key={lineIdx} className="inline-block whitespace-nowrap">
          {line.map((word, wordIdx) => {
            const isLastWord =
              lineIdx === lines.length - 1 && wordIdx === line.length - 1;
            return (
              <span key={wordIdx} className="inline-block">
                {word.text.split("").map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.05 * charIdx + wordIdx * 0.5 + lineIdx * 1,
                    }}
                    className={cn(word.className)}
                  >
                    {char}
                  </motion.span>
                ))}
                &nbsp;
                {/* Add cursor at the end of the last word */}
                {isLastWord && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className={cn(
                      "inline-block w-1 h-6 md:h-8 lg:h-10 bg-brand-gold ml-1",
                      cursorClassName
                    )}
                  />
                )}
              </span>
            );
          })}
          <br />
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("inline-block", className)}>
      {/* Desktop */}
      <div className="hidden md:block">{renderLine(linesDesktop)}</div>

      {/* Mobile */}
      <div className="block md:hidden">{renderLine(linesMobile)}</div>
    </div>
  );
}
