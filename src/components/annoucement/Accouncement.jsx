import React from "react";
import Marquee from "react-fast-marquee";

const Announcement = () => {
  const items = [
    { crop: "maize", price: "$2.6", percentage: "10%" },
    { crop: "banana", price: "$2.6", percentage: "10%" },
    { crop: "mango", price: "$2.6", percentage: "10%" },
    { crop: "juice-lemon", price: "$2.6", percentage: "10%" },
    { crop: "orange", price: "$2.6", percentage: "10%" },
    { crop: "orange", price: "$2.6", percentage: "10%" },
    { crop: "orange", price: "$2.6", percentage: "10%" },
    { crop: "orange", price: "$2.6", percentage: "10%" },
    { crop: "orange", price: "$2.6", percentage: "10%" },
    { crop: "orange", price: "$2.6", percentage: "10%" },
    { crop: "orange", price: "$2.6", percentage: "10%" },
    { crop: "orange", price: "$2.6", percentage: "10%" },
    { crop: "orange", price: "$2.6", percentage: "10%" },
    { crop: "orange", price: "$2.6", percentage: "10%" },
  ];
  return (
    <div className=" bg-gray-100 flex justify-between items-center py-1 px-0 font-[.8rem]">
      <div>
        <button className="bg-[#42878b] hover:bg-[#76e6ea] text-white py-2 px-4 rounded whitespace-nowrap">Live data</button>
      </div>
      <Marquee speed={80} pauseOnHover gradient={false}>
        {items?.map((item, index) => (
          <AnnouncementText
            crop={item.crop}
            price={item.price}
            percentage={item.percentage}
            key={index}
          />
        ))}
      </Marquee>
    </div>
  );
};

const AnnouncementText = ({ crop, price, percentage }) => {
  return (
    <div className="flex items-center mr-8">
      <span className="not-last-child:mr-4 font-serif last-child:mr-0 mr-4">{crop}</span>
      <span className="not-last-child:mr-4 last-child:mr-1 mr-4">{price}</span>
      <span className="not-last-child:mr-4 font-serif last-child:mr-1 mr-4">{percentage}</span>
    </div>
  );
};

export default Announcement;
