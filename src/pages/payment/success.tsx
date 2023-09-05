import React from "react";
import { Button, Result } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetOrderByTransactionIdQuery } from "@/redux/features/courses/courseSlice";

const Success: React.FC = () => {
  const router = useRouter();
  const { transactionId } = router.query;

  const id = transactionId as string;

  const { data: myOrder } = useGetOrderByTransactionIdQuery(id);
  console.log(myOrder);
  console.log(id);

  return (
    <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button className="bg-blue-500" type="primary" key="console">
          <Link href={`/`}>Go Home</Link>
        </Button>,
        <Button key="buy">
          <Link href={"/courses"}>Buy Again</Link>
        </Button>,
      ]}
    />
  );
};

export default Success;
