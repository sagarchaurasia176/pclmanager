import React from "react";
import { NavLink } from "react-router-dom";

const MulitpleBoxes = () => {
  return (
    <div>
      <div class="  flex-col max-w-sm px-4 py-3  bg-white rounded-md shadow-md dark:bg-gray-800">
        <div class="flex items-center justify-between">
          <span class="text-sm font-light text-gray-800 dark:text-gray-400">
          </span>
          <NavLink to='/TeamTableData'>
          <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
          View Team
          </span>
          </NavLink>
     
        </div>

        <div>
          <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
            Team leader 
          </h1>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            eligendi similique exercitationem optio libero vitae accusamus
            cupiditate laborum eos.
          </p>
        </div>

      </div>
    </div>
  );
};

export default MulitpleBoxes;
