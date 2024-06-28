import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// two col fill student -> usn and dob
const StudentLogin = () => {
  // const navigate to the next page
  const NavigateToRegisterPage = useNavigate();
  // register Handler apply here so we get
  const RegisterHandler = () => {
    NavigateToRegisterPage("/RegisterAccount");
  };

  return (
    <div>
      <form>
        <div class="w-full  mt-2">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Email Address
          </label>
          <input
            class="block w-full px-4 py-2 mt-2
             text-gray-700 placeholder-gray-500
              bg-white border rounded-lg dark:bg-gray-800
               dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
            placeholder="jain@ac.in"
            aria-label="Email Address"
          />
        </div>

        <div class="w-full  mt-4">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Password
          </label>
          <input
            class="block w-full px-4 py-2 mt-2
             text-gray-700 placeholder-gray-500
              bg-white border rounded-lg dark:bg-gray-800
               dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
            placeholder="Password"
          />
        </div>

        <button className="p-3  mt-3  text-sm w-full font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Login
        </button>
        <br></br>
        <span className=" mt-1 text-center justify-center flex">OR</span>

        {/* button for code  */}

        <div className="  cursor-pointer  ">
          <button
            onClick={() => RegisterHandler()}
            className="p-3   mt-3 flex text-center w-full justify-center font-medium 
              text-white shadow-lg rounded-lg bg-slate-900 "
          >
            Register New Team
            <MdDoubleArrow className="  animate-bounce  mt-1 sm:ml-3 sm:mt-1  text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentLogin;
