/* eslint-disable @next/next/no-img-element */
import React from "react";

const SkillAssetment = () => {
  return (
    <div className="md:grid grid-cols-2 text-center  mb-8">
      <div className="mx-auto md:mx-0">
        <h1 className="text-[30px] font-bold mb-8">Test Your Employability</h1>
        <p className="text-lg font-sans mb-8 p-3">
          Getting employed is not just about having a single work skill. It
          requires you to get involved with a lot of people, analyze critical
          situations, solve problems, know and act according to the right
          etiquette, etc. Skill Jobs, a job site in Bangladesh, is offering you
          not only easy job application feature but also Employability Skill
          Test Platform to access your employability skills.
        </p>
        <button className="px-6 py-3 border border-blue-500 text-black hover:bg-blue-500 hover:text-white rounded-md transition duration-300">
          Explore All
        </button>
      </div>

      <div className="flex justify-center items-center">
        <div className="bg-base-100 shadow-md p-3">
          <img
            className=""
            src="https://res.cloudinary.com/arafatleo/image/upload/v1693047569/Pro%20careers/Location/skilltestimage.e24fe37_jmjavq.png"
            alt="Test Your Employability"
          />
          <p className="font-semibold">
            Participate in Employability Test and earn Skills Reward Point
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillAssetment;
