import { imageUrls } from "@/shared/mockData";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageUrls?.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative bg-cover bg-center h-96 transition-all duration-1000"
      style={{
        backgroundImage: `url("${imageUrls[currentImageIndex]}")`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-1000"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4 text-indigo-600">
          Find Your Dream Job
        </h1>
        <p className="text-lg mb-6 text-gray-300">
          Explore job opportunities in your field
        </p>

        {/* Search and Filter Fields */}
        <div className="w-full max-w-md mb-4">
          <div className="relative w-full shadow-xl rounded-lg">
            <input
              type="text"
              className="w-full bg-white text-gray-900 py-2 px-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
          </div>
        </div>
        {/* <div className="w-full max-w-md">
          <div className="relative w-full shadow-xl rounded-lg">
            <input
              type="text"
              className="w-full text-gray-900 bg-white py-2 px-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Filter by location"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <FaMapMarkerAlt className="text-gray-400" />
            </div>
          </div>
        </div> */}
        <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-xl hover:bg-indigo-600 transition duration-300 ease-in-out">
          <Link href={"/jobs"}>Search</Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
