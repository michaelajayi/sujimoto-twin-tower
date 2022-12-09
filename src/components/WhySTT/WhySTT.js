import React from "react";

const WhySTT = () => {
  return (
    <div className='w-screen h-auto items-center flex flex-col py-2 px-4 space-y-10 lg:items-end lg:py-4 lg:px-32'>
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
          <div className='w-full h-[2px] bg-white lg:w-[59%] md-w-1/2 lg:hidden lg:h-[1px]'></div>
          <h3 className='text-white text-center font-luxurious-script text-5xl lg:w-1/2 lg:text-start md:text-4xl lg:text-5xl'>
            Nigeria's first integrated Luxury living location.
          </h3>
          <div className='w-full h-[2px] bg-white lg:w-[59%] md-w-1/2 lg:hidden lg:h-[1px]'></div>
        </div>
        {/* Long text */}
        <div className='flex flex-col space-y-2 lg:w-1/3 md:w-full md:justify-center md:items-center lg:items-start'>
          <p className='font-koh-santepheap text-sm text-white md:w-2/3 lg:w-full md:text-center lg:text-start'>
            A journey of a thousand smiles begins at the STT. Here, the highest
            level of service will take you on a journey that defies the
            impossible. With artful masterpieces, iconic entertainment and
            beautiful craftsmanship at every turn, this is the
          </p>
          <a
            href='#!'
            className='hidden text-sm font-koh-santepheap text-themeOrange lg:block'
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhySTT;
