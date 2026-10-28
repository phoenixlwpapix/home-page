import Header from "./components/Header";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Footprints from "./components/Footprints";
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useLanguage } from "./hooks/useLanguage";
import { useScrollMotion } from "./hooks/useScrollMotion";

function SkipLink() {
  const { language } = useLanguage();
  return (
    <a className="skip-link" href="#main">
      {language === "zh" ? "跳转到主要内容" : "Skip to main content"}
    </a>
  );
}

export default function App() {
  useScrollMotion();
  return (
    <LanguageProvider>
      <SkipLink />
      <div className="reading-progress" aria-hidden="true" />
      <Header />
      <main id="main"><Hero /><Showcase /><Footprints /></main>
      <Footer />
    </LanguageProvider>
  );
}
