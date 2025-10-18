// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Footprints from "./components/Footprints";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="antialiased min-h-screen overflow-x-hidden">
          <Header />
          <main className="overflow-x-hidden">
            <Hero />
            <Showcase />
            <Footprints />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
