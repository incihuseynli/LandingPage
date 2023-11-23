import React from "react";
import { NavLink } from "react-router-dom";

const Btn = ({ btnText, btnPath }) => {
  return (
    <NavLink
      to={btnPath}
      className="
        w-48 h-16 rounded-md bg-primary-blue-400 font-poppins
        text-center text-secondary-white text-xl 
        capitalize pt-4 tracking-wider
        transition-all duration-300 
        hover:border-2 hover:border-primary-blue-400
        hover:bg-secondary-white hover:text-primary-blue-400
        "
    >
      {btnText}
    </NavLink>
  );
};

export default Btn;
