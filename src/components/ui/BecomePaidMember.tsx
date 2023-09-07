/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BecomePaidMember = () => {
  return (
    <div className="grid md:grid-cols-2  text-center  mb-10">
      <div className=" bg-blue-900 text-white flex items-center justify-center">
        <div className="">
          <Link href={"/membership"}>
            {" "}
            <h1 className="text-[30px] font-bold mb-14">
              Become Our Paid Member
            </h1>
          </Link>
          <p className="text-lg font-sans mb-14 p-3">
            Pro career is a popular job site and a comprehensive career
            solutions provider. Our paid membership offers a complete career
            guide with step-by-step directions on how to create an outstanding
            resume, ace the interview, and find the right job. This package
            enables job seekers to get access to all of our premium resources
            such as pro resume builder, skills tests, career toolkit, remote
            work and so on.
          </p>
          <button className="px-6 py-2 border border-blue-500 text-white hover:bg-white hover:text-black rounded-md transition duration-300 mb-10">
            Become A Paid Member
          </button>
        </div>
      </div>
      <div className="md:grid grid-cols-2 grid-rows-2">
        <div>
          <img
            className="h-[300px] w-full"
            src={
              "https://res.cloudinary.com/arafatleo/image/upload/v1693047178/Pro%20careers/Location/photo-1573497019236-17f8177b81e8_awkom7.jpg"
            }
            alt=""
          />
        </div>
        <div className="flex items-center justify-center bg-blue-900 h-[300px]">
          <div className="">
            <p className="text-center text-[25px] font-semibold text-white">
              500+ Companies are hiring
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-blue-200 h-[300px]">
          <div>
            <p className="text-center text-[25px] font-semibold  ">
              2000+ job circular
            </p>
          </div>
        </div>
        <div>
          <img
            className=" h-[300px] w-full"
            src={
              "https://res.cloudinary.com/arafatleo/image/upload/v1693047233/Pro%20careers/Location/photo-1516534775068-ba3e7458af70_gqkxdf.jpg"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BecomePaidMember;
