import React from "react";

const JobCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      {/* Job Title */}
      <h2 className="text-xl font-semibold">Front end developer</h2>

      {/* Company Name */}
      <p className="text-gray-600">Programming Hero</p>

      {/* Job Details */}
      <div className="mt-4">
        <p className="text-gray-800">
          <span className="font-semibold">Location:</span> Khulna
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">Salary:</span> 60K
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">Deadline:</span> @0Tarikh
        </p>
      </div>

      {/* Apply Button */}
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
