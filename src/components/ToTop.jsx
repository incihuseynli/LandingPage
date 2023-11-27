import { useState } from "react";

const ToTop = () => {
  const [icon, setIcon] = useState(false);
  const toUp = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  window.onscroll = function () {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      setIcon(true);
    } else {
      setIcon(false);
    }
  };
  return (
    icon && (
      <div onClick={toUp} className="w-8 h-8 fixed right-7 bottom-8  rounded-full cursor-pointer">
        <img src="./toUp.svg" alt="Page Up Button" className="w-8 h-8 " />
      </div>
    )
  );
};

export default ToTop;