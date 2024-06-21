import React, { useState } from "react";

const SemesterYearInput = () => {
  const [semester, setSem] = useState(1);
  const SemHandler = (e) => {
    setSem(e.target.value);
  };
  
  let semFixArr = [];
  let semesters = 1;
  for (let sem = semesters; sem <= 8; sem++) {
    semFixArr.push(sem);
  }
  console.log(semFixArr)

  return (
    <div>
      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Choose Semester
        </label>
        <select
          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          name="semester"
          value={semester}
          onChange={SemHandler}
        >
          {/* apply the options here so we get like */}
          <option value="" disabled>
            Select Semester
          </option>
          {semFixArr.map((semesterNum) => {
            return (
              <option key={semesterNum}>
                {semesterNum}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SemesterYearInput;
