import React from 'react';

const ViewTeam = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-400">
          {/* head */}
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2"></th>
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Job</th>
              <th className="border border-gray-400 px-4 py-2">Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th className="border border-gray-400 px-4 py-2">1</th>
              <td className="border border-gray-400 px-4 py-2">Cy Ganderton</td>
              <td className="border border-gray-400 px-4 py-2">Quality Control Specialist</td>
              <td className="border border-gray-400 px-4 py-2">Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th className="border border-gray-400 px-4 py-2">2</th>
              <td className="border border-gray-400 px-4 py-2">Hart Hagerty</td>
              <td className="border border-gray-400 px-4 py-2">Desktop Support Technician</td>
              <td className="border border-gray-400 px-4 py-2">Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th className="border border-gray-400 px-4 py-2">3</th>
              <td className="border border-gray-400 px-4 py-2">Brice Swyre</td>
              <td className="border border-gray-400 px-4 py-2">Tax Accountant</td>
              <td className="border border-gray-400 px-4 py-2">Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewTeam;
