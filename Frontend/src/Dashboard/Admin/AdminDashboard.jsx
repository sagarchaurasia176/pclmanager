import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa'; // Import FontAwesome icon

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('teams'); // State to manage active section

  const admin = {
    name: 'Admin',
    email: 'admin@example.com',
  };

  const teams = [
    {
      teamName: 'Team Alpha',
      members: [
        { name: 'Alice Smith', usn: '654321' },
        { name: 'Bob Johnson', usn: '789012' },
      ],
    },
    {
      teamName: 'Team Beta',
      members: [
        { name: 'Charlie Brown', usn: '123789' },
        { name: 'Dana White', usn: '456012' },
      ],
    },
    {
      teamName: 'Team Gamma',
      members: [
        { name: 'Eve Black', usn: '789654' },
        { name: 'Frank Green', usn: '101112' },
      ],
    },
  ];

  const handleLogout = () => {
    alert('Logging out...');
    // Implement actual logout functionality here
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-gray-900 w-full">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost text-white">
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
          <div className="mx-2 flex-1 px-2 text-white font-bold text-xl">Admin Dashboard</div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              <li>
                <NavLink 
                  to="/admin/panel" 
                  className={`nav-link ${activeSection === 'panel' ? 'active text-blue-500' : 'text-white'}`} 
                  onClick={() => setActiveSection('panel')}
                >
                  Admin Panel
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/admin/guide-allocation" 
                  className={`nav-link ${activeSection === 'guide-allocation' ? 'active text-blue-500' : 'text-white'}`} 
                  onClick={() => setActiveSection('guide-allocation')}
                >
                  Guide Allocation
                </NavLink>
              </li>
              <li>
                <button 
                  onClick={handleLogout}
                  className="bg-red-600 text-white p-3 rounded-full shadow-lg flex items-center space-x-2 transform transition duration-300 hover:bg-red-500"
                >
                  <FaSignOutAlt className="text-xl" />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Admin Details Navbar */}
        <div className="navbar bg-gray-800 w-full p-4">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full text-white">
            <div>
              <strong>Name:</strong> {admin.name}
            </div>
            <div>
              <strong>Email:</strong> {admin.email}
            </div>
          </div>
        </div>
        Content        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
            <section className="bg-gray-900 p-6 rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-800">
              <h2 className="text-xl font-semibold text-blue-400 mb-4">Teams</h2>
              {teams.map((team, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-md font-semibold text-blue-300">{team.teamName}</h4>
                  <table className="min-w-full bg-gray-800 rounded-md overflow-hidden">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 bg-gray-700">Name</th>
                        <th className="py-2 px-4 bg-gray-700">USN</th>
                      </tr>
                    </thead>
                    <tbody>
                      {team.members.map((member, memberIndex) => (
                        <tr key={memberIndex}>
                          <td className="py-2 px-4">{member.name}</td>
                          <td className="py-2 px-4">{member.usn}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </section>

            <section className="bg-gray-900 p-6 rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-800">
              <h2 className="text-xl font-semibold text-blue-400 mb-4">View Marks</h2>
              {teams.map((team, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-md font-semibold text-blue-300">{team.teamName}</h4>
                  <table className="min-w-full bg-gray-800 rounded-md overflow-hidden">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 bg-gray-700">Name</th>
                        <th className="py-2 px-4 bg-gray-700">USN</th>
                        <th className="py-2 px-4 bg-gray-700">Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {team.members.map((member, memberIndex) => (
                        <tr key={memberIndex}>
                          <td className="py-2 px-4">{member.name}</td>
                          <td className="py-2 px-4">{member.usn}</td>
                          <td className="py-2 px-4"> {/* Placeholder for marks, replace with actual data */}
                            0
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    );  
  
};

export default AdminDashboard;
