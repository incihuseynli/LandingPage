// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import TestimonalCard from "./TestimonalCard";
import { useEffect, useState } from "react";
import Axios from "axios";
const TestimonalSlider = () => {
  const URL =
    "https://my-json-server.typicode.com/dbForProjects/OtherDatas/testimonial";
  const [testimonals, setTestimonals] = useState([]);
  useEffect(() => {
    Axios.get(URL).then(({ data }) => {
      setTestimonals(data);
    });
  }, []);
  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper testimonalSwiper"
        style={{
          "--swiper-pagination-bullet-width": "5rem",
          "--swiper-pagination-bullet-height": ".3rem",
          "--swiper-pagination-bullet-horizontal-gap": "0px",
          "--swiper-pagination-bullet-border-radius": "0",
          "--swiper-pagination-bottom": "120px",
        }}
      >
        {testimonals.map((testimonals) => {
          return (
            <SwiperSlide key={testimonals.id}>
              <TestimonalCard testimonals={testimonals} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonalSlider;
