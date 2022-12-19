import React, { useRef, useEffect } from "react";
import getStartedImg from "../../assets/img/get-started-img.png";

import { useDispatch } from "react-redux";
import { setElRef } from "../../features/layout/layoutSlice";

const GetStarted = () => {
  const elRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setElRef(elRef));
  }, [dispatch]);

  return (
    <>
      <div
        className='container bg-[#232323] h-auto flex flex-col lg:flex-row'
        id='get-started'
        ref={elRef}
      >
        <div className='flex flex-col space-y-5 px-10 py-10 md:py-8 w-full lg:w-[65%]'>
          <h4 className='font-bold text-white text-inter text-4xl'>
            Get Started
          </h4>
          <form action='' className='pt-12'>
            <div className='flex flex-col space-y-8'>
              {/* fullname and email block */}
              <div className='flex flex-col md:flex-row justify-between space-x-reverse md:space-x-20 space-y-5 md:space-y-0'>
                {/* Fullname */}
                <div className='flex flex-col space-y-0 w-full md:w-1/2'>
                  <label htmlFor='fullname' className='text-[#4D4D4D]'>
                    Fullname <span className='text-themeOrange'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='fullname'
                    id='fullname'
                  />
                </div>
                {/* Email */}
                <div className='flex flex-col space-y-0 w-full md:w-1/2'>
                  <label htmlFor='fullname' className='text-[#4D4D4D]'>
                    Email <span className='text-themeOrange'>*</span>
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    id='email'
                  />
                </div>
              </div>
              {/* phone block */}
              <div className='flex flex-col space-y-0 w-full md:w-1/2 pr-0 md:pr-10'>
                <label htmlFor='fullname' className='text-[#4D4D4D]'>
                  Phone <span className='text-themeOrange'>*</span>
                </label>
                <input
                  type='text'
                  minLength={11}
                  maxLength={11}
                  className='form-control'
                  name='phone'
                  id='phones'
                />
              </div>
              {/* preferred investment block */}
              <div className='flex flex-col space-y-2'>
                <label htmlFor='fullname' className='text-themeOrange text-xs'>
                  select your preferred investment *
                </label>
                <div className='flex flex-col justify-between space-x-20 space-x-reverse md:space-x-20 md:flex-row space-y-5 md:space-y-0'>
                  {/* residence */}
                  <select
                    name='residence'
                    id='residence-select'
                    className='form-control w-full md:w-1/2 py-4'
                  >
                    <option value=''>Select Residence</option>
                    <option value='1-bedroom'>1 Bedroom</option>
                    <option value='2-bedroom'>2 Bedroom</option>
                    <option value='3-bedroom'>3 Bedroom</option>
                    <option value='penthouse'>Penthouse</option>
                  </select>
                  {/* apartment */}
                  <select
                    name='apartment'
                    id='apartment-select'
                    className='form-control w-full md:w-1/2 py-4'
                  >
                    <option value=''>Select Hotel Apartment</option>
                    <option value='studio'>Studio</option>
                    <option value='1-bedroom-suite'>1 Bedroom Suite</option>
                    <option value='2-bedroom-suite'>2 Bedroom Apartment</option>
                    <option value='2-bedroom-penthouse'>
                      2 Bedroom Penthouses
                    </option>
                  </select>
                </div>
              </div>
              {/* leave us a note block */}
              <div className='flex flex-col space-y-2'>
                <label htmlFor='fullname' className='text-[#4D4D4D]'>
                  Leave us a note <span className='text-themeOrange'>*</span>
                </label>
                <textarea
                  name='note'
                  id=''
                  cols='30'
                  rows='10'
                  className='bg-transparent form-control border-x-[1px] border-y-[1px] py-2 px-3'
                ></textarea>
              </div>
              {/* submit button */}
              <button className='text-white uppercase font-inter px-20 py-4 border-x-[1px] border-y-[1px] border-[#FF7A00] outline-none self-end'>
                Send
              </button>
            </div>
          </form>
        </div>
        <div className='hidden lg:block w-[35%]'>
          <img
            src={getStartedImg}
            alt='get-started-img'
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    </>
  );
};

export default GetStarted;
