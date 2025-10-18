import { createContext, useContext } from "react";

export interface LanguageContextType {
  language: "zh" | "en";
  toggleLanguage: () => void;
  mounted: boolean;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
