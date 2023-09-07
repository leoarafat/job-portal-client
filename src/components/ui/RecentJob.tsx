/* eslint-disable @next/next/no-img-element */
import React from "react";

import { useGetAllJobPostQuery } from "@/redux/features/job/jobSlice";
import Loader from "../loader/loader";
import Link from "next/link";
import JobCard from "../filtering/JobCard";

const RecentJobCircular: React.FC = () => {
  const { data: jobs, isLoading } = useGetAllJobPostQuery({});

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold mb-4">Recent Job Circulars</h2>
        <Link href="/jobs">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
            Explore All
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs?.data?.map((job: { id: React.Key | null | undefined }) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default RecentJobCircular;
