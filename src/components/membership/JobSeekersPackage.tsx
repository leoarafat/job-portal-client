import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd/es/table";
import { DataType, columns, data } from "@/constants/membership";

const JobSeekersPackage: React.FC = () => {
  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="p-3 bg-gray-100">
      <h1 className="text-center py-3 text-[25px] font-semibold">
        Job Seekers Packages
      </h1>
      <div className="overflow-x-auto">
        {" "}
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          className="min-w-full"
        />
      </div>
      <div className="text-center">
        <button className="px-6 py-3 border border-blue-500 text-black hover:bg-blue-500 hover:text-white rounded-md transition duration-300 mb-6">
          Become a paid member
        </button>
      </div>
    </div>
  );
};

export default JobSeekersPackage;
