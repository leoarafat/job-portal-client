/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Benefits = () => {
  return (
    <div className="md:grid grid-cols-2 text-center   mb-8 p-3">
      <div className="flex items-center">
        <div>
          <h1 className="text-[30px] font-bold mb-8">
            Benefits Of Skills Jobs Paid Membership
          </h1>
          <ul className="flex flex-col items-center text-gray-500 ">
            <li className="pb-2">
              {" "}
              Hundreds of ready-to-use resume template to create and download
              your resume
            </li>
            <li className="pb-2"> Upload up to 05 resumes (PDF format)</li>
            <li className="pb-2">
              {" "}
              Get access to all premium employability skills tests
            </li>
            <li className="pb-2">
              {" "}
              Unlock all the premium professional resources
            </li>
            <li className="pb-2">
              {" "}
              Full access to your analytics dashboard, which will help you stay
              on top of industry trends
            </li>
            <li className="pb-2">
              {" "}
              Received regular updates of our career doctor Newsletter
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img
          className=""
          src="https://res.cloudinary.com/arafatleo/image/upload/v1693120665/Pro%20careers/Alzheimer-bro_tgny8e.png"
          alt="Test Your Employability"
        />
      </div>
    </div>
  );
};

export default Benefits;
