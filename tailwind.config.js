// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
        DEFAULT: "#0a0a0a",   // 主文本/深色背景
        foreground: "#f5f5f5" // 浅色前景
      },
      secondary: {
        DEFAULT: "#e5f6fb",   // 浅蓝灰（比 accent 浅很多，用作背景衬色）
        foreground: "#0a0a0a" // 深色文字
      },
      accent: {
        DEFAULT: "#33A9D8",   // 品牌蓝
        foreground: "#ffffff" // 白字
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
};
