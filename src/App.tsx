import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Footprints from "./components/Footprints";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useLanguage } from "./hooks/useLanguage";
import { useScrollMotion } from "./hooks/useScrollMotion";

function isNotFoundLocation(): boolean {
  if (typeof window === "undefined") return false;
  const path = window.location.pathname;
  const params = new URLSearchParams(window.location.search);
  if (params.get("page") === "404") return true;
  if (window.location.hash === "#404") return true;
  return path !== "/" && path !== "/index.html";
}

function SkipLink() {
  const { language } = useLanguage();
  return (
    <a className="skip-link" href="#main">
      {language === "zh" ? "跳转到主要内容" : "Skip to main content"}
    </a>
  );
}

function AppShell() {
  const [notFound, setNotFound] = useState<boolean>(isNotFoundLocation);

  useScrollMotion();

  useEffect(() => {
    const syncRoute = () => {
      setNotFound(isNotFoundLocation());
    };
    window.addEventListener("popstate", syncRoute);
    window.addEventListener("hashchange", syncRoute);
    return () => {
      window.removeEventListener("popstate", syncRoute);
      window.removeEventListener("hashchange", syncRoute);
    };
  }, []);

  const handleReturnHome = (hash?: string) => {
    const targetUrl = hash ? `/${hash}` : "/";
    try {
      window.history.pushState(null, "", targetUrl);
    } catch {
      // Ignore history API restrictions
    }
    setNotFound(false);
    requestAnimationFrame(() => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  return (
    <>
      <SkipLink />
      <div className="reading-progress" aria-hidden="true" />
      <Header isNotFound={notFound} onNavigateHome={handleReturnHome} />
      {notFound ? (
        <main id="main">
          <NotFound onReturnHome={handleReturnHome} />
        </main>
      ) : (
        <>
          <main id="main">
            <Hero />
            <Showcase />
            <Footprints />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}
