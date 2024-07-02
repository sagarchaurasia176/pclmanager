import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const GuideDashboard = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none lg-hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">Guide Dashboard</div>
          <div className="hidden flex-none lg-block">
            <ul className="menu menu-horizontal">
              <li>
                <NavLink 
                  to="/guide/view-team" 
                  className={`nav-link ${activeLink === '/guide/view-team' ? 'active' : ''}`} 
                  onClick={() => handleLinkClick('/guide/view-team')}
                >
                  View Team
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/guide/view-marks" 
                  className={`nav-link ${activeLink === '/guide/view-marks' ? 'active' : ''}`} 
                  onClick={() => handleLinkClick('/guide/view-marks')}
                >
                  View Marks
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        Content
      </div>
    </div>
  );
}

export default GuideDashboard;
