import React from "react";
import Heading from "./Heading";
import HeroSlider from "../Sliders/HeroSlider.jsx";
import Stats from "./Stats.jsx";
const Hero = () => {
  return (
    <section>
      <div
        className="grid grid-cols-1 px-4 py-8 
        lg:grid-cols-[34rem_1fr] lg:px-16
        "
      >
        {/* ================ Heading =============== */}
        <Heading />
        {/* ================ Slider =============== */}
        <HeroSlider />
      </div>
      {/* ================ Stats =============== */}
      <Stats/>
    </section>
  );
};

export default Hero;
