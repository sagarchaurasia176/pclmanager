import { useState } from "react";
import "./App.css";
import LoginAuth from "./auth/LoginAuth";
import { Routes, Route } from "react-router-dom";
import MainAdminDashboard from "./Dashboard/Admin/MainAdminDashboard";
import GuideDashboard from "./Dashboard/Guide/GuideDashboard";
import StudentDashboard from "./Dashboard/Student/StudentDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginAuth />}></Route>
        <Route path="/admin" element={<MainAdminDashboard />}></Route>
        <Route path="/guide" element={<GuideDashboard />}></Route>
        <Route path="/Student" element={<StudentDashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
