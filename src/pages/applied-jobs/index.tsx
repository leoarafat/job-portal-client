import MyJobList from "@/components/jobs/MyJob";
import React from "react";
import dynamic from "next/dynamic";
import DashboardLayout from "../dashboard";
import Head from "next/head";

const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const MyJob = () => {
  return (
    <div>
      <Head>
        <title>Applied Job List</title>
      </Head>
      <MyJobList />
    </div>
  );
};

export default MyJob;
MyJob.getLayout = function getLayout(page: any) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
