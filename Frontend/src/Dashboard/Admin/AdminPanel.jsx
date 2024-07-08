import React, { useEffect, useState } from "react";
import axios from "axios";
import DashAd from "./DashAd";
import AdminNavbar from "./AdminNavbar";

const AdminPanel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/StudentRoutes/StudentData"
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleTitleClick = (id) => {
    // Example function to handle click action
    console.log(`Title clicked for item with ID: ${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto   shadow sm:rounded-lg ">
      {" "}
      <AdminNavbar />
      {/* Add bg-white here if needed */}
      <h1 className="text-2xl font-bold mb-4 text-center">Registered Team</h1>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 table-hover bg-white">
          {" "}
          {/* Add bg-white here */}
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Team Members
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {" "}
            {/* Ensure bg-white here */}
            {data.map((item) => (
              <tr
                key={item._id}
                className="hover:bg-gray-100 transition duration-300 ease-in-out hover:text-gray-900"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <a
                    href="#"
                    onClick={() => handleTitleClick(item._id)}
                    className="text-blue-600 hover:underline"
                  >
                    {item.title}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-wrap break-words text-sm text-gray-500">
                  {item.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <ul>
                    {item.teamMembers.map((member) => (
                      <li key={member._id} className="list-disc">
                        {member.FullName} ({member.role})
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
