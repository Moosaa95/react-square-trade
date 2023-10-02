import React from "react";
import "./cycle.css";
import { motion } from "framer-motion";

const Cycle = ({ image1, image2, image3, image4, image5 }) => {
  const transition = { duration: 3.5, type: "spring" };
  return (
    <div className="py-0 px-1 flex h-[30vh] w-[350px] mt-16 items-center justify-center">
      <div className="w-right">
        <motion.div
        initial={{rotate: 45}}
        whileInView={{rotate: 0}}
        viewport={{margin: '-40px'}}
        transition={transition}
        
        className="w-mainCircle">
          <div className="w-secCircle">
            <img src={image1} alt="" loading="lazy" />
          </div>
          <div className="w-secCircle">
            <img src={image2} alt="" loading="lazy"  />
          </div>
          <div className="w-secCircle">
            <img src={image3} alt="" loading="lazy"  />
          </div>{" "}
          <div className="w-secCircle">
            <img src={image4} alt="" loading="lazy"  />
          </div>
          <div className="w-secCircle">
            <img src={image5} alt="" loading="lazy"  />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Cycle;
