import React, { useState } from "react";
import StudentLogin from "./StudentLogin";
import TeacherLogin from "./TeacherLogin";
import toast from "react-hot-toast";
import ShapeDivider from "../Shape/ShapeDivider";
// import { MdDoubleArrow } from "react-icons/md";
// import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
// import StudentLogin from "./StudentLogin";

const LoginAuth = () => {
  const [AccountType, setAccountType] = useState("Student");

  // student type functions
  const StudentType = () => {
    setAccountType("Student");
  };
  const TeacherType = () => {
    setAccountType("Teacher");
  };

  return (
    <div>
      <div
        className="w-full max-w-sm p-6 m-auto  mt-20  mx-auto
       bg-white rounded-lg shadow-md dark:bg-gray-800"
      >
        <div className="flex p-4 justify-center mx-auto">
          <img
            className="w-auto h-7 sm:h-8"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />
        </div>

        <div className=" flex justify-center space-x-4 ">
       

          {/* student login page  */}
          <button
            className=" hover:bg-slate-400 hover:transition-all hover:duration-150 hover:text-black
              text-richblack-5
                bg-transparent text-richblack-200
            py-2 px-5 rounded-full transition-all duration-200 "
            onClick={() => StudentType()}
          >
            Student
          </button>
          <button
            className="
             hover:bg-slate-400 hover:transition-all hover:duration-150 hover:text-black
              
                bg-transparent text-richblack-200
            py-2 px-5 rounded-full transition-all duration-200 "
            onClick={() => TeacherType()}
          >
            PCL-Guide
          </button>

             {/* student login page  */}
             <button
            className="
             hover:bg-slate-400 hover:transition-all hover:duration-150 hover:text-black
              *:
                bg-transparent text-richblack-200
            py-2 px-5 rounded-full transition-all duration-200 "
            onClick={() => TeacherType()}
          >
            Admin
          </button>
        
        </div>

        {/* Conditional rendering based on accountType */}
        <div className="mt-4">
          {AccountType === "Student" ? <StudentLogin /> : <TeacherLogin />}
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <p className="text-xs  font-bold text-center  uppercase ">
            PCL-MANAGEMENT-SYSTEM
          </p>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>
      </div>

      {/* divider here */}
      <ShapeDivider />
    </div>
  );
};

export default LoginAuth;
