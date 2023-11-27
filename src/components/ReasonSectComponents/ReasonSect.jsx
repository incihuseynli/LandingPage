import BreadCrumbs from "../HeaderComponents/BreadCrumbs";
import { useEffect, useState } from "react";
import Axios from "axios";
import ReasonSectSlider from "../Sliders/ReasonSectSlider.jsx";
import RevealAnimation from "../RevealAnimation.jsx";
const URL =
  "https://my-json-server.typicode.com/dbForProjects/OtherDatas/reasons";
const ReasonSect = () => {
  const [reasons, setReasons] = useState([]);
  useEffect(() => {
    Axios.get(URL).then(({ data }) => {
      setReasons(data);
    });
  });
  return (
    <section className="pt-24 pb-4 px-4 md:px-8 lg:px-16 bg-secondary-gray-200">
      {/* ======================== HEAD ======================= */}
      <div className="ml-4 md:ml-14 lg:ml-0">
        <RevealAnimation>
          <BreadCrumbs menuTitle="Niyə biz?" />
        </RevealAnimation>
      </div>
      {/* ===================================================== */}
      <div
        className="
         mt-12 w-full my-24 px-4 py-4 md:px-14 lg:px-0 grid grid-cols-1 place-items-center text-center font-poppins
         lg:justify-between  lg:gap-10 gap-8 lg:grid-cols-[34rem_1fr]"
      >
        {/* ======== LEFT SIDE ======== */}
        <div className="flex flex-col gap-6">
          <RevealAnimation>
            <h4 className=" text-5xl font-bold tracking-wide text-primary-blue-800 text-left ">
              Hər cür aspektlərə sahibik
            </h4>
          </RevealAnimation>
          <RevealAnimation>
            <p className="font-poppins text-primary-blue-800 text-left font-extralight text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              tempore aspernatur officia soluta nostrum ab ex est distinctio in
              voluptate?
            </p>
          </RevealAnimation>
        </div>
        {/* ======== RIGHT SIDE ======== */}

        <ReasonSectSlider reasons={reasons} />
      </div>
    </section>
  );
};

export default ReasonSect;
