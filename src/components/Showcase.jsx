// src/components/Showcase.jsx
import React from "react";
// 确保你有这张图片或替换成你的图片
import projectThumbnail from "../assets/place-holder.png";
import cicadaEnglishThumbnail from "../assets/cicada-english.png";

const projects = [
  {
    title: "知了英语",
    description: "AI驱动的英语学习平台",
    imageUrl: cicadaEnglishThumbnail,
    demoUrl: "https://cicada-english.studioyyh.tech/",
    githubUrl: "https://github.com/phoenixlwpapix/cicada-english",
  },
  {
    title: "项目 B",
    description: "一个交互式AI产品广告设计平台。",
    imageUrl: projectThumbnail,
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "项目 C",
    description: "一个轻量级的报价单生成系统。",
    imageUrl: projectThumbnail,
    demoUrl: "#",
    githubUrl: "#",
  },
];

const ProjectCard = ({ title, description, imageUrl, demoUrl, githubUrl }) => (
  <a
    href={demoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="block group rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
  >
    <img
      src={imageUrl}
      alt={title}
      className="w-full aspect-video object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3 text-primary dark:text-primary">
        {title}
      </h3>
      <p className="text-primary/70 dark:text-primary/70 mb-5">{description}</p>
      <div className="flex space-x-3">
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-cyan-500 text-white font-semibold rounded-lg shadow hover:bg-accent/90 dark:hover:bg-accent/90 transition-transform transform hover:-translate-y-0.5"
        >
          Demo
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-primary/10 dark:bg-primary/10 text-primary dark:text-primary font-semibold rounded-lg shadow hover:bg-primary/20 dark:hover:bg-primary/20 transition-transform transform hover:-translate-y-0.5"
        >
          GitHub
        </a>
      </div>
    </div>
  </a>
);

const Showcase = () => {
  return (
    <section id="works" className="py-20 bg-primary/5 dark:bg-primary/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary dark:text-primary">
          精选应用
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
