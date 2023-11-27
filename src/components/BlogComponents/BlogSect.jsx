import BlogCard from "./BlogCard";
import SectionHead from "../HeaderComponents/SectionHead";
import Btn from "../Buttons/Btn";
import { useEffect, useState } from "react";
import Axios from "axios";
import RevealAnimation from "../RevealAnimation";
const BlogSect = () => {
  const URL = "http://localhost:3030/blog?_limit=4";

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Axios.get(URL).then(({ data }) => {
      setPosts(data);
    });
  }, []);
  return (
    <section
      className="py-16 px-4 md:px-8 lg:px-16 
      flex flex-col gap-24 items-center"
    >
      <div className="flex flex-col gap-16">
        {/* ========================= SECTION HEAD =========================== */}
        <SectionHead
          sectName="Bloq yazılarımız"
          title="Ən son yazılarımız və xəbərlər"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-x-8 gap-y-16 place-items-center">
          {posts.map((post) => {
            return (
              <RevealAnimation key={post.id}>
                <BlogCard currentData={post} />
              </RevealAnimation>
            );
          })}
        </div>
      </div>

      <Btn btnPath="/bloq" btnText="Hamısı" />
    </section>
  );
};

export default BlogSect;
