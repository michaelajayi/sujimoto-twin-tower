import React from "react";

import sttBigText from "../../assets/img/stt-big-text.png";
import rightStatue from "../../assets/img/right-statue.png";
import leftStatue from "../../assets/img/left-statue.png";
import pulser from "../../assets/img/pulser.svg";
import lionHeadBg from "../../assets/img/lion-head.svg";

const LongSection = () => {
  const pulserItems = [
    {
      heading: "1st of its kind One of a Kind",
      leading:
        "STT is a one-stop-shop for all. A unique destination that captures a perfect blend of...",
      more: "hyper-luxury living and best hotel experience while bringing the world to the doorstep of its guests. At STT, the everyday need of the guest and residences will be accessed within a 2 minutes’ walk. Live. Work and Play",
    },
    {
      heading: "One-Stop-Shop 2 Minutes to Everything",
      leading:
        "STT is a one-stop-shop hyper-luxury living experience in Sub-Saharan Africa that brings the world to the doorstep of its guests, where you can live, work and play.",
      more: "",
    },
    {
      heading: "40+ Global Retail Brands",
      leading:
        "STT is set to become Nigeria’s Largest Luxury Retail & Entertainment Destination.",
      more: "A residential and hotel space pulsating with world leading brands including six celebrity restaurants within it.",
    },
  ];
  return (
    <section className='long-section relative flex flex-col w-screen mx-auto justify-center items-center py-32 h-auto'>
      <img
        src={lionHeadBg}
        alt='lion-head-bg'
        className='h-full w-screen absolute top-0 left-0 -z-10 object-cover brightness-50'
      />
      <img src={sttBigText} alt='stt-big-text' className='w-1/2 md:w-1/3' />
      <div className='hidden right-statue absolute top-0 right-0 lg:block'>
        <img src={rightStatue} alt='right-statue' />
      </div>
      <div className='hidden left-statue absolute left-0 lg:block h-20'>
        <img src={leftStatue} alt='right-statue' />
      </div>
      {/* Pulser Section */}
      <div className='pulser-section my-8 flex flex-col space-y-6 items-start justify-start lg:flex-row lg:px-20 lg:w-3/4'>
        {/* Pulser Items */}
        {pulserItems.map((pulse, index) => (
          <div className='flex justify-center items-start' key={index}>
            <img src={pulser} alt='pulser' />
            <div className='flex flex-col items-start w-3/4 space-y-2 md-w-3/5'>
              <h1 className='text-white font-koh-santepheap text-1xl font-bold w-2/3 space-y-0 md:text-2xl'>
                {pulse.heading}
              </h1>
              <p className='text-white font-koh-santepheap md:w-3/4'>
                {pulse.leading}
              </p>
              <button
                className='text-themeOrange font-koh-santepheap'
                id='read-more'
              >
                Read more
              </button>
            </div>
          </div>
        ))}
        <button className='px-8 py-2 bg-transparent uppercase border border-white font-inter text-1xl text-white self-center md:absolute md:right-80 md:bottom-10'>
          Book Now
        </button>
      </div>
    </section>
  );
};

export default LongSection;
