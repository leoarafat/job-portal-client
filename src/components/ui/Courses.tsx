/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Course = () => {
  return (
    <div className="md:grid grid-cols-2 text-center  mb-8">
      <div className="flex items-center">
        <div>
          <h1 className="text-[30px] font-bold mb-8">Training</h1>
          <p className="text-lg font-sans mb-8 p-3">
            Skill Jobs is the pioneer job portal and skill development training
            provider in Bangladesh. The main focus of Skill Jobs is to make
            seekers capable of getting their desired jobs, make them updated
            with the recent job circular, and job holders to improve their
            position at the job. We have 20+ years of experience in this field
            which allows us to gain deep knowledge and expertise regarding
            training and placement.
          </p>
          <button className="px-6 py-3 border border-blue-500 text-black hover:bg-blue-500 hover:text-white rounded-md transition duration-300">
            <Link href={"/courses"}>Explore Courses</Link>
          </button>
        </div>
      </div>
      <div>
        <div className="flex  justify-center">
          <h1 className="text-[120px] font-bold">70</h1>
          <span className="text-[70px] font-bold mt-12">%</span>
        </div>
        <p className="text-lg">
          Get enroll now to get up to 70% discount on course fee.
        </p>
      </div>
    </div>
  );
};

export default Course;
