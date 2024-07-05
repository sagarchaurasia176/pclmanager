import React from "react";
import "./App.css";
import LoginAuth from "./auth/log/LoginAuth";
import { Routes, Route } from "react-router-dom";
import RegisterStudentUi from "./auth/constant/RegisterStudentUi";
import StudentDashboard from "./Dashboard/Student/StudentDashboard";

function App() {
  return (
    <>
      {/* This is the main controller page */}
      <Routes>
        <Route path="/" element={<LoginAuth />}></Route>
        <Route path="/PclRegister" element={<RegisterStudentUi />}></Route>
        <Route path="/Student-Dashboard" element={<StudentDashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
