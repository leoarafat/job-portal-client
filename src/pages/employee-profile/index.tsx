/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import dynamic from "next/dynamic";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { User } from "@/shared/user";
import { useGetSingleEmployeeQuery } from "@/redux/features/user/userSlice";
import { Spin, message } from "antd";
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

const EmployeeProfile = () => {
  const user = useAppSelector((state: RootState) => state?.auth?.user) as User;
  const id = user?.id;
  const router = useRouter();
  const { data: employee, isLoading } = useGetSingleEmployeeQuery(id);
  if (isLoading) {
    return <Loader />;
  }
  if (!employee?.data) {
    return message.error("Something went wrong");
  }
  const emp = employee?.data;

  if (!user?.email) {
    router.push("/login-employee");
  }
  return (
    <div>
      <Head>
        <title>Profile - Employee</title>
      </Head>
      <h2 className="text-[30px] text-center text-gray-500 font-semibold">
        {employee?.data?.isComplete ? (
          <p>Your Profile</p>
        ) : (
          <p>Please complete your profile</p>
        )}
      </h2>
      <div className="bg-white shadow-lg p-6 md:p-10 rounded-lg mx-auto max-w-md">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <img
            src="https://res.cloudinary.com/arafatleo/image/upload/v1693461228/Pro%20careers/images_gclosy.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full md:mr-6 mb-4 md:mb-0"
          />
          <div className="text-center md:text-left">
            <div className="flex items-center">
              <h2 className="text-xl md:text-2xl font-semibold">{emp?.name}</h2>
              <p className="text-gray-500">({emp?.role})</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <p>
            <span className="font-semibold">Mobile Number:</span>{" "}
            {emp?.phoneNumber}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {emp?.email}
          </p>
          <p>
            <span className="font-semibold">Facebook Url:</span>{" "}
            {emp?.facebookUrl}
          </p>
          <p>
            <span className="font-semibold">Linkedin Url:</span>{" "}
            {emp?.linkedinUrl}
          </p>
          <p>
            <span className="font-semibold">Twitter Url:</span>{" "}
            {emp?.twitterUrl}
          </p>
          <p>
            <span className="font-semibold">Company Website:</span>{" "}
            {emp?.website}
          </p>

          <p>
            <span className="font-semibold">Address:</span> {emp?.address}
          </p>
          <p>
            <span className="font-semibold">Company Size:</span>{" "}
            {emp?.companySize}
          </p>
          <p>
            <span className="font-semibold">Recruiter Name:</span>{" "}
            {emp?.recruiterName}
          </p>
          <p>
            <span className="font-semibold">Recruiter Designation:</span>{" "}
            {emp?.recruiterDesignation}
          </p>

          <p>
            <span className="font-semibold">Recruiter Number:</span>{" "}
            {emp?.recruiterNumber}
          </p>
          <p>
            <span className="font-semibold">Trade License Number:</span>{" "}
            {emp?.tradeLicenseNumber}
          </p>
          <p>
            <span className="font-semibold">Description:</span>{" "}
            {emp?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;

EmployeeProfile.getLayout = function getLayout(page: any) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
