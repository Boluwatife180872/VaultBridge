"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import menu from "@/public/images/_menu.png";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 140;
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white shadow-sm md:h-[72px]">
      <nav
        className={`max-w-[1100px] container mx-auto py-4 px-4 md:px-6 flex items-center
    transition-all duration-300

    ${
      scrolled
        ? "md:fixed md:top-0 md:left-0 md:right-0 md:z-50 md:bg-white/80 md:shadow-[0_4px_20px_rgba(0,0,0,0.06)] md:backdrop-blur-xl"
        : "md:relative"
    }
  `}
      >
        <button onClick={scrollToTop} className="z-10 cursor-pointer">
          <span className="text-xl font-bold text-brand-dark">
            <span className="text-brand-gold">Vault</span>Bridge
          </span>
        </button>

        <div className="flex-1 flex justify-center">
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <button
                onClick={() => scrollTo("features")}
                className="group text-black duration-1000 flex items-center gap-2 hover:text-brand-gold cursor-pointer"
              >
                Why Us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("services")}
                className="group text-black duration-1000 flex items-center gap-2 hover:text-brand-gold cursor-pointer"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("products")}
                className="group text-black duration-1000 flex items-center gap-2 hover:text-brand-gold cursor-pointer"
              >
                Products
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("testimonials")}
                className="group text-black duration-1000 flex items-center gap-2 hover:text-brand-gold cursor-pointer"
              >
                Testimonials
              </button>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => scrollTo("services")}
            className="cursor-pointer hidden md:inline-flex text-base font-bold bg-linear-to-r from-brand-dark to-brand-gold 
              bg-clip-text text-transparent"
          >
            Get Started
          </button>

          <button
            onClick={() => scrollTo("services")}
            className="hidden md:inline-flex bg-linear-to-r from-brand-dark to-brand-gold p-3 rounded text-white cursor-pointer"
          >
            Contact Us
          </button>

          <button
            onClick={() => setOpen((prev: boolean) => !prev)}
            className="md:hidden p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <Image src={menu} alt="menu" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white shadow-md z-50">
          <div className="max-w-[1100px] container mx-auto p-4">
            <ul className="flex flex-col space-y-3">
              <li>
                <button
                  onClick={() => scrollTo("features")}
                  className="block text-black hover:text-brand-gold cursor-pointer"
                >
                  Why Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("services")}
                  className="block text-black hover:text-brand-gold cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("products")}
                  className="block text-black hover:text-brand-gold cursor-pointer"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("testimonials")}
                  className="block text-black hover:text-brand-gold cursor-pointer"
                >
                  Testimonials
                </button>
              </li>

              <li className="pt-2">
                <button
                  onClick={() => scrollTo("services")}
                  className="w-full text-left text-black hover:text-brand-gold cursor-pointer"
                >
                  Get Started
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("services")}
                  className="w-full bg-linear-to-r from-brand-dark to-brand-gold p-3 rounded text-white cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
