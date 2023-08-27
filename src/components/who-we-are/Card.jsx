import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div className="w-[17rem] h-[13rem] relative flex flex-col gap-1 items-center text-center justify-center bg-white bg-opacity-30 border-7 border-gray-300 shadow-md rounded-2xl p-[26px] overflow-hidden mb-[-20rem]">
      <img src="" alt={emoji} className="transform scale-60 mb-[-2rem]" />
      <span className="pt-4 text-gray-50 text-base font-[900]">{heading}</span>
      <span className="text-white text-base">{detail}</span>
    </div>
  );
};

export default Card;
