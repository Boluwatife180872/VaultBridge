"use client";

import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-linear-to-r from-brand-dark to-black mt-14 text-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h2 className="text-2xl font-semibold">
              <span className="text-brand-gold">Vault</span>Bridge
            </h2>
            <p className="mt-4 mb-6 sm:mb-10 max-w-[370px] text-sm sm:text-base leading-relaxed">
              A trusted microfinance bank dedicated to empowering Nigerians with
              high-interest savings, accessible loans, and seamless digital
              banking.
            </p>

            <h4 className="text-brand-gold text-sm">FOLLOW US</h4>
            <div className="flex gap-4 mt-3">
              <FaTwitter
                size={20}
                className="hover:text-brand-gold duration-300 cursor-pointer"
              />
              <FaLinkedinIn
                size={20}
                className="hover:text-brand-gold duration-300 cursor-pointer"
              />
              <FaFacebookF
                size={20}
                className="hover:text-brand-gold duration-300 cursor-pointer"
              />
              <FaYoutube
                size={20}
                className="hover:text-brand-gold duration-300 cursor-pointer"
              />
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            <div>
              <h2 className="text-brand-gold text-sm">COMPANY</h2>
              <div className="flex flex-col gap-2 md:gap-3 mt-4 md:mt-6 text-sm">
                <button
                  onClick={() => scrollTo("hero")}
                  className="text-left hover:text-brand-gold duration-300 cursor-pointer"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollTo("hero")}
                  className="text-left hover:text-brand-gold duration-300 cursor-pointer"
                >
                  Contact
                </button>
                <button
                  onClick={() => scrollTo("hero")}
                  className="text-left hover:text-brand-gold duration-300 cursor-pointer"
                >
                  Career
                </button>
                <button
                  onClick={() => scrollTo("hero")}
                  className="text-left hover:text-brand-gold duration-300 cursor-pointer"
                >
                  Press
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-brand-gold text-sm">PRODUCT</h2>
              <div className="flex flex-col gap-2 md:gap-3 mt-4 md:mt-6 text-sm">
                <button
                  onClick={() => scrollTo("products")}
                  className="text-left hover:text-brand-gold duration-300 cursor-pointer"
                >
                  Use Case
                </button>
                <button
                  onClick={() => scrollTo("products")}
                  className="text-left hover:text-brand-gold duration-300 cursor-pointer"
                >
                  Plans
                </button>
                <button
                  onClick={() => scrollTo("products")}
                  className="text-left hover:text-brand-gold duration-300 cursor-pointer"
                >
                  Integrations
                </button>
                <button
                  onClick={() => scrollTo("hero")}
                  className="text-left hover:text-brand-gold duration-300 cursor-pointer"
                >
                  Terms of Service
                </button>
                <button
                  onClick={() => scrollTo("hero")}
                  className="text-left hover:text-brand-gold duration-300 cursor-pointer"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => scrollTo("hero")}
                  className="text-left hover:text-brand-gold duration-300 cursor-pointer"
                >
                  Data Policy
                </button>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h2 className="text-brand-gold text-sm">RESOURCES</h2>
              <div className="flex flex-col gap-2 md:gap-3 mt-4 md:mt-6 text-sm">
                <button
                  onClick={() => scrollTo("testimonials")}
                  className="text-left hover:text-brand-gold duration-300 cursor-pointer"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollTo("hero")}
                  className="text-left hover:text-brand-gold duration-300 cursor-pointer"
                >
                  Blog
                </button>
                <button
                  onClick={() => scrollTo("hero")}
                  className="text-left hover:text-brand-gold duration-300 cursor-pointer"
                >
                  Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16 text-sm">
          All rights reserved. {"\u00A9"} {new Date().getFullYear()} VaultBridge Microfinance Bank Ltd.
        </div>
      </div>
    </section>
  );
};

export default Footer;
