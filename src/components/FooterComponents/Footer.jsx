import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="
      w-screen bg-primary-blue-800 px-4 pt-16 pb-4
      flex flex-col gap-16  text-secondary-white text-center
      md:px-8 lg:px-16
      "
    >
      <div className="grid grid-cols-1 place-items-center gap-10  md:grid-cols-2 ">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center md:items-start gap-8">
          <NavLink to="/">
            <img src="./Logo.png" alt="arcLand Logo" />
          </NavLink>
          <p className="w-3/4 text-left text-sm capitalize">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam,
            mollitia quis. Debitis reiciendis maiores impedit. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Ullam, mollitia quis.
            Debitis reiciendis maiores impedit.
          </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center  gap-16">
          <div
            className="
            w-full flex flex-col item-center gap-24
            md:flex-row md:items-start md:justify-between
            "
          >
            <div className="w-44 flex flex-col items-start gap-2">
              <h5 className="text-lg font-bold">Əlaqə nömrəsi</h5>
              <span className="text-sm">+994 012 345 67 89</span>
            </div>
            <div className="w-44 flex flex-col items-start gap-2">
              <h5 className="text-lg font-bold">Email</h5>
              <span className="text-sm">hello@info.com</span>
            </div>
          </div>
          <div
            className="
            w-full flex flex-col item-center gap-24
            md:flex-row md:items-start md:text-left md:justify-between
            "
          >
            <div className="w-44 flex flex-col items-start gap-2">
              <h5 className="text-lg font-bold">Ünvan</h5>
              <span className="text-sm">Lorem ipsum dolor sit amet.</span>
            </div>
            <div className="w-44 flex flex-col items-start gap-2">
              <h5 className="text-lg font-bold">Bizi izləyin</h5>
              <div className="flex items-center gap-2">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs text-secondary-gray-200 text-center">
        &copy;All Rights Reserved 2023.
      </p>
    </footer>
  );
};

export default Footer;
