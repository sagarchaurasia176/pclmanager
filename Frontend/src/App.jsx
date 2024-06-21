import React from "react";
import "./App.css";
import LoginAuth from "./auth/log/LoginAuth";
import { Routes, Route } from "react-router-dom";
import GuideDashboard from "./Dashboard/Guide/GuideDashboard";
import MainAdmin from "./Dashboard/Admin/AdminDashboard";
import StudentDashboard from "./Dashboard/Student/StudentDashboard";
// import StudentLogin from "./auth/log/StudentLogin";
import RegisterStudentForm from "./auth/constant/RegisterStudentForm";
function App() {
  return (
    <>
      {/* This is the main controller page */}
      <Routes>
        <Route path="/" element={<LoginAuth />}></Route>
        <Route path="/admin" element={<MainAdmin />}></Route>
        <Route path="/guide" element={<GuideDashboard />}></Route>
        <Route path="/Student" element={<StudentDashboard />}></Route>
        <Route
          path="/RegisterAccount"
          element={<RegisterStudentForm />}
        ></Route>
        {/* Register Accounts*/}
      </Routes>
    </>
  );
}

export default App;
