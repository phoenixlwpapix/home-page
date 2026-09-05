// src/components/Footer.tsx
import React from "react";
import { useLanguage } from "../hooks/useLanguage";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-background border-t border-primary/5 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 text-center text-primary/40 dark:text-primary/40">
        <p className="text-sm sm:text-base">
          &copy; 2025-2026 STUDIO YYH.{" "}
          {language === "zh" ? "保留所有权利。" : "All Rights Reserved."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
