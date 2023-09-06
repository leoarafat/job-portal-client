import dynamic from "next/dynamic";
import React, { useState } from "react";
import DashboardLayout from "../dashboard";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import {
  EnvironmentOutlined,
  DollarCircleOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import {
  useDeleteSavedJobMutation,
  useGetSavedJobQuery,
} from "@/redux/features/job/jobSlice";
import Link from "next/link";
import Loader from "@/components/loader/loader";
import { isErrorResponse, isSuccessResponse } from "@/shared/loginResponse";
import { Spin, message } from "antd";
import Head from "next/head";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const SavedJob = () => {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const user = useAppSelector((state: RootState) => state.auth.user);
  const candidateId = user?.id;
  const {
    data: savedJob,
    isLoading,
    refetch,
  } = useGetSavedJobQuery(
    { candidateId },
    { refetchOnMountOrArgChange: true, pollingInterval: 30000 }
  );

  const [deleteJob] = useDeleteSavedJobMutation();

  const handleDelete = async (id: string) => {
    setIsLoadingDelete(true);
    try {
      const response = await deleteJob(id);

      if (isSuccessResponse(response)) {
        message.success("Saved job deleted successful");
        refetch();
      } else if (isErrorResponse(response)) {
        message.error(response.error.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoadingDelete(false);
  };

  if (!savedJob?.data) {
    return null;
  }
  return (
    <div className="text-center">
      <Head>
        <title>Saved Jobs</title>
      </Head>
      <h1 className="text-[30px] text-center text-gray-600 font-serif py-6">
        My Saved Jobs List
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {savedJob?.data?.map((job: any) => {
          return (
            <div key={job?.id} className="bg-gray-100 rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-semibold">{job?.job?.title}</h2>

              <p className="text-gray-600">{job?.job?.companyName}</p>

              <div className="mt-4">
                <p className="text-gray-800">
                  <span className="font-semibold">
                    <EnvironmentOutlined /> Location:
                  </span>{" "}
                  {job?.job?.location}
                </p>
                <p className="text-gray-800">
                  <span className="font-semibold">
                    <DollarCircleOutlined /> Salary:
                  </span>{" "}
                  {job?.job?.Salary}
                </p>
                <p className="text-gray-800">
                  <a className="font-semibold">
                    <CalendarOutlined /> Deadline:
                  </a>{" "}
                  {job?.job?.deadline}
                </p>
              </div>
              <div className="my-3 flex justify-around">
                <Link href={`/jobs/${job?.job?.id}`}>
                  {" "}
                  <button className="bg-blue-500 text-white px-2 py-2  rounded-md">
                    View Details
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(job?.id)}
                  className="bg-purple-500 text-white px-2 py-2  rounded-md"
                >
                  {isLoadingDelete ? (
                    <>
                      Deleting..
                      <Spin />{" "}
                    </>
                  ) : (
                    "Delete from List"
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavedJob;
SavedJob.getLayout = function getLayout(page: any) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
