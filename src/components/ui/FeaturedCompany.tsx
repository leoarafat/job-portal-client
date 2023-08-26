import React from "react";
import Image from "next/image";
import { CompanyLogo } from "../../shared/companyLogo";

const FeaturedCompany = () => {
  return (
    <div className="bg-blue-100 p-6  shadow-md  ">
      <h2 className="text-[30px] font-semibold mb-4">Featured Company</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CompanyLogo?.map((logo) => (
          <div
            key={logo.title}
            className="group flex flex-col items-center p-2 transition-transform transform hover:scale-95 rounded-lg overflow-hidden"
          >
            <div className="w-24 h-12 mb-2">
              <Image
                src={logo.logo}
                alt={logo.title}
                width={120}
                height={60}
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
