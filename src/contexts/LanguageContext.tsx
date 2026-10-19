import React, { useEffect, useState } from "react";
import { LanguageContext } from "../hooks/useLanguage";

const getInitialLanguage = (): "zh" | "en" => {
  if (typeof window === "undefined") return "zh";
  try {
    const saved = localStorage.getItem("language");
    if (saved === "zh" || saved === "en") return saved;
  } catch {
    // Keep the default language when browser storage is unavailable.
  }
  return document.documentElement.lang === "en" ? "en" : "zh";
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"zh" | "en">(getInitialLanguage);

  // Sync language with document and localStorage
  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title =
      language === "zh"
        ? "STUDIO YYH — 以恒的小天地"
        : "STUDIO YYH — Aaron's little corner";
    try {
      localStorage.setItem("language", language);
    } catch {
      // Language switching still works without persistent storage.
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "zh" ? "en" : "zh"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
