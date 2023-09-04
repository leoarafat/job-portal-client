import React, { useState } from "react";
import { Button, message, notification, Modal, Input } from "antd";

import { useRouter } from "next/router";
import {
  useApplyJobMutation,
  useGetJobByIdQuery,
} from "@/redux/features/job/jobSlice";
import Loader from "../loader/loader";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useGetSingleCandidateQuery } from "@/redux/features/user/userSlice";
import { User } from "@/shared/user";

import { isErrorResponse, isSuccessResponse } from "@/shared/loginResponse";
const { TextArea } = Input;
const JobDetails = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [coverLetter, setCoverLetter] = useState("");
  const [whyHire, setWhyHire] = useState("");
  const router = useRouter();
  //! Job id
  const { id } = router.query;
  //! Job data
  const { data: job, isLoading, isError, refetch } = useGetJobByIdQuery(id);

  //! Candidate
  const user = useAppSelector((state: RootState) => state.auth.user) as User;
  const candidateId = user?.id;
  //! Candidate data
  const { data: candidateData } = useGetSingleCandidateQuery(candidateId);

  //! Apply Job
  const [applyJob] = useApplyJobMutation();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return message.error("Something Went Wrong");
  }

  if (!job?.data) {
    return null;
  }

  const {
    title,
    positionSummery,
    jobResponsibilities,
    qualification,
    requiredSkill,
    education,
    benefits,
    location,
    companyName,
    salary,
    vacancy,
    jobCategory,
    deadline,
    type,
  } = job?.data;

  const showModal = () => {
    if (!candidateData?.data?.isComplete) {
      notification.error({
        message: "Please complete your profile",
        description: "You need to complete your profile before applying.",
      });
      router.push(`/candidate-profile/${candidateId}`);
    } else {
      setIsModalVisible(true);
    }
  };

  const handleOk = async () => {
    setIsSubmitting(true);
    try {
      const response = await applyJob({
        data: { candidateId, jobId: id, assessment: whyHire, coverLetter },
      });
      console.log(response);
      if (isSuccessResponse(response)) {
        message.success("Job applied successful");

        router.push("/jobs");
        refetch();
      } else if (isErrorResponse(response)) {
        message.error(response.error.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    setIsModalVisible(false);
    setIsSubmitting(false);
  };

  const handleCancel = () => {
    // Handle Cancel button click
    setIsModalVisible(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">{title}</h1>
          <p className="text-gray-600">{companyName}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Job Summary</h2>
              <p className="text-gray-800">{positionSummery}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">
                Job Responsibilities
              </h2>
              <p className="text-gray-800">{jobResponsibilities}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Qualifications</h2>
              <p className="text-gray-800">{qualification}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Required Skills</h2>
              <p className="text-gray-800">{requiredSkill}</p>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Location</h2>
              <p className="text-gray-800">{location}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Salary</h2>
              <p className="text-gray-800">{salary}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Vacancy</h2>
              <p className="text-gray-800">{vacancy}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Job Category</h2>
              <p className="text-gray-800">{jobCategory}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Deadline</h2>
              <p className="text-gray-800">{deadline}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Type</h2>
              <p className="text-gray-800">{type}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center space-x-4">
          {user?.role === "Candidate" ? (
            <Button
              onClick={showModal}
              type="primary"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full"
              loading={isSubmitting}
            >
              Apply Now
            </Button>
          ) : (
            <p className="text-red-400">
              Only Candidates can apply for this job
            </p>
          )}
        </div>
      </div>
      <Modal
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={isSubmitting}
      >
        <TextArea
          placeholder="Cover Letter"
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          rows={4}
          className="mb-2"
        />
        <TextArea
          placeholder="Why should we hire you?"
          value={whyHire}
          onChange={(e) => setWhyHire(e.target.value)}
          rows={4}
        />
      </Modal>
    </div>
  );
};

export default JobDetails;
