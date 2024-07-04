import React, { useEffect, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// student Dashboard page apply here so we gets
const StudentDashboard = () => {
  // const [activeSection, setActiveSection] = useState("marks");
  const [studentGet, setStudentGet] = useState([]);
  // Using useNavigate from react-router-dom for navigation
  const moveBack = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/StudentRoutes/StudentData"
        );
        console.log(response.data.data[0]);
        setStudentGet(response.data.data[0]);
      } catch (error) {
        toast.error("Internal error!", error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    alert("are you sure to logout !");
    moveBack("/"); // Redirect to the home page or login page
  };

  return (
    <div className="min-h-screen p-6 flex flex-col bg-gradient-to-r from-gray-700 via-gray-800 to-blue-500 text-white">
      <header className="bg-blue-600 text-white p-4 rounded-md mb-6 shadow-lg flex justify-between items-center">
        <h1 className="text-2xl font-bold">ERP-Student Portal</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button className=" bg-orange-400 p-2 rounded-md">
              View Marks
            </button>
            <button className=" bg-slate-900 p-3 rounded-lg">
              Meeting With Guide
            </button>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        {/* Section for displaying team members in a table */}
        <section className="bg-gray-900 p-6 rounded-md shadow-md ">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">
            Team Members
          </h2>
          <div className="mt-4">
            {/* Check if team members data exists and render table */}
            {studentGet && studentGet.teamMembers && (
              <table className="min-w-full bg-gray-800 rounded-md overflow-hidden">
                <thead>
                  <tr>
                    <th className="py-2 px-4 bg-gray-700">Name</th>
                    <th className="py-2 px-4 bg-gray-700">USN</th>
                    <th className="py-2 px-4 bg-gray-700">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map through team members and render rows */}
                  {studentGet.teamMembers.map((member, index) => (
                    <tr key={index} className="text-center">
                      <td className="py-2 px-4 border-b border-gray-600">
                        {member.FullName}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-600">
                        {member.UsnNumber}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-600">
                        {member.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>

        {/* Example section for displaying project details */}
        <section className="bg-gray-900 p-6 rounded-md shadow-md  ">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">
            Project Details
          </h2>
          {/* Display project details based on fetched data */}
          {studentGet && (
            <div className=" uppercase  block  pl-8">
              <p className=" text-white  ">
                Title :<p className=" uppercase">{studentGet.title}</p>
              </p>
              <br></br>
              <p>Project Id:</p>
              <span>{studentGet.description}</span>

              {/* Add more details as needed */}
            </div>
          )}
        </section>
      </div>

      <footer className="bg-blue-600 text-white p-4 rounded-md mt-6 shadow-lg flex justify-between items-center">
        <div className="text-center">
          <p className="font-semibold ">© 2024 PCL ERP</p>
       
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white p-3 rounded-full shadow-lg flex items-center space-x-2 transform transition duration-300 hover:bg-red-500"
        >
          <FaSignOutAlt className="text-xl" />
          <span>Logout</span>
        </button>
      </footer>
    </div>
  );
};

export default StudentDashboard;
