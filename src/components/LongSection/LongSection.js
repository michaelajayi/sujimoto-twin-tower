import React, { useEffect } from "react";
import Features from "../Features/Features";

import rightStatue from "../../assets/img/right-statue.png";
import sttBigText from "../../assets/img/stt-big-text.png";
import LeftStatue from "../LeftStatue/LeftStatue";
import WhySTT from "../WhySTT/WhySTT";
import IconSection from "../IconSection/IconSection";
import GetStarted from "../GetStarted/GetStarted";
import ReserveAUnit from "../ReserveAUnit/ReserveAUnit";

import fourBarLines from "../../assets/img/four-bar-lines.svg";

const LongSection = () => {
  return (
    <section className='long-section relative flex flex-col w-screen h-auto mx-auto justify-center items-center pt-[8rem]'>
      <div className='w-1/2 md:w-1/3 flex flex-col items-end'>
        <p className='text-white uppercase text-2xl  font-inter'>
          Africa's Tallest Twin Tower
        </p>
        <img src={sttBigText} alt='stt-big-text' className='' />
      </div>

      {/* Four Bar Lines */}
      <img
        src={fourBarLines}
        alt='four-bar-lines'
        className='absolute top-0 left-0 right-0 ml-auto mr-auto four-bar-lines'
      />

      {/* Statues */}
      <div className='hidden right-statue absolute top-0 right-0 lg:block'>
        <img src={rightStatue} alt='right-statue' />
      </div>

      <LeftStatue />
      <Features />
      <WhySTT />
      <IconSection />
      <ReserveAUnit />
      <GetStarted />
      {/* Map Outline Section */}
      {/* <div id='map-outline' className='bg-red-600'>
        <img src={mapOutline} alt='map-outline' />
      </div> */}
    </section>
  );
};

export default LongSection;
