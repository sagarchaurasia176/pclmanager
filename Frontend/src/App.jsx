import React from "react";
import {  Routes, Route } from "react-router-dom";
import "./App.css";
<<<<<<< Updated upstream
import LoginAuth from "./auth/log/LoginAuth";
import { Routes, Route } from "react-router-dom";

import PclRegisterationForm from "./auth/constant/RegisterStudentUi";

//Students File import only
import StudentDashboard from "./Dashboard/Student/StudentDashboard";
import ViewMarksAttendance from "./Dashboard/Student/ViewMarksAttendance";
import ViewTeam from "./Dashboard/Student/ViewTeam";

//Admin File imports only
import MainAdmin from "./Dashboard/Admin/AdminDashboard";
import AdminPanel from "./Dashboard/Admin/AdminPanel";
import GuideAllocation from "./Dashboard/Admin/GuideAllocation";



=======
import LoginAuth from "./auth/LoginAuth";
import GuideDashboard from "./Dashboard/Guide/GuideDashboard";
import MainAdmin from "./Dashboard/Admin/AdminDashboard";
import StudentDashboard from "./Dashboard/Student/StudentDashboard";
import StudentLogin from "./auth/StudentLogin";
import RegisterStudentForm from "./auth/RegisterStudentForm";
>>>>>>> Stashed changes

function App() {
  return (
    <>
      {/* This is the main controller page */}
      <Routes>
<<<<<<< Updated upstream
        <Route path="/" element={<LoginAuth />}></Route>
        <Route path="/admin" element={<MainAdmin />}></Route>
        <Route path="/PclRegister" element={<PclRegisterationForm />}></Route>
        <Route path="/admin/panel" element={<AdminPanel />}></Route>
        <Route path="/admin/guide-allocation" element={<GuideAllocation />}></Route>


        <Route path="/student" element={<StudentDashboard />}></Route>
        <Route path="/student/ViewTeam" element={<ViewTeam/>}></Route>
        <Route path="/student/ViewMarkAtt" element={<ViewMarksAttendance/>}></Route>
      </Routes>

=======
        <Route path="/" element={<LoginAuth />} />
        <Route path="/admin" element={<MainAdmin />} />
        <Route path="/guide" element={<GuideDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/register-account" element={<RegisterStudentForm />} />
      </Routes>
    
    
>>>>>>> Stashed changes
    </>
    
  );
}

export default App;
