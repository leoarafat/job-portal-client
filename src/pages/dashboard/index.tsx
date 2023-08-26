import DashboardLayout from "@/components/layouts/DashboardLayout";

import React from "react";
import dynamic from "next/dynamic";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const Dashboard = () => {
  return <div></div>;
};

export default Dashboard;
Dashboard.getLayout = function getLayout(page: any) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
