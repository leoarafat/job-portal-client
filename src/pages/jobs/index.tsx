import React, { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { MdOutlineFilterListOff } from "react-icons/md";
import dynamic from "next/dynamic";
import JobCard from "@/components/filtering/JobCard";

const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);

const AllJobs = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-600 hidden md:block">
          Browse Jobs
        </h1>
        <div className="flex items-center">
          <button
            onClick={toggleFilter}
            className="lg:hidden bg-blue-500 text-white px-4 py-2 rounded-full mr-2"
          >
            {isFilterOpen ? <MdOutlineFilterListOff /> : <IoFilterOutline />}
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-l-lg border-gray-300 py-2 px-4 pr-8 focus:outline-none focus:ring focus:border-blue-300"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <FaSearch className="text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="lg:flex">
        {/* Filter Section (Hidden on Mobile) */}
        <aside
          className={`lg:w-1/4 ${
            isFilterOpen ? "block" : "hidden"
          } lg:block mr-4`}
        >
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Filter Jobs</h2>
            {/* Filter Fields */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Type
              </label>
              <select
                className="border w-full p-2 rounded-lg"
                // Add options based on JobType enum
              >
                <option value="">All</option>
                <option value="FullTime">Full Time</option>
                <option value="Internship">Internship</option>
                <option value="PartTime">Part Time</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                JobCategory
              </label>
              <select
                className="border w-full p-2 rounded-lg"
                // Add options based on JobType enum
              >
                <option value="">All</option>
                <option value="FullTime">Full Time</option>
                <option value="Internship">Internship</option>
                <option value="PartTime">Part Time</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LocationType
              </label>
              <select
                className="border w-full p-2 rounded-lg"
                // Add options based on JobType enum
              >
                <option value="">All</option>
                <option value="FullTime">Full Time</option>
                <option value="Internship">Internship</option>
                <option value="PartTime">Part Time</option>
              </select>
            </div>
            {/* Add more filter options based on enums */}
          </div>
        </aside>

        {/* Job Listings */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Individual Job Listings */}
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllJobs;
AllJobs.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
