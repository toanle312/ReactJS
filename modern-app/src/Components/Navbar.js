import React from "react";
import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex py-6 items-center navbar justify-between">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none hidden ss:flex justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal 
            text-[16px] cursor-pointer text-white 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div
        className="ss:hidden flex flex-1 justify-end 
         items-center"
      >
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px]"
          onClick={() => {
            setToggle((prevState) => !prevState);
          }}
        />
        <div
          className={`${toggle ? "flex" : "hidden"} 
          bg-black-gradient p-6 absolute right-0 top-20 
          mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[10]`}
        >
          <ul className="list-none flex flex-col
          justify-center items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal 
                text-[16px] cursor-pointer text-white 
            ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
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

export default Navbar;
