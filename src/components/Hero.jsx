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
      <div className="text-center px-4 sm:px-6 py-16 sm:py-20 animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 sm:mb-8 tracking-wider text-primary dark:text-primary leading-tight">
          <span className="text-accent dark:text-accent">Aaron</span>的个人主页
          <span className="block text-primary/80 dark:text-primary/80 text-2xl sm:text-2xl md:text-4xl font-black mt-4 sm:mt-6 tracking-wider drop-shadow-lg leading-tight">
            Youthful, Yummy, Happy
          </span>
        </h1>
        <p className="max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-primary/70 dark:text-primary/70 mb-10 sm:mb-12 leading-loose font-medium">
          跆拳道，网球，游泳，旅行。
        </p>
        <div className="flex justify-center space-x-6 sm:space-x-8">
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
        <div className="mt-12 sm:mt-16">
          <FaChevronDown
            className="w-6 h-6 sm:w-8 sm:h-8 text-primary/60 dark:text-primary/60 animate-bounce cursor-pointer mx-auto"
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
