import React from "react";
import { BranchName } from "../Api/BranchName";

// two col fill student -> usn and dob
const StudentLogin = () => {

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
        <button class="px-6  mt-12 py-2 text-sm w-full font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Login
        </button>
        <br></br>
        <span className=" mt-3 text-center justify-center flex">OR</span>

        {/* button for code  */}

        <button  className="px-6  mt-3 py-2 text-sm w-full font-medium tracking-wide  capitalize transition-colors duration-300 transform   bg-slate-400   text-slate-800 animate-pulse  shadow-lg rounded-lg hover:bg-orange-100 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Enter PCL-Code
        </button>
      </form>
    </div>
  );
};

export default StudentLogin;
