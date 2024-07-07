import React from "react";

const MeetingUi = () => {
  return (
    <div>
      <div class="bg-white shadow-lg rounded-lg overflow-hidden  h-screen">
        <div class="flex flex-col h-full">
          <div class="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 class="text-xl font-bold">Meeting Room</h1>
            <div class="flex items-center space-x-4">
              <button class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
                Leave
              </button>
            </div>
          </div>

          <div class="bg-gray-800 text-white p-4 flex justify-center space-x-4">
            <button class="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 inline-block mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 11H5a1 1 0 010-2h3a1 1 0 010 2zm7-1a1 1 0 11-2 0V9a1 1 0 112 0v1z" />
              </svg>
              Mute
            </button>
            <button class="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 inline-block mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 3a1 1 0 011-1h8a1 1 0 011 1v1h-2V4H7v1H5V3zM3 8h14v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm8 2a1 1 0 00-2 0v3a1 1 0 102 0v-3z"
                  clip-rule="evenodd"
                />
              </svg>
              Video
            </button>
            <button class="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 inline-block mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.293A7.968 7.968 0 0110 3c1.68 0 3.26.525 4.591 1.293l1.358-1.358a1 1 0 111.415 1.415l-1.358 1.358A7.968 7.968 0 0117 10c0 1.68-.525 3.26-1.293 4.591l1.358 1.358a1 1 0 11-1.415 1.415l-1.358-1.358A7.968 7.968 0 0110 17a7.968 7.968 0 01-4.591-1.293l-1.358 1.358a1 1 0 11-1.415-1.415l1.358-1.358A7.968 7.968 0 013 10c0-1.68.525-3.26 1.293-4.591L3.935 4.05a1 1 0 011.415-1.415l1.358 1.358zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                  clip-rule="evenodd"
                />
              </svg>
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingUi;
