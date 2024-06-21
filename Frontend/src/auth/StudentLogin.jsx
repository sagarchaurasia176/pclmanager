import React from "react";
import { BranchName } from "../Api/BranchName";
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
        <div class="w-full  mt-4">
          <input
            class="block w-full px-4 py-2 mt-2
             text-gray-700 placeholder-gray-500
              bg-white border rounded-lg dark:bg-gray-800
               dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
            placeholder="Enter USN Number"
            aria-label="Enter USN Number"
          />
        </div>
        <br></br>
        <select className="select border border-red-50 cursor-pointer select-ghost w-full ">
          <option disabled selected>
            Choose Branch Name
          </option>

          {BranchName.map((branch) => {
            return (
              <option className=" cursor-pointer transition-all hover:duration-100 outline">
                {branch.name}
              </option>
            );
          })}
        </select>

        <br></br>
        <button className="p-3  mt-12  text-sm w-full font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Login
        </button>
        <br></br>
        <span className=" mt-3 text-center justify-center flex">OR</span>

        {/* button for code  */}

        <button
          onClick={() => RegisterHandler()}
          className="p-3  cursor-pointer mt-3 text-center w-full justify-center font-medium flex
         tracking-wide  capitalize transition-colors 
              text-white shadow-lg rounded-lg bg-slate-900 "
        >
          Register New Account
          <MdDoubleArrow className="  animate-bounce cursor-pointer  mt-1 sm:ml-3 sm:mt-1  text-white" />
        </button>
      </form>
    </div>
  );
};

export default StudentLogin;
