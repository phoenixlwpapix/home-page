import React, { useEffect, useState } from "react";
import { ThemeContext } from "../hooks/useTheme";

const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return false;
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
  } catch {
    // Fall back to system preference or document class when storage is unavailable.
  }
  if (document.documentElement.classList.contains("dark")) return true;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", isDark ? "#101b25" : "#f6f7f2");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // Theme switching still works without persistent storage.
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
