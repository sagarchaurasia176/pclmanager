import React from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import ChartJs from "./ChartJs";

const DashAd = () => {
  return (
    <div className="min-h-screen bg-darkGrey">
      <div className="bg-customBlue p-4 text-white">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>
      <div>
        <AdminNavbar />
      </div>
      <br />
      <div className="">
        {/* Sidebar */}

        {/* Main Content */}
        <div className="w-full p-4">
          <h2 className="text-xl font-bold mb-4 text-white">Overview</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-lg font-bold mb-2">Total Students</h3>
              <p className="text-gray-600">150</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-lg font-bold mb-2">Total Guides</h3>
              <p className="text-gray-600">25</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-lg font-bold mb-2">Total Projects</h3>
              <p className="text-gray-600">50</p>
            </div>
          </div>
          {/* Add more content as needed */}
        </div>
      </div>

      <div>
        <ChartJs />
      </div>
    </div>
  );
};

export default DashAd;
