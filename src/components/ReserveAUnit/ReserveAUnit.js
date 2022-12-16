import React, { useRef } from "react";

import leftImage from "../../assets/img/reserve-a-unit-left-img.svg";
import rightImage from "../../assets/img/reserve-a-unit-right-img.svg";
import centerImage from "../../assets/img/reserve-a-unit-center-img.png";

const ReserveAUnit = () => {
  const highlights = [
    {
      title: "Steady Rental Income/Monthly Dividend Structure",
    },
    {
      title: "12%-15% return on hotel room investment per annum",
    },
    {
      title: "Double Digit Equity Returns",
    },
    {
      title: "High Resale Value & Generated Exit Strategy",
    },
  ];
  const leftImgRef = useRef();
  const rightImgRef = useRef();
  const centerImgRef = useRef();

  const onHotspotClick = () => {
    leftImgRef.current.style.transform = "translateX(60%)";
    rightImgRef.current.style.transform = "translateX(-60%)";
  };

  const reverseHotspotClick = () => {
    leftImgRef.current.style.transform = "translateX(9rem)";
    rightImgRef.current.style.transform = "translateX(-9rem)";
  };

  return (
    <div className=' container flex flex-col justify-center items-center space-y-32 pt-20 pb-10'>
      <div
        className='flex justify-center items-end reserve-hotspot cursor-pointer'
        onMouseEnter={onHotspotClick}
        onMouseLeave={reverseHotspotClick}
      >
        <img
          src={leftImage}
          alt='left-img'
          className='scale-[.9] translate-x-36 reserve-left-img relative'
          ref={leftImgRef}
        />
        <img
          src={centerImage}
          alt='center-img'
          className='scale-[.9] z-10 reserve-center-img h-full w-full relative'
          ref={centerImgRef}
        />

        <img
          src={rightImage}
          alt='right-img'
          className='scale-[.9] -translate-x-36 reserve-right-img'
          ref={rightImgRef}
        />
      </div>
      {/* <ul className='text-white text-inter text-1xl absolute top-0 left-0 z-20 bg-red-600'>
        {highlights.map((highlight, index) => (
          <li key={index}>{highlight.title}</li>
        ))}
      </ul> */}
      <button className='text-white text-sm font-inter uppercase border border-white px-12 py-2 reserve-a-unit-btn cursor-pointer'>
        Reserve A Unit
      </button>
      <p className='text-white font-inter text-2xl w-full md:w-1/3 text-center leading-10'>
        Your <span className='text-themeOrange'>Journey</span> to unlock huge
        returns on investment and a
        <span className='text-themeOrange'> Lifetime</span> of wealth{" "}
        <span className='text-themeOrange'> Creation Starts Here</span>.
      </p>
    </div>
  );
};

export default ReserveAUnit;
