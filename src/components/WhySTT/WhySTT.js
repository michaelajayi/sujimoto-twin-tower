import React from "react";

const WhySTT = () => {
  return (
    <div className='w-screen h-auto items-center flex flex-col py-2 px-4 space-y-10 lg:items-end lg:pt-10 lg:pb-10 lg:px-32'>
      <div className='flex flex-col items-end justify-between space-y-5 lg:space-y-6'>
        <div className='w-full h-[2px] bg-white lg:w-[75%] lg:h-[1px]'></div>
        <h1 className='font-koh-santepheap text-center text-7xl text-white lg:text-[7rem] lg:text-start'>
          Why STT?
        </h1>
        <div className='w-full h-[2px] bg-white lg:w-[75%] lg:h-[1px]'></div>
      </div>
      <div className='flex flex-col-reverse justify-between w-full lg:flex-row lg:w-[75%] space-y-5 space-y-reverse'>
        {/* Cursive text */}
        <div className='flex flex-col space-y-5'>
          <div className='w-full h-[2px] bg-white lg:w-[65%] md-w-1/2 lg:hidden lg:h-[1px]'></div>
          <h3 className='text-white text-center font-luxurious-script text-[4rem]  lg:text-start md:text-4xl lg:text-6xl'>
            A journey that defies the impossible.
          </h3>
          <div className='w-full h-[2px] bg-white lg:w-[59%] md-w-1/2 lg:hidden lg:h-[1px]'></div>
        </div>
        {/* Long text */}
        <div className='flex flex-col space-y-2 lg:w-1/3 md:w-full md:justify-center md:items-center lg:items-start'>
          <p className='font-koh-santepheap text-sm text-white md:w-2/3 lg:w-full md:text-center lg:text-start'>
            We are creating a Masterpiece and a unique opportunity for people
            to: live in the best and the most luxurious building in Nigeria,
            Invest in Africa’s first hotel apartment project, and shop like
            you’re in Dubai or London
          </p>
          <a
            href='#!'
            className='hidden text-sm font-koh-santepheap text-themeOrange lg:block'
          >
            Read more
          </a>
          <div className=' read-more-content hidden'>
            This is the ultimate address where luxury Residences, iconic
            hospitality, and exceptional retail services converge as one.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySTT;
