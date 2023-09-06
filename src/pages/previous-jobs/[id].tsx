import React from "react";

import { useRouter } from "next/router";
import Swal from "sweetalert2";
import {
  useDeleteJobMutation,
  useGetJobByIdQuery,
} from "@/redux/features/job/jobSlice";
import { Spin, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Loader from "@/components/loader/loader";
import DashboardLayout from "../dashboard";
import Head from "next/head";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);

const PreviousJobDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data: singleJob, isLoading, refetch } = useGetJobByIdQuery(id);

  const job = singleJob?.data;

  const [deleteJob] = useDeleteJobMutation();
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this job!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result: any) => {
      if (result.isConfirmed) {
        deleteJob(id);
        refetch();

        message.success("Your Job has been deleted.");
        router.push("/previous-jobs");
      }
    });
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <Head>
        <title>Previous Jobs Details</title>
      </Head>
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
              <p className="text-gray-600 mb-2">
                {" "}
                <span className="font-semibold">Qualification:</span>{" "}
                {job?.qualification}
              </p>
              <p className="text-gray-600 mb-2">
                {" "}
                <span className="font-semibold">Education:</span>{" "}
                {job?.education}
              </p>
              <p className="text-gray-600 mb-2">
                {" "}
                <span className="font-semibold">Deadline:</span> {job?.deadline}
              </p>
              <p className="text-gray-600 mb-2">
                {" "}
                <span className="font-semibold">Job Type:</span> {job?.type}
              </p>
            </div>
          </div>
          <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
            <div className="p-5">
              <span className="text-xl font-semibold text-black">
                <span className="font-semibold">Salary:</span> {job?.salary}
              </span>
              <div className="my-3">
                <button onClick={handleDelete}>
                  {" "}
                  <span className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
                    Delete job
                  </span>
                </button>
              </div>
              <div className="my-3">
                <Link href={`/update-job/${job?.id}`}>
                  {" "}
                  <span className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
                    Update Job
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PreviousJobDetails;
PreviousJobDetails.getLayout = function getLayout(page: any) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
