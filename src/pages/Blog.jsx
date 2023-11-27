import Axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BlogCard from "../components/BlogComponents/BlogCard";
import { motion } from "framer-motion";
import RevealAnimation from "../components/RevealAnimation";
const Blog = () => {
  const URL =
    "https://my-json-server.typicode.com/dbForProjects/BlogDatas/blog";
  const itemsPerPage = 4;

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    Axios.get(URL).then(({ data }) => {
      setPosts(data);
    });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDatas = posts.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);
  return (
    <>
      <Helmet>
        <title>Bloq</title>
        <meta name="description" content="Bloq yazılarımız" />
      </Helmet>
      <motion.main
        className="px-4 md:px-8 lg:px-16 py-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <RevealAnimation>
          <h4 className="text-5xl text-center font-bold text-primary-blue-800 tracking-wider  max-w-fit mb-14">
            Bloq
          </h4>
        </RevealAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 place-items-center gap-y-10">
          {currentDatas.map((currentData) => {
            return (
              <RevealAnimation key={currentData.id}>
                <BlogCard currentData={currentData} />
              </RevealAnimation>
            );
          })}
        </div>
        {/* ============================= Pagination ============================= */}
        <RevealAnimation>
          <div className="mt-24 flex gap-3 items-center justify-center">
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
              { length: Math.ceil(posts.length / itemsPerPage) },
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
              disabled={currentPage === Math.ceil(posts.length / itemsPerPage)}
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

export default Blog;
