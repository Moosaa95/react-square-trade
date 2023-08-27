import React, { useState } from "react";
import { close,  menu, protrade } from "../assets";
import { navLinks } from "../constants";

const Nabar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  
  return (
    <nav className="w-full flex py-0  justify-between items-center navbar">
      <img src={protrade} alt="" className="w-[124px] h-[132px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
            key={nav.id}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1  justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-[120px] right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex  justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                }  ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
                 onClick={() => setActive(nav.title)}
                key={nav.id}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nabar;
