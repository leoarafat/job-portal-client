/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Button, Form, Input, Select, Spin, Upload, message } from "antd";
import dynamic from "next/dynamic";

import { layout, validateMessages } from "@/constants/update";
import { UploadOutlined } from "@ant-design/icons";
import {
  useGetSingleEmployeeQuery,
  useUpdateEmployeeMutation,
} from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";

import { isErrorResponse, isSuccessResponse } from "@/shared/loginResponse";
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

const UpdateEmployee = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const router = useRouter();
  const [UpdateEmployee, { isLoading }] = useUpdateEmployeeMutation();
  const user = useAppSelector((employee) => employee?.auth?.user);
  const id = user?.id;
  const { data: employee, refetch } = useGetSingleEmployeeQuery(id);

  const emp = employee?.data;

  const onFinish = async (values: any) => {
    try {
      const response = await UpdateEmployee({
        id,
        data: values,
      });
      if (isSuccessResponse(response)) {
        message.success("Profile updated successful");
        refetch();
        router.push("/employee-profile");
      } else if (isErrorResponse(response)) {
        message.error(response.error.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleImageChange = (info: any) => {
    if (info.file.status === "done") {
      setImageUrl(info.file.response.url);
    }
  };
  if (isLoading) {
    return <Loader />;
  }
  if (!user?.email) {
    router.push("/login-employee");
  }

  return (
    <>
      <Head>
        <title>Update - Employee</title>
      </Head>{" "}
      <div className="p-10 flex flex-col items-center justify-center">
        <h1 className="text-[30px] font-semibold mb-6">
          Hey! Please complete your profile
        </h1>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          style={{ maxWidth: 600 }}
        >
          {/* Image Upload */}
          <Form.Item name={["image"]} label="Image">
            <Upload
              name="image"
              action="/your-upload-endpoint"
              listType="picture-card"
              showUploadList={true}
              onChange={handleImageChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="Profile" style={{ width: "100%" }} />
              ) : (
                <div>
                  <UploadOutlined />
                  <div className="ant-upload-text">Upload</div>
                </div>
              )}
            </Upload>
          </Form.Item>
          <Form.Item
            name={["name"]}
            label="Company Name"
            initialValue={emp?.name}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            initialValue={emp?.phoneNumber}
            name={["phoneNumber"]}
            label="Phone Number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue={emp?.website}
            name={["website"]}
            label="Company Website"
            rules={[{ type: "url", required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue={emp?.twitterUrl}
            name={["twitterUrl"]}
            label="Twitter Url"
            rules={[{ type: "url", required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue={emp?.facebookUrl}
            name={["facebookUrl"]}
            label="Facebook Url"
            rules={[{ type: "url", required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue={emp?.linkedinUrl}
            name={["linkedinUrl"]}
            label="Linkedin Url"
            rules={[{ type: "url", required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue={emp?.companySize}
            name={["companySize"]}
            label="Company Size"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select Company Size">
              <Select.Option value="Small">1-50</Select.Option>
              <Select.Option value="Medium">51-100</Select.Option>
              <Select.Option value="Large">101-500</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            initialValue={emp?.tin}
            name={["tin"]}
            label="Tin"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue={emp?.tradeLicenseNumber}
            name={["tradeLicenseNumber"]}
            label="Trade License"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue={emp?.address}
            name={["address"]}
            label="Address"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue={emp?.recruiterName}
            name={["recruiterName"]}
            label="Recruiter Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue={emp?.recruiterDesignation}
            name={["recruiterDesignation"]}
            label="Recruiter Designation"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue={emp?.recruiterNumber}
            name={["recruiterNumber"]}
            label="Recruiter Number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue={emp?.description}
            name={["description"]}
            label="Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button className="bg-blue-800" type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default UpdateEmployee;
UpdateEmployee.getLayout = function getLayout(page: any) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
