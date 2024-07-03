import React, { useState } from "react";
import toast from "react-hot-toast";
import RegisterPage from "./RegisterPage";

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
              <RegisterPage/>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterStudentUi;
