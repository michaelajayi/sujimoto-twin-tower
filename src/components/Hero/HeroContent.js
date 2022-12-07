import React from "react";

import residential from "../../assets/img/heroicons/residential.svg";
import hotelApartment from "../../assets/img/heroicons/hotel-apartment.svg";
import retail from "../../assets/img/heroicons/retail.svg";

const HeroContent = () => {
  return (
    <section className='container flex flex-col-reverse space-y-10 space-y-reverse lg:flex-row justify-between items-center mx-auto md:items-center'>
      {/* Nav Left Side */}
      <div className='flex flex-col justify-center space-y-5 md:justify-between'>
        <h1 className='text-1xl font-koh-santepheap text-white text-center md:text-start'>
          <span className='text-themeOrange'>Nigeria’s</span> 1st{" "}
          <span className='text-themeOrange'>of its kind,</span> 3-
          <span className='text-themeOrange'>in</span>
          -1 Luxury Building.
        </h1>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col items-center space-y-3'>
            <img src={residential} alt='residential-icon' />
            <p className='text-white font-koh-santepheap'>Residential</p>
          </div>
          <div className='flex flex-col items-center space-y-3'>
            <img src={hotelApartment} alt='residential-icon' />
            <p className='text-white font-koh-santepheap'>Hotel Apartment</p>
          </div>
          <div className='flex flex-col items-center space-y-3'>
            <img src={retail} alt='residential-icon' />
            <p className='text-white font-koh-santepheap'>Retail</p>
          </div>
        </div>
        <p className='text-1xl text-white font-koh-santepheap text-center lg:text-start'>
          <span className='text-themeOrange'>Pricing starts from {""}</span>
          $250,000
        </p>
      </div>
      {/* Nav Right Side */}
      <div className='flex'>
        <div className='relative'>
          <h1 className='text-7xl text-center text-white font-800 font-koh-santepheap w-100 md:text-8xl lg:text-9xl lg:text-start md:w-full lg:w-3/4'>
            Own the Best.
          </h1>
          <p className='relative md:w-1/3 text-white bottom-0 md:right-10 md:absolute font-inter text-sm mr-20'>
            Africa’s iconic Landmark. A unique opportunity to invest in a first
            of its kind Luxury Real Estate Project. A combination of
            unprecedented living experience, Hospitality and Luxury Retail with
            unrivalled opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
