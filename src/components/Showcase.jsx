// src/components/Showcase.jsx
import React from "react";

const projects = [
  {
    title: "Cicada English",
    description: "AI驱动的英语学习平台",
    imageUrl:
      "https://placehold.co/600x400/33A9D8/FFFFFF?text=Cicada%20English",
    demoUrl: "https://cicada-english.studioyyh.tech/",
    githubUrl: "https://github.com/phoenixlwpapix/cicada-english",
  },
  {
    title: "Chez Liliane",
    description: "一个烘焙爱好者的个人主页。",
    imageUrl: "https://placehold.co/600x400/ffc0cb/FFFFFF?text=Chez%20Liliane",
    demoUrl: "https://bakery.studioyyh.tech/",
    githubUrl: "https://github.com/phoenixlwpapix/phoenixlwpapix.github.io",
  },
  {
    title: "Math Toolkit",
    description: "帮你更好理解数学、物理、化学知识。",
    imageUrl: "https://placehold.co/600x400/71A9F7/FFFFFF?text=Math%20Toolkit",
    demoUrl: "https://math-toolkit.studioyyh.tech/",
    githubUrl: "https://github.com/phoenixlwpapix/math-toolkit",
  },
  {
    title: "Coming Soon...",
    description: "一个轻量级的报价单生成系统。",
    imageUrl:
      "https://placehold.co/600x400/10B981/FFFFFF?text=Coming%20Soon...",
    demoUrl: "#",
    githubUrl: "#",
  },
];

const ProjectCard = ({ title, description, imageUrl, demoUrl, githubUrl }) => (
  <a
    href={demoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="block group rounded-xl overflow-hidden bg-secondary dark:bg-secondary shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
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
        <div className="px-4 py-2 bg-accent dark:bg-accent text-white font-semibold rounded-lg shadow hover:bg-accent/90 dark:hover:bg-accent/90 transition-transform transform hover:-translate-y-0.5">
          Demo
        </div>
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
    <section id="works" className="py-20 bg-secondary dark:bg-secondary/50">
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
