import React from 'react';

const ViewMarks = () => {
  const marks = [
    { subject: 'Math', midterm: 85, final: 90 },
    { subject: 'Science', midterm: 88, final: 92 },
    { subject: 'History', midterm: 82, final: 89 },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-4">Marks</h2>
      <table className="min-w-full bg-gray-800 rounded-md overflow-hidden">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-700">Subject</th>
            <th className="py-2 px-4 bg-gray-700">Midterm</th>
            <th className="py-2 px-4 bg-gray-700">Final</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((mark, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b border-gray-600">{mark.subject}</td>
              <td className="py-2 px-4 border-b border-gray-600">{mark.midterm}</td>
              <td className="py-2 px-4 border-b border-gray-600">{mark.final}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewMarks;
