import { useState } from "react";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Mint from "./components/Mint";
import Roadmap from "./components/RoadMap";
import FAQ from "./components/Faq";
import Team from "./components/Team";
function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Mint />
      <Roadmap/>
      <FAQ/>
      <Team/>
    </>
  );
}

export default App;
