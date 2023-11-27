import { Helmet } from "react-helmet";
import Hero from "../components/HeroSectComponents/Hero";
import AboutSect from "../components/AboutSectComponents/AboutSect";
import ReasonSect from "../components/ReasonSectComponents/ReasonSect";
import Properties from "../components/ProjectComponents/Properties";
import TeamSect from "../components/TeamSectComponents/TeamSect";
import BlogSect from "../components/BlogComponents/BlogSect";
import ContactSect from "../components/ContactSectComponents/ContactSect";
import ProjectSect from "../components/ProjectComponents/ProjectSect";
import TestimonalSect from "../components/TestimonalSectComponents/TestimonalSect";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Əsas səhifə</title>
        <meta name="description" content="Yaşamaqdan zövq alacağın evi seç" />
      </Helmet>
      <motion.main
        className="font-anonymous"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {/* =================== Hero Section ================= */}
        <Hero />
        {/* =================== About Section ================= */}
        <AboutSect />
        {/* =================== Reasons Section ================= */}
        <ReasonSect />
        {/* =================== Projects Section ================= */}
        <ProjectSect />
        {/* =================== Properties Section ================= */}
        <Properties />
        {/* =================== Team Section ================= */}
        <TeamSect />
        {/* =================== Testimonals Section ================= */}
        <TestimonalSect />
        {/* =================== Blog Section ================= */}
        <BlogSect />
        {/* =================== Contact Section ================= */}
        <ContactSect />
      </motion.main>
    </>
  );
};

export default Home;
