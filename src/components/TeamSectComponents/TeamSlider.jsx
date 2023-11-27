import Axios from "axios";
import { useEffect, useState } from "react";
import ScrollCarousel from "scroll-carousel-react";

const URL = "https://my-json-server.typicode.com/dbForProjects/OtherDatas/team";

const TeamSlider = () => {
  const [member, setMember] = useState([]);
  useEffect(() => {
    Axios.get(URL).then(({ data }) => {
      setMember(data);
    });
  }, []);
  return (
    <>
      <ScrollCarousel
        autoplay
        autoplaySpeed={600}
        speed={7}
        smartSpeed={true}
        onReady={() => console.log("I am ready")}
      >
        {[1, 2].map((item) => (
          <div key={item} className="w-full h-80 flex gap-6 mr-6">
            {member.map(({ id, fullname, position, about, image }) => {
              return (
                <div key={id} className="w-56">
                  <div className="relative cardHover overflow-hidden cursor-pointer ">
                    <div className="relative ">
                      <img
                        src={image}
                        alt=""
                        className="w-56 h-80 rounded-lg grayscale "
                      />
                      <div className="cardBottom absolute bottom-4 pl-4 font-poppins text-secondary-white">
                        <h6 className="text-lg">{fullname}</h6>
                        <span className="text-xs tracking-wide">
                          {position}
                        </span>
                      </div>
                    </div>
                    <div className="font-poppins cardHoverBody transition-all duration-1000">
                      <h6 className="text-lg">{fullname}</h6>
                      <span className="text-sm tracking-wide">{position}</span>
                      <p className="text-xs tracking-wider leading-5 my-4">
                        {about}
                      </p>
                      <div className="flex items-center gap-4 mt-6">
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
              );
            })}
          </div>
        ))}
      </ScrollCarousel>
    </>
  );
};

export default TeamSlider;
