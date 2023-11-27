import Heading from "./Heading";
import HeroSlider from "../Sliders/HeroSlider.jsx";
import Stats from "./Stats.jsx";
import RevealAnimation from "../RevealAnimation.jsx";

const Hero = () => {
  
  return (
    <section>
      <div
        className="grid grid-cols-1 px-4 py-8 md:px-8 gap-8
        lg:grid-cols-[34rem_1fr] lg:px-16
        "
      >
        {/* ================ Heading =============== */}
        <RevealAnimation>
          <Heading />
        </RevealAnimation>

        {/* ================ Slider =============== */}

        <RevealAnimation>
          <HeroSlider />
        </RevealAnimation>
      </div>
      {/* ================ Stats =============== */}
      <RevealAnimation>
        <Stats />
      </RevealAnimation>
    </section>
  );
};

export default Hero;
