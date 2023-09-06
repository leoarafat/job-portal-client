/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import dynamic from "next/dynamic";
import { useGetSingleCandidateQuery } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { User } from "@/shared/user";
import { RootState } from "@/redux/store";
import { message } from "antd";
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

const CandidateProfile = () => {
  const user = useAppSelector((state: RootState) => state.auth.user) as User;
  const id = user?.id;

  const { data: candidate, isLoading, error } = useGetSingleCandidateQuery(id);
  const router = useRouter();
  if (isLoading) {
    return <Loader />;
  }

  const {
    name,
    careerObjective,
    educations,
    email,
    experience,
    facebookUrl,
    gender,
    isComplete,
    jobType,
    linkedinUrl,
    portfolioUrl,
    mobileNumber,
    nidNumber,
    presentAddress,
    permanentAddress,
    photoUrl,
    role,
  } = candidate?.data;
  if (!candidate?.data) {
    return message.error("Something went wrong");
  }
  if (!user?.email) {
    router.push("/login-employee");
  }
  return (
    <div>
      <Head>
        <title>Profile - candidate</title>
      </Head>
      <h2 className="text-[30px] text-center text-gray-500 font-semibold">
        {isComplete ? <p>Your Profile</p> : <p>Please complete your profile</p>}
      </h2>
      <div className="bg-white shadow-lg p-6 md:p-10 rounded-lg mx-auto max-w-md">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <img
            src={
              photoUrl
                ? photoUrl
                : "https://res.cloudinary.com/arafatleo/image/upload/v1693120665/Pro%20careers/Alzheimer-bro_tgny8e.png"
            }
            alt="Profile"
            className="w-24 h-24 rounded-full md:mr-6 mb-4 md:mb-0"
          />
          <div className="text-center md:text-left">
            <div className="flex items-center">
              <h2 className="text-xl md:text-2xl font-semibold">{name} </h2>
              <span className="text-gray-500">({role})</span>
            </div>

            <p className="text-gray-600">Web Developer</p>
          </div>
        </div>
        <div className="space-y-4">
          <p>
            <span className="font-semibold">Gender:</span> {gender}
          </p>
          <p>
            <span className="font-semibold">Mobile Number:</span> {mobileNumber}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {email}
          </p>

          <p>
            <span className="font-semibold">Facebook Url:</span> {facebookUrl}
          </p>

          <p>
            <span className="font-semibold">Portfolio Url:</span> {portfolioUrl}
          </p>

          <p>
            <span className="font-semibold">Linkedin Url:</span> {linkedinUrl}
          </p>

          <p>
            <span className="font-semibold">Job Type:</span> {jobType}
          </p>

          <p>
            <span className="font-semibold">NID:</span> {nidNumber}
          </p>

          <p>
            <span className="font-semibold">Present Address:</span>{" "}
            {presentAddress}
          </p>
          <p>
            <span className="font-semibold">Permanent Address:</span>{" "}
            {permanentAddress}
          </p>

          <p>
            <span className="font-semibold">Education:</span> {educations}
          </p>
          <p>
            <span className="font-semibold">Experience:</span> {experience}
          </p>
          <p>
            <span className="font-semibold">Career Objective:</span>{" "}
            {careerObjective}
          </p>
        </div>
      </div>
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
