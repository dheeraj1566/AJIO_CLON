import React from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="fixed left-0 right-0 bg-white top-0 z-10 shadow-lg">
      <nav>
        <div className="navbar flex flex-col md:flex-row justify-between items-center px-6 md:px-28 py-4">
          {/* Logo */}
          <div className="logo text-3xl md:text-6xl text-gray-500 font-medium mb-4 md:mb-0">
            AJIO
          </div>

          {/* Sign-in and Action Buttons */}
          <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
            <div className="sign flex flex-wrap items-center mb-4 md:mb-0">
              <h2 className="text-gray-500 mx-2 text-xs md:text-sm">Sign in / AJIO</h2>
              <h2 className="text-gray-500 mx-2 text-xs md:text-sm">Customer Care</h2>
              <button className="bg-gray-700 text-white mx-2 px-3 py-1 text-xs md:text-sm">
                Visit AJIO
              </button>
              <button className="bg-black text-white mx-2 px-3 py-1 text-xs md:text-sm">
                Visit AJIOLUXE
              </button>
            </div>

            {/* Search Bar and Icons */}
            <div className="lists flex items-center">
              <ul className="flex items-center">
                <li className="text-gray-500 mx-2 text-xs md:text-sm">AJORTE</li>
                <input
                  type="text"
                  placeholder="Search Ajorte Store"
                  className="border-2 pl-3 rounded-lg h-8 w-40 md:w-52 mx-2 text-xs md:text-sm"
                />
                <FaRegHeart className="bg-blue-950 rounded-full h-8 w-8 p-2 mx-2 text-white" />
                <IoBagHandleOutline className="bg-blue-950 rounded-full h-8 w-8 p-2 mx-2 text-white" />
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Centered Navigation Links */}
      <div className="center text-center mt-4">
        <h1 className="text-xl md:text-2xl text-gray-500 font-medium">AZORTE</h1>
        <ul className="flex justify-center my-2 flex-wrap">
          <li className="mx-2 text-gray-500 text-sm md:text-base">MEN</li>
          <li className="mx-2 text-gray-500 text-sm md:text-base">WOMEN</li>
          <li className="mx-2 text-gray-500 text-sm md:text-base">KIDS</li>
          <li className="mx-2 text-gray-500 text-sm md:text-base">BRANDS</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
