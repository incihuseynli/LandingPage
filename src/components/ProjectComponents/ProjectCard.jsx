import { NavLink } from "react-router-dom";

const ProjectCard = ({
  // eslint-disable-next-line react/prop-types
  project: { id, title, image1, units, place, caption },
}) => {
  return (
    <NavLink to={`/layihələrimiz/${id}`}>
      <div className="relative">
        <img src={image1} alt={title} />
        <div
          className="rounded-b-2xl
        absolute bottom-0  pl-4 py-4 w-full
        text-secondary-white bg-secondary-black 
        bg-opacity-60 flex flex-col gap-2 text-left 
        cardShadow sliderCardBottom"
        >
          <h6
            className="
          text-lg font-bold  tracking-wider capitalize"
          >
            {title}
          </h6>
          <span
            className="font-poppins text-sm font-thin
          tracking-wide"
          >
            {units}
          </span>
        </div>
      </div>
      <div className="content flex flex-col justify-between transition-all duration-1000">
        <p className="text-left font-poppins text-sm tracking-wider font-light">
          {caption}
        </p>
        <div className="flex flex-col text-left pt-4 border-t border-secondary-white capitalize">
          <h6 className="text-xl font-bold  tracking-wider ">{title}</h6>
          <span className="font-poppins text-base font-thin tracking-wide">
            {place}
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default ProjectCard;
