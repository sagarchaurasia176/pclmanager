import React, { useState } from "react";
import { MdDoubleArrow } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setEmail(email);
    toast.success("welcome to Student-Dashboard Page")
    navigate('/Student-Dashboard')
  };

  const handleRegister = () => {
    navigate("/PclRegister");
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
       
        <div className="w-full">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Enter Register Email Address
          </label>
          <input
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
            required
            placeholder="jain@ac.in"
            aria-label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          className="p-3 mt-3 text-sm w-full font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          Login
        </button>
        <br />
        <span className="mt-1 text-center flex justify-center">OR</span>

        <div className="cursor-pointer mt-3">
          <button
            type="button"
            onClick={handleRegister}
            className="p-3 flex justify-center w-full font-medium text-white shadow-lg rounded-lg bg-slate-900"
          >
            Register New Team
            <MdDoubleArrow className="animate-bounce mt-1 sm:ml-3 sm:mt-1 text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentLogin;
