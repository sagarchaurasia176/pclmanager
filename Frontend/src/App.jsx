import React from "react";
import "./App.css";
import LoginAuth from "./auth/log/LoginAuth";
import { Routes, Route } from "react-router-dom";
import MainAdmin from "./Dashboard/Admin/AdminDashboard";
import StudentDashboard from "./Dashboard/Student/StudentDashboard";
import RegisterStudentForm from "./auth/constant/RegisterStudentForm";
import AdminPanel from "./Dashboard/Admin/AdminPanel";
import GuideAllocation from "./Dashboard/Admin/GuideAllocation";
import GuideDashboard from "./Dashboard/Guide/GuideDashboard";
import ViewTeam from "./Dashboard/Guide/ViewTeam";
import ViewMarks from "./Dashboard/Guide/ViewMarks";

function App() {
  return (
    <>
      {/* This is the main controller page */}
      <Routes>
        <Route path="/" element={<LoginAuth />}></Route>
        <Route path="/admin" element={<MainAdmin />}></Route>
        <Route path="/Student" element={<StudentDashboard />}></Route>
        <Route path="/RegisterAccount" element={<RegisterStudentForm />}></Route>
        <Route path="/admin/panel" element={<AdminPanel />}></Route>
        <Route path="/admin/guide-allocation" element={<GuideAllocation />}></Route>
        <Route path="/guide" element={<GuideDashboard />}></Route>
        <Route path="/guide/view-team" element={<ViewTeam />}></Route>
        <Route path="/guide/view-marks" element={<ViewMarks />}></Route>
      </Routes>
    </>
  );
}

export default App;
