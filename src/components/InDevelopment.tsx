// src/components/InDevelopment.tsx
import React from "react";
import { devProjects } from "../data/devProjects";
import type { DevProject } from "../data/devProjects";
import { useLanguage } from "../hooks/useLanguage";
import { Hammer } from "lucide-react";

interface DevCardProps extends DevProject {
  language: "zh" | "en";
}

const DevCard: React.FC<DevCardProps> = ({
  title,
  description,
  color,
  language,
}) => {
  return (
    <div
      className="group rounded-xl overflow-hidden bg-secondary dark:bg-secondary shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
      style={{ "--project-hover": color } as React.CSSProperties}
    >
      {/* Color bar top */}
      <div
        className="h-1.5 w-full transition-all duration-300 group-hover:h-2"
        style={{ backgroundColor: color }}
      />

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div
              className="w-1.5 h-5 rounded-full flex-shrink-0"
              style={{ backgroundColor: color }}
            />
            <h3 className="text-lg font-bold text-primary dark:text-primary group-hover:text-[var(--project-hover)] transition-colors duration-300 leading-tight">
              {title[language]}
            </h3>
          </div>
          <span className="flex-shrink-0 flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full border border-current text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20">
            <Hammer size={10} />
            {language === "zh" ? "开发中" : "In Dev"}
          </span>
        </div>

        <p className="text-primary/65 dark:text-primary/65 text-sm leading-relaxed flex-1">
          {description[language]}
        </p>
      </div>
    </div>
  );
};

const InDevelopment = () => {
  const { language } = useLanguage();

  return (
    <section
      id="in-development"
      className="py-16 sm:py-20 bg-secondary/30 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -ml-36 -mb-36" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-primary">
            {language === "zh" ? "开发中的应用" : "Apps in Development"}
          </h2>
          <p className="mt-3 text-primary/55 text-sm sm:text-base">
            {language === "zh"
              ? "正在构建中的项目，敬请期待"
              : "Projects currently being built — stay tuned"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {devProjects.map((project, index) => (
            <DevCard key={index} {...project} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InDevelopment;
