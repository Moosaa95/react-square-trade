// // import React, { useState } from "react";

// //   const CollaborationCard = () => {
// //     const [showList, setShowList] = useState(false);

// //     const toggleList = () => {
// //       setShowList(!showList);
// //     };

// //     return (
// //       <div className="flex items-center justify-between">
// //         <div className="w-[30%]">
// //           <h2 className="text-2xl font-semibold text-white">OUR VALUES</h2>
// //         </div>
// //         <div className="w-[60%] bg-white p-4 rounded-md shadow-md flex flex-col items-center">
// //           <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
// //             <ion-icon name="people-outline" class="text-white text-2xl"></ion-icon>
// //           </div>
// //           <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
// //           <button
// //             className="text-blue-500 hover:text-blue-600 mt-2 cursor-pointer"
// //             onClick={toggleList}
// //           >
// //             <ion-icon
// //               name={showList ? "remove-outline" : "add-outline"}
// //               class="text-blue-500 text-xl"
// //             ></ion-icon>
// //           </button>
// //           {showList && (
// //             <ul className="mt-2 space-y-2">
// //               <li>Fostering partnerships</li>
// //               <li>Cooperative efforts</li>
// //               <li>Achieving shared success</li>
// //             </ul>
// //           )}
// //         </div>
// //       </div>
// //     );
// //   };

// // export default CollaborationCard;

// import React, { useState } from "react";

// const ValueCard = ({ title, icon, list }) => {
//   const Bigvalues = [
//     {
//       title: "Collaboration",
//       icon: "people-outline",
//       list: [
//         "Collaboration among trade stakeholders",
//         "Fostering partnerships",
//         "Cooperative efforts",
//         "Achieving shared success",
//       ],
//     },
//     {
//       title: "Integrity",
//       icon: "shield-checkmark-outline",
//       list: [
//         "Prioritizing honesty, transparency, and ethical practices",
//         "Upholding the highest standards of integrity",
//         "Ensuring integrity in all interactions",
//       ],
//     },
//     {
//       title: "Inclusivity",
//       icon: "people-circle-outline",
//       list: [
//         "Embracing diversity",
//         "Promoting inclusivity",
//         "Creating an inclusive trade ecosystem",
//         "Valuing the participation of all stakeholders",
//         "Welcoming all stakeholders, regardless of size or background",
//       ],
//     },
//     {
//       title: "Innovation",
//       icon: "bulb-outline",
//       list: [
//         "Fostering an innovative culture",
//         "Seeking new ideas and technologies",
//         "Driving progress through innovation",
//         "Transforming the trade landscape with new approaches",
//         "Embracing continuous innovation",
//       ],
//     },
//     {
//       title: "Sustainability",
//       icon: "leaf-outline",
//       list: [
//         "Commitment to sustainable trade practices",
//         "Promoting environmentally conscious strategies",
//         "Responsible resource management",
//         "Ensuring long-term economic and environmental well-being",
//       ],
//     },
//     {
//       title: "Empowerment",
//       icon: "hand-right-outline",
//       list: [
//         "Striving for empowerment of trade stakeholders",
//         "Providing equal opportunities for all",
//         "Offering necessary resources for growth",
//         "Sharing knowledge to foster development",
//         "Enabling stakeholders to thrive and achieve their full potential",
//       ],
//     },
//     {
//       title: "Customer-centricity",
//       icon: "heart-circle-outline",
//       list: [
//         "Putting customers at the center of our operations",
//         "Providing exceptional customer service",
//         "Crafting tailored solutions to meet unique needs",
//         "Creating customer-centric experiences",
//         "Going beyond expectations to drive customer success",
//       ],
//     },
//   ];

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between  mb-8">
//       <div className="md:w-1/4 flex flex-col  items-center justify-center">
//         <h2 className="text-2xl font-semibold text-[#76e6ea]">OUR VALUES</h2>
//         <p className="text-white ">

