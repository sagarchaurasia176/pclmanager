import React from 'react';

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
    <div className="min-h-screen p-6 flex flex-col bg-gradient-to-r from-gray-700 via-gray-800 to-blue-500">
      <header className="bg-blue-600 text-white p-4 rounded-md mb-6">
        <h1 className="text-2xl font-bold text-center">ERP Dashboard for PCL</h1>
      </header>
      <div className="grid grid-cols-2 gap-6 flex-grow">
        <section className="bg-gray-900 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Student Details</h2>
          <p className="font-bold text-white"><strong>Name:</strong> {student.name}</p>
          <p className="font-bold text-white"><strong>ID:</strong> {student.id}</p>
          <p className="font-bold text-white"><strong>Email:</strong> {student.email}</p>
        </section>
        <section className="bg-gray-900 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Team Members</h2>
          <ul>
            {teamMembers.map((member, index) => (
              <li key={index} className="mb-2 font-bold text-white">
                {member.name} (ID: {member.id})
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-gray-900 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Project Details</h2>
          <p className="font-bold text-white"><strong>Title:</strong> {projectDetails.title}</p>
          <p className="font-bold text-white"><strong>Description:</strong> {projectDetails.description}</p>
          <p className="font-bold text-white"><strong>Supervisor:</strong> {projectDetails.guide}</p>
        </section>
        <section className="bg-gray-900 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Marks</h2>
          <p className="font-bold text-white"><strong>Midterm:</strong> {marks.midterm}</p>
          <p className="font-bold text-white"><strong>Final:</strong> {marks.final}</p>
          <p className="font-bold text-white"><strong>Project:</strong> {marks.project}</p>
        </section>
      </div>
      <footer className="bg-blue-600 text-white p-4 rounded-md mt-6">
        <div className="text-center">
          <p className="font-semibold">© 2024 PCL ERP Dashboard</p>
          <p className="mt-2">
            Designed with 💖 by <span className="text-yellow-400">Web champs</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default StudentDashboard;
