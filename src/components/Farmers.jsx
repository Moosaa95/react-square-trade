import { useState } from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import "./stlye.css";
import Farmer from "../assets/img/square-trade-farmer.jpg";
import MiddleMen from "../assets/img/square-trade-middleman.jpg";
import Investors from "../assets/img/square-trade-investos.jpg";

const FeatureCard = ({ icon, title, content, index }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img
          src={icon}
          alt="star"
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
      <div className="flex flex-col flex-1 ml-3">
        <h4 className="font-poppins font-bold text-[#fefefe] text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p
          className={`font-poppins font-normal text-dimWhite text-[16px] leading-[24px] ${
            expanded ? "max-h-full" : "max-h-[80px] overflow-hidden"
          }`}
        >
          {content}
        </p>
        {content.length > 80 && (
          <button
            className="text-[#fefefe] mt-2 font-medium hover:underline"
            onClick={toggleExpand}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

const Farmers = () => (
  <section id="what-we-do" className={layout.section}>
    <div className={layout.sectionInfo}>
      <div className="flex flex-col justify-center w-full mx-auto mb-10">
        <h1 className="text-white text-[2.5rem] font-bold">Our Clientele</h1>
        <p className="text-white text-[1rem] text-justify">
          Whether clients are farmers, aggregators, or investors, we forge strong
          collaborative bonds. We commit to exceptional service, reliable
          sourcing, and tailored logistics. Transparency, fair practices, and
          sustainability underpin us, fostering client success in the evolving
          global market.
        </p>
      </div>
      <div class="w-full mx-auto my-8">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 grid-rows-auto gap-4 md:gap-6 lg:gap-8">
          <div class="col-span-2 md:col-span-4 lg:col-span-6 row-span-3 md:row-span-4">
            <img
              src={MiddleMen}
              alt="Gallery image 3"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="col-span-2 md:col-span-2 lg:col-span-4 row-span-2 md:row-span-3">
            <img
              src={Farmer}
              alt="Gallery image 4"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="col-span-2 md:col-span-2 lg:col-span-4 row-span-2 md:row-span-3">
            <img
              src={Investors}
              alt="Gallery image 5"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Farmers;
