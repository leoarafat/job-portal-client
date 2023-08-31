import React from "react";
import Link from "next/link";
import Image from "next/image";

const PreviousJobsItem = ({ job }: any) => {
  return (
    <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 flex p-3">
          <div
            style={{
              width: "80%",
              height: "70%",
              position: "relative",
            }}
          >
            <Image
              src={
                job?.photUrl
                  ? job?.photoUrl
                  : "https://res.cloudinary.com/arafatleo/image/upload/v1693459375/Pro%20careers/career-png_102196_i7die3.jpg"
              }
              alt="job name"
              height="240"
              width="240"
            />
          </div>
        </div>
        <div className="md:w-2/4">
          <div className="p-4">
            <p className="text-gray-600 mb-2">
              <span className="font-semibold"> Job Title:</span> {job?.title}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Company Name:</span>{" "}
              {job?.companyName}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Position Summery: </span>
              {job?.positionSummery.substring(0, 150)}...
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Category:</span>{" "}
              {job?.jobCategory}
            </p>
            <p className="text-gray-600 mb-2">
              {" "}
              <span className="font-semibold">Location:</span> {job?.location}
            </p>
            <p className="text-gray-600 mb-2">
              {" "}
              <span className="font-semibold">Vacancy:</span> {job?.vacancy}
            </p>
            <p className="text-gray-600 mb-2">
              {" "}
              <span className="font-semibold">Required Skill:</span>{" "}
              {job?.requiredSkill}
            </p>
          </div>
        </div>
        <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
          <div className="p-5">
            <span className="text-xl font-semibold text-black">
              <span className="font-semibold">Salary:</span> {job?.salary}
            </span>
            <div className="my-3">
              <Link href={`/previous-jobs/${job?.id}`}>
                {" "}
                <span className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
                  View Details
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PreviousJobsItem;
