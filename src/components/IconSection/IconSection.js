import React from "react";
import icons from "../../utils/icons";

const IconSection = () => {
  return (
    <div className='container py-10 w-screen h-full flex justify-center items-center icons-section__container'>
      {icons.map((icon, index) => (
        <div className='flex flex-col items-center space-y-3' key={index}>
          <img src={icon.icon} alt='icon-img' className='scale-[.8]' />
          <p className='text-xs text-white font-inter uppercase w-1/2 text-center'>
            {icon.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default IconSection;
