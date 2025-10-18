// src/components/Showcase.tsx
import React from "react";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";

interface ProjectCardProps extends Project {
  language: "zh" | "en";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  demoUrl,
  githubUrl,
  language,
}) => (
  <div
    onClick={() => window.open(demoUrl, "_blank", "noopener,noreferrer")}
    className="block group rounded-xl overflow-hidden bg-secondary dark:bg-secondary shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
  >
    <img
      src={imageUrl}
      alt={title[language]}
      className="w-full aspect-video object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3 text-primary dark:text-primary">
        {title[language]}
      </h3>
      <p className="text-primary/70 dark:text-primary/70 mb-5">
        {description[language]}
      </p>
      <div className="flex space-x-3">
        <div className="px-4 py-2 bg-accent dark:bg-accent text-white font-semibold rounded-lg shadow hover:bg-accent/90 dark:hover:bg-accent/90 transition-transform transform hover:-translate-y-0.5">
          {language === "zh" ? "打开应用" : "Demo"}
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            window.open(githubUrl, "_blank", "noopener,noreferrer");
          }}
          className="px-4 py-2 bg-primary/10 dark:bg-primary/10 text-primary dark:text-primary font-semibold rounded-lg shadow hover:bg-primary/20 dark:hover:bg-primary/20 transition-transform transform hover:-translate-y-0.5 cursor-pointer"
        >
          GitHub
        </div>
      </div>
    </div>
  </div>
);

const Showcase = () => {
  const { language } = useLanguage();

  return (
    <section
      id="works"
      className="py-16 sm:py-20 bg-secondary dark:bg-secondary/50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 text-primary dark:text-primary">
          {language === "zh" ? "我的应用" : "My Apps"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
