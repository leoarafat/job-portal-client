import dynamic from "next/dynamic";
import React, { useState } from "react";

const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);

import { jobCategories, jobTypes, locations } from "@/shared/jobPostUtils";
import { useAppSelector } from "@/redux/hooks";

import { RootState } from "@/redux/store";
import { usePostJobMutation } from "@/redux/features/job/jobSlice";
import { User } from "@/shared/user";
import { Spin, message, notification } from "antd";
import { isErrorResponse, isSuccessResponse } from "@/shared/loginResponse";
import { useGetSingleEmployeeQuery } from "@/redux/features/user/userSlice";
import { useRouter } from "next/router";
import DashboardLayout from "../dashboard";
import Head from "next/head";

const JobApplicationForm = () => {
  const [postJobs, { isLoading, isError, error, isSuccess }] =
    usePostJobMutation();
  const user = useAppSelector((state: RootState) => state.auth.user);
  const id = user?.id;
  const { data: employeeData } = useGetSingleEmployeeQuery(id);
  console.log(employeeData?.data?.isComplete);
  const router = useRouter();
  const [formData, setFormData] = useState({
    employeeId: id,
    title: "",
    companyName: "",
    jobCategory: jobCategories[0],
    location: locations[0],
    type: jobTypes[0],
    positionSummery: "",
    jobResponsibilities: "",
    qualification: "",
    requiredSkill: "",
    education: "",
    benefits: "",
    salary: "",
    vacancy: "",
    deadline: "",
  });
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!employeeData?.data?.isComplete) {
      notification.error({
        message: "Profile Incomplete",
        description: "Please complete your profile before posting a job.",
      });
      router.push(`/employee-profile/${id}`);
      return;
    }
    try {
      const response = await postJobs(formData);

      if (isSuccessResponse(response)) {
        message.success("Job posted Successful");
        router.push("/previous-jobs");
      } else if (isErrorResponse(response)) {
        message.error(response.error.data.message);
      }
    } catch (error) {}
  };
  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Head>
        <title>Post a job</title>
      </Head>
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4">Job Application Form</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="positionSummary"
              className="block text-sm font-medium text-gray-700"
            >
              Position Summary
            </label>
            <textarea
              required
              id="positionSummery"
              name="positionSummery"
              value={formData.positionSummery}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              rows={4}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="jobResponsibilities"
              className="block text-sm font-medium text-gray-700"
            >
              Job Responsibilities
            </label>
            <textarea
              required
              id="jobResponsibilities"
              name="jobResponsibilities"
              value={formData.jobResponsibilities}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              rows={4}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="benefits"
              className="block text-sm font-medium text-gray-700"
            >
              Benefits
            </label>
            <textarea
              required
              id="benefits"
              name="benefits"
              value={formData.benefits}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              rows={4}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="jobCategory"
              className="block text-sm font-medium text-gray-700"
            >
              Job Category
            </label>
            <select
              id="jobCategory"
              name="jobCategory"
              value={formData.jobCategory}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            >
              {jobCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="jobType"
              className="block text-sm font-medium text-gray-700"
            >
              Job Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            >
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="qualification"
              className="block text-sm font-medium text-gray-700"
            >
              Qualification
            </label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="requiredSkill"
              className="block text-sm font-medium text-gray-700"
            >
              Required Skill
            </label>
            <input
              type="text"
              id="requiredSkill"
              name="requiredSkill"
              value={formData.requiredSkill}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="education"
              className="block text-sm font-medium text-gray-700"
            >
              Education
            </label>
            <input
              type="text"
              id="education"
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="salary"
              className="block text-sm font-medium text-gray-700"
            >
              Salary
            </label>
            <input
              type="text"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="vacancy"
              className="block text-sm font-medium text-gray-700"
            >
              Vacancy
            </label>
            <input
              type="text"
              id="vacancy"
              name="vacancy"
              value={formData.vacancy}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="deadline"
              className="block text-sm font-medium text-gray-700"
            >
              Deadline
            </label>
            <input
              type="text"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            {isLoading ? <Spin /> : "          Apply"}
          </button>
        </form>
      </div>
    </>
  );
};

export default JobApplicationForm;

JobApplicationForm.getLayout = function getLayout(page: any) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
