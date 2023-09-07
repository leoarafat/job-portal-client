import React from "react";
import Image from "next/image";
import { CompanyLogo } from "../../shared/companyLogo";

const FeaturedCompany = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Featured Company</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CompanyLogo?.map((logo) => (
          <div
            key={logo.title}
            className="group flex flex-col items-center p-2 transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden cursor-pointer"
          >
            <div className="w-32 h-16 mb-2">
              <Image
                src={logo.logo}
                alt={logo.title}
                width={160}
                height={80}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCompany;
