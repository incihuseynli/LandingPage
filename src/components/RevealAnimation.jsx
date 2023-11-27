import { motion, useInView, useAnimation } from "framer-motion";

import { useEffect, useRef } from "react";
const RevealAnimation = ({ children }) => {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div
      ref={animationRef}
      className="relative overflow-hidden rounded-2xl"
      style={{ width: "fit" || "100%" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="
      absolute top-1 bottom-1 left-0 right-0 z-20 bg-primary-blue-400
      "
      />
    </div>
  );
};

export default RevealAnimation;
