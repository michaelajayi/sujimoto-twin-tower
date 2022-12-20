import React from "react";
import { Link } from "react-router-dom";

import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";

import logoWhite from "../../assets/img/logo-white.png";

const Nav = () => {
  return (
    <nav className='relative w-full lg:w-[90%] flex justify-between items-center mx-auto px-3 md:px-10 py-5'>
      <img
        src={logoWhite}
        alt='logo-whites'
        className='scale-[.6] md:scale-[.7] -ml-[10px] md:ml-0'
      />
      {/* <p className='text-[.6rem] text-white font-koh-santepheap'>
          Sujimoto Twin Tower
        </p> */}
      <h1 className='hidden text-1xl md:text-sm lg-text-1xl font-koh-santepheap text-white text-center lg:text-start md:block'>
        <span className='text-themeOrange'>Nigeria’s</span> 1st{" "}
        <span className='text-themeOrange'>of its kind,</span> 3-
        <span className='text-themeOrange'>in</span>
        -1 Building.
      </h1>
      <div className='flex space-x-5 items-center justify-between'>
        <a
          className='text-white'
          href='https://www.facebook.com/motoconstructionng'
          target='_blank'
          rel='noreferrer'
        >
          <FiFacebook color='#fff' size={18} />
        </a>
        <a
          className='text-white'
          href='https://www.linkedin.com/company/sujimoto-construction-limited'
          target='_blank'
          rel='noreferrer'
        >
          <FiLinkedin color='#fff' size={18} />
        </a>
        <a
          className='text-white'
          href='https://www.youtube.com/channel/UC1Q3PEh495SxXY-npjegTkg'
          target='_blank'
          rel='noreferrer'
        >
          <FiYoutube color='#fff' size={18} />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
