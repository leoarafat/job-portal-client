import React, { useEffect } from "react";
import dynamic from "next/dynamic";

import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useGetPreviousJobsQuery } from "@/redux/features/job/jobSlice";
import { Spin } from "antd";

import PreviousJobsItem from "@/components/jobs/PreviousJobsItem";
import { useRouter } from "next/router";
import Loader from "@/components/loader/loader";
import DashboardLayout from "../dashboard";
import Head from "next/head";

const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const PreviousJobs = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const id = user?.id;
  const router = useRouter();
  const {
    data: previousJobsData,
    isLoading,
    refetch,
  } = useGetPreviousJobsQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  useEffect(() => {
    refetch();
  }, [id, refetch]);
  if (isLoading) {
    return <Loader />;
  }
  if (!user?.email) {
    router.push("/login-employee");
  }
  return (
    <div>
      <Head>
        <title>Previous Jobs</title>
      </Head>
      <h2 className="text-center text-[30px] text-gray-500 font-semibold">
        Your jobs
      </h2>
      {previousJobsData?.data ? (
        <>
          {previousJobsData?.data?.map((job: any) => {
            return <PreviousJobsItem key={job?.id} job={job} />;
          })}
        </>
      ) : (
        <p>You have no jobs yet</p>
      )}
    </div>
  );
};

export default PreviousJobs;
PreviousJobs.getLayout = function getLayout(page: any) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
