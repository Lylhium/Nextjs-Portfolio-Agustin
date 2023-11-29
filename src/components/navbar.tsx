"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isScrolledUp, setIsScrolledUp] = useState(true);

  useEffect(() => {
    let lastScrollPosition = window.scrollY;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > lastScrollPosition) {
        setIsScrolledUp(false);
      } else {
        setIsScrolledUp(true);
      }

      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navbarClasses = `navbar bg-black bg-opacity-90 sticky top-0 ${
    isScrolledUp
      ? "opacity-100 transition-opacity"
      : "opacity-0 pointer-events-none transition-opacity"
  }`;

  return (
    <motion.div
      className={navbarClasses}
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl text-white' onClick={scrollToTop}>
          agustín <span className='text-orange-500'>.dev</span>
        </a>
      </div>
    </motion.div>
  );
};
