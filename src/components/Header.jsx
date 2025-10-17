// src/components/Header.jsx
import React, { useState, useEffect, memo } from "react";
import { Sun, Moon, Languages } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";
import { THEME_STYLES, getThemeToggleStyles } from "../constants/styles";

const Header = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme, mounted } = useTheme();
  const { language, toggleLanguage, mounted: languageMounted } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get theme toggle styles
  const buttonBackground = isDark
    ? THEME_STYLES.buttonBackground.dark
    : THEME_STYLES.buttonBackground.light;

  const { sliderClass, sunClass, moonClass } = getThemeToggleStyles(isDark);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/80 dark:bg-secondary/80 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-24 py-4 flex justify-between items-center max-w-full overflow-hidden">
        <a
          href="#home"
          className="flex items-center space-x-2 text-lg sm:text-xl font-bold tracking-wider text-primary dark:text-primary whitespace-nowrap"
        >
          {/* SVG Logo from public folder */}
          <img src="/favicon.svg" alt="Studio YYH Logo" className="w-6 h-6" />
          <span>STUDIO YYH.</span>
        </a>
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-6 lg:space-x-8">
          <nav className="flex space-x-2 sm:space-x-3 md:space-x-6 lg:space-x-8 whitespace-nowrap">
            <a
              href="#about"
              className="text-sm sm:text-base text-primary dark:text-primary hover:text-accent dark:hover:text-accent transition-colors duration-200 hover-underline"
            >
              {language === "zh" ? "首页" : "Home"}
            </a>
            <a
              href="#works"
              className="text-sm sm:text-base text-primary dark:text-primary hover:text-accent dark:hover:text-accent transition-colors duration-200 hover-underline"
            >
              {language === "zh" ? "作品" : "Works"}
            </a>
            <a
              href="#footprints"
              className="text-sm sm:text-base text-primary dark:text-primary hover:text-accent dark:hover:text-accent transition-colors duration-200 hover-underline"
            >
              {language === "zh" ? "足迹" : "Footprints"}
            </a>
          </nav>
          {/* Language Toggle */}
          {languageMounted && (
            <button
              onClick={toggleLanguage}
              className="relative w-12 h-8 sm:w-14 sm:h-8 rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-gradient-to-r shadow-lg transform hover:scale-105 flex-shrink-0 bg-primary/10 dark:bg-primary/20"
              aria-label={
                language === "zh" ? "Switch to English" : "切换到中文"
              }
            >
              <div className="flex items-center justify-center w-full h-full">
                <Languages className="w-4 h-4 sm:w-5 sm:h-5 text-primary dark:text-primary" />
              </div>
            </button>
          )}
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="relative w-12 h-8 sm:w-14 sm:h-8 rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-gradient-to-r shadow-lg transform hover:scale-105 flex-shrink-0"
              style={{ background: buttonBackground }}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              <div className={sliderClass}>
                <Sun className={sunClass} />
                <Moon className={moonClass} />
              </div>
            </button>
          )}
        </div>
      </div>
    </header>
  );
});

export default Header;
