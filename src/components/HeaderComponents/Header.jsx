import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header
      className="w-full font-poppins 
        px-4 py-8 flex justify-between items-center
        md:px-8
        lg:px-16
    "
    >
      {/* ======================= Logo ======================= */}

      <div className="flex gap-8 items-center justify-between">
        <NavLink to="/">
          <img src="./Logo.png" alt="arcLand Logo" />
        </NavLink>
        <div className="hidden md:flex md:gap-2 md:items-center">
          <img src="/phone.svg" alt="əlaqə nömrəsi" className="w-5 h-5" />
          <span className="text-lg text-primary-blue-400">
            +994 012 345 67 89
          </span>
        </div>
      </div>
      {/* ======================= NAVBAR ======================= */}

      {/* === Mobile Menu === */}
      <MobileMenu />
      {/* === Desktop Menu === */}
      <div
        className="
            hidden
            lg:flex lg:justify-between lg:items-center lg:flex-row lg:gap-4"
      >
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
