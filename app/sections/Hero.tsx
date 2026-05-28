"use client";
import React from "react";
import Image from "next/image";
import cbn from "@/public/images/cbn.png";
import ndic from "@/public/images/nbic.png";
import { FaAngleRight } from "react-icons/fa6";
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-10 flex flex-col justify-start overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% -20%, rgba(212, 168, 75, 0.12), transparent),
          radial-gradient(ellipse 50% 40% at 80% 40%, rgba(15, 23, 42, 0.06), transparent),
          radial-gradient(ellipse 50% 40% at 20% 60%, rgba(184, 148, 46, 0.05), transparent),
          #FAFAF9
        `,
      }}
    >
      <div>
        <div className="text-center mb-6">
          <div className="min-h-[130px] md:min-h-[180px] flex items-center justify-center">
            <div className="text-3xl md:text-6xl font-bold font-heading leading-tight mx-auto max-w-[330px] md:max-w-none">
              <TypewriterEffectSmooth
                linesDesktop={[
                  [
                    { text: "Grow your ", className: "text-black" },
                    { text: "money", className: "text-brand-gold" },
                    { text: "with", className: "text-black" },
                  ],
                  [
                    {
                      text: "confidence and convenience",
                      className: "text-black",
                    },
                  ],
                ]}
                linesMobile={[
                  [
                    { text: "Grow your ", className: "text-black" },
                    { text: "money", className: "text-brand-gold" },
                    { text: " with", className: "text-black" },
                  ],
                  [{ text: "confidence and", className: "text-black" }],
                  [{ text: "convenience", className: "text-black" }],
                ]}
                cursorClassName="bg-brand-gold"
              />
            </div>
          </div>
        </div>
        <TextGenerateEffect
          words="We are a micro-finance bank that offers you high-interest savings, low-interest loans, and easy digital banking. Whether you need to save for a goal, borrow for a project, or manage your finances, we are here to help you achieve more."
          className="max-w-[750px] mx-auto text-center mb-6 text-brand-dark-2 text-[15px] font-normal"
        />
        <div className="flex items-center justify-center gap-4 mt-4 mb-8">
          <button
            onClick={() => {
              const el = document.getElementById("services");
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 140;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="bg-linear-to-r from-brand-dark to-brand-gold px-6 py-3 rounded text-white transition-all hover:from-brand-gold hover:to-brand-dark cursor-pointer"
          >
            Contact Us
          </button>

          <button
            onClick={() => {
              const el = document.getElementById("products");
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 140;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="relative px-[1.5px] py-[1.5px] rounded bg-linear-to-r from-brand-dark to-brand-gold cursor-pointer"
          >
            <div className="bg-white px-6 py-3 rounded flex items-center gap-2">
              <span className="text-brand-dark font-medium">Get Started</span>
              <FaAngleRight className="text-brand-gold" />
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 mt-8 items-center mx-auto justify-center text-brand-gray">
        <div className="flex flex-row">
          Fully Licensed by the CBN{" "}
          <Image
            className="ml-1.5"
            src={cbn}
            alt="cbn"
            width={25}
            height={28}
          />
        </div>
        <div className="flex flex-row">
          Deposits Insured by{" "}
          <Image
            className="ml-1.5"
            src={ndic}
            alt="ndic"
            width={75}
            height={24}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
