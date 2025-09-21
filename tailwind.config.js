// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  // 这是最关键的一步：告诉 Tailwind 去扫描哪些文件，以便找到用到的 class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 匹配 src 目录下所有 jsx/tsx 等文件
  ],
  theme: {
    extend: {
      // 扩展默认主题
      fontFamily: {
        // 定义一个名为 'sans' 的字体族，并让 Inter 作为首选字体
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        // 定义我们自己的调色板
        primary: "#0a0a0a", // 主色 (接近纯黑)
        secondary: "#f5f5f5", // 次要/背景色 (灰白)
        accent: "#0070f3", // 强调色 (电蓝色)
      },
      keyframes: {
        // 定义入场动画的关键帧
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        // 将关键帧应用为可用的动画类
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
      transitionTimingFunction: {
        "custom-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
};
