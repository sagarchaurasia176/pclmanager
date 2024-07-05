import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
const FooterBar = ({handleLogout}) => {
  return (
    <div>
           <footer className="bg-blue-600 text-white p-4 rounded-md mt-6 shadow-lg flex justify-between items-center">
        <div className="text-center">
          <p className="font-semibold ">© 2024 PCL ERP</p>
        </div>
        <button
          onClick={()=>handleLogout()}
          className="bg-red-600 text-white p-3 rounded-full shadow-lg flex items-center space-x-2 transform transition duration-300 hover:bg-red-500"
        >
          <FaSignOutAlt className="text-xl" />
          <span>Logout</span>
        </button>
      </footer>
    </div>
  )
}

export default FooterBar