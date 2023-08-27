import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Select, Upload } from "antd";
import dynamic from "next/dynamic";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { layout, validateMessages } from "@/constants/update";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);

const EmployeeProfile = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const onFinish = (values: any) => {
    console.log(values.image);
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
        <Form.Item name={["image"]} label="Image" rules={[{ required: true }]}>
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
          name={["companyName"]}
          label="Company Name"
          rules={[{ required: true }]}
        >
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
          rules={[{ required: true, type: "url" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["twitterUrl"]}
          label="Twitter Url"
          rules={[{ required: true, type: "url" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["facebookUrl"]}
          label="Facebook Url"
          rules={[{ required: true, type: "url" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["linkedinUrl"]}
          label="Linkedin Url"
          rules={[{ required: true, type: "url" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
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
        <Form.Item name={["tin"]} label="Tin" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={["tradeLicenseNumber"]}
          label="Trade License"
          rules={[{ required: true, type: "number" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["address"]}
          label="Address"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["recruiterName"]}
          label="Recruiter Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["recruiterDesignation"]}
          label="Recruiter Designation"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["recruiterNumber"]}
          label="Recruiter Number"
          rules={[{ required: true, type: "number" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["description"]}
          label="Description"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button className="bg-blue-800" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
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
