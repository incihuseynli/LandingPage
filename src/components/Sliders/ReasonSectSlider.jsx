/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ReasonSectSlider = ({ reasons }) => {
  const [sliderWidth, setSliderWidth] = useState(0);

  const carousel = useRef();
  useEffect(() => {
    setSliderWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [reasons]);
  return (
    <>
        <motion.div ref={carousel} className="carousel w-full">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -sliderWidth }}
            whileDrag={{ cursor: "grabbing" }}
            className="inner-carousel gap-8"
          >
            {reasons.map(({ id, title, icon, content }) => {
              return (
                <motion.div
                  key={id}
                  className="item2 bg-secondary-white text-primary-blue-800
                  py-10 px-6 text-left flex flex-col gap-6 rounded-2xl cardShadow
                  cursor-pointer transition-all duration-1000
                  hover:bg-primary-blue-400 hover:text-secondary-white"
                >
                  <img src={icon} alt="" className="w-10 h-10" />
                  <h6 className="text-2xl  font-bold tracking-wide capitalize">
                    {title}
                  </h6>
                  <p className="text-base font-light font-poppins tracking-wider">
                    {content}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
    </>
  );
};

export default ReasonSectSlider;
