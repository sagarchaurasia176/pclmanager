import React, { useState } from "react";
import PCL from "../../img/PCL.png";
import LeaderRegisterForm from "./LeaderRegisterForm";
import TeamMemberRegisteration from "./TeamMemberRegisteration";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";

const RegisterStudentForm = () => {
  const [formShow, setFormShow] = useState(false);
  const [active, setActive] = useState(true);

  const TeamHandler = () => {
    setFormShow(!formShow);
    setActive(true);
    toast.success("Leader mode on");
  };

  const NewTeamHandler = () => {
    setFormShow(!formShow);
    setActive(false);
    toast.success("member mode on");
  };

  const activeCss = {
    TeamHandler: {
      backgroundColor: "white",
      color: "black",
      cursor: "pointer",
    },

    // disabled
    NewTeamHandler: {
      color: "white ",
      cursor: "pointer",
    },
  };

  // navigate apply here so we get
  const movetoLoginPage = useNavigate();
  const LoginPageHandler = () => {
    movetoLoginPage("/");
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex justify-center min-h-screen">
          <div className="hidden bg-cover  sm:hidden lg:ml-4  rounded-2xl lg:mt-[100px]  lg:block lg:w-2/5">
            {/* poster img */}
            <img src={PCL} alt="" className=" rounded-2xl" />
          </div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl  border-b-2 p-2 font-bold tracking-wider text-gray-800 capitalize dark:text-white">
                Welcome to &nbsp;
                <span className=" animate-pulse  text-orange-400 ">
                  PCL_Managemet System
                </span>
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Project Centric Learning is a powerful tool for students to work
                in areas of their choice and
                <p className=" text-center ">strengths.</p>
              </p>

              <div className="mt-6">
                <h1 className="text-gray-500 dark:text-gray-300">
                  Select type of account
                </h1>

                {/*button changer here  */}
                <div className="mt-3 md:flex md:items-center md:-mx-2">
                  <button
                    style={
                      active ? activeCss.TeamHandler : activeCss.NewTeamHandler
                    }
                    disabled={active}
                    onClick={() => TeamHandler()}
                    className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span className="mx-2">Teams Leader</span>
                  </button>

                  {/* new team handler */}
                  <button
                    disabled={!active}
                    style={
                      !active ? activeCss.TeamHandler : activeCss.NewTeamHandler
                    }
                    onClick={() => NewTeamHandler()}
                    className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span className="mx-2">Teams Member</span>
                  </button>
                </div>
              </div>

              {/*Register form  => Student components */}
              <div>
                {formShow ? (
                  <LeaderRegisterForm />
                ) : (
                  <TeamMemberRegisteration />
                )}
              </div>
              <br></br>

              <div className=" lg:flex sm:block lg:flex-col-1 lg:justify-between ">
               
               <NavLink to='/Student'>

               <button
                className="flex items-center justify-between  px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-slate-800 rounded-lg focus:outline-none focus:ring  focus:ring-opacity-50">
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
               </NavLink>
               
                <br />
                <div>
                  <button
                    onClick={() => LoginPageHandler()}
                    className="flex text-center items-center justify-between  bg-white px-6 py-3 
                text-sm tracking-wide text-black capitalize transition-colors duration-300 
                transform rounded-lg focus:outline-none focus:ring  focus:ring-opacity-50"
                  >
                    <span className=""> back to Home page</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterStudentForm;
