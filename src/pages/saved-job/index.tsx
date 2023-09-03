import dynamic from "next/dynamic";
import React from "react";
import DashboardLayout from "../dashboard";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import {
  EnvironmentOutlined,
  DollarCircleOutlined,
  CalendarOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { useGetSavedJobQuery } from "@/redux/features/job/jobSlice";
import Link from "next/link";
import Loader from "@/components/loader/loader";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const SavedJob = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const candidateId = user?.id;
  const { data: savedJob, isLoading } = useGetSavedJobQuery({ candidateId });
  if (isLoading) {
    return <Loader />;
  }
  if (!savedJob?.data) {
    return null;
  }
  return (
    <div className="text-center">
      <h1 className="text-[30px] text-center text-gray-600 font-serif py-6">
        My Saved Jobs List
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {savedJob?.data?.map((job: any) => {
          return (
            <div key={job?.id} className="bg-white rounded-lg shadow-lg p-4">
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
              <button className="bg-blue-500 text-white px-4 py-2 my-2 rounded-full">
                View Details
              </button>
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
