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
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nibh maximus, feugiat lectus aliquet, pellentesque tortor. Maecenas condimentum quis nibh vel tincidunt. Phasellus ut tellus dignissim, pellentesque leo non, pulvinar tellus. Ut vitae rutrum sem, a mollis erat. Phasellus a velit tincidunt.",
    },
    {
      title: "Private Offices",
      img: privateOffice,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nibh maximus, feugiat lectus aliquet, pellentesque tortor. Maecenas condimentum quis nibh vel tincidunt. Phasellus ut tellus dignissim, pellentesque leo non, pulvinar tellus. Ut vitae rutrum sem, a mollis erat. Phasellus a velit tincidunt.",
    },
    {
      title: "Club House",
      img: clubHouse,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nibh maximus, feugiat lectus aliquet, pellentesque tortor. Maecenas condimentum quis nibh vel tincidunt. Phasellus ut tellus dignissim, pellentesque leo non, pulvinar tellus. Ut vitae rutrum sem, a mollis erat. Phasellus a velit tincidunt.",
    },
    {
      title: "Private Members ONLY Clubhouse",
      img: dubaiClubHouse,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nibh maximus, feugiat lectus aliquet, pellentesque tortor. Maecenas condimentum quis nibh vel tincidunt. Phasellus ut tellus dignissim, pellentesque leo non, pulvinar tellus. Ut vitae rutrum sem, a mollis erat. Phasellus a velit tincidunt.",
    },
    {
      title: "Home Automation",
      img: homeAutomation,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nibh maximus, feugiat lectus aliquet, pellentesque tortor. Maecenas condimentum quis nibh vel tincidunt. Phasellus ut tellus dignissim, pellentesque leo non, pulvinar tellus. Ut vitae rutrum sem, a mollis erat. Phasellus a velit tincidunt.",
    },
    {
      title: "40 Global Retail Brands",
      img: luxuryGlobalBrands,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nibh maximus, feugiat lectus aliquet, pellentesque tortor. Maecenas condimentum quis nibh vel tincidunt. Phasellus ut tellus dignissim, pellentesque leo non, pulvinar tellus. Ut vitae rutrum sem, a mollis erat. Phasellus a velit tincidunt.",
    },
    {
      title: "Swimming Pool",
      img: skyPool,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nibh maximus, feugiat lectus aliquet, pellentesque tortor. Maecenas condimentum quis nibh vel tincidunt. Phasellus ut tellus dignissim, pellentesque leo non, pulvinar tellus. Ut vitae rutrum sem, a mollis erat. Phasellus a velit tincidunt.",
    },
    {
      title: "Best Culinary Experiences",
      img: culinaryExperience,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nibh maximus, feugiat lectus aliquet, pellentesque tortor. Maecenas condimentum quis nibh vel tincidunt. Phasellus ut tellus dignissim, pellentesque leo non, pulvinar tellus. Ut vitae rutrum sem, a mollis erat. Phasellus a velit tincidunt.",
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
