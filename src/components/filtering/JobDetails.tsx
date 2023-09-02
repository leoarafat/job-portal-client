import React, { use } from "react";
import { Button, message } from "antd";

import { useRouter } from "next/router";
import { useGetJobByIdQuery } from "@/redux/features/job/jobSlice";
import Loader from "../loader/loader";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const JobDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: job, isLoading, isError } = useGetJobByIdQuery(id);

  const user = useAppSelector((state: RootState) => state.auth.user);
  const candidateId = user?.id;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return message.error("Something Went Wrong");
  }

  if (!job) {
    return null;
  }

  const {
    title,
    positionSummery,
    jobResponsibilities,
    qualification,
    requiredSkill,
    education,
    benefits,
    location,
    companyName,
    salary,
    vacancy,
    jobCategory,
    deadline,
    type,
  } = job?.data;

  const handleApply = () => {};

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-100 rounded-lg shadow-lg p-4">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p className="text-gray-600">{companyName}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Job Summary</h2>
              <p className="text-gray-800">{positionSummery}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">
                Job Responsibilities
              </h2>
              <p className="text-gray-800">{jobResponsibilities}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Benefits</h2>
              <p className="text-gray-800">{benefits}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Qualification</h2>
              <p className="text-gray-800">{qualification}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Required Skills</h2>
              <p className="text-gray-800">{requiredSkill}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Education</h2>
              <p className="text-gray-800">{education}</p>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Location</h2>
              <p className="text-gray-800">{location}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Salary</h2>
              <p className="text-gray-800">{salary}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Vacancy</h2>
              <p className="text-gray-800">{vacancy}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Job Category</h2>
              <p className="text-gray-800">{jobCategory}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Deadline</h2>
              <p className="text-gray-800">{deadline}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Type</h2>
              <p className="text-gray-800">{type}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center space-x-4">
          {user?.role === "Candidate" ? (
            <Button
              onClick={handleApply}
              type="primary"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full"
            >
              Apply Now
            </Button>
          ) : (
            <p className="text-red-400">Only Candidate can apply this job</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
