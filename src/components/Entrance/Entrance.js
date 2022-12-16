import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";

import sttLogo from "../../assets/img/logo-white.png";

const Entrance = ({ tl }) => {
    const [loader, setLoader] = useState(0);
    
  const entranceRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const entrance = entranceRef.current;

    // tl.to(entrance, { x: 2500, duration: 4, ease: "power4.out" });

    const tl = gsap.timeline();
    tl.to(textRef, { x: -100, opacity: 0, duration: 1, ease: "power4.out" });
  }, []);

  return (
    <div
      ref={entranceRef}
      className='absolute z-10 bg-themeOrange top-0 w-screen h-screen flex flex-col justify-center items-center space-y-5'
    >
      {/* <img src={sttLogo} alt="stt-logo" className="scale-[1.2]"/> */}
      <h4 className='text-white font-inter text-8xl font-bold'>{`${loader}%`}</h4>
      <h1 className='text-white text-3xl text-center'>
        Nigeria’s 1st of its kind <br /> 3-in-1 Luxury Building.
      </h1>
    </div>
  );
};

export default Entrance;
