"use client";
import React, { useState, useEffect } from "react";

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
    <div className={navbarClasses}>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl text-white' onClick={scrollToTop}>
          agustín .dev
        </a>
      </div>
    </div>
  );
};
