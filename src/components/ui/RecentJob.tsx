/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ShareAltOutlined, SaveOutlined } from "@ant-design/icons";
import { useGetAllJobsQuery } from "@/redux/features/job/jobSlice";
import Loader from "../loader/loader";
import Link from "next/link";
type JobProps = {
  photoUrl: string;
  title: string;
  location: string;
  companyName: string;
  viewDetailsLink: string;
};
const RecentJobCircular: React.FC<JobProps> = ({ photoUrl }) => {
  const { data: jobs, isLoading } = useGetAllJobsQuery({});

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-gray-100 p-6  shadow-md ">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[30px] font-semibold">Recent Job Circular</h2>
        <button className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md transition duration-300">
          Explore All
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center ">
        {" "}
        {jobs?.data?.map((job: any) => {
          return (
            <div
              className="max-w-md w-full rounded overflow-hidden shadow-lg bg-white"
              key={job?.id}
            >
              <img
                className="w-full h-24 object-contain mx-auto mt-4"
                src={photoUrl}
                alt="Company Logo"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Job Title: {job?.title}
                </div>
                <p className="text-gray-700 text-base">
                  Location: {job?.location}
                </p>
                <p className="text-gray-600 text-base">
                  Company: {job?.companyName}
                </p>
              </div>
              <div className="flex justify-between items-center px-6 py-4">
                <Link href={`/jobs/${job?.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    <span>View Details</span>
                  </button>
                </Link>
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
          );
        })}
      </div>
    </div>
  );
};

export default RecentJobCircular;
