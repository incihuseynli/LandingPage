import RevealAnimation from "../RevealAnimation";

const SectionHead = ({ sectName, title }) => {
  return (
    <div className="flex flex-col text-left gap-4  ">
      <RevealAnimation>
        <div className="flex gap-6 items-center">
          <img src="./arrow.svg" alt="arrow icon" />
          <h4 className="text-xl font-medium font-poppins text-primary-blue-400 tracking-wider capitalize">
            {sectName}
          </h4>
        </div>
      </RevealAnimation>
      <RevealAnimation>
        <h4 className=" text-4xl font-bold tracking-wide text-primary-blue-800 text-left ">
          {title}
        </h4>
      </RevealAnimation>
    </div>
  );
};

export default SectionHead;
