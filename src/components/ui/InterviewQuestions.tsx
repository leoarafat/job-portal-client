import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { items } from "@/shared/items";

const InterviewQuestions: React.FC = () => {
  const onChange = (key: string | string[]) => {};

  return (
    <div className=" bg-blue-50 p-3">
      <h1 className="text-[30px] font-semibold text-center mb-2">
        Common Job Interview Questions
      </h1>
      <Collapse
        className="text-[25px]"
        items={items}
        defaultActiveKey={["1"]}
        onChange={onChange}
      />
    </div>
  );
};

export default InterviewQuestions;
