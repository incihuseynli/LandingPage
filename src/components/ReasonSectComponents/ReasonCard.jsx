const ReasonCard = ({ reason: { title, icon, content } }) => {
  return (
    <div
      className="max-w-sm min-h-max bg-secondary-white text-primary-blue-800
        py-10 px-6 text-left flex flex-col gap-4 rounded-2xl cardShadow
        cursor-pointer transition-all duration-1000
        hover:bg-primary-blue-400 hover:text-secondary-white"
    >
      <img src={icon} alt="" className="w-10 h-10" />
      <h6 className="text-2xl  font-bold tracking-wide capitalize">{title}</h6>
      <p className="text-base font-light font-poppins tracking-wider">
        {content}
      </p>
    </div>
  );
};

export default ReasonCard;
