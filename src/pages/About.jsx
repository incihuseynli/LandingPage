import { Helmet } from "react-helmet";
import HeroSlider from "../components/Sliders/HeroSlider";
import Stats from "../components/HeroSectComponents/Stats";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Axios from "axios";
import RevealAnimation from "../components/RevealAnimation";
const About = () => {
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
      <Helmet>
        <title>Haqqımızda</title>
        <meta name="description" content="Arcland haqqında məlumat" />
      </Helmet>
      {about.map(({ id, pageTitle, img2, content }) => {
        return (
          <motion.main
            key={id}
            className="px-4 md:px-8 lg:px-16 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="flex flex-col items-center mb-10">
              <RevealAnimation>
                <h4 className=" text-5xl text-center font-bold text-primary-blue-800 tracking-wider  max-w-fit mb-14 ">
                  {pageTitle}
                </h4>
              </RevealAnimation>

              <div className="font-poppins flex flex-col gap-8 justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  <RevealAnimation>
                    <img
                      src={img2}
                      alt="Layihə"
                      className="w-[480px] rounded-xl md:w-full lg:w-[480px]"
                    />
                  </RevealAnimation>
                  <RevealAnimation>
                    <p className="text-lg font-thin text-primary-blue-900 tracking-wider indent-8 text-center md:text-left">
                      {content}
                    </p>
                  </RevealAnimation>
                </div>
                <div className="flex flex-col gap-4">
                  <RevealAnimation>
                    <p className="text-lg font-thin text-primary-blue-900 tracking-wider indent-4 text-center md:text-left">
                      {content}
                    </p>
                  </RevealAnimation>
                  <RevealAnimation>
                    <Stats />
                  </RevealAnimation>
                  <RevealAnimation>
                    <p className="text-lg font-thin text-primary-blue-900 tracking-wider indent-4 text-center md:text-left">
                      {content}
                    </p>
                  </RevealAnimation>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center gap-6">
              <RevealAnimation>
                <h5 className=" text-2xl text-center font-bold text-primary-blue-800 tracking-wider">
                  Qalleriya
                </h5>
              </RevealAnimation>
                <HeroSlider/>
            </div>
          </motion.main>
        );
      })}
    </>
  );
};

export default About;
