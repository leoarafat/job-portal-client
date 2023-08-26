import { Cities } from "@/shared/City";
import { Image } from "antd";
import Link from "next/link";

import React from "react";
import Marquee from "react-fast-marquee";
const RecentJobCircularByLocations = () => {
  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-[30px] font-bold">
        Recent Job Circular By Locations
      </h2>
      <p className="mb-4 text-[20px]">
        Find job opportunities in your suitable location
      </p>
      <Marquee>
        <div className="flex  items-center">
          {Cities?.map((logo) => (
            <div
              key={logo.title}
              className="group flex flex-col items-center p-2 transition-transform transform hover:scale-95 rounded-lg overflow-hidden"
            >
              <Link href={"/"}>
                {" "}
                <div className=" mb-2">
                  <Image
                    width={200}
                    height={200}
                    src={logo.logo}
                    alt={logo.title}
                  />
                  <p className="text-center bg-gray-200 rounded-md p-2 text-lg">
                    {logo.title}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default RecentJobCircularByLocations;
