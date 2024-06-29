import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa'; // Import FontAwesome icon

const StudentDashboard = () => {
  const student = {
    name: 'John Doe',
    usn: '123456',
    email: 'john.doe@example.com',
    icon: 'https://via.placeholder.com/40', // Placeholder image for student icon
  };

  const teamMembers = [
    { name: 'Alice Smith', usn: '654321' },
    { name: 'Bob Johnson', usn: '789012' },
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

  const handleLogout = () => {
    alert('Logging out...');
    // Implement actual logout functionality here
  };

  return (
    <div className="min-h-screen p-6 flex flex-col bg-gradient-to-r from-gray-700 via-gray-800 to-blue-500 text-white">
      <header className="bg-blue-600 text-white p-4 rounded-md mb-6 shadow-lg flex justify-between items-center">
        <h1 className="text-2xl font-bold">ERP Dashboard for PCL</h1>
        <div className="flex items-center space-x-4">
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-2 rounded-md bg-gray-700 text-white placeholder-gray-400"
          />
          <div className="flex items-center space-x-2">
            <img src={student.icon} alt="Student Icon" className="w-10 h-10 rounded-full" />
            <span className="font-bold">{student.name}</span>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        <section className="bg-gray-900 p-6 rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-800">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Student Details</h2>
          <p className="font-bold"><strong>Name:</strong> {student.name}</p>
          <p className="font-bold"><strong>USN:</strong> {student.usn}</p>
          <p className="font-bold"><strong>Email:</strong> {student.email}</p>
        </section>
        <section className="bg-gray-900 p-6 rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-800">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Team Members</h2>
          <ul>
            {teamMembers.map((member, index) => (
              <li key={index} className="mb-2 font-bold">
                {member.name} (ID: {member.usn})
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-gray-900 p-6 rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-800">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Project Details</h2>
          <p className="font-bold"><strong>Title:</strong> {projectDetails.title}</p>
          <p className="font-bold"><strong>Description:</strong> {projectDetails.description}</p>
          <p className="font-bold"><strong>Supervisor:</strong> {projectDetails.guide}</p>
        </section>
        <section className="bg-gray-900 p-6 rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-800">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Marks</h2>
          <p className="font-bold"><strong>Midterm:</strong> {marks.midterm}</p>
          <p className="font-bold"><strong>Final:</strong> {marks.final}</p>
          <p className="font-bold"><strong>Project:</strong> {marks.project}</p>
        </section>
      </div>
      <footer className="bg-blue-600 text-white p-4 rounded-md mt-6 shadow-lg flex justify-between items-center">
        <div className="text-center">
          <p className="font-semibold">© 2024 PCL ERP</p>
          <p className="mt-2">
            Designed with 💖 by <span className="text-yellow-400">Web Champs</span>
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
    </div>
  );
};

export default StudentDashboard;
