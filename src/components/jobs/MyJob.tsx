import React, { useState } from "react";
import {
  useDeleteAppliedJobMutation,
  useGetMyJobQuery,
} from "@/redux/features/job/jobSlice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import Loader from "../loader/loader";
import { Spin, message } from "antd";
import toast from "react-hot-toast";
import { isErrorResponse, isSuccessResponse } from "@/shared/loginResponse";

const MyJobList: React.FC = () => {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const user = useAppSelector((state: RootState) => state.auth.user);
  const candidateId = user?.id;

  const {
    data: myJob,
    isLoading,
    refetch,
  } = useGetMyJobQuery(
    { candidateId },
    { refetchOnMountOrArgChange: true, pollingInterval: 30000 }
  );
  const [deleteAppliedJob] = useDeleteAppliedJobMutation();

  if (isLoading) {
    return <Loader />;
  }

  // const handleDeleteClick = async (jobId: string) => {
  //   try {
  //     const res = await deleteAppliedJob(jobId);
  //     //@ts-ignore
  //     if (res?.data?.statusCode === 200) {
  //       toast.success("Deleted");
  //     }
  //   } catch (error) {
  //     //@ts-ignore
  //     toast.error(error);
  //   }
  // };
  const handleDelete = async (id: string) => {
    setIsLoadingDelete(true);
    try {
      const response = await deleteAppliedJob(id);

      if (isSuccessResponse(response)) {
        message.success("Applied job deleted successful");
        refetch();
      } else if (isErrorResponse(response)) {
        message.error(response.error.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoadingDelete(false);
  };
  if (!myJob) {
    return message.error("Something went wrong");
  }
  return (
    <div>
      <h1 className="text-2xl text-center text-gray-600 font-semibold my-4">
        MyJobList
      </h1>
      {myJob?.data?.length === 0 ? (
        <h1 className="text-center text-red-600 text-[20px]">
          You Have Not Applied Job!!
        </h1>
      ) : (
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
                      onClick={() => handleDelete(job?.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    >
                      {isLoadingDelete ? (
                        <>
                          Deleting..
                          <Spin />{" "}
                        </>
                      ) : (
                        "Delete"
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyJobList;
