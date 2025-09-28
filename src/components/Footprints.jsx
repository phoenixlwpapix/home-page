// src/components/Footprints.jsx
import React from "react";
import { footprints } from "../data/footprints";

const PhotoCard = ({ title, description, imageUrl, location }) => (
  <div className="block group rounded-xl overflow-hidden bg-secondary dark:bg-secondary shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
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
);

const Footprints = () => {
  return (
    <section
      id="footprints"
      className="py-20 bg-secondary dark:bg-secondary/50"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary dark:text-primary">
          我的足迹
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footprints.map((footprint, index) => (
            <PhotoCard key={index} {...footprint} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footprints;
