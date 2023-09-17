import React, { useContext } from "react";
import "./Who.css";
import Card from "./Card";
// import HeartEmoji from "../../img/heartemoji.png";
// import Glasses from "../../img/glasses.png";
// import Humble from "../../img/";

import { motion } from "framer-motion";

const Who = () => {
  // context

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="who" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span className="text-white"  >Who we are</span>
        <span className="text-white text-justify">
          ProTrade is a conglomerate of partners united by a shared objective:
          optimizing commodity trade efficiency. With a rich history of
          establishing a sustainable ecosystem, ProTrade offers participants
          <br />
          seamless trade facilitation, investment opportunities, dependable data
          insights, and a robust commodity sourcing network.
        </span>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={""}
            heading={"Our Mission"}
            detail={"Fostering sustainable commodity trading in Sub-Saharan Africa by connecting buyers, suppliers, and investment opportunities."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={""}
            heading={"Our Vision"}
            detail={"At the forefront of Sub-Saharan Africa's commodity trading hub, driving economic growth through sourcing, production, and exchange."}
          />
        </motion.div>
        {/* 3rd */}
        {/* <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={""}
            heading={"Our Values"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div> */}
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Who;
