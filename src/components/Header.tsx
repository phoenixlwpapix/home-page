import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const update = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);
      if (currentY > 120 && currentY - lastY > 8) {
        setHidden(true);
        setMenuOpen(false);
      } else if (lastY - currentY > 8 || currentY <= 48) {
        setHidden(false);
      }
      lastY = currentY;
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

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const zh = language === "zh";
  const headerClass = [
    "site-header",
    scrolled ? "is-scrolled" : "",
    hidden && !menuOpen ? "is-hidden" : "",
    menuOpen ? "menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      <div className="page-shell header-inner">
        <a
          className="wordmark"
          href="#about"
          aria-label="STUDIO YYH home"
          onClick={() => setMenuOpen(false)}
        >
          <img src="/favicon.svg" alt="" width="42" height="42" />
          STUDIO YYH
        </a>
        <nav
          id="site-nav"
          aria-label={zh ? "主导航" : "Main navigation"}
          onClick={() => setMenuOpen(false)}
        >
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
            {zh ? "小作品" : "My stuff"}
          </a>
          <a
            href="#footprints"
            aria-current={active === "footprints" ? "location" : undefined}
          >
            {zh ? "我的足迹" : "Adventures"}
          </a>
          <a
            href="https://blog.studioyyh.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {zh ? "随手记" : "Notes"}
            <ArrowUpRight size={13} />
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
          <button
            className="icon-button menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={
              zh
                ? menuOpen
                  ? "关闭导航菜单"
                  : "打开导航菜单"
                : menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
            }
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
    </header>
  );
}
