import React from "react";
import { useDispatch } from "react-redux";
import {
  scrollToEl
} from "../../features/layout/layoutSlice";

const StickyButton = () => {
  const dispatch = useDispatch();

  const onScrollToEl = () => {
    dispatch(scrollToEl());
  };

  return (
    <div className='flex justify-end py-0 w-screen fixed bottom-0 border-0 border-y-2 right-0 border-b-1 border-t-0 border-white z-50'>
      <button
        className='sticky-button px-8 py-2 bg-transparent uppercase border border-white font-inter text-1xl text-white'
        onClick={onScrollToEl}
      >
        Reserve a Unit
      </button>
    </div>
  );
};

export default StickyButton;
