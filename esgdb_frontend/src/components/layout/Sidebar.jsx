import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaBox,
  FaPlusCircle,
  FaSearch,
  FaBell,
  FaChartPie,
  FaCog,
} from "react-icons/fa";
import "../../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Sustensive</h2>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-title">Ressource Håndtering</li>
        <li>
          <Link to="/dashboard">
            <FaHome className="icon" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/myresources">
            <FaBox className="icon" />
            Mine Ressourcer
          </Link>
        </li>
        <li>
          <Link to="/create">
            <FaPlusCircle className="icon" />
            Opret Ressource
          </Link>
        </li>
        <li>
          <Link to="/searchresources">
            <FaSearch className="icon" />
            Søg Ressourcer
          </Link>
        </li>
        <li>
          <Link to="/agent">
            <FaBell className="icon" />
            Agent
          </Link>
        </li>
        <li className="sidebar-title">Data</li>
        <li>
          <Link to="/reports">
            <FaChartPie className="icon" />
            Rapporter
          </Link>
        </li>
        <li className="sidebar-title">Profil</li>
        <li>
          <Link to="/profile">
            <FaUser className="icon" />
            Min Profil
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FaCog className="icon" />
            Indstillinger
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
