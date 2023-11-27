import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Btn from "../components/Buttons/Btn";
import { motion } from "framer-motion";
import RevealAnimation from "../components/RevealAnimation";
const ProjectDetails = () => {
  const URL =
    "https://my-json-server.typicode.com/dbForProjects/ProjectsDataAz/projects/";
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [activeImage, setActiveImage] = useState(project.image1);
  useEffect(() => {
    Axios.get(URL + id).then(({ data }) => {
      setProject(data);
    });
  }, [id]);

  const getImg = (source) => {
    document.querySelector("#mainImg").src = source;
    setActiveImage(source);
  };

  return (
    <motion.main
      className="pt-12 pb-24 px-4 md:px-8 lg:px-16 flex flex-col gap-16 items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {/* PAGE TITLE */}
      <RevealAnimation>
        <h4 className=" break-words text-5xl text-center font-bold text-primary-blue-800 tracking-wider">
          {project.title}
        </h4>
      </RevealAnimation>

      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          {/* MAIN IMG */}
          <RevealAnimation>
            <img
              id="mainImg"
              src={project.image1 || activeImage}
              alt={project.title}
              className="rounded-2xl object-cover w-full h-96 cardShadow2"
            />
          </RevealAnimation>
          <div className="flex flex-col gap-14 ">
            {/* DETAILS */}
            <div className="flex flex-col gap-4">
              <RevealAnimation>
                <h5 className="text-2xl uppercase text-primary-blue-400 font-bold tracking-wider">
                  Detallar:
                </h5>
              </RevealAnimation>
              <ul className="tracking-wider text-primary-blue-900 flex flex-col gap-2">
                <RevealAnimation>
                  <li>
                    <span className="text-xl font-medium">Yerləşir : </span>
                    <span className="text-lg font-normal">{project.place}</span>
                  </li>
                </RevealAnimation>
                <RevealAnimation>
                  <li>
                    <span className="text-xl font-medium">
                      Otaq/Unit sayı :{" "}
                    </span>
                    <span className="text-lg font-normal">{project.units}</span>
                  </li>
                </RevealAnimation>
                <RevealAnimation>
                  <li>
                    <span className="text-xl font-medium">Qiymət : </span>
                    <span className="text-lg font-medium text-secondary-red-500 ">
                      {project.price}
                    </span>
                  </li>
                </RevealAnimation>
              </ul>
            </div>

            {/* SMALL IMAGES */}
            <div className="flex  gap-6 justify-center lg:justify-start items-center">
              <RevealAnimation>
                <img
                  src={project.image1}
                  alt=""
                  className={`w-20 h-20 md:w-44 md:h-44 rounded-2xl object-cover cursor-pointer
                  ${
                    activeImage === project.image1
                      ? "border-4 border-primary-blue-400"
                      : ""
                  }`}
                  onClick={() => getImg(project.image1)}
                />
              </RevealAnimation>
              <RevealAnimation>
                <img
                  src={project.image2}
                  alt=""
                  className={`w-20 h-20 md:w-44 md:h-44 rounded-2xl object-cover cursor-pointer
                  ${
                    activeImage === project.image2
                      ? "border-4 border-primary-blue-400"
                      : ""
                  }`}
                  onClick={() => getImg(project.image2)}
                />
              </RevealAnimation>
              <RevealAnimation>
                <img
                  src={project.image3}
                  alt=""
                  className={`w-20 h-20 md:w-44 md:h-44 rounded-2xl object-cover cursor-pointer
                  ${
                    activeImage === project.image3
                      ? "border-4 border-primary-blue-400"
                      : ""
                  }`}
                  onClick={() => getImg(project.image3)}
                />
              </RevealAnimation>
            </div>
          </div>
        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-8 items-center lg:items-start">
          <RevealAnimation>
            <p
              className="text-lg tracking-wider text-primary-blue-900 font-normal
          font-poppins indent-8  text-center md:text-left"
            >
              {project.content}
            </p>
          </RevealAnimation>

          <div className="w-full flex flex-col gap-6 justify-center items-center md:flex-row md:justify-between">
            <h6 className="text-xl font-medium text-primary-blue-400">
              Maraqlanmaq üçün əlaqə saxlayın:{" "}
            </h6>
            <Btn btnPath="/əlaqə" btnText="Əlaqə" />
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default ProjectDetails;
