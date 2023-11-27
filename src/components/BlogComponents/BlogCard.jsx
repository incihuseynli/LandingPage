import { NavLink } from "react-router-dom";

const BlogCard = ({
  currentData: { id, date, title, author, image, caption },
}) => {
  return (
    <div
      className="flex flex-col md:flex-row 
    rounded-2xl cardShadow2
    lg:min-w-md lg:h-44 md:rounded-2xl"
    >
      <img
        src={image}
        alt=""
        className="h-56 md:h-44 md:w-40 object-cover
        rounded-t-2xl md:rounded-e-none md:rounded-s-2xl"
      />
      <div className="p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-primary-blue-900 capitalize">
            {date}
          </span>
          <span className="text-sm font-medium text-primary-blue-900 capitalize">
            {author}
          </span>
        </div>
        <NavLink
          to={`/bloq/${id}`}
          className="text-xl mr-4 font-bold tracking-wider text-primary-blue-800 hover:text-primary-blue-400 transition-all duration-300"
        >
          {title}
        </NavLink>
        <p className="text-sm font-medium text-primary-blue-900 truncate max-w-xs">
          {caption}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
