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
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/assets/images/logo.svg" alt="Logo" height="40" />
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
              <Link className="nav-link" to="/about">
                Om os
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Kontakt
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/features">
                Funktioner
              </Link>
            </li>
          </ul>

          {/* Brugerhandlinger */}
          {isLoggedIn ? (
            <div className="d-flex align-items-center">
              <Link className="btn btn-success ms-2" to="/profile">
                Min Database
              </Link>
              <button
                className="btn btn-outline-secondary ms-2"
                onClick={handleLogout}
              >
                Log ud
              </button>
            </div>
          ) : (
            <Link className="btn btn-success ms-2" to="/login">
              Min Database
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
