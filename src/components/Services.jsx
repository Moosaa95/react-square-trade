import React, { useState } from "react";
const FeatureBox = ({ icon, title, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription((prevState) => !prevState);
  };

  return (
    <div className="bg-gray-600 p-6 flex flex-col justify-start items-center rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mb-4">
        {/* <img src={icon} alt={title} className="w-6 h-6 text-white" /> */}
        <ion-icon
          size="large"
          name={icon}
          className={`text-[#76e6ea] hover:text-blue-600 w-6 h-6`}
        ></ion-icon>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-[#76e6ea]">{title}</h3>
      <button
        className="text-[#76e6ea] hover:text-blue-600 mt-2 cursor-pointer transition duration-300"
        onClick={toggleDescription}
      >
        <ion-icon
          size="large"
          name={showDescription ? "close-outline" : "add-outline"}
          className={`text-[#76e6ea] hover:text-blue-600 ${
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
  return (
    <div className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-[#76e6ea] mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <FeatureBox
            icon={"bag-outline"} // Replace with your icon asset
            title="Product Sourcing"
            data-aos="fade-up"
            data-aos-duration="1000"
            description="We act as a reliable bridge between farmers/miners and potential buyers. Our team scouts and sources high-quality agricultural or mineral products from farmers/miners, ensuring adherence to international quality standards and certifications. We curate a diverse range of products to meet the specific demands of buyers, providing them with access to a wide variety of options."
          />
          <FeatureBox
            icon={"globe-outline"} // Replace with your icon asset
            title="Market Access and Expansion"
            description="We connect farmers/miners with international buyers and help them gain access to new markets. By leveraging our extensive network of trade partners and distributors, we open doors to a global customer base, enabling farmers/miners to expand their reach and increase their revenue potential."
          />
          <FeatureBox
            icon={"cube-outline"} // Replace with your icon asset
            title="Logistics and Supply Chain Management"
            description="Our export company takes care of the entire logistics and supply chain process. We handle the transportation, shipping, and documentation required for the smooth movement of goods from the point of origin to the buyers. Our expertise ensures efficient and timely delivery, minimizing any disruptions that could impact the trade process."
          />
          <FeatureBox
            icon={"handshake-outline"} // Replace with your icon asset
            title="Trade Facilitation"
            description="We provide comprehensive trade facilitation services to middlemen, ensuring that they have access to reliable suppliers and manufacturers. Our company helps streamline their operations by offering efficient sourcing solutions, negotiating competitive pricing, and providing ongoing support throughout the trade process. We act as a trusted partner, enabling middlemen to meet the demands of their customers effectively."
          />
          <FeatureBox
            icon={"cash-outline"} // Replace with your icon asset
            title="Investment Advisory"
            description="For investors interested in the agricultural or mining sectors, we offer investment advisory services. Our team assists in identifying profitable ventures, conducting feasibility studies, and assessing potential risks and returns. We provide market insights, connect investors with suitable farming or mining projects, and support them in establishing partnerships or joint ventures."
          />
          <FeatureBox
            icon={"shield-checkmark-outline"} // Replace with your icon asset
            title="Risk Mitigation"
            description="We prioritize risk mitigation throughout the trade process. Our company conducts thorough due diligence to ensure the credibility and reliability of farmers/miners, middlemen, and investment opportunities. We also assist in compliance with relevant trade regulations, certifications, and documentation to minimize potential risks associated with international trade."
          />
          <FeatureBox
            icon={"analytics-outline"} // Replace with your icon asset
            title="Market Intelligence"
            description="We keep our clients informed about the latest market trends, pricing dynamics, and trade regulations. Our team provides valuable market intelligence reports, allowing farmers/miners, middlemen, and investors to make informed decisions and capitalize on emerging opportunities."
          />
          {/* You can add more FeatureBox components here */}
        </div>
      </div>
    </div>
  );
};
export default Services;
