import React, { useState } from "react";
import {motion } from "framer-motion"
const FeatureBox = ({ icon, title, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription((prevState) => !prevState);
  };


  return (
    <div className="flex flex-col items-center justify-start p-6 transition duration-300 bg-gray-600 rounded-lg shadow-md hover:shadow-lg">
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-50">
        
        <ion-icon
          size="large"
          name={icon}
          className={`text-[#fefefe] hover:text-gray-600 w-6 h-6`}
        ></ion-icon>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-[#fefefe]">{title}</h3>
      <button
        className="text-[#fefefe] hover:text-gray-600 mt-2 cursor-pointer transition duration-300"
        onClick={toggleDescription}
      >
        <ion-icon
          size="large"
          name={showDescription ? "close-outline" : "add-outline"}
          className={`text-[#fefefe] hover:text-gray-600 ${
            showDescription ? "rotate-45" : "rotate-0"
          }`}
        ></ion-icon>
      </button>
      <p
        className={`text-white ${
          showDescription ? "opacity-100 h-auto" : "opacity-0 h-0"
        } overflow-hidden transition-all ease-in-out duration-500`}
      >
        {description}
      </p>
    </div>
  );
};

const Services = () => {
  const transition = {duration:1, type:'spring'}

  return (
    <div className="py-12" id="services">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#fefefe] mb-8">
          Our Services
        </h2>
        <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-3"
        initial={{ left: "25rem" }}
        whileInView={{ left: "14rem" }}
        transition={transition}
        >
          <FeatureBox
            icon={"briefcase-outline"} 
            title="Trade Facilitation"
            data-aos="fade-up"
            data-aos-duration="1000"
            description="At the core of our operations lies trade. We have a diverse portfolio of buyers spanning from four continents, each with distinct commodity needs. We streamline the entire process, from requisition and funding to seamless supply, ensuring the needs of buyers are met comprehensively."
          />
          <FeatureBox
            icon={"cash-outline"} 
            title="Investment"
            description="We extend investment avenues to both individuals and corporations, providing options for funding and commodity exports in exchange for shared profits."
          />
          <FeatureBox
            icon={"document-text-outline"} 
            title="Commodity Data "
            description="We provide commodity data for the sub-Saharan, supported through our expansive network of farmers, merchants and aggregators backed by historical influence of data production, logistics and market forces."
          />
          <FeatureBox
            icon={"people-outline"} 
            title="Efficient Aggregator Network"
            description="The pillar of the commodity sourcing network are the local producers, sourcing agents and logistics partners. We ensure the eco-system of commodity sourcing provides the required quality products through our participation."
          />
          <FeatureBox
            icon={"school-outline"} 
            title="Commodity Sourcing Enlightenment Programmes"
            description="The more education on quality commodity production the more prosperity for ProTrade, we engage local farmers, sourcing agents and other players in ensuring appropriate knowledge dissemination."
          />
          {/* You can add more FeatureBox components here */}
        </motion.div>
      </div>
    </div>
  );
};
export default Services;
