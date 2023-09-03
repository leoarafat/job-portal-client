/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ShareAltOutlined, SaveOutlined } from "@ant-design/icons";
import { useGetAllJobsQuery } from "@/redux/features/job/jobSlice";
import Loader from "../loader/loader";
import Link from "next/link";
import JobCard from "../filtering/JobCard";
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
    <div className="bg-gray-100 px-2  shadow-md ">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[30px] font-semibold">Recent Job Circular</h2>
        <Link href={"/jobs"}>
          {" "}
          <button className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md transition duration-300">
            Explore All
          </button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center ">
        {jobs?.data?.map((job: { id: React.Key | null | undefined }) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default RecentJobCircular;
