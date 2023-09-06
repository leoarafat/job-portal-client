import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { MdOutlineFilterListOff } from "react-icons/md";
import dynamic from "next/dynamic";
import { Radio } from "antd";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import Loader from "@/components/loader/loader";

import {
  useGetAllCourseQuery,
  useGetCourseTitleQuery,
} from "@/redux/features/courses/courseSlice";
import CourseCard from "@/components/courses/CourseCard";
import Head from "next/head";

const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);

const AllCourses = () => {
  const [current, setCurrent] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const { data: courseTitle } = useGetCourseTitleQuery({});

  const { data: allCourse, isLoading } = useGetAllCourseQuery({
    searchTerm: searchValue || "",
    title: selectedTitle || "",
    page: current,
    limit: 10,
  });

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleTitleChange = (value: string) => {
    setSelectedTitle(value);
  };
  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Courses</title>
      </Head>
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-600 hidden md:block">
          Our Courses
        </h1>
        <div className="flex items-center">
          <button
            onClick={toggleFilter}
            className="lg:hidden  px-4 py-2 rounded-full mr-2"
          >
            {isFilterOpen ? (
              <MdOutlineFilterListOff className="w-10 h-10" />
            ) : (
              <IoFilterOutline className="w-10 h-10" />
            )}
          </button>
          <div className="relative">
            <input
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search..."
              className="border rounded-full border-gray-300 py-2 px-4 pr-10 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-400 bg-white shadow-sm w-64"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      <main className="lg:flex">
        <aside
          className={`lg:w-1/4 ${
            isFilterOpen ? "block" : "hidden"
          } lg:block mr-4`}
        >
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Filter Courses</h2>

            <div className="mb-4 flex flex-wrap">
              <label className="block text-sm font-medium text-gray-700 mb-2 w-full">
                Courses Category
              </label>

              <Radio.Group
                onChange={(e) => handleTitleChange(e.target.value)}
                defaultValue="All"
                className="w-full"
              >
                <Radio value="">All</Radio>
                {courseTitle?.data?.map(
                  (
                    category: {
                      title:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | React.PromiseLikeOfReactNode
                        | null
                        | undefined;
                    },
                    index: React.Key | null | undefined
                  ): any => (
                    <div key={index} className="w-1/2">
                      <Radio value={category.title}>{category.title}</Radio>
                    </div>
                  )
                )}
              </Radio.Group>
            </div>
          </div>
        </aside>

        {/* Job Listings */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allCourse?.data?.map(
              (course: { id: React.Key | null | undefined }) => (
                <CourseCard key={course.id} course={course} />
              )
            )}
          </div>
        </div>
      </main>
      <div className="text-center py-6">
        <Pagination
          current={current}
          onChange={onChange}
          total={allCourse?.meta?.total}
        />
      </div>
    </div>
  );
};

export default AllCourses;
AllCourses.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