//         </p>
//       </div>
//       <div className="md:w-1/2  p-4 rounded-md shadow-md mt-4 md:mt-0">
//         <div className="grid md:grid-cols-2 gap-4">
//           {Bigvalues.map((value, index) => (
//             <ValueCardComponent
//               key={index}
//               title={value.title}
//               icon={value.icon}
//               list={value.list}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// const ValueCardComponent = ({ title, icon, list }) => {
//   const [showList, setShowList] = useState(false);

//   const toggleList = () => {
//     setShowList((prevShowList) => !prevShowList);
//   };

//   return (
//     <div
//       className={`${
//         !showList ? "h-[100%]" : ""
//       } p-4 bg-gray-500  flex flex-col justify-between items-center  rounded-md shadow-sm transition-all ease-in-out duration-300`}
//       style={{
//         maxHeight: showList ? "1000px" : "150px", // Adjust the max height as needed
//       }}
//     >
//       <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4">
//         <ion-icon name={icon} class="text-[#76e6ea] text-2xl"></ion-icon>
//       </div>
//       <h3 className="text-lg font-semibold mb-2 text-[#76e6ea]">{title}</h3>
//       <button
//         className="text-blue-500 hover:text-blue-600 mt-2 cursor-pointer"
//         onClick={toggleList}
//       >
//         <ion-icon
//           name={showList ? "close-outline" : "add-outline"}
//           class="text-[#76e6ea] text-xl"
//           size="large"
//         ></ion-icon>
//       </button>
//       {showList && (
//         <ul className="mt-2 space-y-2">
//           {list.map((item, index) => (
//             <li key={index} className="text-[white] transition-opacity duration-300">
//               {item}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// // const ValueCardComponent = ({ title, icon, list }) => {
// //   const [showList, setShowList] = useState(false);

// //   const toggleList = () => {
// //     setShowList((prevShowList) => !prevShowList);
// //   };
// //   console.log('he shoot', icon);

// //   return (
// //     <div
// //       className={`${
// //         !showList ? "h-[100%]" : ""
// //       } p-4 bg-gray-500  flex flex-col justify-between items-center  rounded-md shadow-sm`}
// //     >
// //       <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4">
// //         <ion-icon name={icon} class="text-[#76e6ea] text-2xl"></ion-icon>
// //       </div>
// //       <h3 className="text-lg font-semibold mb-2 text-[#76e6ea]">{title}</h3>
// //       <button
// //         className="text-blue-500 hover:text-blue-600 mt-2 cursor-pointer"
// //         onClick={toggleList}
// //       >
// //         <ion-icon
// //           name={showList ? "remove-outline" : "add-outline"}
// //           class="text-[#76e6ea] text-xl"
// //           size="large"
// //         ></ion-icon>
// //       </button>
// //       {showList && (
// //         <ul className="mt-2 space-y-2">
// //           {list.map((item, index) => (
// //             <li key={index} className="text-[white]">{item}</li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };

// export default ValueCard;

import React from "react";
import { motion } from "framer-motion";

const Values = () => {
  const transition = { duration: 10, type: "spring" };
  return (
    <div className="py-1">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#fefefe] mb-8">Our Values</h2>
        <p className="text-base text-white font-semibold mb-2">
                ProTrade is guided by principles and values that adhere to Trade
                best practice.
              </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="bg-gray-600 p-6 flex flex-col justify-start items-center rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="text-white text-left">
              
              <ul className="list-disc ml-6">
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
          <div className="bg-gray-600 p-6 flex flex-col justify-start items-center rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-start justify-start w-12 h-12 bg-gray-50 rounded-full mb-4">
              <h3 className="text-lg font-semibold mb-2 text-[#fefefe] mr-2">
                Our Values
              </h3>
            </div>
            <div className="text-white text-left">
              <p className="text-base font-semibold mb-2">
                ProTrade is guided by principles and values that adhere to Trade
                best practice.
              </p>
              <ul className="list-disc ml-6">
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
