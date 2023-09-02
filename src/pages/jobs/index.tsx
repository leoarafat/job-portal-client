import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { MdOutlineFilterListOff } from "react-icons/md";
import dynamic from "next/dynamic";
import JobCard from "@/components/filtering/JobCard";
import { Radio } from "antd";
import { Select } from "antd";
const { Option } = Select;

import { jobCategories, jobTypes, locations } from "@/shared/jobPostUtils";
import { useGetAllJobsQuery } from "@/redux/features/job/jobSlice";
import Loader from "@/components/loader/loader";

const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);

const AllJobs = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [selectedJobCategory, setSelectedJobCategory] = useState("");
  const [selectedLocationType, setSelectedLocationType] = useState("");

  const { data: allJobs, isLoading } = useGetAllJobsQuery({});
  console.log(allJobs);
  // console.log(searchValue);
  // console.log(selectedJobType);
  // console.log(selectedJobCategory);
  // console.log(selectedLocationType);
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleJobTypeChange = (value: string) => {
    setSelectedJobType(value);
  };

  const handleJobCategoryChange = (value: string) => {
    setSelectedJobCategory(value);
  };

  const handleLocationTypeChange = (value: string) => {
    setSelectedLocationType(value);
  };
  if (isLoading) {
    return <Loader />;
  }
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
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search..."
              className="border rounded-full border-gray-300 py-2 px-4 pr-10 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-400 bg-white shadow-sm w-64"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
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

              <Radio.Group defaultValue="All" buttonStyle="solid">
                {jobTypes.map((type) => (
                  <Radio.Button
                    onChange={(e) => handleJobTypeChange(e.target.value)}
                    key={type}
                    value={type}
                  >
                    {type}
                  </Radio.Button>
                ))}
                <Radio.Button key="All" value="All">
                  All
                </Radio.Button>
              </Radio.Group>
            </div>
            <div className="mb-4 flex flex-wrap">
              <label className="block text-sm font-medium text-gray-700 mb-2 w-full">
                JobCategory
              </label>

              <Radio.Group defaultValue="All" className="w-full">
                {jobCategories.map((category, index) => (
                  <div key={index} className="w-1/2">
                    <Radio
                      onChange={(e) => handleJobCategoryChange(e.target.value)}
                      value={category}
                    >
                      {category}
                    </Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LocationType
              </label>
              <Select
                onChange={(value) => handleLocationTypeChange(value)}
                defaultValue="All"
                style={{ width: "100%" }}
              >
                <Option value="">All</Option>
                {locations.map((location, index) => (
                  <Option key={index} value={location}>
                    {location}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
        </aside>

        {/* Job Listings */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {allJobs?.data?.map((job: { id: React.Key | null | undefined }) => (
              <JobCard key={job.id} job={job} />
            ))}
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
