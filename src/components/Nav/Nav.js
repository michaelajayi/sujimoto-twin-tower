import React from "react";
import { Link } from "react-router-dom";

import logoWhite from "../../assets/img/logo-white.png";

const Nav = () => {
  return (
    <nav className='relative container flex justify-between items-center mx-auto px-10 py-5'>
      <Link to='/'>
        <img src={logoWhite} alt='logo-whites' />
      </Link>
      <div className='flex space-x-3'>
        <a className='text-white' href='#!'>Fb.</a>
        <a className='text-white' href='#!'>In.</a>
        <a className='text-white' href='#!'>Yt.</a>
      </div>
    </nav>
  );
};

export default Nav;
