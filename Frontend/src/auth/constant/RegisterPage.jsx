import React, { useState } from "react";
import { BranchName } from "../../Api/BranchName";
import { chooseOptions } from "../../Api/LeaderMember";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'

const RegisterPage = () => {
  const generateYears = (startYear, endYear) => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };

  const moveToLoging = useNavigate();

  const currentYear = new Date().getFullYear();
  const years = generateYears(2020, currentYear);

  const [formValid, setValid] = useState({
    title: "",
    description: "",
    ConferencePaper: false,
    JournalPatent: false,
    Prototype: false,
    email: "",

    teamMembers: [
      {
        FullName: "",
        role: "",
        Branch: "",
        UsnNumber: "",
        year: "",
      },
    ],
  });

  const formtHandler = (e) => {
    const { type, name, value, checked } = e.target;
    const [field, index, key] = name.split(".");
    if (field === "teamMembers") {
      const updatedMembers = formValid.teamMembers.map((member, idx) => {
        if (idx === parseInt(index)) {
          return { ...member, [key]: type === "checkbox" ? checked : value };
        }
        return member;
      });
      setValid({ ...formValid, teamMembers: updatedMembers });
    } else {
      setValid({ ...formValid, [name]: type === "checkbox" ? checked : value });
    }
  };
  
  
  const studentDatas = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/StudentRoutes/FormController', formValid, {
        headers: {
          "Content-Type": "application/json",
        }
      });
  
      toast.success("Form submitted successfully!");
      moveToLoging("/");
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        toast.error(`Error: ${error.response.data.message || "Something went wrong"}`);
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
  
  // const studentDatas = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = axios.post('http://localhost:8000/StudentRoutes/FormController')
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formValid),
  //       }
  //     );

  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(errorData.message || "Something went wrong");
  //     } else {
  //       const result = await response.json();
  //       toast.success("Form submitted successfully!");
  //       moveToLoging("/");
  //       console.log(result);
  //     }
  //   } catch (error) {
  //     toast.error(`Error: ${error.message}`);
  //     console.error("Error in form submission", error);
  //   }
  // };

  // add form button apply here
  const addMember = () => {
    setValid({
      ...formValid,
      teamMembers: [
        ...formValid.teamMembers,
        {
          FullName: "",
          role: "",
          Branch: "",
          UsnNumber: "",
          year: "",
        },
      ],
    });
  };

  return (
    <div>
      <form
        onSubmit={studentDatas}
        className="w-full m-auto  h-auto gap-6  p-12 mt-3"
      >
        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Project Title
          </label>
          <input
            type="text"
            name="title"
            required="true"
            value={formValid.title}
            onChange={formtHandler}
            placeholder="Enter your project title name"
            className="block cursor-pointer w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Short project descriptions
          </label>
          <input
            type="text"
            name="description"
            required="true"
            onChange={formtHandler}
            value={formValid.description}
            placeholder="Just describe your project within one"
            className="block w-full cursor-pointer px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <br />
        <label className=" mb-2 text-sm text-white">Expected Outcomes</label>
        <div className=" flex flex-wrap text-white">
          <div className="p-6">
            <div className="space-y-4">
              <label className="flex text-white items-center">
                <input
                  type="checkbox"
                  name="ConferencePaper"
                  onChange={formtHandler}
                  checked={formValid.ConferencePaper}
                  className="form-checkbox cursor-pointer h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-white">Conference Paper</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="JournalPatent"
                  checked={formValid.JournalPatent}
                  onChange={formtHandler}
                  className="form-checkbox cursor-pointer h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-white">Journal Patent</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="Prototype"
                  checked={formValid.Prototype}
                  onChange={formtHandler}
                  className="form-checkbox cursor-pointer h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-white">Prototype</span>
              </label>
            </div>
          </div>
        </div>
        <br />

        <label className="text-gray-600 dark:text-gray-200">
          Batch Members
        </label>
        <div className=" mt-2 flex justify-end gap-6">
          <button
            onClick={() => addMember()}
            className="bg-slate-800  text-white p-2 rounded-md mb-4"
          >
            Add Member
          </button>
        </div>

        {/* email and password */}
        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Email Id
          </label>
          <input
            type="text"
            name="email"
            required="true"
            onChange={formtHandler}
            value={formValid.email}
            placeholder="write unique Email , that everyone can access with that email !"
            className="block w-full cursor-pointer px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        {/* email and password */}

        <br />
        {formValid.teamMembers.map((member, index) => (
          <div
            key={index}
            className="grid bg-slate-100 p-3 rounded-md w-full  text-black grid-cols-5 gap-4 mb-4"
          >
            <div>
              <label className="block mb-2 text-sm text-black font-semibold">
                Full Name {index + 1}
              </label>
              <input
                type="text"
                name={`teamMembers.${index}.FullName`}
                placeholder="Full Name"
                onChange={formtHandler}
                value={member.FullName}
                required="true"
                className="block w-full cursor-pointer px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-black font-semibold">
                Choose Role
              </label>
              <select
                name={`teamMembers.${index}.role`}
                value={member.role}
                onChange={formtHandler}
                required="true"
                className="select border border-red-50 cursor-pointer select-ghost w-full"
              >
                <option selected>Are you leader or member</option>
                {chooseOptions.map((roles, roleIndex) => (
                  <option
                    key={roleIndex}
                    className="cursor-pointer outline-none transition-all hover:duration-100 outline"
                  >
                    {roles.role}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm text-black font-semibold">
                Choose Branch
              </label>
              <select
                name={`teamMembers.${index}.Branch`}
                onChange={formtHandler}
                value={member.Branch}
                required="true"
                className="select border border-red-50 cursor-pointer select-ghost w-full"
              >
                <option disabled selected>
                  Choose Branch
                </option>
                {BranchName.map((branch, branchIndex) => (
                  <option
                    key={branchIndex}
                    className="cursor-pointer outline-none transition-all hover:duration-100 outline"
                  >
                    {branch.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm text-black font-semibold">
                USN Number
              </label>
              <input
                type="text"
                name={`teamMembers.${index}.UsnNumber`}
                placeholder="USN Number"
                onChange={formtHandler}
                required="true"
                value={member.UsnNumber}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-black font-semibold">
                Year
              </label>
              <select
                name={`teamMembers.${index}.year`}
                value={member.year}
                onChange={formtHandler}
                required="true"
                className="block w-full px-5 py-3 mt-2 cursor-pointer text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus"
              >
                <option disabled selected>
                  Choose Year
                </option>
                {years.map((Year, branchYear) => (
                  <option
                    key={branchYear}
                    className="cursor-pointer outline-none transition-all hover:duration-100 outline"
                  >
                    {Year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
        <br></br>
        <div className=" flex justify-center gap-9 items-center ">
          <button className=" rounded-lg bg-white p-2  text-black">
            Click To register{" "}
          </button>

          <NavLink to="/">
            <button className=" rounded-lg bg-green-800  p-2  text-white">
              Already Registered{" "}
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
