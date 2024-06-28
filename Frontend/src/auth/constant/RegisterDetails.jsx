import React, { useState } from "react";
import { BranchName } from "../../Api/BranchName";
import { chooseOptions } from "../../Api/LeaderMember";

const RegisterDetails = () => {
  const teamMembers = Array.from({ length: 5 }, (_, i) => i); // Change the length as needed
  // states for chooseing button
  const [selectedYear, setSelectedYear] = useState("");

  const YearHandleChange = (e) => {
    setSelectedYear(e.target.value);
  };
  // create an array for adding the values into that array becuase of that values are stored into it
  const generateYears = (startYear, endYear) => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };
  const currentYear = new Date().getFullYear();
  const years = generateYears(2020, currentYear);


  // form validation apply here so we get
  const [formValid, setValid] = useState({
    title: "",
    description: "",
    ConferencePaper: false,
    JournalPatent: false,
    Prototype: false,
    FullName: "",
    role: false,
    Branch: "",
    UsnNumber: "",
    year: false,
  });
  // form hanler apply here
  const formtHandler = (e) => {
    e.preventDefault();
    // destruct main important key of the input
    const { type, name, value, checked } = e.target;
    setValid((studentDatas) => ({
      // previous datas
      ...studentDatas,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div>
      <form className="w-full h-auto gap-6  p-1 mt-3">
        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Project Title
          </label>
          <input
            type="text"
            name="title"
            value={formValid.title}
            onChange={formtHandler}
            placeholder="Enter your project title name"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Short project descriptions
          </label>
          <input
            type="text"
            name="description"
            onChange={formtHandler}
            value={formValid.description}
            placeholder="Just describe your project within one"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <br />
        <label className=" mb-2 text-sm text-white">Excepted Outcomes</label>
        <div className=" flex flex-wrap text-white">
          <div className="p-6">
            <div className="space-y-4">
              <label className="flex  text-white items-center">
                <input
                  type="checkbox"
                  name=" ConferencePaper"
                  onChange={formtHandler}
                  checked={formValid.ConferencePaper}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2  text-white">Conference Paper</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="JournalPatent"
                  checked={formValid.JournalPatent}
                  onChange={formtHandler}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2  text-white">Journal Patent</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="Prototype"
                  checked={formValid.Prototype}
                  onChange={formtHandler}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2  text-white">Prototype</span>
              </label>
            </div>
          </div>
        </div>

        {/* batch memebers  */}
        <label className="  text-gray-600 dark:text-gray-200">
          Batch Members
        </label>
        <br></br>

        <div className="grid bg-slate-100 p-3 rounded-md text-black grid-cols-5 gap-4">
          {teamMembers.map((member, index) => (
            <React.Fragment key={index}>
              <div>
                <label className="block mb-2 text-sm text-black font-semibold">
                  Full Name {index + 1}
                </label>
                <input
                  type="text"
                  name="FullName"
                  placeholder="First Name"
                  onChange={formtHandler}
                  value={formValid.FullName}
                  className="block w-full px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div>
                <div>
                  <label className="block mb-2 text-sm text-black font-semibold">
                    Choose roles
                  </label>
                  <select
                    name="role"
                    value={formValid.role}
                    onChange={formtHandler}
                    className="select border  border-red-50 cursor-pointer select-ghost w-full "
                  >
                    <option disabled selected>
                      Are you leader or member?
                    </option>

                    {chooseOptions.map((roles) => {
                      return (
                        <option className=" cursor-pointer  outline-none transition-all hover:duration-100 outline">
                          {roles.role}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm text-black font-semibold">
                  Choose Branch
                </label>
                <select
                  name="Branch"
                  onChange={formtHandler}
                  value={formValid.Branch}
                  className="select border  border-red-50 cursor-pointer select-ghost w-full "
                >
                  <option disabled selected>
                    Choose Branch
                  </option>

                  {BranchName.map((branch) => {
                    return (
                      <option className=" cursor-pointer  outline-none transition-all hover:duration-100 outline">
                        {branch.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="block mb-2  text-sm text-black font-semibold">
                  USN Number
                </label>
                <input
                  type="text"
                  onChange={formtHandler}
                  name="USNNumber"
                  value={formValid.UsnNumber}
                  placeholder="USN Number"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div>
                <div>
                  <label className="block mb-2 text-sm text-black font-semibold">
                    Year
                  </label>
                  <select
                    name="year"
                    value={formValid.year}
                    onChange={formtHandler}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    select the year for the branch
                    <option value="" disabled>
                      Select a year
                    </option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </form>

      {/* code stop */}
    </div>
  );
};

export default RegisterDetails;
