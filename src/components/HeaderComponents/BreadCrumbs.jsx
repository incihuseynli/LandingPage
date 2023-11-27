

const BreadCrumbs = ({ menuTitle }) => {
  return (
    <div className="flex gap-6 items-center">
      <img src="./arrow.svg" alt="arrow icon" />
      <div
        className="
        text-xl font-medium font-poppins text-primary-blue-400
        tracking-wider capitalize
        "
      >
        {menuTitle}
      </div>
    </div>
  );
};

export default BreadCrumbs;
