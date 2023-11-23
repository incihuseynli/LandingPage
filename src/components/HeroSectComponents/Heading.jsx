import React from "react";
import Btn from "../Buttons/Btn";

const Heading = () => {
  return (
    <div className="flex flex-col gap-6 md:w-4/6 lg:w-full">
      <h1
        className="text-6xl font-bold tracking-wide
       text-primary-blue-800 text-left"
      >
        Yaşamağı sevəcəyiniz yeri kəşf edin!
      </h1>
      <p className="text-primary-blue-800 text-left font-extralight text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        officiis necessitatibus eligendi error reprehenderit nam consequuntur,
        totam labore autem? Tenetur!
      </p>
      <Btn btnPath="/layihələrimiz" btnText="İndi baxın" />
    </div>
  );
};

export default Heading;
