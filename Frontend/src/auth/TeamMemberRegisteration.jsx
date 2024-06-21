import React from "react";
import SemesterYearInput from "../Components/SemesterYearInput";
import BatchYearInputField from "../Components/BatchYearInputField";

// function apply here so we get like
const TeamMemberRegisteration = () => {
  return (
    <div>
      <form className="grid  grid-cols-1 h-auto gap-6 mt-8 md:grid-cols-2">
        <div className="     w-full  ">
          <label className="block mb-2  text-sm text-gray-600 dark:text-gray-200">
            Project Title
          </label>
          <input
            type="text"
            placeholder="Enter your project title name"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        {/* usn code  */}
        <div className="     w-full  ">
          <label className="block mb-2  text-sm text-gray-600 dark:text-gray-200">
            Enter Your USN Number
          </label>
          <input
            type="text"
            placeholder="USN Number"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Last name
          </label>
          <input
            type="text"
            placeholder="Last name"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Phone number
          </label>
          <input
            type="text"
            placeholder="XXX-XX-XXXX-XXX"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Email address
          </label>
          <input
            type="email"
            placeholder="yourJainEmailId@jainuniversity.ac.in"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Confirm password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        {/*year components  */}
        <BatchYearInputField />
        {/* semester here */}
        <SemesterYearInput />
      </form>
    </div>
  );
};

export default TeamMemberRegisteration;
