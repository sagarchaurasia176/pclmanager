// App.jsx

import React from 'react';
import "./App.css";
import LoginAuth from "./auth/LoginAuth";
import { Routes, Route } from "react-router-dom";
import GuideDashboard from "./Dashboard/Guide/GuideDashboard";
import StudentDashboard from "./Dashboard/Student/StudentDashboard";
import Layout from "./Dashboard/Admin/Layout"; // Import Layout component

function AdminDashboard() {
  return (
    <Layout />
  );
}

function App() {
  return (
    <>
      {/* This is the main controller page */}
      <Routes>
        <Route path="/" element={<LoginAuth />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/guide" element={<GuideDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
      </Routes>
    </>
  );
}

export default App;
