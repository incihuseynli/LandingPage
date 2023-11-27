import RevealAnimation from "../RevealAnimation";

const TestimonalCard = ({ testimonals: { fname, job, content, image } }) => {
  return (
    <div
      className="font-poppins  text-center flex flex-col items-center
        gap-16 "
    >
      <RevealAnimation>
        <p
          className="text-lg font-light tracking-wider
      text-primary-blue-900 mt-4 max-w-lg before:content-quote before:absolute before:left-4 md:before:left-0 before:-top-6 before:-z-10 relative"
        >
          {content}
        </p>
      </RevealAnimation>
      <RevealAnimation>
        <div className="flex gap-4 pl-4 pr-14  py-8 ">
          <img src={image} />
          <div className="flex flex-col items-start tracking-wide">
            <h6 className="text-lg text-primary-blue-900 capitalize">
              {fname}
            </h6>
            <span className="text-sm text-primary-blue-400 font-light">
              {job}
            </span>
          </div>
        </div>
      </RevealAnimation>
    </div>
  );
};

export default TestimonalCard;
