// src/components/Showcase.jsx
import React from "react";
// 确保你有这张图片或替换成你的图片
import projectThumbnail from "../assets/project-thumbnail.png";

const projects = [
  {
    title: "知了英语",
    description: "AI驱动的英语学习平台",
    imageUrl: projectThumbnail,
    demoUrl: "https://cicada-english.studioyyh.tech/",
    githubUrl: "https://github.com/phoenixlwpapix/cicada-english",
  },
  {
    title: "项目名称 B",
    description: "一个交互式数据可视化平台。",
    imageUrl: projectThumbnail,
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "项目名称 C",
    description: "一个轻量级的移动端优先的博客系统。",
    imageUrl: projectThumbnail,
    demoUrl: "#",
    githubUrl: "#",
  },
];

const ProjectCard = ({ title, description, imageUrl, demoUrl, githubUrl }) => (
  <div className="group rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-60 object-cover transition-transform duration-200 group-hover:scale-105"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-primary/70 mb-4">{description}</p>
      <div className="flex space-x-4">
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-semibold hover:underline"
        >
          访问 Demo
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary/60 font-semibold hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
);

const Showcase = () => {
  return (
    <section id="works" className="py-20 bg-primary/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          精选作品
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
