// App.jsx

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginAuth from './auth/LoginAuth';
import AdminDashboard from './Dashboard/Admin/AdminDashboard'; // Import AdminDashboard component
import GuideAllocation from './Dashboard/Admin/GuideAllocation'; // Import GuideAllocation component
import Sidebar from './Dashboard/Admin/Sidebar'; // Import Sidebar component
import './App.css'; // Import your CSS file if needed

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin'); // Check if on admin page

  return (
    <div className="app">
      {isAdminPage && <Sidebar />} {/* Render Sidebar only for admin page */}

      <div className="main-content">
        <Routes>
          <Route path="/" element={<LoginAuth />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/guide-allocation" element={<GuideAllocation />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
