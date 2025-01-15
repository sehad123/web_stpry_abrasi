import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KlasifikasiAbrasi from "./components/KlasifikasiAbrasi";
import FaktorAbrasi from "./components/FaktorAbrasi";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <KlasifikasiAbrasi />
      <FaktorAbrasi />
    </div>
  );
}

export default App;
