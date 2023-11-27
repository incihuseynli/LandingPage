import { NavLink } from "react-router-dom";
import RevealAnimation from "../RevealAnimation";

const PropertiesCard = ({ projects: { image1, title, place, price } }) => {
  return (
    <RevealAnimation>
      <div
        className="w-full md:mr-20
        md:w-72 rounded-xl font-poppins
        flex flex-col gap-4 text-secondary-black cardShadow
        cursor-pointer transition-all duration-500
        hover:bg-primary-blue-400 hover:text-secondary-white
        "
      >
        <img
          src={image1}
          alt="Böyük Əmlak"
          className="w-full md:h-64 rounded-t-xl"
        />
        <div className="px-2 pb-4">
          <div className="flex justify-between items-center">
            <h6 className="text-lg font-bold tracking-wide">{title}</h6>
            <NavLink
              to="/əlaqə"
              className="bg-secondary-white p-2 mr-2 rounded-full"
            >
              <img
                src="./phone.svg"
                alt="əlaqə qurun"
                className="w-5 h-5 -rotate-90"
              />
            </NavLink>
          </div>
          <span className="block text-xs font-semibold tracking-wider mb-4">
            {place}
          </span>
          <span className="text-base font-bold text-primary-blue-200">
            {price}
          </span>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default PropertiesCard;
