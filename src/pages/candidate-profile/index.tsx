import DashboardLayout from "@/components/layouts/DashboardLayout";

import React from "react";
import dynamic from "next/dynamic";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const CandidateProfile = () => {
  return (
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
        consectetur saepe recusandae? Voluptatibus praesentium ab, et earum
        voluptatum a repellendus dolorem odit consequatur nihil necessitatibus
        dolores laudantium modi! Officia doloribus nostrum modi ipsum voluptate
        ea ipsam aliquid non, similique temporibus reprehenderit cum quisquam
        enim itaque ut sit quam saepe dignissimos.
      </p>
    </div>
  );
};

export default CandidateProfile;

CandidateProfile.getLayout = function getLayout(page: any) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
