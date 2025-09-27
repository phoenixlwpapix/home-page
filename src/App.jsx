// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Footprints from "./components/Footprints";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="antialiased">
      <Header />
      <main>
        <Hero />
        <Showcase />
        <Footprints />
      </main>
      <Footer />
    </div>
  );
}
