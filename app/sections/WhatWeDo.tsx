import React from "react";
import { FaPlay } from "react-icons/fa6";
import { SquareCheck } from "lucide-react";
import BlurText from "../components/ui/blur-text";
import SpotlightCard from "@/app/components/ui/SpotlightCard";

const WhatWeDo = () => {
  return (
    <section className="mt-12 mb-12 max-w-[1100px] mx-auto w-full">
      <div className="px-4 sm:px-6 md:px-0">
        <BlurText
          text="What We Do"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-3xl md:text-4xl font-bold text-center justify-center text-[#2A6F75] "
        />

        <p
          className="text-center mt-2 text-[#204260] max-w-[900px] mx-auto px-2 sm:px-0 
      md:whitespace-nowrap"
        >
          We provide smart banking solutions for your savings, loans, and
          financial management needs.
        </p>
      </div>

      <div className="mt-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4">
          <SpotlightCard
            className="custom-spotlight-card p-6 md:p-10 bg-linear-to-r from-[#102B42] to-[#000000] text-white rounded-2xl"
            spotlightColor="rgba(0, 229, 255, 0.7)"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
              See how we are helping SMEs scale with our business loans
            </h3>

            <div className="my-4 sm:my-5 space-y-3">
              {[
                "Low-interest flexible loans, payable across 12 months",
                "Credit scoring to qualify for higher loan at lower rates",
                "Same-day loan disbursement, no delay",
                "Easy onboarding and KYB check",
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <SquareCheck />
                  <p className="text-sm sm:text-base">{text}</p>
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-2 text-sm sm:text-base font-medium text-[#06F9EE] border-2 border-[#06F9EE] px-3 py-2 rounded mt-3 sm:mt-5 hover:text-[#4CAFA7] hover:border-[#4CAFA7] hover:bg-white transition cursor-pointer">
              Watch Video
              <FaPlay />
            </button>
          </SpotlightCard>

          <SpotlightCard
            className="custom-spotlight-card p-6 md:p-10 bg-linear-to-r from-[#102B42] to-[#4CAFA7] text-white rounded-2xl"
            spotlightColor="rgba(0, 229, 255, 0.3)"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
              Learn how we help you earn returns on money saved
            </h3>

            <div className="my-4 sm:my-5 space-y-3">
              {[
                "15% interest on long-term savings (12 months lock-up)",
                "7% interest on mid-term savings (6 months lock-up)",
                "3% interest on short-term savings (3 months lock-up)",
                "Easy onboarding and KYB check",
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <SquareCheck />
                  <p className="text-sm sm:text-base">{text}</p>
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-2 text-sm sm:text-base font-medium text-[#06F9EE] border-2 border-[#06F9EE] px-3 py-2 rounded mt-3 sm:mt-5 hover:text-[#4CAFA7] hover:border-[#4CAFA7] hover:bg-white transition cursor-pointer">
              Watch Video
              <FaPlay />
            </button>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
