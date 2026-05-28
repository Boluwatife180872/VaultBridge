"use client";

import React from "react";
import Image from "next/image";
import person from "@/public/images/Person.png";
import clock from "@/public/images/Clock.png";

const HeroCTA = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-[1100px] mx-auto w-full my-16 px-5 md:px-10">
      <div className="relative bg-linear-to-r from-[#0A2A43] to-[#4CAFA7] flex flex-col md:flex-row items-center justify-between rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgba(76,175,167,0.2)] overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative max-w-[500px] text-left">
          <h2 className="text-2xl md:text-3xl text-white font-semibold leading-relaxed">
            Spend, save, get business &amp; individual loans with our bank.
          </h2>
          <button
            onClick={() => scrollTo("products")}
            className="mt-6 px-6 py-3 bg-white text-[#0A2A43] rounded-xl font-semibold hover:bg-[#4CAFA7] hover:text-white transition-all duration-300 cursor-pointer shadow-lg"
          >
            Get Started
          </button>
        </div>

        <div className="relative mt-12 md:mt-0 md:ml-9 flex justify-center w-full md:w-auto">
          <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 h-40 w-[220px] rounded-xl shadow-lg">
            <Image
              src={clock}
              alt="clock"
              width={70}
              height={70}
              className="absolute top-3 right-3 opacity-90"
            />
          </div>

          <Image
            src={person}
            alt="guy"
            width={190}
            height={190}
            className="absolute -bottom-36 left-1/2 -translate-x-1/2 z-10 animate-float rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroCTA;
