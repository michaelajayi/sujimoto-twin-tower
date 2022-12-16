import React from "react";
import leftStatue from "../../assets/img/left-statue.png";
import UniqueKeyFacts from "../UniqueKeyFacts/UniqueKeyFacts";

import mapOutline from "../../assets/img/map-outline.png";
import orangeCircle from "../../assets/img/orange-circle.png";
import experienceBtn from "../../assets/img/experience-btn.svg";

const LeftStatue = () => {
  return (
    <div className='w-screen h-auto relative'>
      <div className='flex space-x-0 items-end left-0 top-0 scale-[.8] mt-[12rem] -ml-[3rem]'>
        {/* have an experience */}
        <div className='flex flex-col space-y-[3rem] mb-[10rem]'>
          <p className='text-white font-inter text-1xl -rotate-[90deg]'>
            Have an experience of the STT
          </p>
          <img
            src={experienceBtn}
            alt='experience-btn'
            className='scale-[.4] cursor-pointer'
          />
        </div>
        <div className='flex space-x-[9.5rem] items-end'>
          {/* left statue */}
          <img src={leftStatue} alt='left-statue' />
          {/* map ouline */}
          <div className='mb-[6%] ml-[10%] relative'>
            <img src={mapOutline} alt='map-outline' />
            <div className='flex items-center absolute top-[34.5%] left-[37%] w-full space-x-5'>
              <div className='pulser grid place-content-center w-[60px] h-[60px] bg-themeOrange  top-[25%] left-0'></div>
              {/* <img
                src={orangeCircle}
                alt='orange-circle'
                className='scale-[1.5]'
              /> */}
              <p className='text-white font-koh-santepheap w-full'>
                Sujimoto Twin Towers
              </p>
            </div>
          </div>
        </div>
      </div>
      <UniqueKeyFacts />
    </div>
  );
};

export default LeftStatue;
