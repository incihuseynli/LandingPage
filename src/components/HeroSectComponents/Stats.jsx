import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Stats = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div
      className="py-12 px-4 md:px-8 lg:px-30 font-poppins
    lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-4
    "
    >
      <div
        className=" mb-12
      flex flex-col items-center gap-10 
      md:flex-row md:justify-center lg:mb-0
      "
      >
        <div
          className="flex flex-col items-center gap-3 
          w-64
          lg:border-r-2 lg:pr-8 lg:border-secondary-gray-200"
        >
          <img src="./HAPPY.svg" alt="İstifadəçi razılğı" className="w-8 h-8" />
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <span className="text-2xl font-bold text-primary-blue-800">
              {counterOn && (
                <CountUp start={0} end={9654} duration={3} delay={0} />
              )}
              +
            </span>
          </ScrollTrigger>

          <h6 className="text-sm text-center -mt-2 font-normal uppercase text-primary-blue-800">
            Müştəri məmnuniyyəti
          </h6>
        </div>
        <div
          className="flex flex-col items-center gap-3 w-64
        lg:border-r-2 lg:pr-8 lg:border-secondary-gray-200
      "
        >
          <img src="./building.svg" alt="Bölmələrin sayı" className="w-8 h-8" />
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <span className="text-2xl font-bold text-primary-blue-800">
              {counterOn && (
                <CountUp start={0} end={2812} duration={3} delay={0} />
              )}
              +
            </span>
          </ScrollTrigger>
          <h6 className="text-sm -mt-2 font-normal uppercase text-primary-blue-800">
            Quraşdırılmış bölmələr
          </h6>
        </div>
      </div>
      <div
        className="flex flex-col items-center gap-10
      md:flex-row md:justify-center
      "
      >
        <div
          className="flex flex-col items-center gap-3 w-64
        lg:border-r-2 lg:pr-8 lg:border-secondary-gray-200
      "
        >
          <img
            src="./landmark.svg"
            alt="Təhvil verilmiş ev sayısı"
            className="w-8 h-8"
          />
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <span className="text-2xl font-bold text-primary-blue-800">
              {counterOn && (
                <CountUp start={0} end={4559} duration={3} delay={0} />
              )}
              +
            </span>
          </ScrollTrigger>
          <h6 className="text-sm text-center -mt-2 font-normal uppercase text-primary-blue-800">
            Təhvil verilmiş evlər
          </h6>
        </div>
        <div className="flex flex-col items-center gap-3 w-64 lg:w-auto ">
          <img
            src="./Professional.svg"
            alt="Peşəkar işçi sayı"
            className="w-8 h-8"
          />

          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <span className="text-2xl font-bold text-primary-blue-800">
              {counterOn && (
                <CountUp start={0} end={8120} duration={3} delay={0} />
              )}
              +
            </span>
          </ScrollTrigger>
          <h6 className="text-sm -mt-2 font-normal text-center uppercase text-primary-blue-800">
            Peşəkar işçi
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Stats;
