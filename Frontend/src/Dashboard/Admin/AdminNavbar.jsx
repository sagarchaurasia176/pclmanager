import React from "react";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigation = useNavigate();
  const movetoStudentPage = () => {
    navigation("/admin/panel");
  };
  return (
    <div>
      <ul className=" flex  justify-center space-x-14 ">
  
        <button className="text-customBlue hover:text-customBlue-dark>">
          Dashboard
        </button>

        {/* button */}
        <button className="text-customBlue hover:text-customBlue-dark>">
          Guide
        </button>

        {/* button */}
        <button
          onClick={() => movetoStudentPage()}
          className="text-customBlue hover:text-customBlue-dark>"
        >
          Student
        </button>

        {/* button */}
        <button className="text-customBlue hover:text-customBlue-dark>">
          Project Detials
        </button>
      </ul>
      <br />
      <div></div>
    </div>
  );
};

export default AdminNavbar;
