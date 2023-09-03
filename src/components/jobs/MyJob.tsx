import React from "react";
import { useGetMyJobQuery } from "@/redux/features/job/jobSlice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import Loader from "../loader/loader";
import { message } from "antd";

const MyJobList: React.FC = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const candidateId = user?.id;

  const { data: myJob, isLoading } = useGetMyJobQuery(
    { candidateId },
    { refetchOnMountOrArgChange: true, pollingInterval: 30000 }
  );

  if (isLoading) {
    return <Loader />;
  }
  const handleDetailsClick = (jobId: string) => {};

  const handleDeleteClick = (jobId: string) => {};
  if (!myJob) {
    return message.error("Something went wrong");
  }
  return (
    <div>
      <h1 className="text-2xl text-center text-gray-600 font-semibold my-4">
        MyJobList
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Company Name</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myJob?.data?.map((job: any) => (
              <tr key={job?.id} className="border-t">
                <td className="px-4 py-2">{job?.candidate?.email}</td>
                <td className="px-4 py-2">{job?.job?.title}</td>
                <td className="px-4 py-2">{job?.job?.companyName}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDetailsClick(job?.id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2 rounded"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => handleDeleteClick(job?.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobList;
