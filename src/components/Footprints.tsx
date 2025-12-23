// src/components/Footprints.tsx
import React, { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
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
  return (
    <div className="photo-card block group rounded-xl overflow-hidden bg-secondary dark:bg-secondary shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <img
        src={imageUrl}
        alt={title[language]}
        className="w-full aspect-[3/4] object-cover"
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
  );
};

const Footprints = () => {
  const { language } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="footprints"
      className="py-16 sm:py-20 bg-background relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center justify-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-primary">
            {language === "zh" ? "我的足迹" : "My Footprints"}
          </h2>
        </div>
        <div className="embla relative">
          <div className="embla__viewport py-4" ref={emblaRef}>
            <div className="embla__container">
              {footprints.map((footprint, index) => (
                <div
                  key={index}
                  className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_40%] lg:flex-[0_0_30%]"
                >
                  <PhotoCard {...footprint} language={language} />
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-secondary/80 backdrop-blur-sm text-primary dark:text-primary p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-secondary hover:scale-110 transition-all duration-300 z-10"
            onClick={scrollPrev}
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-secondary/80 backdrop-blur-sm text-primary dark:text-primary p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-secondary hover:scale-110 transition-all duration-300 z-10"
            onClick={scrollNext}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footprints;
