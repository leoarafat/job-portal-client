import JobDetails from "@/components/filtering/JobDetails";
import React from "react";
import dynamic from "next/dynamic";

const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const Details = () => {
  return (
    <div>
      <JobDetails />
    </div>
  );
};

export default Details;
Details.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
