import React from "react";
import { Card, Button, Spin, message } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { usePostOrderMutation } from "@/redux/features/courses/courseSlice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { isErrorResponse, isSuccessResponse } from "@/shared/loginResponse";
import { useRouter } from "next/router";

const CourseCard = ({ course }: any) => {
  const router = useRouter();
  const [postOrder, { isLoading }] = usePostOrderMutation();
  const user = useAppSelector((state: RootState) => state.auth.user);

  const { title, photoUrl, price, owner, description, id } = course;
  const orderItem = {
    title,
    price,
    owner,
    id,
    user,
  };
  const handleOrder = async () => {
    try {
      const response = await postOrder(orderItem);
      if (user?.email && user?.role === "Candidate") {
        if (isSuccessResponse(response)) {
          window.location.replace(response.data.data.url);
        } else if (isErrorResponse(response)) {
          message.error(response.error.data.message);
        }
      } else {
        message.warning("Only Candidate can enroll");
        router.push("/login-candidate");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
      <div className="relative h-60">
        <Image src={photoUrl} alt="Course" layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="text-gray-700">
            <span className="text-lg font-semibold">Owner:</span> {owner}
          </div>
          <div className="text-blue-600 font-semibold text-lg">${price}</div>
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-100">
        {" "}
        <button
          onClick={handleOrder}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full w-full focus:outline-none"
        >
          {isLoading ? <Spin size="small" /> : "Enroll Now"}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
