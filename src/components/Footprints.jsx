// src/components/Footprints.jsx
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { footprints } from "../data/footprints";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Footprints.css";

const PhotoCard = ({ title, description, imageUrl, location }) => (
  <div className="h-full px-2">
    <div className="photo-card block group rounded-xl overflow-hidden bg-secondary dark:bg-secondary shadow-md hover:shadow-2xl transition-all duration-300 transform h-full">
      <img
        src={imageUrl}
        alt={title}
        className="w-full aspect-[3/4] object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary dark:text-primary">
          {title}
        </h3>
        <p className="text-sm text-primary/60 dark:text-primary/60 mb-2">
          {location}
        </p>
        <p className="text-primary/70 dark:text-primary/70">{description}</p>
      </div>
    </div>
  </div>
);

const Footprints = () => {
  const sliderRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [mounted, setMounted] = useState(false);

  // Set mounted to true when component mounts on client
  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine settings based on window width
  const getSettings = () => {
    const isMobile = windowWidth <= 768;
    const isSmallMobile = windowWidth <= 640;

    return {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: isMobile ? 1 : 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false, // Hide default arrows
      swipe: true, // Enable swipe/touch functionality
      swipeToSlide: true, // Allow swiping directly to any slide
      touchThreshold: 10, // Lower threshold for more responsive touch
      touchMove: true, // Enable touch move
      centerMode: isMobile, // Only use center mode on mobile
      centerPadding: isSmallMobile ? "0px" : "20px",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true, // Center the single slide
            centerPadding: "20px", // Add some padding to show parts of next/prev slides
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true, // Center the single slide
            centerPadding: "0px", // No padding on very small screens
          },
        },
      ],
    };
  };

  const settings = getSettings();

  // Don't render until component is mounted on client
  if (!mounted) {
    return (
      <section
        id="footprints"
        className="py-16 sm:py-20 bg-secondary dark:bg-secondary/50"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-primary">
              我的足迹
            </h2>
          </div>
          <div className="py-2 sm:py-4 flex justify-center">
            <div className="animate-pulse">Loading...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="footprints"
      className="py-16 sm:py-20 bg-secondary dark:bg-secondary/50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center mb-10 sm:mb-12 relative">
          <button
            className="absolute z-10 p-1 sm:p-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors hidden sm:block"
            style={{ left: "clamp(10px, calc(50% - 120px), 20%)" }}
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <ChevronLeft size={16} className="sm:size-6" />
          </button>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-primary">
            我的足迹
          </h2>

          <button
            className="absolute z-10 p-1 sm:p-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors hidden sm:block"
            style={{ right: "clamp(10px, calc(50% - 120px), 20%)" }}
            onClick={() => sliderRef.current?.slickNext()}
          >
            <ChevronRight size={16} className="sm:size-6" />
          </button>
        </div>
        <div className="py-2 sm:py-4 footprints-carousel">
          <Slider ref={sliderRef} {...settings}>
            {footprints.map((footprint, index) => (
              <PhotoCard key={index} {...footprint} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Footprints;
