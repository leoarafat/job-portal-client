/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Spin,
  Upload,
  message,
} from "antd";
import dynamic from "next/dynamic";

import { layout, validateMessages } from "@/constants/update";
import { UploadOutlined } from "@ant-design/icons";
import {
  useGetSingleCandidateQuery,
  useUpdateCandidateMutation,
} from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { User } from "@/shared/user";
import { isErrorResponse, isSuccessResponse } from "@/shared/loginResponse";
import { useRouter } from "next/router";
import Loader from "@/components/loader/loader";
import { RootState } from "@/redux/store";
import DashboardLayout from "../dashboard";
import Head from "next/head";

const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const UpdateCandidate = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const router = useRouter();
  const user = useAppSelector((state: RootState) => state?.auth?.user);

  const id = user?.id;
  const [UpdateCandidate, { isLoading, isError, error }] =
    useUpdateCandidateMutation();

  const { data: candidate, refetch } = useGetSingleCandidateQuery(id);

  const onFinish = async (values: any) => {
    try {
      const response = await UpdateCandidate({
        id,
        data: values,
      });

      if (isSuccessResponse(response)) {
        message.success("Profile updated successful");

        router.push("/candidate-profile");
        refetch();
      } else if (isErrorResponse(response)) {
        message.error(response.error.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (info: any) => {
    console.log(info.file);
  };

  if (isLoading) {
    return <Loader />;
  }
  if (!user?.email) {
    router.push("/login-candidate");
  }

  return (
    <div>
      <Head>
        <title>Update - candidate</title>
      </Head>
      <div className="p-10 flex flex-col items-center justify-center">
        <h1 className="text-[30px] text-gray-500 font-semibold mb-6">
          {candidate?.data?.isComplete ? (
            <p>Profile Completed</p>
          ) : (
            <p>Please complete your profile</p>
          )}
        </h1>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          style={{ maxWidth: 600 }}
        >
          <Form.Item name={["photoUrl"]} label="Image">
            <Upload
              name="image"
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
            initialValue={candidate?.data?.name}
            name={["name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue={candidate?.data?.nidNumber}
            name={["nidNumber"]}
            label="Nid Number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue={candidate?.data?.gender}
            name={["gender"]}
            label="Gender"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select Gender">
              <Select.Option value="Male">Male</Select.Option>
              <Select.Option value="Female">Female</Select.Option>
              <Select.Option value="Others">Others</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            initialValue={candidate?.data?.mobileNumber}
            name={["mobileNumber"]}
            label="Phone Number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue={candidate?.data?.portfolioUrl}
            name={["portfolioUrl"]}
            label="Portfolio"
            rules={[{ type: "url", required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            initialValue={candidate?.data?.facebookUrl}
            name={["facebookUrl"]}
            label="Facebook Url"
            rules={[{ type: "url", required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue={candidate?.data?.linkedinUrl}
            name={["linkedinUrl"]}
            label="Linkedin Url"
            rules={[{ type: "url", required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue={candidate?.data?.jobType}
            name={["jobType"]}
            label="Job Type"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select Company Size">
              <Select.Option value="FullTime">Full-Time</Select.Option>
              <Select.Option value="Internship">Internship</Select.Option>
              <Select.Option value="PartTime">Part-Time</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            initialValue={candidate?.data?.educations}
            name={["educations"]}
            label="Educations"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue={candidate?.data?.experience}
            name={["experience"]}
            label="Experience"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue={candidate?.data?.presentAddress}
            name={["presentAddress"]}
            label="Present Address"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            initialValue={candidate?.data?.permanentAddress}
            name={["permanentAddress"]}
            label="Permanent Address"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            initialValue={candidate?.data?.careerObjective}
            name={["careerObjective"]}
            label="Career Objective"
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
    </div>
  );
};

export default UpdateCandidate;
UpdateCandidate.getLayout = function getLayout(page: any) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
