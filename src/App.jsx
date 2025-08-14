import { useState } from "react";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Mint from "./components/Mint";
import Roadmap from "./components/RoadMap";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Mint />
      <Roadmap/>
    </>
  );
}

export default App;
