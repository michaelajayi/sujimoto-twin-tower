import React from "react";
import FeaturesSlider from "./FeaturesSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import clubHouse from "../../assets/img/features/club-house.jpg";
import culinaryExperience from "../../assets/img/features/culinary-experience.jpg";
import dubaiClubHouse from "../../assets/img/features/dubai-club-house.jpg";
import giantOfAfrica from "../../assets/img/features/giant-of-africa.jpg";
import homeAutomation from "../../assets/img/features/home-automation.jpg";
import luxuryGlobalBrands from "../../assets/img/features/luxury-global brands.jpg";
import privateOffice from "../../assets/img/features/private-office.jpg";
import skyPool from "../../assets/img/features/sky-pool.jpg";

const Features = () => {
  const features = [
    {
      title: "The Giant of Africa",
      img: giantOfAfrica,
    },
    {
      title: "Private Offices - STT means business",
      img: privateOffice,
    },
    {
      title: "Club House",
      img: clubHouse,
    },
    {
      title: "The Most sophisticated private Members ONLY Clubhouse",
      img: dubaiClubHouse,
    },
    {
      title: "Where Automation is Delivered at the Click of a Button",
      img: homeAutomation,
    },
    {
      title: "40 Global Retail Brands",
      img: luxuryGlobalBrands,
    },
    {
      title: "Swimming Pool",
      img: skyPool,
    },
    {
      title: "Best Culinary Experiences - 6 Celebrity Restaurants.",
      img: culinaryExperience,
    },
  ];
  return (
    <div className='w-screen h-auto '>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={20}
        centeredSlides={true}
        grabCursor={true}
        slideToClickedSlide={true}
        // effect={"fade"}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        // }}
        keyboard={{ enabled: true }}
        pagination={{
          type: "fraction",
        }}
        modules={[Keyboard, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1920: {
            slidesPerView: 2.5,
          },
        }}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <FeaturesSlider feature={feature} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Features;
