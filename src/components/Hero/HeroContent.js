import React, { useState } from "react";

import residential from "../../assets/img/heroicons/residential.svg";
import hotelApartment from "../../assets/img/heroicons/hotel-apartment.svg";
import retail from "../../assets/img/heroicons/retail.svg";

import pulser from "../../assets/img/pulser.svg";

const HeroContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const [current, setCurrent] = useState("");

  const heroContentLeft = [
    {
      id: "residential",
      title: "Residential",
      icon: residential,
      desc: "A mirrored definition of Extraordinary Living designed for the Audacious. STT offers a unique opportunity to those who dare to live in the Ultimate address where you can have it all. When You're at STT, You're 2 Minutes to Everything!",
      more: "The lofty Residential Tower boasts of superiorly furnished 1-, 2-, 3- bedroom apartments, and 4 bedrooms penthouses that offer incredible return on investment when",
    },
    {
      id: "apartment",
      title: "Hotel Apartment",
      icon: hotelApartment,
      desc: "Every detail of life with STT is curated in the hotel apartments just for the guests to discover an ultimate destination where Magical Beauty and Serenity blends perfectly with Refined Luxury Living.",
      more: "The STT Hotel Apartment comprises of built in studios, 1 bedroom, 2-bedrooms, 3 bedrooms, and penthouses managed by world renowned hospitality company grounded in the genuine care of delivering unparalleled luxury with a dedicated focus on high-quality hospitality service.",
    },
    {
      id: "retail",
      title: "Retail",
      icon: retail,
      desc: "STT is a prime destination for individuals, businesses, and other Luxury Retail brands to own a space with world class facilities.",
      more: "The Retail floor at the Sujimoto Twin Towers will be home to over 40 of the world’s largest and most iconic retail brands.",
    },
  ];
  return (
    <section className='flex w-full md:w-[78%] md:self-start lg:self-center lg:w-[90%]'>
      <div className='flex justify-between items-center flex-col-reverse space-y-10 space-y-reverse lg:flex-row d:items-start lg:items-center lg:px-10 mt-[8rem] sm:mt-0 md:px-5'>
        {/* nav left side */}
        <div className='flex flex-col justify-center px-3 space-y-3 lg:justify-around lg:space-y-5 items-start w-[90%] lg:w-[30%] self-start'>
          {/* <h1 className='text-1xl lg:text-sm lg-text-1xl font-koh-santepheap text-white text-center lg:text-start'>
            <span className='text-themeOrange'>Nigeria’s</span> 1st{" "}
            <span className='text-themeOrange'>of its kind,</span> 3-
            <span className='text-themeOrange'>in</span>
            -1 Luxury Building.
          </h1> */}
          <div className='flex items-center justify-between w-[90%] md:w-[80%]'>
            {heroContentLeft.map((content, index) => (
              <div
                className='flex flex-col items-center space-y-0 cursor-pointer relative'
                key={index}
                onMouseEnter={() => {
                  setCurrent(content.id);
                  setShowMore(true);
                }}
              >
                <img
                  src={content.icon}
                  alt='residential-icon'
                  className='scale-[.75] lg:scale-[.8]'
                />
                <p className='text-white font-inter text-[11px] text-sm lg:text-xs '>
                  {content.title}
                </p>

                {/* desc && more content */}
                {showMore && content.id === current && (
                  <div
                    className={`px-5 py-4 flex flex-col space-y-3 absolute w-[350px] h-auto top-[200%] more-content-container`}
                    onMouseLeave={() => {
                      setShowMore(false);
                      setIsExpanded(false);
                    }}
                  >
                    <p className='text-white text-xs font-inter'>
                      {content.desc}
                    </p>
                    <div
                      className={`flex ${
                        isExpanded
                          ? "flex-col-reverse space-y-2 space-y-reverse"
                          : "flex-col"
                      } items-start my-2`}
                    >
                      <button
                        className='text-themeOrange text-xs cursor-pointer'
                        onClick={() => setIsExpanded(!isExpanded)}
                      >
                        {isExpanded ? "Less" : "Read more"}
                      </button>
                      {isExpanded && (
                        <p className='text-white text-xs font-inter'>
                          {content.more}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className='text-1xl text-white font-koh-santepheap text-center lg:text-start text-xs lg:text-sm lg:text-1xl'>
            <span className='text-themeOrange'>Pricing starts from {""}</span>
            $250,000
          </p>
          {/* <p className='relative mt-4 text-xs text-white w-full lg:w-[90%] font-inter'>
            Africa’s iconic Landmark. A unique opportunity to invest in a first
            of its kind Luxury Real Estate Project. A combination of
            unprecedented living experience, Hospitality and Luxury Retail with
            unrivalled opportunities.
          </p> */}
        </div>
        {/* nav right side */}
        <div className='flex flex-col w-full relative px-3 :w-[75%] lg:w-[50%]'>
          <div className='flex flex-col space-y-5 lg:space-y-3 items-end'>
            <h1 className='text-[2.2rem] leading-[1.2] text-white font-koh-santepheap md:text-5xl lg:text-[4.2rem] font-bold lg:px-0 text-left lg:text-right w-[90%] self-start lg:w-full'>
              The Bottom is too crowded, so Aim for the SKY
            </h1>
            <p className='relative mt-4 text-xs text-white md:w-[65%] font-inter text-left lg:text-right w-[80%] self-start lg:self-end lg:mr-0'>
              A unique opportunity to invest in a first-of-its-kind Luxury Real
              Estate Project. A combination of unprecedented living experience,
              Hospitality and Luxury Retail with unrivalled features.
            </p>
          </div>
          {/* <p className='relative mt-4 text-xs text-right text-white w-full font-inter lg:absolute lg:bottom-0 lg:right-[65%] lg:w-[35%] lg:mt-0'>
            Africa’s iconic Landmark. A unique opportunity to invest in a first
            of its kind Luxury Real Estate Project. A combination of
            unprecedented living experience, Hospitality and Luxury Retail with
            unrivalled features.
          </p> */}
        </div>
      </div>
      <img
        src={pulser}
        alt='pulser'
        className='hidden lg:block absolute bottom-[12%] lg:bottom-[20%] right-[10%]'
      />
      <div className='hidden glass-effect absolute top-0 right-[25%] w-[15%] h-screen lg:block'></div>
    </section>
  );
};

export default HeroContent;
