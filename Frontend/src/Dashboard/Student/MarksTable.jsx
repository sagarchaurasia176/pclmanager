import React from "react";
import { DummyData } from "../../Api/DummyData";

const MarksTable = () => {
  return (
    <div>
      <section className="bg-gray-900 p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold text-blue-400 mb-4">View Marks</h2>
        <div className="mt-4">
          <table className="min-w-full bg-gray-800 rounded-md overflow-hidden">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-700">Name</th>
                <th className="py-2 px-4 bg-gray-700">USN</th>
                <th className="py-2 px-4 bg-gray-700">Marks</th>
              </tr>
            </thead>
            <tbody>
              {DummyData.map((data, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-gray-600">
                    {data.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-600">
                    {data.Usn}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-600">
                    {data.Marks}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MarksTable;
