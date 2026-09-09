import { useEffect, useState } from "react";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 24);
      for (const id of ["footprints", "works", "about"]) {
        const section = document.getElementById(id);
        if (
          section &&
          section.getBoundingClientRect().top <= window.innerHeight * 0.4
        ) {
          setActive(id);
          break;
        }
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const zh = language === "zh";
  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="page-shell header-inner">
        <a className="wordmark" href="#about" aria-label="Studio YYH home">
          STUDIO YYH<span>.</span>
        </a>
        <nav aria-label={zh ? "主导航" : "Main navigation"}>
          <a
            href="#about"
            aria-current={active === "about" ? "location" : undefined}
          >
            {zh ? "首页" : "Home"}
          </a>
          <a
            href="#works"
            aria-current={active === "works" ? "location" : undefined}
          >
            {zh ? "作品" : "Work"}
          </a>
          <a
            href="#footprints"
            aria-current={active === "footprints" ? "location" : undefined}
          >
            {zh ? "足迹" : "Life"}
          </a>
          <a
            href="https://blog.studioyyh.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {zh ? "博客" : "Journal"}
            <ArrowUpRight size={12} />
          </a>
        </nav>
        <div className="header-tools">
          <button
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label={zh ? "Switch to English" : "切换到中文"}
          >
            {zh ? "EN" : "中"}
          </button>
          <span className="tool-divider" />
          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label={
              zh
                ? isDark
                  ? "切换浅色主题"
                  : "切换深色主题"
                : isDark
                  ? "Switch to light mode"
                  : "Switch to dark mode"
            }
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </div>
    </header>
  );
}
