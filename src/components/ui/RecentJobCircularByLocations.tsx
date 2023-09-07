import { Cities } from "@/shared/City";
import { Image } from "antd";
import Link from "next/link";

import React from "react";
import Marquee from "react-fast-marquee";

const RecentJobCircularByLocations = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold ">
        Recent Job Circular By Locations
      </h2>
      <p className="text-xl mb-4">
        Find job opportunities in your suitable location
      </p>
      <Marquee>
        <div className="flex items-center">
          {Cities?.map((logo) => (
            <div
              key={logo.title}
              className="group flex flex-col items-center p-4 transition-transform transform hover:scale-105 rounded-lg overflow-hidden cursor-pointer"
            >
              <Link href={"/jobs"}>
                <div className="mb-4">
                  <Image
                    width={200}
                    height={200}
                    src={logo.logo}
                    alt={logo.title}
                  />
                  <p className="text-lg font-semibold text-center mt-2">
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
