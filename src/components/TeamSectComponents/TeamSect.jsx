import SectionHead from "../HeaderComponents/SectionHead";
import RevealAnimation from "../RevealAnimation";
import TeamSlider from "./TeamSlider";

const TeamSect = () => {
  return (
    <section
      className="py-24 grid grid-rows-2 
      "
    >
      {/* ==================== Section Head ========================== */}
      <div className="flex flex-col gap-6  px-4 md:px-8 lg:px-16 w-1/2">
        <SectionHead
          sectName="Komandamız"
          title="Möhtəşəm komanda"
        />

        <RevealAnimation>
          <p
            className="font-poppins text-base 
          font-medium text-primary-blue-800
          tracking-wide lg:w-80 text-left"
          >
            Lorem, ipsum dolor sit amet <br className="block md:hidden" />
            consectetur adipisicing elit. Consequatur, soluta?
          </p>
        </RevealAnimation>
      </div>
      {/* ==================== Tab Content ========================== */}

      <div className="-mt-12 ">
        <RevealAnimation>
          <div className="w-full flex flex-col items-center">
            <TeamSlider />
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default TeamSect;
