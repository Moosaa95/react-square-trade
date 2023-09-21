

import React from "react";
import { motion } from "framer-motion";

const Values = () => {
  const transition = { duration: 10, type: "spring" };
  return (
    <div className="py-1">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#fefefe] mb-8">Our Values</h2>
        <p className="mb-2 text-base font-semibold text-white">
                ProTrade is guided by principles and values that adhere to Trade
                best practice.
              </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center justify-start p-6 transition duration-300 bg-gray-600 rounded-lg shadow-md hover:shadow-lg">
            <div className="text-left text-white">
              
              <ul className="ml-6 list-disc">
                <li>Accountability</li>
                <li>Sustainability</li>
                <li>Empowerment within commodity sourcing eco-system</li>
                <li>Ethical trading</li>
              </ul>
            </div>
          </div>
          {/* You can add more FeatureBox components here */}
        </div>
      </div>
    </div>
  );
};

export default Values;

const OurValues = () => {
  const transition = { duration: 1, type: "spring" };

  return (
    <div className="py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#fefefe] mb-8">Our Values</h2>
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <div className="flex flex-col items-center justify-start p-6 transition duration-300 bg-gray-600 rounded-lg shadow-md hover:shadow-lg">
            <div className="flex items-start justify-start w-12 h-12 mb-4 rounded-full bg-gray-50">
              <h3 className="text-lg font-semibold mb-2 text-[#fefefe] mr-2">
                Our Values
              </h3>
            </div>
            <div className="text-left text-white">
              <p className="mb-2 text-base font-semibold">
                ProTrade is guided by principles and values that adhere to Trade
                best practice.
              </p>
              <ul className="ml-6 list-disc">
                <li>Accountability</li>
                <li>Sustainability</li>
                <li>Empowerment within commodity sourcing eco-system</li>
                <li>Ethical trading</li>
              </ul>
            </div>
          </div>
          {/* You can add more FeatureBox components here */}
        </motion.div>
      </div>
    </div>
  );
};
