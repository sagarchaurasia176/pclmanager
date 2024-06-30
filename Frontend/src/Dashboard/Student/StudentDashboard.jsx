import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';

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
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
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
                  to="/student/ViewTeam" 
                  className={`nav-link ${activeLink === '/student/ViewTeam' ? 'active' : ''}`} 
                  onClick={() => handleLinkClick('/student/ViewTeam')}
                >
                  View Team
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/student/ViewMarkAtt" 
                  className={`nav-link ${activeLink === '/student/ViewMarkAtt' ? 'active' : ''}`} 
                  onClick={() => handleLinkClick('/student/ViewMarkAtt')}
                >
                  View Marks
                </NavLink>
              </li>
            </ul>
          </div>
        </div>


        
        {/* Page content here */}
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        
      </div>
    </div>
  );
};

export default StudentDashboard
