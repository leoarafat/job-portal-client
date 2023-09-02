import React from "react";

const JobDetails = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-4">
        {/* Job Title */}
        <h2 className="text-2xl font-semibold mb-4">title</h2>

        {/* Company Name */}
        <p className="text-gray-600">companyName</p>

        {/* Job Details */}
        <div className="mt-4">
          <p className="text-gray-800">
            <span className="font-semibold">Position Summary:</span>{" "}
            positionSummary
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Job Responsibilities:</span>{" "}
            jobResponsibilities
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Qualification:</span> qualification
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Required Skills:</span>{" "}
            requiredSkill
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Education:</span> education
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Benefits:</span> benefits
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Location:</span> location
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Salary:</span> salary
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Vacancy:</span> vacancy
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Job Category:</span> jobCategory
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Deadline:</span> deadline
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Type:</span> type
          </p>
        </div>

        {/* Apply Button */}
        <div className="mt-4 flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Apply Now
          </button>
          <button className="text-red-500 hover:text-red-700">Save</button>
          <button className="text-blue-500 hover:text-blue-700">Share</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
