/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
const HeroSlider = () => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const carousel = useRef();

  const URL =
    "https://my-json-server.typicode.com/dbForProjects/ProjectsDataAz/projects";
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    Axios.get(URL).then(({ data }) => {
      setProjects(data);
      // console.log(data);
    });
  }, []);
  useEffect(() => {
    setSliderWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [projects]);
  return (
    <>
      {/* PARENT */}
      <motion.div ref={carousel} className="carousel">
        {/* INNER */}
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -sliderWidth }}
          whileDrag={{ cursor: "grabbing" }}
          className="inner-carousel"
        >
          {/* ITEM */}
          {projects.map(({ id, image1, title, units }) => {
            return (
              <motion.div key={id} className="item relative">
                <img src={image1} alt={title} className="w-full h-full" />
                <NavLink
                  to={`/layihələrimiz/${id}`}
                  className="absolute bottom-4 rounded-b-2xl pl-4 py-4 w-80
                 text-secondary-white bg-secondary-black bg-opacity-60 flex flex-col gap-2 text-left cardShadow"
                >
                  <h6
                    className="text-lg font-bold  tracking-wider
                  capitalize"
                  >
                    {title}
                  </h6>
                  <span className="font-poppins text-sm font-thin tracking-wide">
                    {units}
                  </span>
                </NavLink>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
};

export default HeroSlider;
