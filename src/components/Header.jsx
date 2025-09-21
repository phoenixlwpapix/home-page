// src/components/Header.jsx
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/80 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="flex items-center space-x-2 text-xl font-bold tracking-wider"
        >
          {/* SVG Logo from public folder */}
          <img src="/favicon.svg" alt="Studio YYH Logo" className="w-6 h-6" />
          <span>STUDIO YYH.</span>
        </a>
        <nav className="space-x-8">
          <a
            href="#about"
            className="text-base hover:text-accent transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#works"
            className="text-base hover:text-accent transition-colors duration-200"
          >
            Works
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
