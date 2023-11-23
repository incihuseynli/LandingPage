import React, { useState } from "react";
import NavLinks from "./NavLinks";

const MobileMenu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="
        relative
        lg:hidden
      "
    >
      <img
        onClick={() => setIsActive(!isActive)}
        src={isActive ? "/closeBtn.svg" : "/hamburgerMenu.svg"}
        alt="mobile menu icon"
        className="
            w-6 h-6 cursor-pointer
            lg:hidden
          "
      />
      {isActive && (
        <div
          className=" w-screen p-10  rounded-md rounded-e-none
            fixed top-16 z-50  bg-primary-blue-100 
            flex flex-col gap-4 slide-left
            "
        >
          <NavLinks />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
