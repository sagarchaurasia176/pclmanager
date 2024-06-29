import React from "react";
import "./App.css";
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




function App() {
  return (
    <>
      {/* This is the main controller page */}
      <Routes>
        <Route path="/" element={<LoginAuth />}></Route>
        <Route path="/admin" element={<MainAdmin />}></Route>
        <Route path="/PclRegister" element={<PclRegisterationForm />}></Route>
        <Route path="/admin/panel" element={<AdminPanel />}></Route>
        <Route path="/admin/guide-allocation" element={<GuideAllocation />}></Route>


        <Route path="/student" element={<StudentDashboard />}></Route>
        <Route path="/student/ViewTeam" element={<ViewTeam/>}></Route>
        <Route path="/student/ViewMarkAtt" element={<ViewMarksAttendance/>}></Route>
      </Routes>

    </>
  );
}

export default App;
