import React, { useEffect, useState } from "react";
import { LanguageContext } from "../hooks/useLanguage";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"zh" | "en">("zh"); // 默认中文
  const [mounted, setMounted] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("language");
      if (savedLanguage === "zh" || savedLanguage === "en")
        setLanguage(savedLanguage);
    } catch {
      // Keep the default language when browser storage is unavailable.
    }
    setMounted(true);
  }, []);

  // Save language to localStorage
  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
      document.title =
        language === "zh"
          ? "STUDIO YYH — 保持好奇，持续创造"
          : "STUDIO YYH — Stay curious. Keep creating.";
      try {
        localStorage.setItem("language", language);
      } catch {
        // Language switching still works without persistent storage.
      }
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
