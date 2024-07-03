import React from "react";
import { useNavigate } from 'react-router-dom';
import { MdDoubleArrow } from "react-icons/md";

const TeacherLogin = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/Guide/registerform');
  };

  return (
    <div>
      <form>
        <div className="w-full mt-4">
          <input
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
            placeholder="Jain Email Address"
            aria-label="Jain Email Address"
          />
        </div>

        <div className="w-full mt-4">
          <input
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
            placeholder="Password"
            aria-label="Password"
          />
        </div>
        <br></br>
        <button className="px-6 w-full py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Login
        </button>
        <span className="mt-3 text-center justify-center flex">OR</span>

        <div className="cursor-pointer">
          <button
<<<<<<< Updated upstream
            className="p-3 mt-3 flex text-center w-full justify-center font-medium 
              text-white shadow-lg rounded-lg bg-slate-900 "
=======
            type="button"
            onClick={handleRegisterClick}
            className="p-3 mt-3 flex text-center w-full justify-center font-medium text-white shadow-lg rounded-lg bg-slate-900"
>>>>>>> Stashed changes
          >
            Register New Account
            <MdDoubleArrow className="animate-bounce mt-1 sm:ml-3 sm:mt-1 text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeacherLogin;
