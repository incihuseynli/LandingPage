// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import Axios from "axios";

const ProjectSlider = () => {
  const URL = "https://my-json-server.typicode.com/dbForProjects/ProjectsDataAz/projects";

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    Axios.get(URL).then(({ data }) => {
      setProjects(data);
    });
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={18}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper projectSlider"
        style={{
          "--swiper-pagination-bullet-width": "5rem",
          "--swiper-pagination-bullet-height": ".3rem",
          "--swiper-pagination-bullet-horizontal-gap": "0px",
          "--swiper-pagination-bullet-border-radius": "0",
        }}
      >
        {projects.map((project) => {
          return (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProjectSlider;
