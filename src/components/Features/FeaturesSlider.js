import React, { useEffect } from "react";

import { useSwiperSlide } from "swiper/react";

const FeaturesSlider = ({ feature }) => {
  const swiperSlide = useSwiperSlide();

  return (
    <div className='features-slide-container overflow-hidden h-[300px] md:h-[500px] relative '>
      <figure className='h-full'>
        <img
          src={feature.img}
          alt='features-img'
          className='h-full w-full object-cover hover:scale-[1.1] ease-in duration-[0.5s]'
        />
        {swiperSlide.isActive && (
          <figcaption className='slider-figcaption'>
            <p className='font-koh-santepheap text-white text-3xl'>
              {feature.title}
            </p>
          </figcaption>
        )}
      </figure>
      <div className='bg-red-500 z-40 h-full w-full absolute'>
        <p className='text-white font-koh-santepheap leading-[2rem]'>
          {feature.desc}
        </p>
      </div>
    </div>
  );
};

export default FeaturesSlider;
