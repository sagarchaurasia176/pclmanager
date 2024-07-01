import React from 'react';

const ViewTeam = () => {
  const teamMembers = [
    { name: 'Alice Smith', usn: '654321' },
    { name: 'Bob Johnson', usn: '789012' },
    { name: 'Charlie Brown', usn: '123789' },
    { name: 'Dana White', usn: '456012' },
    { name: 'Eve Black', usn: '789654' },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-4">Team Members</h2>
      <table className="min-w-full bg-gray-800 rounded-md overflow-hidden">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-700">Name</th>
            <th className="py-2 px-4 bg-gray-700">USN</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((member, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b border-gray-600">{member.name}</td>
              <td className="py-2 px-4 border-b border-gray-600">{member.usn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTeam;
