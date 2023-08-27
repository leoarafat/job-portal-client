/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const RecruitmentService = () => {
  return (
    <div className="md:grid grid-cols-2 text-center  bg-blue-50 mb-8">
      <div className="flex items-center">
        <div>
          <h1 className="text-[30px] font-bold mb-8">
            Get Ready To Enjoy The Best Recruitment Service You've Ever
            Experienced!
          </h1>
          <p className="text-lg font-sans mb-8 p-3">
            We're here to assist you in hiring the best talents for your
            company. We made the hiring process as easy as possible. With Skill
            Jobs, go beyond reviews to increase talent acquisition with an
            active, appealing presence.
          </p>
          <button className="px-6 py-3 border border-blue-500 text-black hover:bg-blue-500 hover:text-white rounded-md transition duration-300 mb-6">
            Join Now
          </button>
        </div>
      </div>
      <div>
        <img
          className=""
          src="https://res.cloudinary.com/arafatleo/image/upload/v1693115861/Pro%20careers/Office_work-rafiki_a5mcbu.png"
          alt="Test Your Employability"
        />
      </div>
    </div>
  );
};

export default RecruitmentService;
