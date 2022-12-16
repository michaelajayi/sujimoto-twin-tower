import React from "react";
import Nav from "../Nav/Nav";
import HeroContent from "./HeroContent";
import HeroBottomSlider from "./HeroBottomSlider";

import bgImage from "../../assets/img/hero-bg.svg";

const Hero = () => {
  return (
    <section
      className='flex flex-col w-screen h-screen bg-center object-cover before:absolute before:bg-[#B5B5B5] justify-between items-center py-3 filter relative'
      id='hero-bg'
    >
      <img
        src={bgImage}
        alt=''
        className='h-screen w-screen absolute top-0 left-0 -z-10 object-cover brightness-70 md:brightness-60 lg:brightness-[80%]'
      />
      <Nav />
      <HeroContent />
      <HeroBottomSlider />
    </section>
  );
};

export default Hero;
