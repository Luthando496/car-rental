import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const CustomHeader = ({title}) => {
  return (
    <>
      <Navbar />

      <div className="w-full absolute top-0 left-0 -z-10 bg-gray-200 bg-about flex items-center px-10">
        <div className="flex gap-2 items-center">
          <Link
            to="/"
            className="text-lg font-semibold text-white hover:text-yellow-700"
          >
            Home
          </Link>
          <span className="font-bold text-2xl">/</span>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
        </div>
      </div>
    </>
  );
};

export default CustomHeader;
