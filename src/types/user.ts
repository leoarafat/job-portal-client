import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

export interface LoginFormValues {
  email: string;
  role: string;
  password: string;
}
export interface ICandidateUpdate {
  name?: string;
  gender?: Gender;
  nidNumber?: number | null;
  mobileNumber?: number | null;
  photoUrl?: string | null;

  portfolioUrl?: string | null;
  facebookUrl?: string | null;
  linkedinUrl?: string | null;
  jobType?: JobType | null;
  presentAddress?: string | null;
  permanentAddress?: string | null;
  careerObjective?: string | null;
  educations?: string | null;
  experience?: string | null;
}

type Gender = "Male" | "Female" | "Others";
type JobType = "FullTime" | "Internship" | "PartTime";

export interface APIResponse<T> {
  data?: T;
  error?: {
    message: string;
  };
}
