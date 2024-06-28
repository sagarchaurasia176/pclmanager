import React, { useState } from "react";
import toast from "react-hot-toast";
import RegisterDetails from "./RegisterDetails";

const RegisterStudentUi = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="">
          <div className=" w-full max-w-6xl  m-auto">
            <div className="w-full">
              <h1 className="text-2xl  text-center border-b-2 p-2 font-bold tracking-wider text-gray-800 capitalize dark:text-white">
                Welcome to &nbsp;
                <span className=" animate-pulse  text-orange-400 ">
                  PCL_Managemet System
                </span>
              </h1>
              {/* add the register details here */}

              <p className="mt-4 text-center text-gray-500 dark:text-gray-400">
                Project Centric Learning is a powerful tool for students to work
                in areas of their choice and
                <p className=" text-center ">strengths.</p>
              </p>

              {/* click to register page  */}
              <div>
                <RegisterDetails />
              </div>
              <br></br>
              {/* click to register page  */}
              <div className="  flex justify-center ">
                <button className="flex items-center justify-between  px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-slate-800 rounded-lg focus:outline-none focus:ring  focus:ring-opacity-50">
                  <span className=" ">Click To Register </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 rtl:-scale-x-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterStudentUi;
