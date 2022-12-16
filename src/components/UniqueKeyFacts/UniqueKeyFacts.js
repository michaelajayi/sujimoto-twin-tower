import React from "react";

import pulser from "../../assets/img/pulser.svg";

const UniqueKeyFacts = () => {
  const uniqueFacts = [
    {
      title: "1st of its kind One of a Kind",
      leading:
        "STT is a one-stop-shop for all. A unique destination that captures a perfect blend of",
      more: "hyper-luxury living and best hotel experience while bringing the world to the doorstep of its guests. At STT, the everyday need of the guest and residences will be accessed within a 2 minutes’ walk. Live. Work and Play",
    },
    {
      title: "One-Stop-Shop 2 Minutes to Everything",
      leading:
        "STT is set to become Nigeria’s Largest Luxury Retail & Entertainment Destination.",
      more: "A residential and hotel space pulsating with world leading brands including six celebrity restaurants within it.",
    },
    {
      title: "40+ Global Retail Brands",
      leading:
        "STT is set to become Nigeria’s Largest Luxury Retail & Entertainment Destination.",
      more: "A residential and hotel space pulsating with world leading brands including six celebrity restaurants within it.",
    },
  ];
  return (
    <div className='absolute top-[3%] left-0 w-screen flex justify-center'>
      <div className='uniquekeyfacts w-[100%] flex relative'>
        <div className='flex items-start space-x-4 first '>
          <img src={pulser} alt='pulser' />
          <div className='flex flex-col'>
            <h4 className='font-koh-santepheap text-white text-2xl font-bold w-[35%]'>
              1st of its kind One of a Kind
            </h4>
            <p className='text-white text sm font-koh-santepheap w-[50%]'>
              STT is a one-stop-shop for all. A unique destination that captures
              a perfect blend of
            </p>
            <a
              href='#!'
              className='text-sm text-themeOrange font-koh-santepheap'
            >
              Read more
            </a>
          </div>
        </div>
        <div className='flex items-start space-x-4 second'>
          <img src={pulser} alt='pulser' />
          <div className='flex flex-col'>
            <h4 className='font-koh-santepheap text-white text-2xl font-bold w-[45%]'>
              One-Stop-Shop 2 Minutes to Everything
            </h4>
            <p className='text-white text sm font-koh-santepheap w-[50%]'>
              STT is set to become Nigeria’s Largest Luxury Retail &
              Entertainment Destinations.
            </p>
            <a
              href='#!'
              className='text-sm text-themeOrange font-koh-santepheap'
            >
              Read more
            </a>
          </div>
        </div>
        <div className='flex flex-col third justify-end -mt-[15rem] items-start'>
          <div className='flex flex-col'></div>
          <h2 className='text-white font-inter font-extrabold uppercase text-3xl w-1/3 text-right'>
            Unique Key Facts
          </h2>
          <div className='flex items-start space-x-4 mt-[10rem] mb-[5rem]'>
            <img src={pulser} alt='pulser' />

            <div className='flex flex-col justify-end '>
              <h4 className='font-koh-santepheap text-white text-2xl font-bold w-[45%]'>
                40+ Global Retail Brands
              </h4>
              <p className='text-white text sm font-koh-santepheap w-[50%]'>
                STT is set to become Nigeria’s Largest Luxury Retail &
                Entertainment Destination.
              </p>
              <a
                href='#!'
                className='text-sm font-koh-santepheap text-themeOrange'
              >
                Read more
              </a>
            </div>
          </div>
          <button className='uppercase text-white px-12 py-2 text-1xl font-inter bg-transparent border border-white  bottom-0 right-[15%] ml-[5rem]'>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UniqueKeyFacts;
