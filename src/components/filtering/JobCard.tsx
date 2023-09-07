import React, { useEffect, useState } from "react";
import {
  EnvironmentOutlined,
  DollarCircleOutlined,
  CalendarOutlined,
  HeartOutlined,
  HeartFilled,
  ShareAltOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useSaveJobsMutation } from "@/redux/features/job/jobSlice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { User } from "@/shared/user";
import { isErrorResponse, isSuccessResponse } from "@/shared/loginResponse";
import { Spin, message } from "antd";

const JobCard = ({ job }: any) => {
  const user = useAppSelector((state: RootState) => state.auth.user) as User;
  const candidateId = user?.id;
  const jobId = job?.id;
  const [isSaved, setIsSaved] = useState(false);
  const [savedJob, { isLoading }] = useSaveJobsMutation();

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    setIsSaved(savedJobs.includes(jobId));
  }, [jobId]);

  const handleSaved = async () => {
    try {
      if (user?.email) {
        if (isSaved) {
          const response = await savedJob({
            data: { candidateId, jobId },
          });
          if (isSuccessResponse(response)) {
            message.success("Job removed");
            setIsSaved(false);

            const savedJobs = JSON.parse(
              localStorage.getItem("savedJobs") || "[]"
            );
            const index = savedJobs.indexOf(jobId);
            if (index !== -1) {
              savedJobs.splice(index, 1);
            }
            localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
          } else if (isErrorResponse(response)) {
            message.error(response.error.data.message);
          }
        } else {
          const response = await savedJob({
            data: { candidateId, jobId },
          });
          if (isSuccessResponse(response)) {
            message.success("Job saved");
            setIsSaved(true);

            const savedJobs = JSON.parse(
              localStorage.getItem("savedJobs") || "[]"
            );
            savedJobs.push(jobId);
            localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
          } else if (isErrorResponse(response)) {
            message.error(response.error.data.message);
          }
        }
      } else {
        message.warning("You need to have logged in to save job");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-indigo-100">
      <h2 className="text-2xl font-semibold text-gray-800">{job?.title}</h2>

      <p className="text-gray-500 mt-2">{job?.companyName}</p>

      <div className="mt-4">
        <p className="text-gray-700">
          <span className="font-semibold">
            <EnvironmentOutlined /> Location:
          </span>{" "}
          {job?.location}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">
            <DollarCircleOutlined /> Salary:
          </span>{" "}
          {job?.salary}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">
            <CalendarOutlined /> Deadline:
          </span>{" "}
          {job?.deadline}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex items-center space-x-4">
        <Link href={`jobs/${job?.id}`}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none transition duration-300 ease-in-out">
            View Details
          </button>
        </Link>
        <button
          onClick={handleSaved}
          className={`${
            isSaved ? "text-red-500" : "text-gray-700"
          } hover:text-red-700 flex items-center space-x-1 focus:outline-none transition duration-300 ease-in-out`}
        >
          {isLoading ? (
            <Spin size="small" />
          ) : isSaved ? (
            <>
              <HeartFilled />
              Saved
            </>
          ) : (
            <>
              <HeartOutlined />
              Save
            </>
          )}
        </button>
        <button className="text-gray-700 hover:text-blue-500 focus:outline-none transition duration-300 ease-in-out">
          <ShareAltOutlined /> Share
        </button>
      </div>
    </div>
  );
};

export default JobCard;
