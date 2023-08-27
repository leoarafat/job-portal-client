/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const PaidMember = () => {
  return (
    <div className="md:grid grid-cols-2 text-center  mb-8">
      <div className="flex items-center">
        <div>
          <h1 className="text-[30px] font-bold mb-8">
            Pro Career: Your One-Stop Career Solution
          </h1>
          <p className="text-lg font-sans mb-8 p-3">
            Pro career is a popular job site and a comprehensive career
            solutions provider. Our paid membership offers a complete career
            guide with step-by-step directions on how to create an outstanding
            resume, ace the interview, and find the right job. This package
            enables job seekers to get access to all of our premium resources
            such as pro resume builder, skills tests, career toolkit, remote
            work along with easy job application.
          </p>
          <button className="px-6 py-3 border border-blue-500 text-black hover:bg-blue-500 hover:text-white rounded-md transition duration-300 mb-6">
            Become a paid member
          </button>
        </div>
      </div>
      <div>
        <img
          className=""
          src="https://res.cloudinary.com/arafatleo/image/upload/v1693118854/Pro%20careers/paidmembership-jobseeker-min_xg4n92.jpg"
          alt="Test Your Employability"
        />
      </div>
    </div>
  );
};

export default PaidMember;
