import React from "react";

const StickyButton = ({ elRef }) => {
  const scrollToEl = () => {
    window.scrollTo({
      top: elRef.current.offsetTop + elRef.current.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className='flex justify-end py-0 w-screen fixed bottom-0 border-0 border-y-2 right-0 border-b-1 border-t-0 border-white z-30'>
      <button
        className='sticky-button px-8 py-2 bg-transparent uppercase border border-white font-inter text-1xl text-white'
        onClick={scrollToEl}
      >
        Invest in STT
      </button>
    </div>
  );
};

export default StickyButton;
