import React, { ReactNode, useState, useEffect } from "react";

import Link from "next/link";
import { Drawer, message } from "antd";
import { RootState } from "../../redux/store";
import {
  CloseOutlined,
  LoginOutlined,
  LogoutOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Cookies from "js-cookie";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearUser } from "@/redux/features/auth/authSlice";
import Swal from "sweetalert2";
interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#fff");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const user = useAppSelector((state: RootState) => state.auth.user);

  const dispatch = useAppDispatch();
  const handleNav = () => {
    setNav(!nav);
  };
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: "Logout",
      text: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
    }).then((result: { isConfirmed: any }) => {
      if (result.isConfirmed) {
        // Perform logout actions
        dispatch(clearUser());

        if (user && user?.role === "Candidate") {
          Cookies.remove("candidate");
        } else if (user && user.role === "Employee") {
          Cookies.remove("employee");
        }

        message.success("Logged out successfully", 2);
      }
    });
  };
  return (
    <>
      <div
        style={{ backgroundColor: `${navBg}` }}
        className={
          shadow
            ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
            : "fixed w-full h-20 z-[100]"
        }
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Link href="/">
            <Image
              src={
                "https://res.cloudinary.com/arafatleo/image/upload/v1693051594/Pro%20careers/Location/106862-large_ktovze-removebg-preview_ltdjpn.png"
              }
              alt="Pro Career"
              width={100}
              height={60}
            />
          </Link>
          <div>
            <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
              <li className="ml-10 text-lg  hover:border-b">
                <Link href="/jobs">Brows Jobs</Link>
              </li>
              <li className="ml-8 text-lg hover:border-b">
                <Link href="/courses">Course</Link>
              </li>
              <li className="ml-8 text-lg hover:border-b">
                <Link href="/corporate">Corporate</Link>
              </li>

              {user?.email && (
                <li className="ml-10 text-lg  hover:border-b">
                  <Link href="/dashboard">Dashboard</Link>
                </li>
              )}
              {user?.email ? (
                <li className="ml-8 text-lg flex items-center hover:border-b">
                  <LogoutOutlined className="mr-1" />

                  <button onClick={handleLogout}>Logout</button>
                </li>
              ) : (
                <li className="ml-8 text-lg flex items-center hover:border-b">
                  <LoginOutlined className="mr-1" />

                  <button onClick={toggleDrawer}>Sign In</button>
                </li>
              )}
              <li className="ml-8 text-lg hover:border-b">
                <Link href="/membership">
                  <span className="px-5 py-2 bg-blue-500 text-black rounded-md shadow-md hover:bg-blue-600 transition duration-300 ">
                    Membership
                  </span>
                </Link>
              </li>
            </ul>

            <div
              style={{ color: `${linkColor}` }}
              onClick={handleNav}
              className="md:hidden"
            >
              <MenuOutlined style={{ fontSize: "24px" }} />
            </div>
          </div>
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <Image
                    src={
                      "https://res.cloudinary.com/arafatleo/image/upload/v1693051594/Pro%20careers/Location/106862-large_ktovze-removebg-preview_ltdjpn.png"
                    }
                    alt="Pro Career"
                    width={100}
                    height={60}
                  />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <CloseOutlined style={{ fontSize: "24px" }} />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">Be skilled, Get hired</p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="">
                <Link href="/jobs">
                  <li onClick={() => setNav(false)} className="py-4">
                    Brows Jobs
                  </li>
                </Link>
                <Link href="/courses">
                  <li onClick={() => setNav(false)} className="py-4">
                    Course
                  </li>
                </Link>
                <Link href="/corporate">
                  <li onClick={() => setNav(false)} className="py-4">
                    Corporate
                  </li>
                </Link>

                {user?.email && (
                  <Link href="/dashboard">
                    <li onClick={() => setNav(false)} className="py-4">
                      Dashboard
                    </li>
                  </Link>
                )}

                <Link href="/membership">
                  <li onClick={() => setNav(false)} className="py-4">
                    Membership
                  </li>
                </Link>

                {user?.email ? (
                  <button onClick={handleLogout}>
                    <li
                      onClick={() => setNav(false)}
                      className="flex items-center py-4"
                    >
                      <LogoutOutlined className="mr-1" />
                      <button>Logout</button>
                    </li>
                  </button>
                ) : (
                  <button>
                    <li
                      onClick={() => setNav(false)}
                      className="flex items-center py-4"
                    >
                      <LogoutOutlined className="mr-1" />
                      <button onClick={toggleDrawer}>Login</button>
                    </li>
                  </button>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20">{children}</div>
      <Drawer
        visible={drawerVisible}
        onClose={toggleDrawer}
        placement="top"
        height={370}
        title="Sign In"
        footer={null}
        className="mt-20 "
      >
        <div className=" md:grid grid-cols-2 text-center">
          <div className="bg-blue-800 text-white p-3">
            <h1 className="pb-3 text-[30px] font-semibold">Job Seeker?</h1>
            <p className="pb-3 text-lg ">Join & find your dream job today!</p>
            <Link href={"/login-candidate"}>
              <button className="pb-3 w-[150px] bg-gray-100 hover:bg-indigo-600 text-black font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
                Sign In
              </button>
            </Link>

            <div className="pb-3 mt-2">
              <span className="">Or</span>
              <Link
                className="ml-1  underline text-[15px]"
                href={"/create-candidate"}
              >
                Create Account
              </Link>
            </div>
          </div>

          <div className="bg-sky-600 text-white p-3">
            <h1 className="pb-3 text-[30px] font-semibold">Employer?</h1>
            <p className="pb-3 text-lg ">
              Find the best candidates for your company.
            </p>
            <Link href={"/login-employee"}>
              {" "}
              <button className="pb-3 w-[150px] bg-gray-100 hover:bg-indigo-600 text-black font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
                Sign In
              </button>
            </Link>

            <div className="pb-3 mt-2">
              <span className="">Or</span>
              <Link
                className="ml-1  underline text-[15px]"
                href={"/create-employee"}
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default RootLayout;
