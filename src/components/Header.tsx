import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";

interface HeaderProps {
  isNotFound?: boolean;
  onNavigateHome?: (hash?: string) => void;
}

export default function Header({ isNotFound = false, onNavigateHome }: HeaderProps) {
  const { language, toggleLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const headerRef = useRef<HTMLElement>(null);
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
    const onPointerDown = (event: PointerEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
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

  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    setMenuOpen(false);
    if (isNotFound && onNavigateHome) {
      event.preventDefault();
      onNavigateHome(hash);
    }
  };

  return (
    <header ref={headerRef} className={headerClass}>
      <div className="page-shell header-inner">
        <a
          className="wordmark"
          href={isNotFound ? "/#about" : "#about"}
          aria-label="STUDIO YYH home"
          onClick={(e) => handleSectionClick(e, "#about")}
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
            href={isNotFound ? "/#about" : "#about"}
            aria-current={!isNotFound && active === "about" ? "location" : undefined}
            onClick={(e) => handleSectionClick(e, "#about")}
          >
            {zh ? "首页" : "Home"}
          </a>
          <a
            href={isNotFound ? "/#works" : "#works"}
            aria-current={!isNotFound && active === "works" ? "location" : undefined}
            onClick={(e) => handleSectionClick(e, "#works")}
          >
            {zh ? "小作品" : "My stuff"}
          </a>
          <a
            href={isNotFound ? "/#footprints" : "#footprints"}
            aria-current={!isNotFound && active === "footprints" ? "location" : undefined}
            onClick={(e) => handleSectionClick(e, "#footprints")}
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
