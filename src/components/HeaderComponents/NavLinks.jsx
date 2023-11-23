import React from "react";
import { Paths } from "../Paths";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      {Paths.map(({ id, title, path }) => {
        return (
          <NavLink
            key={id}
            to={path}
            className="
            w-fit h-8
            font-poppins font-medium text-xl
            text-secondary-white hover:text-primary-blue-400
              navMenu transition-all duration-200 lg:text-secondary-black
             "
          >
            {title}
          </NavLink>
        );
      })}
    </>
  );
};

export default NavLinks;
