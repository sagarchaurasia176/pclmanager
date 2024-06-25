import {BranchName} from '../Api/BranchName'
import React from 'react'

const BranchNamesBox = () => {
  return (
    <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Choose Branch
          </label>
        <select className="select border  border-red-50 cursor-pointer select-ghost w-full ">
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
  )
}

export default BranchNamesBox