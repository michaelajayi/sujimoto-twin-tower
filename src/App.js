import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Hero from "./components/Hero/Hero";
import StickyButton from "./components/StickyButton/StickyButton";
import LongSection from "./components/LongSection/LongSection";

function App() {
  return (
    <>
      <Hero />
      <StickyButton />
      <LongSection />
    </>
  );
}

export default App;
