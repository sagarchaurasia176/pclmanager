import React from 'react'
import Meeting from '../Meeting/Meeting'
const HeaderNav = () => {
  return (
    <div>
        <header className="bg-blue-600 text-white p-4 rounded-md mb-6 shadow-lg flex justify-between items-center">
        <h1 className="text-2xl font-bold">ERP-Student Portal</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => ChangeMode()}
              className=" bg-slate-700 cursor-pointer p-3 rounded-lg"
            >
              View Marks
            </button>

            {/* meeting parts */}
            <Meeting />
            
          </div>
          
        </div>
      </header>
      <div className="mb-6">
        <h2 className="text-1xl ">
          <p>
            Project Centric Learning is a powerful tool for students to work in
            areas of their choice and strengths.
          </p>
        </h2>
      </div>
    </div>
  )
}

export default HeaderNav