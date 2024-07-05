import React, { useEffect, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import MarksTable from "./MarksTable";
import HeaderNav from "./Components/HeaderNav";
import FooterBar from "./Components/FooterBar";
// student Dashboard page apply here so we gets
const StudentDashboard = () => {
  // const [activeSection, setActiveSection] = useState("marks");
  const [studentGet, setStudentGet] = useState([]);
  // Using useNavigate from react-router-dom for navigation
  const moveBack = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/StudentRoutes/StudentData"
        );
        console.log(response.data.data[0]);
        setStudentGet(response.data.data[0]);
      } catch (error) {
        toast.error("Internal error!", error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    alert("are you sure to logout !");
    moveBack("/"); // Redirect to the home page or login page
  };

  const [isTable, setTable] = useState(true);
  // change Mode apply here
  const ChangeMode = () => {
    setTable((update) => !update);
  };

  return (
    <div className="min-h-screen p-6 flex flex-col bg-gradient-to-r from-gray-700 via-gray-800 to-blue-500 text-white">
      <HeaderNav ChangeMode={ChangeMode} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        {/* Section for displaying team members in a table */}
        <section className="bg-gray-900 p-6 rounded-md shadow-md ">
          {isTable ? (
            <>
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-blue-400 mb-4">
                  Team Members
                </h2>
                {/* Check if team members data exists and render table */}
                {studentGet && studentGet.teamMembers && (
                  <table className="min-w-full bg-gray-800 rounded-md overflow-hidden">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 bg-gray-700">Name</th>
                        <th className="py-2 px-4 bg-gray-700">USN</th>
                        <th className="py-2 px-4 bg-gray-700">Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Map through team members and render rows */}
                      {studentGet.teamMembers.map((member, index) => (
                        <tr key={index} className="text-center">
                          <td className="py-2 px-4 border-b border-gray-600">
                            {member.FullName}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-600">
                            {member.UsnNumber}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-600">
                            {member.role}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </>
          ) : (
            <>
              {/* false state then show the marks */}
              <MarksTable />
            </>
          )}
        </section>

        

        {/* Example section for displaying project details */}
        <section className="bg-gray-900 p-6 rounded-md shadow-md  ">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">
            Project Details
          </h2>
          {/* Display project details based on fetched data */}
          {studentGet && (
            <div className=" uppercase  block  pl-8">
              <p className=" text-white  ">
                Title :<p className=" uppercase">{studentGet.title}</p>
              </p>
              <br></br>
              <p className=" text-white  ">
                Description :
                <p className=" uppercase">
                  <span>{studentGet.description}</span>
                </p>
              </p>

              {/* Add more details as needed */}
            </div>
          )}
        </section>
      </div>

      <FooterBar handleLogout={handleLogout} />
    </div>
  );
};

export default StudentDashboard;
