// import React from "react";
// import {
//   EnvironmentOutlined,
//   DollarCircleOutlined,
//   CalendarOutlined,
//   EyeOutlined,
//   HeartOutlined,
//   ShareAltOutlined,
// } from "@ant-design/icons";
// import Link from "next/link";
// import { useSaveJobsMutation } from "@/redux/features/job/jobSlice";
// import { useAppSelector } from "@/redux/hooks";
// import { RootState } from "@/redux/store";
// import { User } from "@/shared/user";
// import { isErrorResponse, isSuccessResponse } from "@/shared/loginResponse";
// import { message } from "antd";

// const JobCard = ({ job }: any) => {
//   //! Candidate id
//   const user = useAppSelector((state: RootState) => state.auth.user) as User;
//   const candidateId = user?.id;
//   const jobId = job?.id;
//   const [savedJob, { isLoading }] = useSaveJobsMutation();

//   const handleSaved = async () => {
//     try {
//       const response = await savedJob({
//         data: { candidateId, jobId },
//       });
//       console.log(response);
//       if (isSuccessResponse(response)) {
//         message.success("Job saved");
//       } else if (isErrorResponse(response)) {
//         message.error(response.error.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-4">
//       <h2 className="text-xl font-semibold">{job?.title}</h2>

//       <p className="text-gray-600">{job?.companyName}</p>

//       <div className="mt-4">
//         <p className="text-gray-800">
//           <span className="font-semibold">
//             <EnvironmentOutlined /> Location:
//           </span>{" "}
//           {job?.location}
//         </p>
//         <p className="text-gray-800">
//           <span className="font-semibold">
//             <DollarCircleOutlined /> Salary:
//           </span>{" "}
//           {job?.Salary}
//         </p>
//         <p className="text-gray-800">
//           <a className="font-semibold">
//             <CalendarOutlined /> Deadline:
//           </a>{" "}
//           {job?.deadline}
//         </p>
//       </div>

//       {/* Action Buttons */}
//       <div className="mt-6 flex items-center space-x-4">
//         <Link href={`jobs/${job?.id}`}>
//           {" "}
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
//             View Details
//           </button>
//         </Link>
//         <button
//           onClick={handleSaved}
//           className="text-red-500 hover:text-red-700"
//         >
//           <HeartOutlined /> Saved
//         </button>
//         <button className="text-blue-500 hover:text-blue-700">
//           <ShareAltOutlined /> Share
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JobCard;
import React, { useEffect, useState } from "react";
import {
  EnvironmentOutlined,
  DollarCircleOutlined,
  CalendarOutlined,
  EyeOutlined,
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
import { message } from "antd";

const JobCard = ({ job }: any) => {
  const user = useAppSelector((state: RootState) => state.auth.user) as User;
  const candidateId = user?.id;
  const jobId = job?.id;
  const [isSaved, setIsSaved] = useState(false);
  const [savedJob, { isLoading }] = useSaveJobsMutation();

  useEffect(() => {
    // Check if the job is saved in local storage
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    setIsSaved(savedJobs.includes(jobId));
  }, [jobId]);

  const handleSaved = async () => {
    try {
      if (isSaved) {
        // If already saved, remove it
        const response = await savedJob({
          data: { candidateId, jobId },
        });
        if (isSuccessResponse(response)) {
          message.success("Job removed");
          setIsSaved(false);

          // Remove the jobId from the list of saved job IDs in local storage
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
        // If not saved, add it
        const response = await savedJob({
          data: { candidateId, jobId },
        });
        if (isSuccessResponse(response)) {
          message.success("Job saved");
          setIsSaved(true);

          // Add the jobId to the list of saved job IDs in local storage
          const savedJobs = JSON.parse(
            localStorage.getItem("savedJobs") || "[]"
          );
          savedJobs.push(jobId);
          localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
        } else if (isErrorResponse(response)) {
          message.error(response.error.data.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-semibold">{job?.title}</h2>

      <p className="text-gray-600">{job?.companyName}</p>

      <div className="mt-4">
        <p className="text-gray-800">
          <span className="font-semibold">
            <EnvironmentOutlined /> Location:
          </span>{" "}
          {job?.location}
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">
            <DollarCircleOutlined /> Salary:
          </span>{" "}
          {job?.Salary}
        </p>
        <p className="text-gray-800">
          <a className="font-semibold">
            <CalendarOutlined /> Deadline:
          </a>{" "}
          {job?.deadline}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex items-center space-x-4">
        <Link href={`jobs/${job?.id}`}>
          {" "}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            View Details
          </button>
        </Link>
        <button
          onClick={handleSaved}
          className={`${
            isSaved ? "text-red-500" : "text-gray-500"
          } hover:text-red-700`}
        >
          {isSaved ? <HeartFilled /> : <HeartOutlined />} Saved
        </button>
        <button className="text-blue-500 hover:text-blue-700">
          <ShareAltOutlined /> Share
        </button>
      </div>
    </div>
  );
};

export default JobCard;
