import Header from "./components/Header";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Footprints from "./components/Footprints";
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useScrollMotion } from "./hooks/useScrollMotion";

export default function App() {
  useScrollMotion();
  return (
    <LanguageProvider>
      <a className="skip-link" href="#main">跳转到内容 / Skip to content</a>
      <div className="reading-progress" aria-hidden="true" />
      <Header />
      <main id="main"><Hero /><Showcase /><Footprints /></main>
      <Footer />
    </LanguageProvider>
  );
}
