import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Paths } from "./Paths";
import Header from "./HeaderComponents/Header.jsx";
import Footer from "./FooterComponents/Footer.jsx";
import ToTop from "./ToTop.jsx";
import { AnimatePresence } from "framer-motion";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      {/* ===================== Header Section =====================  */}
      <Header />
      <AnimatePresence >
        <Routes location={location} key={location.pathname}>
          {Paths.map(({ id, path, element }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Routes>
      </AnimatePresence>
      {/* Page Up Button */}
      <ToTop />
      {/* ===================== Footer Section =====================  */}
      <Footer />
    </>
  );
};

export default AnimatedRoutes;
