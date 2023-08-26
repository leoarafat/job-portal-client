/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ShareAltOutlined, SaveOutlined } from "@ant-design/icons";
import Image from "next/image";
const Hello = ({ photoUrl, title, location, companyName, viewDetailsLink }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Job Circular</h2>
      <div className="md:grid grid-cols-3 gap-4 text-center">
        {" "}
        <div className="max-w-md w-full rounded overflow-hidden shadow-lg bg-white">
          <img
            className="w-full h-24 object-contain mx-auto mt-4"
            src={photoUrl}
            alt="Company Logo"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Job Title: {title}</div>
            <p className="text-gray-700 text-base">Location: {location}</p>
            <p className="text-gray-600 text-base">Company: {companyName}</p>
          </div>
          <div className="flex justify-between items-center px-6 py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              <a
                href={viewDetailsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Details
              </a>
            </button>
            <div className="flex space-x-2">
              {/* Share Icon */}
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 flex items-center"
              >
                <ShareAltOutlined /> <span className="pl-1">Share</span>
              </a>

              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 flex items-center"
              >
                <SaveOutlined /> <span className="pl-1">Save</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
