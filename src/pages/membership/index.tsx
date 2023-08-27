import PaidMember from "@/components/membership/PaidMember";
import React from "react";
import dynamic from "next/dynamic";
import JobSeekersPackage from "@/components/membership/JobSeekersPackage";
import Benefits from "@/components/membership/Benifit";
import ParticipateInSkills from "@/components/membership/ParticipateInSkills";
import Footer from "@/components/ui/Footer";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const Membership = () => {
  return (
    <div>
      <PaidMember />
      <JobSeekersPackage />
      <Benefits />
      <ParticipateInSkills />
      <Footer />
    </div>
  );
};

export default Membership;
Membership.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
