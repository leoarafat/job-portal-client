import MyJobList from "@/components/jobs/MyJob";
import React from "react";
import dynamic from "next/dynamic";
import DashboardLayout from "../dashboard";

const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const MyJob = () => {
  return (
    <div>
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
