import SectionHead from "../HeaderComponents/SectionHead";
import ProjectSlider from "./ProjectSlider";
import Btn from "../Buttons/Btn";
import RevealAnimation from "../RevealAnimation";
const ProjectSect = () => {
  return (
    <section className="pt-36 pb-16 flex flex-col gap-20">
      {/* ==================== Section Head =============================== */}
      <div className="ml-4 md:ml-8 lg:ml-16">
        <SectionHead
          sectName="Layihələrimiz"
          title="Uğurlu layihələrimizə baxın"
        />
      </div>
      {/* ==================== Slider =============================== */}

      <RevealAnimation>
        <ProjectSlider />
      </RevealAnimation>
      <div className="flex items-center justify-center">
        <Btn btnPath="/layihələrimiz" btnText="Hamısı" />
      </div>
    </section>
  );
};

export default ProjectSect;
