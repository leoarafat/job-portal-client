import dynamic from "next/dynamic";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
const { Dragger } = Upload;

const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
import React, { useState } from "react";

const EmployeeProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    nidNumber: "",
    mobileNumber: "",
    photoUrl: "",
    email: "",
    portfolioUrl: "",
    facebookUrl: "",
    linkedinUrl: "",
    jobType: "",
    presentAddress: "",
    permanentAddress: "",
    careerObjective: "",
    educations: "",
    experience: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    // You can perform form submission logic here using formData
  };
  const handleUploadChange = (info: any) => {
    if (info.file.status === "done") {
      const photoUrl = info.file.response.secure_url;
      setFormData((prevData) => ({
        ...prevData,
        photoUrl: photoUrl,
      }));
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  const cloudinaryConnectionString =
    "cloudinary://951597231427238:jSo6U2pra-9lypRHBZzrcaspgVI@arafatleo";
  const [cloudName, apiKey, apiSecret] = cloudinaryConnectionString
    .replace("cloudinary://", "")
    .split(":");
  // const apiKey = "951597231427238";
  // const apiSecret = "jSo6U2pra-9lypRHBZzrcaspgVI";
  // const cloudName = "arafatleo";
  const uploadProps = {
    name: "file",
    action: `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
    headers: {
      authorization: `Bearer ${apiSecret}`,
    },
    onChange: handleUploadChange,
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-4">Update Your Profile</h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Photo
          </label>
          <Dragger {...uploadProps}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nidNumber"
            >
              NID Number
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nidNumber"
              type="text"
              name="nidNumber"
              value={formData.nidNumber}
              onChange={handleInputChange}
              placeholder="NID Number"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mobileNumber"
            >
              Mobile Number
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobileNumber"
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              placeholder="Mobile Number"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="portfolioUrl"
            >
              Portfolio URL
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="portfolioUrl"
              type="url"
              name="portfolioUrl"
              value={formData.portfolioUrl}
              onChange={handleInputChange}
              placeholder="Portfolio URL"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="facebookUrl"
            >
              Facebook URL
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="facebookUrl"
              type="url"
              name="facebookUrl"
              value={formData.facebookUrl}
              onChange={handleInputChange}
              placeholder="Facebook URL"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="linkedinUrl"
            >
              LinkedIn URL
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="linkedinUrl"
              type="url"
              name="linkedinUrl"
              value={formData.linkedinUrl}
              onChange={handleInputChange}
              placeholder="LinkedIn URL"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="jobType"
            >
              Job Type
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="jobType"
              name="jobType"
              value={formData.jobType}
              onChange={handleInputChange}
            >
              <option value="">Select Job Type</option>
              <option value="FullTime">Full Time</option>
              <option value="Internship">Internship</option>
              <option value="PartTime">Part Time</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="presentAddress"
            >
              Present Address
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="presentAddress"
              name="presentAddress"
              value={formData.presentAddress}
              onChange={handleInputChange}
              placeholder="Present Address"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="permanentAddress"
            >
              Permanent Address
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="permanentAddress"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleInputChange}
              placeholder="Permanent Address"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="careerObjective"
            >
              Career Objective
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="careerObjective"
              name="careerObjective"
              value={formData.careerObjective}
              onChange={handleInputChange}
              placeholder="Career Objective"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="educations"
            >
              Educations
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="educations"
              name="educations"
              value={formData.educations}
              onChange={handleInputChange}
              placeholder="Educations"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="experience"
            >
              Experience
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              placeholder="Experience"
            />
          </div>
        </div>
        <div className="flex items-center justify-center sm:justify-between mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Profile
          </button>
        </div>
      </form>
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
