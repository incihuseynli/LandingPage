import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Paths } from "./Paths";
import Header from "./HeaderComponents/Header.jsx";
import Footer from "./FooterComponents/Footer.jsx";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      {/* ===================== Header Section =====================  */}
      <Header />

      <Routes location={location} key={location.pathname}>
        {Paths.map(({ id, path, element }) => {
          return <Route key={id} path={path} element={element} />;
        })}
      </Routes>
      {/* ===================== Footer Section =====================  */}
      <Footer />
    </>
  );
};

export default AnimatedRoutes;
