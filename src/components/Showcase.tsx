// src/components/Showcase.tsx
import React from "react";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";
import { ExternalLink, Github } from "lucide-react";

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
}) => {
  // Extract hex color from placeholder URL (e.g., 4F9DFF from https://placehold.co/600x400/4F9DFF/...)
  const match = imageUrl.match(/\/([0-9A-Fa-f]{6})\//);
  const themeColor = match ? `#${match[1]}` : "var(--accent)";

  return (
    <div
      onClick={() => window.open(demoUrl, "_blank", "noopener,noreferrer")}
      className="block group rounded-xl overflow-hidden bg-secondary dark:bg-secondary shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
      style={{ "--project-hover": themeColor } as React.CSSProperties}
    >
      <div className="p-6 pb-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-[var(--project-hover)] rounded-full transform origin-bottom group-hover:scale-y-125 transition-transform duration-300" />
            <h3 className="text-2xl font-extrabold text-primary dark:text-primary group-hover:text-[var(--project-hover)] transition-colors duration-300 tracking-tight">
              {title[language]}
            </h3>
          </div>
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(demoUrl, "_blank", "noopener,noreferrer");
              }}
              className="p-2 rounded-full bg-primary/5 hover:bg-[var(--project-hover)] hover:text-white transition-all duration-300 text-primary/60"
              title={language === "zh" ? "打开应用" : "Open Demo"}
            >
              <ExternalLink size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(githubUrl, "_blank", "noopener,noreferrer");
              }}
              className="p-2 rounded-full bg-primary/5 hover:bg-primary hover:text-white transition-all duration-300 text-primary/60"
              title="GitHub"
            >
              <Github size={20} />
            </button>
          </div>
        </div>
        <p className="text-primary/70 dark:text-primary/70 line-clamp-2 h-12 text-sm sm:text-base">
          {description[language]}
        </p>
      </div>
      <img
        src={imageUrl}
        alt={title[language]}
        className="w-full aspect-video object-cover"
      />
    </div>
  );
};

const Showcase = () => {
  const { language } = useLanguage();

  return (
    <section
      id="works"
      className="py-16 sm:py-20 bg-background relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
