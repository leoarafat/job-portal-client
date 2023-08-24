import React, { ReactNode, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
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
            <span className="text-lg">ProCareer</span>
          </Link>
          <div>
            <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
              <li className="ml-10 uppercase hover:border-b">
                <Link href="/">Home</Link>
              </li>
              <li className="ml-8 uppercase hover:border-b">
                <Link href="/#about">About</Link>
              </li>
              <li className="ml-8 uppercase hover:border-b">
                <Link href="/#skills">Skills</Link>
              </li>
              <li className="ml-8 uppercase hover:border-b">
                <Link href="/#projects">Projects</Link>
              </li>

              <li className="ml-8 uppercase hover:border-b">
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
            {/* Hamburger Icon */}
            <div
              style={{ color: `${linkColor}` }}
              onClick={handleNav}
              className="md:hidden"
            >
              <AiOutlineMenu size={25} />
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
          {/* Side Drawer Menu */}
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
                  <span className="text-lg">ProCareer</span>
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Let&#39;s build something legendary together
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-4">
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={() => setNav(false)} className="py-4">
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={() => setNav(false)} className="py-4">
                    Projects
                  </li>
                </Link>
                <Link href="/resume">
                  <li onClick={() => setNav(false)} className="py-4">
                    Resume
                  </li>
                </Link>
                <Link href="/#contact">
                  <li onClick={() => setNav(false)} className="py-4">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20">{children}</div>
    </>
  );
};

export default RootLayout;
