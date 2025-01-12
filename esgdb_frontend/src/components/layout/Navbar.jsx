import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={require("../../assets/images/Sustensive Logo.png")} alt="Sustensive Logo" height="40" />
          <span className="navbar-text ms-2">Sustensive</span>
        </Link>


        {/* Toggler til mobilmenu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigationslinks */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                <i className="bi bi-info-circle-fill"></i> Om os
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <i className="bi bi-envelope-fill"></i> Kontakt
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/features">
                <i className="bi bi-list-task"></i> Funktioner
              </Link>
            </li>
          </ul>

          {/* Brugerhandlinger */}
          {isLoggedIn ? (
            <div className="d-flex align-items-center">
              <Link className="btn btn-success ms-2" to="/profile">
                <i className="bi bi-person-circle"></i> Min Database
              </Link>
              <button
                className="btn btn-outline-light ms-2"
                onClick={handleLogout}
              >
                <i className="bi bi-box-arrow-right"></i> Log ud
              </button>
            </div>
          ) : (
            <Link className="btn btn-success ms-2" to="/login">
              <i className="bi bi-person-circle"></i> Min Database
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
