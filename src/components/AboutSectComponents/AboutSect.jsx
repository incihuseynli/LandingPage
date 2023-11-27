import BreadCrumbs from "../HeaderComponents/BreadCrumbs";
import Btn from "../Buttons/Btn.jsx";
import RevealAnimation from "../RevealAnimation.jsx";
import { useEffect, useState } from "react";
import Axios from "axios";
const AboutSect = () => {
  const URL =
    "https://my-json-server.typicode.com/dbForProjects/OtherDatas/about";
  const [about, setAbout] = useState([]);
  useEffect(() => {
    Axios.get(URL).then(({ data }) => {
      setAbout(data);
    });
  }, []);
  return (
    <>
      {about.map(({ id, pageTitle, img1, img2, caption, title }) => {
        return (
          <section
            key={id}
            className="w-full my-24 px-4 py-4 md:px-8 lg:px-16 grid grid-cols-1 place-items-center text-center font-poppins
            lg:grid-cols-2 lg:justify-between lg:items-start lg:gap-20 gap-8"
          >
            <div className="flex flex-col gap-8 text-left ">
              <RevealAnimation>
                <BreadCrumbs menuTitle={pageTitle} />
              </RevealAnimation>
              <RevealAnimation>
                <h4 className="text-3xl font-bold text-secondary-black tracking-wider">
                  {title}
                </h4>
              </RevealAnimation>
              <RevealAnimation>
                <img
                  src={img1}
                  alt="Layihə"
                  className="w-[640px] rounded-xl mt-10"
                />
              </RevealAnimation>
            </div>

            {/* ============================ xxxxxxxx ================================= */}
            <div className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">
              <RevealAnimation>
                <img src={img2} alt="Layihə" className="w-[640px] rounded-xl" />
              </RevealAnimation>
              <RevealAnimation>
                <p className=" lg:w-full text-lg font-normal tracking-wide text-primary-blue-900">
                  {caption}
                </p>
              </RevealAnimation>

              <Btn btnPath="/haqqımızda" btnText="Daha çox" />
            </div>
          </section>
        );
      })}
    </>
  );
};

export default AboutSect;
