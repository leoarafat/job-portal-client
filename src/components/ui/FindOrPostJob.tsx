/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FindOrPostJob = () => {
  return (
    <div className=" grid md:grid-cols-2 gap-8 text-center p-10 bg-blue-50">
      {/* Find Job Section */}
      <div className="flex md:flex-row justify-center items-center">
        <div className="relative max-w-full w-full h-64">
          <Image
            layout="fill"
            objectFit="responsive"
            className="rouned-lg"
            src={
              "https://res.cloudinary.com/arafatleo/image/upload/v1700725433/Pro%20careers/step-4_1x.f4e61edbd4e05f77ec4bf7032d030fc9-removebg-preview_sppg91.png"
            }
            alt="Find Job"
          />
        </div>
        <div className="mt-4">
          <Link href={"/jobs"}>
            {" "}
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300 w-40">
              Apply for Jobs
            </button>
          </Link>
          <p className="text-gray-600 mt-2 font-semibold">
            Discover the latest job circulars in Bangladesh and around the
            world.
          </p>
        </div>
      </div>

      {/* Post Job Section */}
      <div className="flex flex-row-reverse md:flex-row-reverse justify-center items-center">
        <div className="relative max-w-ful w-full h-64">
          <Image
            layout="fill"
            objectFit="responsive"
            src={
              "https://res.cloudinary.com/arafatleo/image/upload/v1700725703/Pro%20careers/6cc07c563cbcbad44d4566619c16e64a-removebg_c95bsn.png"
            }
            alt="Post Job"
          />
        </div>
        <div className="mt-4">
          <p className="text-gray-600 mt-2 font-semibold">
            SkilljobsPost your job and find the best candidates for your
            company. Post a Job Now, It's{" "}
            <span className="text-red-600">free!</span>
          </p>
          <Link href={"/dashboard"}>
            {" "}
            <button className="px-6 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition duration-300 w-40">
              Post A Job
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FindOrPostJob;
