// src/components/Footer.jsx
import React from "react";
import { useLanguage } from "../hooks/useLanguage";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-secondary dark:bg-secondary py-4 sm:py-6">
      <div className="container mx-auto px-4 sm:px-6 text-center text-primary/60 dark:text-primary/60">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} STUDIO YYH.{" "}
          {language === "zh" ? "保留所有权利。" : "All Rights Reserved."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
