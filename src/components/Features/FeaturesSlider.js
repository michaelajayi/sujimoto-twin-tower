import React, { useEffect } from "react";

import { useSwiperSlide } from "swiper/react";

const FeaturesSlider = ({ feature }) => {
  const swiperSlide = useSwiperSlide();

  return (
    <div className='features-slide-container overflow-hidden h-[300px] md:h-[500px] relative'>
      {/* {swiperSlide.isActive && ( */}
      {/* <h2 className='absolute bottom-0 left-5 text-white text-3xl font-koh-santepheap'>
        {feature.title}
      </h2> */}
      {/* )} */}
      <figure className='h-full'>
        <img
          src={feature.img}
          alt='features-img'
          className='h-full w-full object-cover'
          // className='h-full w-full object-cover hover:scale-[1.1] ease-in duration-[0.5s]'
        />
        {swiperSlide.isActive && (
          <figcaption className='slider-figcaption'>
            <p className='font-koh-santepheap text-white text-3xl'>
              {feature.title}
            </p>
          </figcaption>
        )}
      </figure>
    </div>
  );
};

export default FeaturesSlider;
