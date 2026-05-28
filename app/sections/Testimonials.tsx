"use client";

import { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import BlurText from "../components/ui/blur-text";

const testimonials = [
  {
    title: "Best savings account ever",
    text: "I love the high-interest rate and the ease of opening an account. I have saved more than ever before. Thank you!",
    name: "Aisha",
    role: "Teacher",
    color: "#D4A84B",
  },
  {
    title: "Fast and affordable loan",
    text: "I needed a loan to start my business and the bank gave me one with a low interest rate and flexible repayment terms. It was a lifesaver!",
    name: "Chinedu",
    role: "Caterer",
    color: "#0F172A",
  },
  {
    title: "Convenient digital banking",
    text: "I can do everything from my phone. Transfer money, pay bills, buy airtime, and more. So convenient and hassle-free!",
    name: "Olakunle",
    role: "Engineer",
    color: "#0F172A",
  },
  {
    title: "Excellent customer support",
    text: "The customer service team was incredibly helpful when I had an issue with my account. They resolved it within minutes. Highly recommended!",
    name: "Folake",
    role: "Business Owner",
    color: "#B8942E",
  },
  {
    title: "Easy account opening",
    text: "I opened my account in under 5 minutes from my phone. The entire process was smooth and paperless. This is the future of banking!",
    name: "Emeka",
    role: "Freelancer",
    color: "#D4A84B",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="max-w-[1100px] mx-auto w-full">
      <div className="w-full py-14">
        <div className="flex justify-between items-start md:items-center px-5 md:px-16">
          <div className="flex flex-col text-left w-full">
            <BlurText
              text="What Our Customers Say About Us"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-3xl md:text-4xl font-bold font-heading text-brand-gold-dark justify-start"
            />
            <p className="text-brand-muted mt-2 max-w-[500px]">
              Customers love our high-interest savings, low-interest loans, and
              easy digital banking.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-3 md:mt-0">
            <button
              onClick={scrollLeft}
              className="w-9 h-9 border border-brand-gold flex items-center justify-center rounded-full hover:bg-brand-bg-2 md:w-10 md:h-10 cursor-pointer"
              aria-label="Scroll left"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={scrollRight}
              className="w-9 h-9 border border-brand-gold flex items-center justify-center rounded-full hover:bg-brand-bg-2 md:w-10 md:h-10 cursor-pointer"
              aria-label="Scroll right"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-10 flex gap-6 overflow-x-auto scroll-smooth 
             px-4 sm:px-6 md:px-10 lg:px-16 
             scrollbar-hide snap-x snap-mandatory"
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="snap-start min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[30%]
                 bg-white border border-brand-gold rounded-2xl 
                 p-5 sm:p-6 md:p-7 
                 flex flex-col justify-between shadow-sm transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg"
            >
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-brand-dark">
                  {item.title}
                </h3>

                <div className="flex gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} className="text-yellow-500 text-xl">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-brand-muted leading-relaxed mt-3 text-sm sm:text-base">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <div
                  className="w-[45px] h-[45px] rounded-full flex items-center justify-center text-white font-semibold text-sm"
                  style={{ backgroundColor: item.color }}
                >
                  {initials(item.name)}
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">{item.name}</p>
                  <p className="text-brand-muted text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
