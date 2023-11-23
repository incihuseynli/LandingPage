import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/HeroSectComponents/Hero";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Əsas səhifə</title>
        <meta name="description" content="Yaşamaqdan zövq alacağın evi seç" />
      </Helmet>
      <main className="font-anonymous">
        {/* =================== Hero Section ================= */}
        <Hero />
      </main>
    </>
  );
};

export default Home;
