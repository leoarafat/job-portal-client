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
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { layout, validateMessages } from "@/constants/update";
import { UploadOutlined } from "@ant-design/icons";
import { useUpdateCandidateMutation } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { User } from "@/shared/user";
import { APIResponse, ICandidateUpdate } from "@/types/user";
import { isErrorResponse, isSuccessResponse } from "@/shared/loginResponse";

const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const UpdateCandidate = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const user = useAppSelector((candidate) => candidate.auth.user) as User;

  const id = user?.id;
  const [UpdateCandidate, { isLoading, isError, error }] =
    useUpdateCandidateMutation();

  const onFinish = async (values: any) => {
    try {
      const response = await UpdateCandidate({
        id,
        data: values,
      });
      if (isSuccessResponse(response)) {
        message.success("Profile updated successful");
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

  return (
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
        <Form.Item name={["name"]} label="Name">
          <Input />
        </Form.Item>
        <Form.Item
          name={["nidNumber"]}
          label="Nid Number"
          rules={[{ type: "number" }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["mobileNumber"]}
          label="Phone Number"
          rules={[{ type: "number" }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["portfolioUrl"]}
          label="Portfolio"
          rules={[{ type: "url" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={["facebookUrl"]}
          label="Facebook Url"
          rules={[{ type: "url" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["linkedinUrl"]}
          label="Linkedin Url"
          rules={[{ type: "url" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["jobType"]} label="Job Type">
          <Select placeholder="Select Company Size">
            <Select.Option value="FullTime">Full-Time</Select.Option>
            <Select.Option value="Internship">Internship</Select.Option>
            <Select.Option value="PartTime">Part-Time</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name={["educations"]} label="Educations">
          <Input />
        </Form.Item>
        <Form.Item name={["experience"]} label="Experience">
          <Input />
        </Form.Item>
        <Form.Item name={["presentAddress"]} label="Present Address">
          <Input />
        </Form.Item>
        <Form.Item name={["permanentAddress"]} label="Permanent Address">
          <Input />
        </Form.Item>

        <Form.Item name={["careerObjective"]} label="Career Objective">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button className="bg-blue-800" type="primary" htmlType="submit">
            {isLoading ? <Spin /> : "Submit"}
          </Button>
        </Form.Item>
      </Form>
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
