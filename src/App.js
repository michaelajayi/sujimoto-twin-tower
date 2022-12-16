import React, { useRef, useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Hero from "./components/Hero/Hero";
import StickyButton from "./components/StickyButton/StickyButton";
import LongSection from "./components/LongSection/LongSection";
import Footer from "./components/Footer/Footer";
import Entrance from "./components/Entrance/Entrance";

import gsap from "gsap";

function App() {
  const home = gsap.timeline();
  const homeRef = useRef(null);

  // useEffect(() => {
  //   home.from(homeRef.current, {
  //     duration: 0.6,
  //     skewX: 10,
  //     x: -100,
  //     opacity: 0,
  //   });
  // }, []);

  return (
    // <Entrance tl={home}>
    <div ref={homeRef}>
      <Hero />
      {/* <StickyButton /> */}
      <LongSection />
      <Footer />
    </div>
    // </Entrance>
  );
}

export default App;
