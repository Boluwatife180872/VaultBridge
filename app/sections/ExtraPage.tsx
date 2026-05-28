"use client";

import React from "react";
import Image from "next/image";
import maskimage from "@/public/images/Mask group.png";
import maskimage2 from "@/public/images/Mask group (1).png";
import CountUp from "../components/ui/count-up";

const ExtraPage = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-0">
      <div className="max-w-[1100px] mx-auto w-full">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 my-16">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-[280px] sm:w-[310px] md:w-[360px] group">
              <div
                className="group rounded-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] after:content-[''] after:absolute after:inset-0 after:-z-10
                after:bg-[#C9F0EF] after:rounded-xl after:opacity-0
                after:transition-all after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)]
                after:translate-x-0 after:translate-y-0
                group-hover:after:opacity-100
                group-hover:after:translate-x-5 group-hover:after:translate-y-5"
              >
                <Image
                  src={maskimage}
                  alt="Save and spend illustration"
                  width={360}
                  height={360}
                  className="rounded-xl w-full h-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
              </div>
            </div>
          </div>

          <div className="text-left px-2 sm:px-4 lg:px-0">
            <h2 className="text-[#102B42] text-xl sm:text-2xl md:text-3xl font-semibold">
              Save, Spend, Get a loan
            </h2>

            <p className="my-5 text-[#507695] text-sm sm:text-base md:text-lg leading-relaxed max-w-[550px]">
              We offer you high-interest savings, low-interest loans, and easy
              digital banking. Whether you need to save for a goal, spend on
              your needs, or get a loan for a project, the bank has you covered.
              Join the bank today and enjoy the benefits of smart banking.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-[#507695] mt-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold">
                  <CountUp
                    from={0}
                    to={12}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  K+
                </h3>
                <p className="text-sm tracking-wide">BUSINESSES</p>
              </div>

              <div className="w-px h-10 bg-[#668299]"></div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold">
                  <CountUp
                    from={0}
                    to={875}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  +
                </h3>
                <p className="text-sm tracking-wide">INDIVIDUALS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 my-16 px-4 sm:px-6 lg:px-0">
          <div className="flex items-center">
            <div>
              <h2 className="text-[#102B42] text-xl sm:text-2xl md:text-3xl font-semibold">
                24/7 customer support - Get help when it matters most
              </h2>

              <p className="my-5 text-[#507695] text-sm sm:text-base md:text-lg leading-relaxed max-w-[550px]">
                At our bank, we care about your satisfaction and convenience.
                That&apos;s why we have a dedicated team of customer service agents
                who are available 24 hours a day, 7 days a week, to assist you
                with any issues or inquiries you may have. Whether you need to
                report a lost card, request a loan, or update your account
                details, you can reach us anytime via phone, email, or chat.
              </p>

              <div className="flex items-center gap-6 text-[#507695] mt-6">
                <button
                  onClick={() => scrollTo("products")}
                  className="px-3 py-2 border-2 border-[#4CAFA7] rounded-xl hover:border-[#DFF6F2] transition-colors duration-300 cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center sm:justify-center">
            <div className="relative group w-[260px] sm:w-[310px] md:w-[360px]">
              <div
                className="
        relative rounded-xl
        transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        group-hover:scale-[1.03]

        after:content-[''] after:absolute after:inset-0 after:-z-10
        after:bg-[#C9F0EF] after:rounded-xl after:opacity-0
        after:transition-all after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)]
        after:translate-x-0 after:translate-y-0
        group-hover:after:opacity-100
        group-hover:after:translate-x-5 group-hover:after:translate-y-5
      "
              >
                <Image
                  src={maskimage2}
                  alt="Customer support illustration"
                  width={360}
                  height={360}
                  className="rounded-xl w-full h-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraPage;
