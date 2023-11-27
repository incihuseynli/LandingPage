import Axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import RevealAnimation from "../RevealAnimation";

const BlogTabs = () => {
  const URL = "http://localhost:3030/blog?_limit=4";
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Axios.get(URL).then(({ data }) => {
      setPosts(data);
    });
  });
  return (
    <div className="flex flex-col gap-6 ">
      <RevealAnimation>
        <h4 className="text-xl text-left font-medium text-primary-blue-400 tracking-wider">
          Digər bloq yazılarımız:
        </h4>
      </RevealAnimation>
      {posts.map(({ id, title, image, date, author }) => {
        return (
          <RevealAnimation key={id}>
            <NavLink
              to={`/bloq/${id}`}
              className="flex  gap-4 items-center  rounded-lg h-36 text-primary-blue-900 cardShadow hover:bg-primary-blue-400 hover:text-secondary-white transition-all duration-700 blogTab">
              <img
                src={image}
                alt=""
                className="w-28 md:w-44 h-full object-cover rounded-s-lg"
              />
              <div className="flex flex-col  gap-2 py-4 pr-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-mediumcapitalize">
                    {author}
                  </span>
                  <span className="text-sm font-medium  capitalize">
                    {date}
                  </span>
                </div>
                <h6 className="font-poppins text-lg text-left font-bold tracking-wider">
                  {title}
                </h6>
              </div>
            </NavLink>
          </RevealAnimation>
        );
      })}
      <NavLink
        to="/bloq"
        className="flex place-self-end w-fit text-xs font-medium text-primary-blue-400 underline underline-offset-4 hover:text-primary-blue-800"
      >
        Daha çoxuna bax
      </NavLink>
    </div>
  );
};

export default BlogTabs;
