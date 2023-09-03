import React from "react";
import { Card, Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
// type CourseType = {
//   title: string;
//   photoUrl: string
//   price: number
// };

const CourseCard = ({ course }: any) => {
  console.log(course);
  const { title, photoUrl, price } = course;
  return (
    <div className="w-72 h-96 mx-auto rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="h-40 relative">
        <Image src={photoUrl} alt="Course" layout="fill" objectFit="cover" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">Price: ${price}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none">
          Details
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
