import React from "react";
import FeaturesSlider from "./FeaturesSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination, EffectFade, Navigation } from "swiper";

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
import Finery from "../../assets/img/features/finery.jpg";
import LuxuryHotels from "../../assets/img/features/luxury-hotels.jpg";
import Investment from "../../assets/img/features/investment.jpg";

import arrowLeft from "../../assets/img/arrow-left.svg";
import arrowRight from "../../assets/img/arrow-right.svg";

const Features = () => {
  const features = [
    {
      title: "The Giant of Africa",
      sub: "The Tallest Twin Tower in Africa",
      img: giantOfAfrica,
      desc: "Reside in Nigeria's Tallest and Iconic Building. - STT is a unique destination where opulence thrives at a soaring height of 198 meters into the sky, unseating the NECOM tower to become Nigeria’s Tallest and the 3rd tallest Building in Sub-Saharan Africa. Here, everyone has the audacity to own The Skies.",
    },
    {
      title: "Private Offices",
      img: privateOffice,
      desc: "Live and Play on the 30th floor, while you work on the 5th floor. STT has positioned itself as the undisputed New business district of Lagos. Specifically designed for the high and mighty who always mean business. If you are in search of blue Ocean ideas, our Fully equipped office spaces are overlooking the blue Atlantic Ocean. Either for a quick single office or a 500m2 office space, STT is your first option.",
    },
    // {
    //   title: "Club House",
    //   img: clubHouse,
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nibh maximus, feugiat lectus aliquet, pellentesque tortor. Maecenas condimentum quis nibh vel tincidunt. Phasellus ut tellus dignissim, pellentesque leo non, pulvinar tellus. Ut vitae rutrum sem, a mollis erat. Phasellus a velit tincidunt.",
    // },
    {
      title: "Private Members ONLY Clubhouse",
      img: dubaiClubHouse,
      desc: "You don't join Louis XIII, she invites you. A convergence of the highest net-worth individuals, The Louis XIII is more than a club, it is an association of worthy and dignifiable personalities who have proven to be able to handle the highest level of excellence in their lives.",
    },
    {
      title: "Home Automation",
      sub: "Govern with a Single Touch",
      img: homeAutomation,
      desc: "The Sujimoto Twin Towers comes equipped with cutting-edge sensors and switches which are voice and touch activated, while connected to an intelligent and intuitive central that recognizes your voice in all languages. Here you'll never be locked out. All guests and residents can control all aspects of their apartment at all times, with a few touches and swipes. ",
    },
    {
      title: "40 Global Retail Brands",
      sub: "Shop the World, from the ground up.",
      img: luxuryGlobalBrands,
      desc: "You no longer need to go to Dubai mall or Harrods to experience your luxury shopping extravaganza. With over 40 International and local retail brands, every shopping experience will be 2 minutes away from your residence. At STT, don't be surprised to find Luxury Retail brands like Burberry, Channel, Fashion Nova etc.",
    },
    {
      title: "Swim in the Sky",
      sub: "Little Drops of Luxury",
      img: skyPool,
      desc: "Unleash your inner Michael Phelps with a touch of wings when you are floating in the Luxury of any of our 3 Olympic-sized swimming pools. Float like a butterfly on the 40th-floor pool, this is Swimming and flying with the same strokes.",
    },
    {
      title: "Best Culinary Experiences",
      img: culinaryExperience,
      desc: "You don't have to go to Italy for a taste of Arancini or Focaccia, the STT is bringing you 6 celebrity Restaurants from local African fusions to Continental Cuisines. From Amala to Lasagna, At STT, a taste of the 6 corners of the world is guaranteed.",
    },
    {
      title: "Handpicked Finery",
      img: Finery,
      desc: "If Zaha Hadid, Bang & Olufsen, Kholer, Smeg, and Bosch were to have a party, this will be the location. Just like Schneider, this is Luxury on so many levels. Sprinkled with the best of their exclusive designs, Lamborghini/Bentley and Fendi Casa interior have found a new home fit for Kings and Queens.",
    },
    {
      title: "Luxury Residences & Hospitality",
      img: culinaryExperience,
      desc: "The highest and most beautiful things in life are not to be heard about, nor read about, nor seen but to be lived. STT heralds the birth of a New Dimension of Ultra-Luxury Living in Africa. A remarkable hospitality at the highest level of service that will take you on a journey that defies the impossible.",
    },
    {
      title: "Best Hotel and Hotel Apartment",
      img: LuxuryHotels,
      desc: "STT is bringing to life a unique blend of true luxury, an iconic hospitality modelled on rich African heritage, as well as an unforgettable ethereal design that sets the project apart from others. The Hotel boast of superiorly furnished Bentley/Lamborghini and Fendi Casa style studio apartments, 1 bedroom, 2-bedrooms, and penthouses.",
    },
    {
      title: "200% ROI, 15% Annual Rental Income",
      img: Investment,
      desc: "STT offers an incredible off-plan investment opportunity that more than doubles the investor’s injected capital upon completion of the project. That is over 200% ROI. STT is a unique opportunity to own a unit of a hotel and become a part of the fast-rising hospitality market that approximately expects a 12% -15% return on hotel room investment on an annual basis.",
    },
  ];
  return (
    <div className='w-screen h-auto'>
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
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        keyboard={{ enabled: true }}
        pagination={{
          type: "fraction",
        }}
        modules={[Keyboard, Autoplay, Navigation]}
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
        <div className='hidden swiper-custom-nav justify-between px-5 w-full absolute left-0 top-[30%] lg:flex'>
          <img
            src={arrowLeft}
            alt='arrow-left'
            className='cursor-pointer prev'
          />
          <img
            src={arrowRight}
            alt='arrow-right'
            className='cursor-pointer next'
          />
        </div>
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
