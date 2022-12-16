import React from "react";
import { Link } from "react-router-dom";

import logoWhite from "../../assets/img/logo-white.png";

const Nav = () => {
  return (
    <nav className='relative container flex justify-between items-center mx-auto px-10 py-5'>
      <Link to='/' className='flex flex-col items-center'>
        <img src={logoWhite} alt='logo-whites' className='scale-[.8]' />
        <p className='text-xs text-white font-koh-santepheap'>
          Sujimoto Twin Tower
        </p>
      </Link>
      <h1 className='text-1xl md:text-sm lg-text-1xl font-koh-santepheap text-white text-center lg:text-start'>
        <span className='text-themeOrange'>Nigeria’s</span> 1st{" "}
        <span className='text-themeOrange'>of its kind,</span> 3-
        <span className='text-themeOrange'>in</span>
        -1 Luxury Building.
      </h1>
      <div className='flex space-x-3'>
        <a className='text-white' href='#!'>
          Fb.
        </a>
        <a className='text-white' href='#!'>
          In.
        </a>
        <a className='text-white' href='#!'>
          Yt.
        </a>
      </div>
    </nav>
  );
};

export default Nav;
