// src/components/Footprints.tsx
import React, { useState } from "react";
import { footprints } from "../data/footprints";
import type { Footprint } from "../data/footprints";
import { useLanguage } from "../hooks/useLanguage";

interface PhotoCardProps extends Footprint {
  language: "zh" | "en";
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  title,
  description,
  imageUrl,
  location,
  language,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="photo-card block group rounded-xl overflow-hidden bg-secondary dark:bg-secondary shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <img
          src={imageUrl}
          alt={title[language]}
          className="w-full aspect-[3/4] object-cover cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-primary dark:text-primary">
            {title[language]}
          </h3>
          <p className="text-sm text-primary/60 dark:text-primary/60 mb-2">
            {location[language]}
          </p>
          <p className="text-primary/70 dark:text-primary/70">
            {description[language]}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative w-full h-full p-4 flex items-center justify-center">
            <img
              src={imageUrl}
              alt={title[language]}
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const Footprints = () => {
  const { language } = useLanguage();

  return (
    <section
      id="footprints"
      className="py-16 sm:py-20 bg-secondary dark:bg-secondary/50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-primary">
            {language === "zh" ? "我的足迹" : "My Footprints"}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {footprints.map((footprint, index) => (
            <PhotoCard key={index} {...footprint} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footprints;
