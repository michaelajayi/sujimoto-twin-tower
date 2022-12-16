import React from "react";

import residential from "../../assets/img/heroicons/residential.svg";
import hotelApartment from "../../assets/img/heroicons/hotel-apartment.svg";
import retail from "../../assets/img/heroicons/retail.svg";

import pulser from "../../assets/img/pulser.svg";

const HeroContent = () => {
  const heroContentLeft = [
    {
      title: "Residential",
      icon: residential,
    },
    {
      title: "Hotel Apartment",
      icon: hotelApartment,
    },
    {
      title: "Retail",
      icon: retail,
    },
  ];
  return (
    <section className='container flex'>
      <div className='flex justify-between items-center flex-col-reverse space-y-10 space-y-reverse lg:flex-row md:items-start lg:items-center md:px-10'>
        {/* nav left side */}
        <div className='flex flex-col justify-center space-y-10 md:justify-around md:space-y-5 items-start w-[30%]'>
          {/* <h1 className='text-1xl md:text-sm lg-text-1xl font-koh-santepheap text-white text-center lg:text-start'>
            <span className='text-themeOrange'>Nigeria’s</span> 1st{" "}
            <span className='text-themeOrange'>of its kind,</span> 3-
            <span className='text-themeOrange'>in</span>
            -1 Luxury Building.
          </h1> */}
          <div className='flex items-center justify-between w-full'>
            {heroContentLeft.map((content, index) => (
              <div className='flex flex-col items-center space-y-0' key={index}>
                <img
                  src={content.icon}
                  alt='residential-icon'
                  className='scale-[.8]'
                />
                <p className='text-white text-sm font-koh-santepheap md:text-xs lg:text-sm'>
                  {content.title}
                </p>
              </div>
            ))}
          </div>
          <p className='text-1xl text-white font-koh-santepheap text-center lg:text-start md:text-sm lg:text-1xl'>
            <span className='text-themeOrange'>Pricing starts from {""}</span>
            $250,000
          </p>
          {/* <p className='relative mt-4 text-xs text-white w-full md:w-[90%] font-inter'>
            Africa’s iconic Landmark. A unique opportunity to invest in a first
            of its kind Luxury Real Estate Project. A combination of
            unprecedented living experience, Hospitality and Luxury Retail with
            unrivalled opportunities.
          </p> */}
        </div>
        {/* nav right side */}
        <div className='flex flex-col w-full relative px-3 md:w-[75%] lg:w-[50%]'>
          <div className='flex flex-col space-y-3 items-end'>
            <h1 className='text-5xl text-white font-koh-santepheap md:text-5xl lg:text-[4.2rem] font-bold md:px-0 text-right'>
              The Bottom is too crowded, so Aim for the SKY
            </h1>
            {/* <h4 className='text-white text-[1.2rem] font-koh-santepheap text-right'>
              Unforgettable Luxury Experience.
            </h4> */}
            <p className='relative mt-4 text-xs text-white w-[65%] font-inter text-right'>
              Africa’s iconic Landmark. A unique opportunity to invest in a
              first of its kind Luxury Real Estate Project. A combination of
              unprecedented living experience, Hospitality and Luxury Retail
              with unrivalled opportunities.
            </p>
          </div>
          {/* <p className='relative mt-4 text-xs text-right text-white w-full font-inter lg:absolute lg:bottom-0 lg:right-[65%] lg:w-[35%] lg:mt-0'>
            Africa’s iconic Landmark. A unique opportunity to invest in a first
            of its kind Luxury Real Estate Project. A combination of
            unprecedented living experience, Hospitality and Luxury Retail with
            unrivalled opportunities.
          </p> */}
        </div>
      </div>
      <img
        src={pulser}
        alt='pulser'
        className='absolute bottom-[20%] right-[10%]'
      />
      <div className='hidden glass-effect absolute top-0 right-[25%] w-[15%] h-screen md:block'></div>
    </section>
  );
};

export default HeroContent;
