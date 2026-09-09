import React, { useEffect, useState } from "react";
import { ThemeContext } from "../hooks/useTheme";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    try {
      setIsDark(localStorage.getItem("theme") === "dark");
    } catch {
      // Keep the light default when browser storage is unavailable.
    }
    setMounted(true);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (mounted) {
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", isDark ? "#191b17" : "#f5f3ee");
      try {
        localStorage.setItem("theme", isDark ? "dark" : "light");
      } catch {
        // Theme switching still works without persistent storage.
      }
    }
  }, [isDark, mounted]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
};
