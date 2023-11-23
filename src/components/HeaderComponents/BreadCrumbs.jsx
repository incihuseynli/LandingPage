import React from "react";
import { NavLink } from "react-router-dom";

const BreadCrumbs = ({ menuTitle, menuPath }) => {
  return (
    <div className="flex gap-6 items-center">
      <img src="./arrow.svg" alt="arrow icon" />
      <NavLink
        to={menuPath}
        className="
        text-xl font-medium font-poppins text-primary-blue-400
        tracking-wider capitalize
        "
      >
        {menuTitle}
      </NavLink>
    </div>
  );
};

export default BreadCrumbs;
