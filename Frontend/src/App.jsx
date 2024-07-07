import React from "react";
import "./App.css";
import LoginAuth from "./auth/log/LoginAuth";
import { Routes, Route } from "react-router-dom";
import RegisterStudentUi from "./auth/constant/RegisterStudentUi";
import StudentDashboard from "./Dashboard/Student/StudentDashboard";
import MeetingUi from "./Dashboard/Student/Meeting/MeetingUi";
import AdminPanel from "./Dashboard/Admin/AdminPanel";
import GuideAllocation from "./Dashboard/Admin/GuideAllocation";
import DashAd from "./Dashboard/Admin/DashAd";
function App() {
  return (
    <>
      {/* This is the main controller page */}
      <Routes>
        <Route path="/" element={<LoginAuth />}></Route>
        <Route path="/PclRegister" element={<RegisterStudentUi />}></Route>
        <Route path="/Student-Dashboard" element={<StudentDashboard />}></Route>
        <Route path="/meeting" element={<MeetingUi />}></Route>
        <Route path="/admin/panel" element={<AdminPanel />} />
        <Route path="/admin/guide-allocation" element={<GuideAllocation />} />
        <Route path="/admin/dashboard" element={<DashAd />} /> {/* Add the new route here */}
        
      </Routes>
    </>
  );
}

export default App;
