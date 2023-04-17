import React, { useState } from "react";
import closeArrow from "../assets/closeArrow.png";
import openArrow from "../assets/openArrow.png";
import global from "../assets/global.png";
import analytics from "../assets/Group 4956.png";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.jpg";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");

  function toggleNavbar() {
    setIsExpanded(!isExpanded);
  }

  function toggleOption(option) {
    setSelectedOption(option);
  }
  return (
    <nav
      className={`flex flex-col bg-white text-[#011F2B] ${
        isExpanded ? "w-64" : "w-16"
      } transition-all duration-300`}
    >
      <button className="py-2 px-4 text-left" onClick={toggleNavbar}>
        <div className="flex justify-between items-center">
          <img
            src={logo}
            className={`w-[68px] h-[10px] ${isExpanded ? "" : "hidden"}`}
          />
          <img
            src={closeArrow}
            width={8}
            className={`w-6 h-6 ${isExpanded ? "" : "hidden"}`}
          />
        </div>
        <img
          src={openArrow}
          className={`w-6 h-6 ${isExpanded ? "hidden" : ""}`}
        />
      </button>
      <ul>
        <li className="min-w-[100px] border rounded-full flex items-center justify-between py-4 px-6 my-6">
          <div className="flex items-center">
            <div className="min-w-[3.5rem] flex items-center">
              <img
                src={avatar}
                alt=""
                className="rounded-full w-14 h-14 mr-4 flex-shrink-0"
              />
              <div className={` ${isExpanded ? "" : "hidden"}`}>
                <h1 className="text-[#011F2B] font-bold">Howard Schultz</h1>
                <p className="text-[#798C93] text-sm">hschultz@starbucks.es</p>
              </div>
            </div>
          </div>
        </li>
        <li
          className="border rounded-full my-2"
          onClick={() => toggleOption("Global View")}
        >
          <a href="#" className="py-2 px-4 flex items-center">
            <img src={global} alt="global" />
            <p
              className={`block py-2 px-4 ${
                selectedOption === "Global View"
                  ? "text-[#6577E0]"
                  : "text-[#011F2B]"
              } hover:text-[#6577E0] ${isExpanded ? "" : "hidden"}`}
            >
              Global view
            </p>
          </a>
        </li>
        <li
          className="border rounded-full my-2"
          onClick={() => toggleOption("Analytics")}
        >
          <a href="#" className="py-2 px-4 flex items-center">
            <img src={analytics} />
            <p
              className={`block py-2 px-4 ${
                selectedOption === "Analytics"
                  ? "text-[#6577E0]"
                  : "text-[#011F2B]"
              } hover:text-[#6577E0] ${isExpanded ? "" : "hidden"}`}
            >
              Analytics
            </p>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
