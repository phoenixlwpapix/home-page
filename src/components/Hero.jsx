// src/components/Hero.jsx
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaEnvelope, FaChevronDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-secondary dark:bg-secondary/50"
    >
      <div className="text-center px-6 py-20 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-wider text-primary dark:text-primary">
          STUDIO YYH.
          <span className="block text-primary/80 dark:text-primary/80 text-3xl md:text-5xl font-black mt-4 tracking-wider drop-shadow-lg">
            Youthful, Yummy, Happy
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary/70 dark:text-primary/70 mb-10 leading-relaxed font-medium">
          专注于构建高性能、用户友好的 Web 应用。
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/phoenixlwpapix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/80 dark:text-primary/80 hover:text-accent dark:hover:text-accent transition-transform duration-200 hover:scale-110"
          >
            <SiGithub className="w-8 h-8 text-accent dark:text-accent" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/80 dark:text-primary/80 hover:text-accent dark:hover:text-accent transition-transform duration-200 hover:scale-110"
          >
            <SiLinkedin className="w-8 h-8 text-accent dark:text-accent" />
          </a>
          <a
            href="mailto:phoenixlwp@gmail.com"
            className="text-primary/80 dark:text-primary/80 hover:text-accent dark:hover:text-accent transition-transform duration-200 hover:scale-110"
          >
            <FaEnvelope className="w-8 h-8 text-accent dark:text-accent" />
          </a>
        </div>
        <div className="mt-12">
          <FaChevronDown
            className="w-8 h-8 text-primary/60 dark:text-primary/60 animate-bounce cursor-pointer mx-auto"
            onClick={() =>
              document
                .getElementById("works")
                .scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
