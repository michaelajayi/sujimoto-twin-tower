import React, { useEffect, useState } from "react";

import { useSwiperSlide } from "swiper/react";

const FeaturesSlider = ({ feature }) => {
  const swiperSlide = useSwiperSlide();

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='w-full'>
      <div className='h-[600px] md:h-[500px] relative hovered-parent'>
        <img
          src={feature.img}
          alt='feature-img'
          className='h-full w-full object-cover'
        />
        <p className='font-koh-santepheap text-white text-3xl absolute bottom-0 left-0 px-5 py-2 feature-title z-10'>
          {feature.title}
        </p>
      </div>
      {/* {swiperSlide.isActive && ( */}

      <div className='hovered-feature bg-black px-5 py-5 space-y-5 flex flex-col'>
        {feature.sub && (
          <p className='text-white text-[1.3rem] font-koh-santepheap font-bold'>
            {feature.sub && feature.sub}
          </p>
        )}
        <p
          className={`text-white font-koh-santepheap leading-[2rem]
          }`}
        >
          {feature.desc}
        </p>
      </div>
      {/* )} */}
    </div>
  );
};

export default FeaturesSlider;
