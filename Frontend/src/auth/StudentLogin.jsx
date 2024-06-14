import React from "react";
// two col fill student -> usn and dob

const StudentLogin = () => {
  return (
    <div>
      <form>
        <div class="w-full mt-4">
          <input
            class="block w-full px-4 py-2 mt-2
             text-gray-700 placeholder-gray-500
              bg-white border rounded-lg dark:bg-gray-800
               dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
            placeholder="Enter USN Number"
            aria-label="Enter USN Number"
          />
        </div>

        <div class="w-full mt-4">
          <input
            class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
            placeholder="Enter D-O-B"
            aria-label="Enter D-O-B"
          />
        </div>
        <br></br>
        <button class="px-6 py-2 text-sm w-full font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Login
        </button>
      </form>
    </div>
  );
};

export default StudentLogin;
