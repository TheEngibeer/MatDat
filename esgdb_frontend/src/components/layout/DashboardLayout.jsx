import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import "../../styles/DashboardLayout.css";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        {/* Topbar */}
        <Topbar />
        
        {/* Content */}
        <div className="content">
          <Outlet /> {/* Dette viser child-komponenter baseret på de nested routes */}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
