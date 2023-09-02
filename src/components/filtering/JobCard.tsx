import React from "react";
import {
  EnvironmentOutlined,
  DollarCircleOutlined,
  CalendarOutlined,
  EyeOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const JobCard = ({ job }: any) => {
  console.log(job);
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-semibold">{job?.title}</h2>

      <p className="text-gray-600">{job?.companyName}</p>

      <div className="mt-4">
        <p className="text-gray-800">
          <span className="font-semibold">
            <EnvironmentOutlined /> Location:
          </span>{" "}
          {job?.location}
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">
            <DollarCircleOutlined /> Salary:
          </span>{" "}
          {job?.Salary}
        </p>
        <p className="text-gray-800">
          <a className="font-semibold">
            <CalendarOutlined /> Deadline:
          </a>{" "}
          {job?.deadline}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex items-center space-x-4">
        <Link href={`jobs/${job?.id}`}>
          {" "}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            View Details
          </button>
        </Link>
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
