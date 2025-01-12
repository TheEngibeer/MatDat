import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../styles/Sidebar.css";



function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      {/* Layout med venstremenu */}
      <div className="dashboard-content">
        {/* Venstremenu */}
        <aside className="side-menu">
          <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Min profil</Link>
            <Link to="/myresources">Mine ressourcer</Link>
          </nav>
        </aside>

        {/* Hovedindhold */}
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
