"use client";

import React from "react";
import Image from "next/image";
import learnimg from "@/public/images/CTA.png";

const TopBar = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#0A2A43] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#4CAFA7]/10 to-transparent" />
      <div className="relative flex flex-col md:flex-row items-center justify-center text-white px-4 py-3 md:py-3 max-w-[1200px] mx-auto gap-2 w-full">
        <p className="text-sm md:text-sm text-center md:text-left">
          VaultBridge launches digital banking platform &mdash;{" "}
          <button onClick={() => scrollTo("products")} className="underline underline-offset-2 hover:text-[#4CAFA7] transition-colors cursor-pointer font-medium">
            Learn more
          </button>
        </p>
      </div>
    </div>
  );
};

export default TopBar;
