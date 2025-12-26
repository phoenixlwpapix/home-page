// src/components/Hero.tsx
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaEnvelope, FaChevronDown } from "react-icons/fa";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";
import { Particles } from "./ui/particles";

const Hero = () => {
  const { language } = useLanguage();
  const { isDark } = useTheme();

  const hobbies =
    language === "zh"
      ? [
          {
            name: "跆拳道",
            icon: "🥋",
            color:
              "bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400",
          },
          {
            name: "网球",
            icon: "🎾",
            color:
              "bg-lime-100 text-lime-600 dark:bg-lime-500/20 dark:text-lime-400",
          },
          {
            name: "游泳",
            icon: "🏊",
            color:
              "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
          },
          {
            name: "旅行",
            icon: "✈️",
            color:
              "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400",
          },
        ]
      : [
          {
            name: "Taekwondo",
            icon: "🥋",
            color:
              "bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400",
          },
          {
            name: "Tennis",
            icon: "🎾",
            color:
              "bg-lime-100 text-lime-600 dark:bg-lime-500/20 dark:text-lime-400",
          },
          {
            name: "Swimming",
            icon: "🏊",
            color:
              "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
          },
          {
            name: "Travel",
            icon: "✈️",
            color:
              "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400",
          },
        ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-background dark:from-secondary/30 dark:to-background relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />

      <Particles
        className="absolute inset-0"
        quantity={120}
        staticity={30}
        ease={40}
        size={0.6}
        color={isDark ? "#33A9D8" : "#000000"}
        vx={0.1}
        vy={0.1}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold tracking-widest uppercase animate-fade-in">
            {language === "zh" ? "欢迎来到我的世界" : "Welcome to my world"}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-12 tracking-tighter leading-tight">
            {language === "zh" ? (
              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="animate-slide-in-left">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-500">
                    YYH · 以恒
                  </span>
                </div>
                <div className="animate-slide-in-right">
                  <span className="text-primary dark:text-primary">
                    个人主页
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="animate-slide-in-left">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-500">
                    YYH Aaron
                  </span>
                </div>
                <div className="animate-slide-in-right">
                  <span className="text-primary dark:text-primary">
                    Homepage
                  </span>
                </div>
              </div>
            )}
          </h1>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-10 animate-fade-in-up delay-200">
            <div className="group cursor-default">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider drop-shadow-sm group-hover:text-accent transition-colors duration-300 font-cute">
                <span className="text-accent group-hover:text-primary transition-colors duration-300">
                  Y
                </span>
                outhful
              </span>
              <div className="h-1 w-0 group-hover:w-full bg-accent transition-all duration-300 rounded-full" />
            </div>
            <div className="group cursor-default">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider drop-shadow-sm group-hover:text-blue-500 transition-colors duration-300 font-cute">
                <span className="text-accent group-hover:text-primary transition-colors duration-300">
                  Y
                </span>
                ummy
              </span>
              <div className="h-1 w-0 group-hover:w-full bg-blue-500 transition-all duration-300 rounded-full" />
            </div>
            <div className="group cursor-default">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider drop-shadow-sm group-hover:text-purple-500 transition-colors duration-300 font-cute">
                <span className="text-accent group-hover:text-primary transition-colors duration-300">
                  H
                </span>
                appy
              </span>
              <div className="h-1 w-0 group-hover:w-full bg-purple-500 transition-all duration-300 rounded-full" />
            </div>
          </div>

          {/* Hobbies as Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up delay-300">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-default ${hobby.color} border border-transparent hover:border-current/20`}
              >
                <span className="text-xl">{hobby.icon}</span>
                <span className="font-bold">{hobby.name}</span>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center space-x-8 mb-16 animate-fade-in-up delay-400">
            <a
              href="https://github.com/phoenixlwpapix"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-white dark:bg-white/10 rounded-2xl shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-2 border border-transparent dark:border-white/5"
            >
              <SiGithub className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full scale-0 group-hover:scale-100 transition-transform" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-white dark:bg-white/10 rounded-2xl shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-2 border border-transparent dark:border-white/5"
            >
              <SiLinkedin className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full scale-0 group-hover:scale-100 transition-transform" />
            </a>
            <a
              href="mailto:phoenixlwp@gmail.com"
              className="group relative p-4 bg-white dark:bg-white/10 rounded-2xl shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-2 border border-transparent dark:border-white/5"
            >
              <FaEnvelope className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full scale-0 group-hover:scale-100 transition-transform" />
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs font-bold tracking-widest text-primary/40 uppercase">
              {language === "zh" ? "向下探索" : "Scroll to explore"}
            </span>
            <FaChevronDown
              className="w-6 h-6 text-accent cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
              onClick={() =>
                document
                  .getElementById("works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
