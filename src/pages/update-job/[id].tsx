import React from "react";
import dynamic from "next/dynamic";
import { Form, Input, Select, Button, Spin, message } from "antd";
import { jobCategories, jobTypes, locations } from "@/shared/jobPostUtils";
import { useRouter } from "next/router";
import {
  useGetJobByIdQuery,
  useUpdateJobMutation,
} from "@/redux/features/job/jobSlice";

import { isErrorResponse, isSuccessResponse } from "@/shared/loginResponse";
import DashboardLayout from "../dashboard";
import Head from "next/head";
const { Option } = Select;
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);

const UpdateJob = () => {
  const [form] = Form.useForm();

  const [UpdateJob, { isLoading }] = useUpdateJobMutation();
  const router = useRouter();
  const id = router.query.id;

  const { data: job, refetch } = useGetJobByIdQuery(id);

  const myJob = job?.data;
  console.log(myJob);

  const handleFormSubmit = async (values: any) => {
    try {
      const response = await UpdateJob({
        id,
        data: values,
      });
      if (isSuccessResponse(response)) {
        message.success("Job post updated successful");
        refetch();
        router.push("/previous-jobs");
      } else if (isErrorResponse(response)) {
        message.error(response.error.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Update Job</title>
      </Head>
      <RootLayout>
        <DashboardLayout>
          <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Update Job
            </h2>
            <Form form={form} onFinish={handleFormSubmit}>
              <Form.Item label="Title" name="title" initialValue={myJob?.title}>
                <Input />
              </Form.Item>
              <Form.Item
                label="Company Name"
                name="companyName"
                initialValue={myJob?.companyName}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Job Responsibilities"
                name="jobResponsibilities"
                initialValue={myJob?.jobResponsibilities}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
              <Form.Item
                label="Position Summary"
                name="positionSummery"
                initialValue={myJob?.positionSummery}
              >
                <Input.TextArea rows={4} />
              </Form.Item>

              <Form.Item
                label="Job Category"
                name="jobCategory"
                initialValue={myJob?.jobCategory}
              >
                <Select>
                  {jobCategories.map((category) => (
                    <Option key={category} value={category}>
                      {category}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="Location"
                name="location"
                initialValue={myJob?.location}
              >
                <Select>
                  {locations.map((location) => (
                    <Option key={location} value={location}>
                      {location}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="Job Type"
                name="type"
                initialValue={myJob?.type}
              >
                <Select>
                  {jobTypes.map((type) => (
                    <Option key={type} value={type}>
                      {type}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label="Qualification"
                name="qualification"
                initialValue={myJob?.qualification}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Required Skill"
                name="requiredSkill"
                initialValue={myJob?.requiredSkill}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Education"
                name="education"
                initialValue={myJob?.education}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Benefits"
                name="benefits"
                initialValue={myJob?.benefits}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Vacancy"
                name="vacancy"
                initialValue={myJob?.vacancy}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Deadline"
                name="deadline"
                initialValue={myJob?.deadline}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Salary"
                name="salary"
                initialValue={myJob?.salary}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button
                  className="bg-blue-500"
                  type="primary"
                  htmlType="submit"
                  loading={isLoading}
                >
                  {isLoading ? "Updating..." : "Update Job"}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </DashboardLayout>
      </RootLayout>
    </>
  );
};

export default UpdateJob;
