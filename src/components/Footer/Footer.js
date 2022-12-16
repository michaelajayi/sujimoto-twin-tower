import React from "react";

import footerLogo from "../../assets/img/footer-logo.png";

const Footer = () => {
  return (
    <div className='bg-[#0D1E37] w-screen h-auto flex flex-col items-center justify-center mx-auto'>
      <div className='container footer-container'>
        <div className=' bg-[#171717]'>
          <div className='flex flex-col justify-between items-center mx-auto w-[90%] py-8 md:flex-row space-y-8'>
            <img src={footerLogo} alt='footer-logo' className='w-[90px]' />
            <p className='text-white font-inter text-sm'>
              &copy; {new Date().getFullYear()} {""}
              <a
                href='www.sujimotonig.com'
                target='_blank'
                className='text-themeOrange'
              >
                www.sujimotonig.com
              </a>{" "}
              All Right Reserved
            </p>
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
          </div>
        </div>
        <div className='footer-about-sujimoto'>
          <div className='flex flex-col justify-center mx-auto space-y-5 md:space-y-10 py-20 w-[90%] relative z-10'>
            <h3 className='text-white text-2xl lg:text-3xl font-koh-santepheap'>
              About Sujimoto
            </h3>
            <p className='text-white font-koh-santepheap text-sm lg:text-[20px] text-start leading-7 lg:text-justify'>
              Sujimoto is a luxury real estate and construction company that is
              dedicated to redefining the luxury real estate industry with
              transformative experiences through intricately designed
              architecture. Our services cater to those who have a refined taste
              for the finer things in life and value opulence in its truest and
              rarest form. From foundation to chandelier, we search globally for
              the world’s most renowned thought leaders in architecture, art and
              innovation in designing the masterpieces we create. Associated
              exclusively with bespoke and iconic structures, we offer a
              lifestyle only the Sujimoto brand can deliver.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
