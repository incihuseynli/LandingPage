import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Projects from "../pages/Projects.jsx";
import Blog from "../pages/Blog.jsx";
import Contact from "../pages/Contact.jsx";
import ProjectDetails from "../pages/ProjectDetails.jsx";
import BlogDetails from "../pages/BlogDetails.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
export const Paths = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    title: "Əsas səhifə",
  },
  {
    id: 2,
    path: "/haqqımızda",
    element: <About />,
    title: "Haqqımızda",
  },
  {
    id: 3,
    path: "/layihələrimiz",
    element: <Projects />,
    title: "Layihələrimiz",
  },
  {
    id: 4,
    path: "/bloq",
    element: <Blog />,
    title: "Bloq",
  },
  {
    id: 5,
    path: "/əlaqə",
    element: <Contact />,
    title: "Əlaqə",
  },
  {
    id: 6,
    path: "/layihələrimiz/:id",
    element: <ProjectDetails />,
  },
  {
    id: 7,
    path: "/bloq/:id",
    element: <BlogDetails/>
  },
  {
    id:8,
    path: "*",
    element:<PageNotFound/>
  }
];
