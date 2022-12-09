import React from "react";
import Features from "../Features/Features";

import sttBigText from "../../assets/img/stt-big-text.png";
import rightStatue from "../../assets/img/right-statue.png";
import leftStatue from "../../assets/img/left-statue.png";
import lionHeadBg from "../../assets/img/lion-head.svg";
import mapOutline from "../../assets/img/map-outline.png";
import WhySTT from "../WhySTT/WhySTT";
import Footer from "../Footer/Footer";

const LongSection = () => {
  return (
    <section className='long-section relative flex flex-col w-screen h-auto mx-auto justify-center items-center py-32 space-y-10'>
      <img src={sttBigText} alt='stt-big-text' className='w-1/2 md:w-1/3' />

      {/* Statues */}
      {/* <div className='hidden right-statue absolute top-0 right-0 lg:block'>
        <img src={rightStatue} alt='right-statue' />
      </div>
      <div className='hidden left-statue left-0 lg:block'>
        <img src={leftStatue} alt='right-statue' />
      </div> */}

      <Features />
      <WhySTT />
      <Footer />
      {/* Map Outline Section */}
      {/* <div id='map-outline' className='bg-red-600'>
        <img src={mapOutline} alt='map-outline' />
      </div> */}
    </section>
  );
};

export default LongSection;
