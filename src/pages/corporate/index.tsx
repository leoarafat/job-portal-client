import Recruit from "@/components/corporate/Recruit";
import RecruitmentService from "@/components/corporate/RecruitmentService";
import React from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/ui/Footer";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const Corporate = () => {
  return (
    <div>
      <RecruitmentService />
      <Recruit />
      <Footer />
    </div>
  );
};

export default Corporate;
Corporate.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
