import React from "react";

import louisXii from "../../assets/img/heroicons/louis-xii.svg";

import sliderLine from "../../assets/img/slider-line.svg";
import sliderCircle from "../../assets/img/slider-circle.svg";

const HeroBottomSlider = () => {
  return (
    <>
      <div className='flex flex-col items-start space-y-2'>
        <img src={louisXii} alt='louisxii' />

        <div className='flex items-center justify-start space-x-0'>
          <img
            src={sliderCircle}
            alt='drag'
            className='cursor-pointer -mx-1 z-10'
          />
          <img src={sliderLine} alt='drag' />
        </div>
      </div>
    </>
  );
};

export default HeroBottomSlider;
