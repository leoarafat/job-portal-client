import { Button, Result } from "antd";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Link href={"/"}>
            {" "}
            <Button className="bg-blue-500" type="primary">
              Back Home
            </Button>
          </Link>
        }
      />
    </div>
  );
};

export default NotFound;
