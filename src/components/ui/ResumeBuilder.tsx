/* eslint-disable @next/next/no-img-element */
import React from "react";

const ResumeBuilder = () => {
  return (
    <div className="md:grid grid-cols-2 text-center  bg-blue-50 mb-8">
      <div>
        <img
          className=""
          src="https://res.cloudinary.com/arafatleo/image/upload/v1693048581/Pro%20careers/Location/hbanner2.4fe5649_wzcyn6.png"
          alt="Test Your Employability"
        />
      </div>
      <div className="flex items-center">
        <div>
          <h1 className="text-[30px] font-bold mb-8">Resume Builder</h1>
          <p className="text-lg font-sans mb-8 p-3">
            Create and download a professional-looking resume, that matches all
            recent job circular, in minutes with our easy-to-use resume builder.
            Skill Jobs provides you with the most trusted resume-maker tool on
            the internet that will make your job application effective. Select
            your preferred template from our gallery and create your resume,
            cover letter and other job application documents for free!
          </p>
          <button className="px-6 py-3 border border-blue-500 text-black hover:bg-blue-500 hover:text-white rounded-md transition duration-300 mb-6">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
