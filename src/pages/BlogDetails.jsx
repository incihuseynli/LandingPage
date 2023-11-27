import Axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import BlogTabs from "../components/BlogComponents/BlogTabs";
import { motion } from "framer-motion";
import RevealAnimation from "../components/RevealAnimation";
const BlogDetails = () => {
  const URL =
    "https://my-json-server.typicode.com/dbForProjects/BlogDatas/blog/";
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    Axios.get(URL + id).then(({ data }) => {
      setPost(data);
    });
    document.title = post.title;
    const helmet = Helmet.peek();
    if (helmet) {
      helmet.title = post.title;
    }
  }, [id, post.title]);

  return (
    <>
      <Helmet>
        <title>Bloq</title>
        <meta name="description" content="postun title" />
      </Helmet>
      <motion.main
        className="px-4 md:px-8 lg:px-16 py-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <RevealAnimation>
          <h4 className="text-4xl text-center font-bold text-primary-blue-800 tracking-wider  pb-5 max-w-fit mb-14">
            {post.title}
          </h4>
        </RevealAnimation>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_30rem] justify-center">
          <div className="flex flex-col justify-center gap-8">
            <RevealAnimation>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 object-cover rounded-2xl cardShadow2"
              />
            </RevealAnimation>
            <RevealAnimation>
              <div className=" flex  items-center justify-between px-2">
                <span className="text-sm font-medium text-primary-blue-900 capitalize">
                  {post.date}
                </span>
                <span className="text-sm font-medium text-primary-blue-900 capitalize flex items-center gap-1 ">
                  <img src="./eye.svg" alt="" className="w-4 h-4" />
                  {post.views}
                </span>
              </div>
            </RevealAnimation>

            <div className="flex flex-col gap-4">
              <RevealAnimation>
                <p className="indent-8 text-lg font-normal tracking-wider text-primary-blue-900 text-center md:text-left">
                  {post.content}
                </p>
              </RevealAnimation>
              <RevealAnimation>
                <p className="indent-8 text-lg font-normal italic tracking-wider text-primary-blue-900  text-center md:text-left">
                  {post.caption}
                </p>
              </RevealAnimation>
              <RevealAnimation>
                <p className="indent-8 text-lg font-normal tracking-wider text-primary-blue-900  text-center md:text-left">
                  {post.content}
                </p>
              </RevealAnimation>
              <RevealAnimation>
                <div className=" flex  items-center justify-between px-2">
                  <span className="text-lg font-medium text-primary-blue-900 capitalize">
                    {post.author}
                  </span>
                  <span className="text-xs font-medium text-primary-blue-900 capitalize flex items-center gap-4">
                    Follow Author:
                    <span className=" bg-primary-blue-400  flex items-center rounded-md gap-4 py-2 px-4 ">
                      <img
                        src="./instagram.svg"
                        alt="instagram link"
                        className="w-5 h-5 cursor-pointer"
                      />
                      <img
                        src="./facebook.svg"
                        alt="facebook link"
                        className="w-5 h-5 cursor-pointer"
                      />
                      <img
                        src="./twitter.svg"
                        alt="twitter link"
                        className="w-5 h-5 cursor-pointer"
                      />
                      <img
                        src="./linkedin.svg"
                        alt="linkedin link"
                        className="w-5 h-5 cursor-pointer"
                      />
                    </span>
                  </span>
                </div>
              </RevealAnimation>
            </div>
          </div>
          {/* TABS */}
          <BlogTabs />
        </div>
      </motion.main>
    </>
  );
};

export default BlogDetails;
