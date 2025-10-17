import React, { useEffect, useState } from "react";
import { LanguageContext } from "../hooks/useLanguage";

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("zh"); // 默认中文
  const [mounted, setMounted] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
    setMounted(true);
  }, []);

  // Save language to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language);
    }
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "zh" ? "en" : "zh"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
};
