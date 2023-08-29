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
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { useUpdateEmployeeMutation } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { User } from "@/shared/user";
import { isErrorResponse, isSuccessResponse } from "@/shared/loginResponse";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);

const UpdateEmployee = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [UpdateEmployee, { isLoading }] = useUpdateEmployeeMutation();
  const user = useAppSelector((employee) => employee.auth.user) as User;
  const id = user?.id;
  const onFinish = async (values: any) => {
    try {
      const response = await UpdateEmployee({
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
        <Form.Item name={["name"]} label="Company Name">
          <Input />
        </Form.Item>
        <Form.Item
          name={["phoneNumber"]}
          label="Phone Number"
          rules={[{ type: "number" }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["website"]}
          label="Company Website"
          rules={[{ type: "url" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["twitterUrl"]}
          label="Twitter Url"
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
        <Form.Item name={["companySize"]} label="Company Size">
          <Select placeholder="Select Company Size">
            <Select.Option value="Small">1-50</Select.Option>
            <Select.Option value="Medium">51-100</Select.Option>
            <Select.Option value="Large">101-500</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name={["tin"]} label="Tin">
          <Input />
        </Form.Item>
        <Form.Item
          name={["tradeLicenseNumber"]}
          label="Trade License"
          rules={[{ type: "number" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["address"]} label="Address">
          <Input />
        </Form.Item>
        <Form.Item name={["recruiterName"]} label="Recruiter Name">
          <Input />
        </Form.Item>
        <Form.Item
          name={["recruiterDesignation"]}
          label="Recruiter Designation"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["recruiterNumber"]}
          label="Recruiter Number"
          rules={[{ type: "number" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["description"]} label="Description">
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

export default UpdateEmployee;
UpdateEmployee.getLayout = function getLayout(page: any) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
