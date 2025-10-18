// src/constants/styles.ts
// 主题样式常量
export const THEME_STYLES = {
  buttonBackground: {
    light: "linear-gradient(to right, oklch(0.82 0.09 235), #33A9D8)",
    dark: "linear-gradient(to right, rgb(71, 85, 105), rgb(15, 23, 42))",
  },
};

// 主题切换按钮样式类名生成器
export const getThemeToggleStyles = (isDark: boolean) => ({
  sliderClass: `relative w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300 ease-out flex items-center justify-center ${
    isDark ? "translate-x-6" : "translate-x-1"
  }`,
  sunClass: `w-4 h-4 text-amber-500 absolute transition-all duration-300 ease-out ${
    isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
  }`,
  moonClass: `w-4 h-4 text-slate-700 absolute transition-all duration-300 ease-out ${
    isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
  }`,
});

// 通用动画类名
export const ANIMATION_CLASSES = {
  fadeInUp: "animate-fade-in-up",
  hoverUnderline: "hover-underline",
};

// 通用布局类名
export const LAYOUT_CLASSES = {
  container: "container mx-auto px-6",
  section: "py-20",
  sectionAlt: "py-20 bg-secondary dark:bg-secondary/50",
  card: "block group rounded-xl overflow-hidden bg-secondary dark:bg-secondary shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2",
  cardContent: "p-6",
  cardTitle: "text-xl font-bold mb-3 text-primary dark:text-primary",
  cardDescription: "text-primary/70 dark:text-primary/70 mb-5",
  cardMeta: "text-sm text-primary/60 dark:text-primary/60 mb-2",
};
