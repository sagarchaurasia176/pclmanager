import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdDoubleArrow } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// two col fill student -> usn and dob
import axios from 'axios'
const StudentLogin = () => {
  // const navigate to the next page

  const [loginAuth, setLoginAuth] = useState({ email: "" });

  // login handler
  const loginHandler = (e) => {
    e.preventDefault();
    setLoginAuth({
      ...loginAuth,
      [e.target.name]: e.target.value,
    });
  };

  const NavigateToRegisterPage = useNavigate();
  const NavigateToPcl = useNavigate();
  // register Handler apply here so we get
  const RegisterHandler = () => {
    NavigateToRegisterPage("/PclRegister");
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/StudentRoutes/Login",
        loginAuth,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Login successfully done!");
      NavigateToPcl('/Student');
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        toast.error(
          `Error: ${error.response.data.message || "Something went wrong"}`
        );
        console.error("Error in form submission", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        toast.error("Error: No response from server");
        console.error("Error in form submission", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error(`Error: ${error.message}`);
        console.error("Error in form submission", error.message);
      }
    }
  };

  return (
    <div>
      <form onSubmit={loginSubmit}>
        <div class="w-full ">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Enter Register Email Address
          </label>
          <input
            class="block w-full px-4 py-2 mt-2
             text-gray-700 placeholder-gray-500
              bg-white border rounded-lg dark:bg-gray-800
               dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
            name="email"
            value={loginAuth.email}
            onChange={loginHandler}
            placeholder="jain@ac.in"
            aria-label="Email Address"
          />
        </div>
        <button 
        onClick={()=> StudentDashboardMover()}
        className="p-3  mt-3  text-sm w-full font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Login
        </button>
        <br></br>
        <span className=" mt-1 text-center justify-center flex">OR</span>

        {/* button for code  */}
        <div className="  cursor-pointer  ">
          <button
            onClick={() =>  RegisterHandler()}
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
