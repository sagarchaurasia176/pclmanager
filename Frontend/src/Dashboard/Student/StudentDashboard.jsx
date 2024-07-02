import React, { useEffect, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("marks");

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
        {/* Example section for displaying student details */}
        <section className="bg-gray-900 p-6 rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-800">
          <div className=" text text-center">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">
              Expected Outcomes
            </h2>
          </div>
          <div className="mt-1">
            {/* Check if team members data exists and render table */}

            <table className="min-w-full bg-gray-800 rounded-md overflow-hidden">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-gray-700">Conference Paper</th>
                  <th className="py-2 px-4 bg-gray-700">Journal Patent</th>
                  <th className="py-2 px-4 bg-gray-700">Prototype</th>
                </tr>
              </thead>
              <tbody>
                {/* Map through team members and render rows */}
                <>
                  <tr className="text-center">
                    <td className="py-2 px-4 border-b border-gray-600">
                      {studentGet.ConferencePaper}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-600">
                      {studentGet.JournalPatent}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-600">
                      {studentGet.Prototype}
                    </td>
                  </tr>
                </>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section for displaying team members in a table */}
        <section className="bg-gray-900 p-6 rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-800">
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
        <section className="bg-gray-900 p-6 rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-800">
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
              <p>Description:</p>
              <span>{studentGet.description}</span>

              {/* Add more details as needed */}
            </div>
          )}
        </section>
      </div>

      <footer className="bg-blue-600 text-white p-4 rounded-md mt-6 shadow-lg flex justify-between items-center">
        <div className="text-center">
          <p className="font-semibold">© 2024 PCL ERP</p>
          <p className="mt-2">
            PCL_MANAGEMENT
            <span className="text-yellow-400">SYSTEM</span>
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white p-3 rounded-full shadow-lg flex items-center space-x-2 transform transition duration-300 hover:bg-red-500"
        >
          <FaSignOutAlt className="text-xl" />
          <span>Logout</span>
        </button>
      </footer>


const StudentDashboard = () => {
  const student = {
    name: 'John Doe',
    usn: '123456',
    email: 'john.doe@example.com',
  };

  const teamMembers = [
    { name: 'Alice Smith', usn: '654321' },
    { name: 'Bob Johnson', usn: '789012' },
  ];

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { GiTeamIdea } from "react-icons/gi";
import { MdDoubleArrow } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { ImUserCheck } from "react-icons/im";



// import ProjectBox from "../Student/ProjectBox";

const StudentDashboard = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (

    <div className="min-h-screen p-6 flex flex-col bg-gradient-to-r from-gray-700 via-gray-800 to-blue-500">
      <header className="bg-blue-600 text-white p-4 rounded-md mb-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center">ERP Dashboard for PCL</h1>
      </header>
      <div className="grid grid-cols-2 gap-6 flex-grow">
      <section className="bg-gray-900 p-6 rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-800">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Student Details</h2>
          <p className="font-bold text-white"><strong>Name:</strong> {student.name}</p>
          <p className="font-bold text-white"><strong>USN:</strong> {student.usn}</p>
          <p className="font-bold text-white"><strong>Email:</strong> {student.email}</p>
        </section>
        <section className="bg-gray-900 p-6 rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-800">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Team Members</h2>
          <ul>
            {teamMembers.map((member, index) => (
              <li key={index} className="mb-2 font-bold text-white">
                {member.name} (ID: {member.usn})
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-gray-900 p-6 rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-800">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Project Details</h2>
          <p className="font-bold text-white"><strong>Title:</strong> {projectDetails.title}</p>
          <p className="font-bold text-white"><strong>Description:</strong> {projectDetails.description}</p>
          <p className="font-bold text-white"><strong>Supervisor:</strong> {projectDetails.guide}</p>
        </section>
        <section className="bg-gray-900 p-6 rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-800">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Marks</h2>
          <p className="font-bold text-white"><strong>Midterm:</strong> {marks.midterm}</p>
          <p className="font-bold text-white"><strong>Final:</strong> {marks.final}</p>
          <p className="font-bold text-white"><strong>Project:</strong> {marks.project}</p>
        </section>
      </div>
      <footer className="bg-blue-600 text-white p-4 rounded-md mt-6 shadow-lg">
        <div className="text-center">
          <p className="font-semibold">© 2024 PCL ERP </p>
          <p className="mt-2">
            Designed with 💖 by <span className="text-yellow-400">Web champs</span>
          </p>

    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none lg-hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">Student Dashboard</div>
          <div className="hidden flex-none lg-block">
            <ul className="menu menu-horizontal">
              <li>
                <NavLink
                  to="/guide/view-team"
                  className={`nav-link ${
                    activeLink === "/guide/view-team" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("/guide/view-team")}
                >
                  View Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/guide/view-marks"
                  className={`nav-link ${
                    activeLink === "/guide/view-marks" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("/guide/view-marks")}
                >
                  View Marks
                </NavLink>
              </li>
            </ul>
          </div>

        </div>


        
        {/* Page content here */}


        <div class="flex flex-row">

          <div class="basis w-full m-10">
            <div className="card bg-primary text-primary-content">
              <div className="card-body">
                <div>
                  <GiTeamIdea className="object-cover w-16 h-16"/> 
                </div>
                <h2 className="card-title">View Teams</h2>
                
                <div className="card-actions justify-end">
                  <button className="btn">Click <MdDoubleArrow /> </button>
                </div>
              </div>
            </div>
          </div>

          <div class="basis w-full m-10">
            <div className="card bg-primary text-primary-content">
              <div className="card-body">
                <div>
                  <MdCastForEducation className="object-cover w-16 h-16"/> 
                </div>
                <h2 className="card-title">Student Marks</h2>
                <div className="card-actions justify-end">
                  <button className="btn">Click <MdDoubleArrow /> </button>
                </div>
              </div> 
            </div>
          </div>

          <div class="basis w-full m-10">
            <div className="card bg-primary text-primary-content">
              <div className="card-body">
                <div>
                  <ImUserCheck className="object-cover w-16 h-16 rounded-full"/> 
                </div>
                <h2 className="card-title">Attedance</h2>
                
                <div className="card-actions justify-end">
                  <button className="btn">Click <MdDoubleArrow /> </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default StudentDashboard;
export default StudentDashboard;
