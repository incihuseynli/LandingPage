import Axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import RevealAnimation from "../components/RevealAnimation";
const Projects = () => {
  const URL =
    "https://my-json-server.typicode.com/dbForProjects/ProjectsDataAz/projects";
  const itemsPerPage = 6;

  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    Axios.get(URL).then(({ data }) => {
      setProjects(data);
    });
  }, []);

  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <>
      <Helmet>
        <title>Layihələrimiz</title>
        <meta name="description" content="Layihələrimiz" />
      </Helmet>
      <motion.main
        className="px-4 md:px-8 lg:px-16 py-10 flex flex-col gap-6 md:gap-14 lg:gap-16 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <RevealAnimation>
          <h4 className="text-5xl text-center font-bold text-primary-blue-800 tracking-wider max-w-fit mb-14">
            Layihələrimiz
          </h4>
        </RevealAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center gap-y-10">
          {currentProjects.map(({ id, title, image1, place }) => {
            return (
              <RevealAnimation key={id}>
                <NavLink
                  to={`/layihələrimiz/${id}`}
                  className="w-72 h-80 relative"
                >
                  <img
                    src={image1}
                    alt={title}
                    className="w-72 h-80 object-cover rounded-2xl"
                  />
                  <div
                    className="rounded-b-2xl
                  absolute bottom-0  pl-4 py-4 w-full 
                  text-secondary-white bg-secondary-black 
                  bg-opacity-60 flex flex-col text-left 
                  cardShadow"
                  >
                    <h6 className="text-lg font-bold  tracking-wider capitalize">
                      {title}
                    </h6>
                    <span className="font-poppins text-sm font-thin tracking-wide">
                      {place}
                    </span>
                  </div>
                </NavLink>
              </RevealAnimation>
            );
          })}
        </div>
        {/* Pagination */}
        <RevealAnimation>
          <div className=" flex gap-3 items-center justify-center">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="
            rounded-full border border-secondary-black
            w-20 h-8 px-4 text-sm font-medium text-secondary-black
            hover:bg-primary-blue-400 hover:border-primary-blue-400
            hover:text-secondary-white transition-all duration-500
            disabled:cursor-not-allowed disabled:text-secondary-black
            disabled:bg-secondary-white disabled:border-secondary-black
            "
            >
              Prev
            </button>
            {Array.from(
              { length: Math.ceil(projects.length / itemsPerPage) },
              (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={
                    currentPage === i + 1
                      ? "w-8 h-8 text-center px-2 text-sm font-medium rounded-2xl bg-primary-blue-400 border-primary-blue-400 text-secondary-white transition-all duration-500"
                      : "w-8 h-8 text-center px-2 rounded-full border border-secondary-black text-sm font-medium text-secondary-black hover:text-secondary-white hover:bg-primary-blue-400 hover:border-primary-blue-400 transition-all duration-500"
                  }
                >
                  {i + 1}
                </button>
              )
            )}
            <button
              onClick={nextPage}
              disabled={
                currentPage === Math.ceil(projects.length / itemsPerPage)
              }
              className="
            rounded-full border border-secondary-black
            w-20 h-8 px-4 text-sm font-medium text-secondary-black
            hover:bg-primary-blue-400 hover:border-primary-blue-400
            hover:text-secondary-white transition-all duration-500
            disabled:cursor-not-allowed disabled:text-secondary-black
            disabled:bg-secondary-white disabled:border-secondary-black
            "
            >
              Next
            </button>
          </div>
        </RevealAnimation>
      </motion.main>
    </>
  );
};

export default Projects;
