// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme, mounted } = useTheme();

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
          ? "bg-secondary/80 dark:bg-secondary/80 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="flex items-center space-x-2 text-xl font-bold tracking-wider text-primary dark:text-primary"
        >
          {/* SVG Logo from public folder */}
          <img src="/favicon.svg" alt="Studio YYH Logo" className="w-6 h-6" />
          <span>STUDIO YYH.</span>
        </a>
        <div className="flex items-center space-x-8">
          <nav className="space-x-8">
            <a
              href="#about"
              className="text-base text-primary dark:text-primary hover:text-accent dark:hover:text-accent transition-colors duration-200 hover-underline"
            >
              About
            </a>
            <a
              href="#works"
              className="text-base text-primary dark:text-primary hover:text-accent dark:hover:text-accent transition-colors duration-200 hover-underline"
            >
              Works
            </a>
          </nav>
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="relative w-14 h-8 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-gradient-to-r shadow-lg transform hover:scale-105 ml-4"
              style={{
                background: isDark
                  ? "linear-gradient(to right, rgb(71, 85, 105), rgb(15, 23, 42))"
                  : "linear-gradient(to right, oklch(0.82 0.09 235), #33A9D8)",
              }}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              <div
                className={`relative w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300 ease-in-out flex items-center justify-center ${
                  isDark ? "translate-x-6" : "translate-x-1"
                }`}
              >
                <Sun
                  className={`w-4 h-4 text-amber-500 absolute transition-all duration-300 ${
                    isDark
                      ? "opacity-0 rotate-180 scale-0"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <Moon
                  className={`w-4 h-4 text-slate-700 absolute transition-all duration-300 ${
                    isDark
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-180 scale-0"
                  }`}
                />
              </div>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
