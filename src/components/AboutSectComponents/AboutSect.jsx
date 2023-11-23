import React from "react";
import BreadCrumbs from "../HeaderComponents/BreadCrumbs";
import Btn from "../Buttons/Btn.jsx";

const AboutSect = () => {
  return (
    <section
      className="
      w-full my-24 px-4 py-4 md:px-8 lg:px-16 grid grid-cols-1 place-items-center text-center font-poppins
      lg:grid-cols-2 lg:justify-between lg:items-start lg:gap-20 gap-8
      "
    >
      <div className="flex flex-col gap-8 text-left ">
        <BreadCrumbs menuPath="/haqqımızda" menuTitle="Haqqımızda" />
        <h4
          className="
        text-3xl font-bold text-secondary-black tracking-wider
        "
        >
          Sizə verdiyimiz dəyəri hiss edin
        </h4>
        <img
          src="./about1.jpg"
          alt="Layihə"
          className="w-[640px] rounded-xl mt-10"
        />
      </div>
      {/* ============================ xxxxxxxx ================================= */}
      <div className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">
        <img src="./about2.jpg" alt="Layihə" className="w-[640px] rounded-xl" />
        <p
          className="
            w-3/4  lg:w-full
            text-lg font-normal tracking-wide text-primary-blue-900"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum
          voluptate debitis dolor ducimus quasi.Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
        <p className="text-lg -mt-4 font-normal tracking-wide text-primary-blue-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Btn btnPath="/haqqımızda" btnText="Daha çox" />
      </div>
    </section>
  );
};

export default AboutSect;
