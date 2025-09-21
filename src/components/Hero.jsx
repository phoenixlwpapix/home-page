// src/components/Hero.jsx
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-secondary"
    >
      <div className="text-center px-6 py-20 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
          STUDIO YYH
          <span className="block text-accent text-2xl md:text-3xl font-bold mt-2">
            Web Developer & UI Enthusiast
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary/70 mb-8 leading-relaxed">
          专注于构建高性能、用户友好的 Web
          应用。热衷于探索前沿技术，并将其融入创造性的解决方案中。
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/phoenixlwpapix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/80 hover:text-accent transition-transform duration-200 hover:scale-110"
          >
            <SiGithub className="w-8 h-8 text-cyan-500" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/80 hover:text-accent transition-transform duration-200 hover:scale-110"
          >
            <SiLinkedin className="w-8 h-8 text-cyan-500" />
          </a>
          <a
            href="mailto:phoenixlwp@gmail.com"
            className="text-primary/80 hover:text-accent transition-transform duration-200 hover:scale-110"
          >
            <FaEnvelope className="w-8 h-8 text-cyan-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
