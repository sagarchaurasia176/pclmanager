import React, { useState } from "react";
import { NavLink } from "react-router-dom";


import { GiTeamIdea } from "react-icons/gi";
import { MdDoubleArrow } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { ImUserCheck } from "react-icons/im";




const StudentDashboard = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none lg:hidden">
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
          <div className="mx-2 flex-1 px-2">PCL Manager - Student</div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              <li>
                <NavLink
                  to="/student/ViewTeam"
                  className={`nav-link ${
                    activeLink === "/student/ViewTeam" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("/student/ViewTeam")}
                >
                  View Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/student/ViewMarkAtt"
                  className={`nav-link ${
                    activeLink === "/student/ViewMarkAtt" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("/student/ViewMarkAtt")}
                >
                  Attendance / Marks
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}



        <div class="flex flex-row hero bg-base-200 min-h-screen">

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
