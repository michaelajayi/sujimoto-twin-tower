import React, { useRef } from "react";

import leftImage from "../../assets/img/reserve-a-unit-left-img.svg";
import rightImage from "../../assets/img/reserve-a-unit-right-img.svg";
import centerImg from "../../assets/img/reserve-a-unit-center-img.png";

import centerImgOverlay from "../../assets/img/center-img-overlay.png";

const ReserveAUnit = () => {
  const highlights = [
    {
      title: "12%-15% return on Hotel Investment Per Annum",
    },
    {
      title: "200% ROI on Equity",
    },
    {
      title: "Exceptional Features and Amenities",
    },
    {
      title: "First of its kind, 3-in-one Unique iconic building",
    },
    {
      title: "Nigeria’s Largest Luxury Retail & Entertainment Destination",
    },
  ];
  const leftImgRef = useRef();
  const rightImgRef = useRef();
  const centerImgRef = useRef();
  const ulHighlightsRef = useRef();

  const onHotspotClick = () => {
    leftImgRef.current.style.transform = "translateX(60%)";
    rightImgRef.current.style.transform = "translateX(-60%)";
    ulHighlightsRef.current.style.transform = "translateY(0)";
    ulHighlightsRef.current.style.opacity = "1";
  };

  const reverseHotspotClick = () => {
    leftImgRef.current.style.transform = "translateX(9rem)";
    rightImgRef.current.style.transform = "translateX(-9rem)";
    ulHighlightsRef.current.style.transform = "translateY(5%)";
    ulHighlightsRef.current.style.opacity = "0";
  };

  return (
    <div className=' container flex flex-col justify-center items-center space-y-32 pt-20 pb-10'>
      <div
        className='flex justify-center items-end reserve-hotspot cursor-pointer'
        onMouseEnter={onHotspotClick}
        onMouseLeave={reverseHotspotClick}
      >
        <div>
          <img
            src={leftImage}
            alt='left-img'
            className='scale-[.9] translate-x-36 reserve-left-img relative'
            ref={leftImgRef}
          />
        </div>
        <div className='z-10 relative h-auto w-auto'>
          <img
            src={centerImg}
            alt='center-img'
            className='scale-[.9] reserve-center-img h-full w-full relative center-img__wrapper'
            ref={centerImgRef}
          />
          {/* <img
            src={centerImgOverlay}
            alt='center-bg-overlay'
            className='absolute top-0 left-0 bg-img-overlay '
          /> */}
          <ul
            className='text-white absolute text-inter text-1xl z-20 mb-auto mt-auto mr-auto ml-auto ul-before left-0 right-0 bottom-0 top-[25%] flex flex-col space-y-5 w-[80%]'
            ref={ulHighlightsRef}
          >
            {highlights.map((highlight, index) => (
              <li key={index} className='font-inter text-sm'>
                <div className='flex flex-col space-y-5'>
                  <p>{highlight.title}</p>
                  <hr />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <img
            src={rightImage}
            alt='right-img'
            className='scale-[.9] -translate-x-36 reserve-right-img'
            ref={rightImgRef}
          />
        </div>
      </div>

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
