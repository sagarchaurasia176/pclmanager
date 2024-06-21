import React, { useState } from "react";
const BatchYearInputField = () => {
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
  const years = generateYears(2000, currentYear);

  return (
    <div>
      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Year
        </label>
        <select
          name="year"
          value={selectedYear}
          onChange={YearHandleChange}
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
  );
};

export default BatchYearInputField;
