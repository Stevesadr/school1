import { NavContext } from "@/Context/Store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useContext } from "react";
import Logo from "../../public/cropped-photo_6005693113080860372_y.png";
import { RiLoginBoxLine } from "react-icons/ri";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { MdOutlineAppRegistration } from "react-icons/md";
import { GrScorecard } from "react-icons/gr";
import { PiHandDepositBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import Cookies from "js-cookie";

const Nav = () => {
  const { isOpen, setIsOpen } = useContext(NavContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(NavContext);
  const router = useRouter();
  const clickHandler = () => {
    router.push("/");
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const logoutHandler = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
    setIsOpen(false);
    router.push("/");
  };

  return (
    <div className="z-50 shadow-lg">
      <nav className="bg-gray-200  z-50">
        <div className="container mx-auto flex justify-between md:justify-start items-center">
          <div className="text-white text-lg font-bold ">
            <Image
              src={Logo}
              className="cursor-pointer w-16"
              onClick={clickHandler}
              alt="logo"
            />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none "
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:space-x-4 z-50">
            {isLoggedIn ? (
              <div className="flex items-center justify-around gap-4 p-3">
                <Link
                  href={"./Profile"}
                  className="flex items-center justify-center  text-gray-100 text-decoration-none bg-gray-700 hover:bg-slate-400 p-1 rounded-md"
                >
                  <CgProfile />
                  <span className=" mx-4">پروفایل </span>
                </Link>
                <Link
                  href={"./StudentGrades"}
                  className="flex items-center justify-center text-gray-700 text-decoration-none bg-gray-200 hover:bg-slate-100 p-1 rounded-md"
                >
                  <GrScorecard />
                  <span className="mx-4">نمرات </span>
                </Link>
                <Link
                  href={"./Salary"}
                  className="flex items-center justify-center  text-gray-700 text-decoration-none bg-gray-200 hover:bg-slate-100 p-1 rounded-md"
                >
                  <PiHandDepositBold />
                  <span className="mx-4">واریز </span>
                </Link>
                <button
                  className="my-3 flex shadow-none items-center justify-center text-red-600 text-decoration-none  bg-gray-200 p-1 rounded-md"
                  onClick={logoutHandler}
                >
                  <FaSignOutAlt />
                  <span className=" mx-4">خروج </span>
                </button>
              </div>
            ) : (
              <div className=" flex items-center justify-around gap-4 p-3">
                <div>
                  <Link
                    href={"./Login"}
                    className="flex items-center justify-center text-gray-100 text-decoration-none bg-gray-700 hover:bg-slate-400 hover:text-gray-700 p-1 rounded-md "
                  >
                    <RiLoginBoxLine />
                    <span className=" mx-4">ورود</span>
                  </Link>
                </div>
                <div className="flex items-center justify-around gap-4">
                  <Link
                    href={"./Order"}
                    className="flex items-center justify-center text-gray-700 text-decoration-none bg-gray-200 hover:bg-slate-100  p-1 rounded-md"
                  >
                    <MdOutlineAppRegistration />
                    <span className="mx-4">پیش ثبت نام</span>
                  </Link>

                  <Link
                    href={"./Employees"}
                    className="flex items-center justify-center text-gray-700 text-decoration-none bg-gray-200 hover:bg-slate-100 p-1 rounded-md"
                  >
                    <MdOutlineMapsHomeWork />
                    <span className=" mx-4">کادر اجرایی </span>
                  </Link>

                  <Link
                    href={"./Teachers"}
                    className="flex items-center justify-center text-gray-700 text-decoration-none bg-gray-200 hover:bg-slate-100 p-1 rounded-md"
                  >
                    <FaChalkboardTeacher />
                    <span className="mx-4"> اساتید </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-300 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <div className="p-4">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="mt-4 z-50">
          {isLoggedIn ? (
            <div className="flex flex-col p-2">
              <Link
                href={"./Profile"}
                className="my-3 flex items-center justify-center  text-gray-100 text-decoration-none bg-gray-700  p-1 rounded-md"
              >
                <CgProfile />
                <span className=" mx-4">پروفایل </span>
              </Link>
              <Link
                href={"./StudentGrades"}
                className="my-3 flex items-center justify-center text-gray-700 text-decoration-none shadow-sm bg-gray-200 p-1 rounded-md"
              >
                <GrScorecard />
                <span className=" mx-4">نمرات </span>
              </Link>
              <Link
                href={"./Salary"}
                className="my-3 flex items-center justify-center text-gray-700 text-decoration-none shadow-sm bg-gray-200 p-1 rounded-md"
              >
                <PiHandDepositBold />
                <span className=" mx-4">واریز </span>
              </Link>
              <button
                className="my-3 flex items-center justify-center text-red-600 text-decoration-none shadow-sm bg-gray-200 p-1 rounded-md"
                onClick={logoutHandler}
              >
                <FaSignOutAlt />
                <span className=" mx-4">خروج </span>
              </button>
            </div>
          ) : (
            <div className=" flex flex-col p-2">
              <Link
                href={"./Login"}
                className="my-3 flex items-center justify-center text-gray-100 text-decoration-none shadow-sm bg-gray-700 p-1 rounded-md"
              >
                <RiLoginBoxLine />
                <span className=" mx-4">ورود</span>
              </Link>
              <Link
                href={"./Employees"}
                className="flex items-center justify-center text-gray-800 text-decoration-none shadow-sm bg-gray-200 p-1 rounded-md"
              >
                <MdOutlineMapsHomeWork />
                <span className=" mx-4"> کادر اجرایی</span>
              </Link>
              <Link
                href={"./Order"}
                className=" my-3 flex items-center justify-center text-gray-800 text-decoration-none shadow-sm bg-gray-200 p-1 rounded-md"
              >
                <MdOutlineAppRegistration />
                <span className="mx-4">پیش ثبت نام</span>
              </Link>
              <Link
                href={"./Teachers"}
                className="flex items-center justify-center text-gray-700 text-decoration-none bg-gray-200 hover:bg-slate-100 p-1 rounded-md"
              >
                <FaChalkboardTeacher />
                <span className="mx-4"> اساتید </span>
              </Link>
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Nav;
