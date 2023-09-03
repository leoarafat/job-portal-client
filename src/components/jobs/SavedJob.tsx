import { useGetSavedJobQuery } from "@/redux/features/job/jobSlice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { User } from "@/shared/user";
import React from "react";

const SavedJob = ({ jobs }: any) => {
  console.log(jobs);

  return <div>SavedJob</div>;
};

export default SavedJob;
