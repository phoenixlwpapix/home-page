## Theme Toggler Implementation Guide

This guide provides a complete workflow for implementing dark/light mode toggling in React/Vite projects using Tailwind CSS, React Context, and CSS custom properties.

### 1. Theme Context Setup (`contexts/ThemeContext.jsx`)

Create a context provider that manages theme state with localStorage persistence and system preference detection:

```jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    } else {
      setIsDark(prefersDark);
    }
    setMounted(true);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (mounted) {
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  }, [isDark, mounted]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### 2. Wrap Your App with ThemeProvider

In your main App component or root (`src/main.jsx` or `src/App.jsx`):

```jsx
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return <ThemeProvider>{/* Your app content */}</ThemeProvider>;
}
```

### 3. CSS Custom Properties and Tailwind Integration (`src/index.css`)

Add this to your main CSS file (after `@import "tailwindcss";`):

```css
@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }

  html {
    scroll-behavior: smooth;
  }
}
```

### 4. Tailwind Configuration (`tailwind.config.js`)

Ensure Tailwind is configured for class-based dark mode:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // Your theme extensions
    },
  },
  plugins: [],
};
```

### 5. Theme Toggle Component (`components/ThemeToggle.jsx`)

Create an animated toggle button (this example is from your Header component):

```jsx
import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme, mounted } = useTheme();

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-gradient-to-r shadow-lg transform hover:scale-105 ml-4"
      style={{
        background: isDark
          ? "linear-gradient(to right, rgb(71, 85, 105), rgb(15, 23, 42))"
          : "linear-gradient(to right, rgb(251, 191, 36), rgb(251, 146, 60))",
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div
        className={`relative w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300 ease-in-out flex items-center justify-center ${
          isDark ? "translate-x-6" : "translate-x-1"
        }`}
      >
        <Sun
          className={`w-4 h-4 text-amber-500 absolute transition-all duration-300 ${
            isDark
              ? "opacity-0 rotate-180 scale-0"
              : "opacity-100 rotate-0 scale-100"
          }`}
        />
        <Moon
          className={`w-4 h-4 text-slate-700 absolute transition-all duration-300 ${
            isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-180 scale-0"
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
```

### 6. Usage in Components

Use standard Tailwind classes that automatically adapt to the theme:

```jsx
import { useTheme } from "../contexts/ThemeContext";

function MyComponent() {
  const { isDark } = useTheme();

  return (
    <div className="bg-background text-foreground">
      <h1 className="text-primary">Title</h1>
      <p className="text-secondary">Subtitle</p>
      <button className="bg-accent text-accent-foreground">Button</button>
    </div>
  );
}
```

### Key Features

- **Persistence**: Saves preference to localStorage
- **System Preference**: Respects user's OS setting on first visit
- **Hydration Safe**: Prevents flash of wrong theme
- **Accessible**: Proper ARIA labels and focus states
- **Animated**: Smooth transitions between themes
- **CSS Variables**: Centralized theme management with OKLCH colors for better color accuracy

### Common Pitfalls to Avoid

1. **Wrong class names**: Use `dark:text-primary`, not `dark:text-primary-dark`
2. **Missing @theme inline**: Required to map CSS variables to Tailwind
3. **Incomplete CSS variables**: Define all variables in both `:root` and `.dark`
4. **Hydration mismatch**: Always check `mounted` state before rendering theme-dependent content

This implementation provides a robust, accessible, and performant theme toggling system for React applications.
