<<<<<<< Updated upstream
import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';

const StudentDashboard = () => {
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
          <div className="flex-none lg:hidden">
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
          <div className="mx-2 flex-1 px-2">PCL Manager - Student</div>
          <div className="hidden flex-none lg:block">
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
                  Attendance / Marks
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
}

export default StudentDashboard
=======
import React from 'react';
// import './StudentDashboard.css';

const StudentDashboard = () => {
  const student = {
    name: 'John Doe',
    id: '123456',
    email: 'john.doe@example.com',
  };

  const teamMembers = [
    { name: 'Alice Smith', id: '654321' },
    { name: 'Bob Johnson', id: '789012' },
  ];

  const projectDetails = {
    title: 'AI-Based Learning Platform',
    description: 'A platform that leverages AI to provide personalized learning experiences.',
    guide: 'Dr. Jane Roe',
  };

  const marks = {
    midterm: 85,
    final: 90,
    project: 95,
  };
  
  return (
    <div className="min-h-screen p-6 flex flex-col bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"> 
      <header className="bg-blue-600 text-white p-4 rounded-md mb-6">
        <h1 className="text-2xl font-bold text-center">ERP Dashboard for PCL</h1>
      </header>
      <div className='grid grid-cols-2 gap-6'>
      <section className="bg-gray-800 p-4 rounded-md shadow-md mb-6">
        <h2 className="text-xl font-semibold text-white-600 mb-4">Student Details</h2>
        <p className="font-bold text-white"><strong>Name:</strong> {student.name}</p>
        <p className="font-bold text-white"><strong>ID:</strong> {student.id}</p>
        <p className="font-bold text-white"><strong>Email:</strong> {student.email}</p>
      </section>
      <section className="bg-gray-800 p-4 rounded-md shadow-md mb-6">
        <h2 className="text-xl font-semibold text-white-600 mb-4">Team Members</h2>
        <ul>
          {teamMembers.map((member, index) => (
            <li key={index} className="mb-2 font-bold text-white">
              {member.name} (ID: {member.id})
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-gray-800 p-4 rounded-md shadow-md mb-6">
        <h2 className="text-xl font-semibold text-white-600 mb-4">Project Details</h2>
        <p className="font-bold text-white"><strong>Title:</strong> {projectDetails.title}</p>
        <p className="font-bold text-white"><strong>Description:</strong> {projectDetails.description}</p>
        <p className="font-bold text-white"><strong>Supervisor:</strong> {projectDetails.guide}</p>
      </section>
      <section className="bg-gray-800 p-4 rounded-md shadow-md mb-6">
        <h2 className="text-xl font-semibold text-white-600 mb-4">Marks</h2>
        <p className="font-bold text-white"><strong>Midterm:</strong> {marks.midterm}</p>
        <p className="font-bold text-white"><strong>Final:</strong> {marks.final}</p>
        <p className="font-bold text-white"><strong>Project:</strong> {marks.project}</p>
      </section>
    </div>
    <footer className="bg-blue-600 text-white p-4 rounded-md mt-6">
        <div className="text-center">
          <p className="font-semibold">© 2024 PCL ERP Dashboard</p>
          <p className="mt-2">
            Designed with 💖 by <span className="text-yellow-400">Code Champs</span>
          </p>
        </div>
      </footer>
    </div>
  );
};


export default StudentDashboard;
>>>>>>> Stashed changes
