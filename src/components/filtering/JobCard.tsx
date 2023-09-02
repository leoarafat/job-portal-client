import React from "react";
import {
  EnvironmentOutlined,
  DollarCircleOutlined,
  CalendarOutlined,
  EyeOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

const JobCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      {/* Job Title */}
      <h2 className="text-xl font-semibold">Front-end Developer</h2>

      {/* Company Name */}
      <p className="text-gray-600">Programming Hero</p>

      {/* Job Details */}
      <div className="mt-4">
        <p className="text-gray-800">
          <span className="font-semibold">
            <EnvironmentOutlined /> Location:
          </span>{" "}
          Khulna
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">
            <DollarCircleOutlined /> Salary:
          </span>{" "}
          60K
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">
            <CalendarOutlined /> Deadline:
          </span>{" "}
          @0Tarikh
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex items-center space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
          View Details
        </button>
        <button className="text-red-500 hover:text-red-700">
          <HeartOutlined /> Saved
        </button>
        <button className="text-blue-500 hover:text-blue-700">
          <ShareAltOutlined /> Share
        </button>
      </div>
    </div>
  );
};

export default JobCard;
