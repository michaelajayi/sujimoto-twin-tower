import React, { useEffect } from "react";

import { useSwiperSlide } from "swiper/react";

const FeaturesSlider = ({ feature }) => {
  const swiperSlide = useSwiperSlide();

  return (
    <div className='features-slide-container overflow-hidden h-[500px] relative'>
      {/* {swiperSlide.isActive && ( */}
      <h2 className='absolute bottom-0 left-0 text-white text-3xl font-koh-santepheap'>
        {feature.title}
      </h2>
      {/* )} */}
      <img
        src={feature.img}
        alt='features-img'
        className='h-full w-full object-cover hover:scale-[1.1] ease-in duration-[0.5s]'
      />
    </div>
  );
};

export default FeaturesSlider;
