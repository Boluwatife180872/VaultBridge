import React from "react";
import Image from "next/image";
import custom from "@/public/images/Customization.png";
import guide from "@/public/images/Guidance.png";
import hand from "@/public/images/coins-hand.png";
import shield from "@/public/images/shield-zap.png";

import BlurText from "../components/ui/blur-text";

const WhyUs = () => {
  return (
    <section className="mt-12 mb-12 max-w-[1100px] mx-auto w-full">
      <div>
        <BlurText
          text="Why Our Customers Prefer Us"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-3xl md:text-4xl font-bold text-center text-[#2A6F75] justify-center"
        />

        <p className="text-sm md:text-base text-center mt-4">
          We give our customers more money, less hassle, and peace of mind
        </p>
      </div>

      <div className="mt-15 px-4 md:px-6 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
        <div className="border-2 rounded-2xl border-[#4CAFA7] p-5 bg-[#E8FAFC] transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_10px_25px_#4CAFA71A]">
          <Image src={custom} alt="custom" className="mx-auto mb-4" />
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-lg text-[#102B42]">
              High-interest savings
            </h3>
            <p className="text-sm md:text-base">
              You can earn up to 10% interest per year on your savings, without
              any hidden fees or charges. Save more, earn more.
            </p>
          </div>
        </div>

        <div className="border-2 rounded-2xl border-[#4CAFA7] p-5 bg-[#E8FAFC] transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_10px_25px_#4CAFA71A]">
          <Image src={hand} alt="hand" className="mx-auto mb-4" />
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-lg text-[#102B42]">
              Low-interest loans
            </h3>
            <p className="text-sm md:text-base">
              You can access loans of up to N500,000 with flexible repayment
              terms and low interest rates of 5% per month. Borrow less, pay
              less.
            </p>
          </div>
        </div>

        <div className="border-2 rounded-2xl border-[#4CAFA7] p-5 bg-[#E8FAFC] transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_10px_25px_#4CAFA71A] ">
          <Image src={guide} alt="guide" className="mx-auto mb-4" />
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-lg text-[#102B42]">
              Easy digital banking
            </h3>
            <p className="text-sm md:text-base">
              You can open an account in minutes, transfer money, pay bills, and
              buy airtime from your phone or computer. Bank anytime, anywhere.
            </p>
          </div>
        </div>

        <div className="border-2 rounded-2xl border-[#4CAFA7] p-5 bg-[#E8FAFC] transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_10px_25px_#4CAFA71A]">
          <Image src={shield} alt="shield" className="mx-auto mb-4" />
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-lg text-[#102B42]">
              Trusted and secure
            </h3>
            <p className="text-sm md:text-base">
              We are licensed by the Central Bank of Nigeria and insured by the
              Nigeria Deposit Insurance Corporation. Your money is safe with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
