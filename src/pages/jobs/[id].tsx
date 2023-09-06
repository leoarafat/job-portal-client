import JobDetails from "@/components/filtering/JobDetails";
import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const Details = () => {
  return (
    <div>
      <Head>
        <title>Job - Details</title>
      </Head>
      <JobDetails />
    </div>
  );
};

export default Details;
Details.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
