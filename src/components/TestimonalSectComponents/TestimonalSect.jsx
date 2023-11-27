import SectionHead from "../HeaderComponents/SectionHead";
import TestimonalSlider from "./TestimonalSlider";

const TestimonalSect = () => {
  return (
    <section className="flex flex-col items-center gap-10 px-4 md:px-8 lg:px-16">
      {/*  ====================== Section Head ====================== */}
      <SectionHead sectName="Müştərilərimiz" title="Müştərilərimizin rəyləri" />
      {/*  ====================== Testimonal Slider ====================== */}

      <div className="w-full flex justify-center items-center">
        <TestimonalSlider />
      </div>
    </section>
  );
};

export default TestimonalSect;
