import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Import af Navbar
import Footer from './Footer'; // Import af Footer

function Layout() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    if (token) {
      const renewToken = () => {
        fetch("http://127.0.0.1:5000/renew", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.token) {
              localStorage.setItem("token", data.token);
              console.log("Token fornyet");
            } else {
              console.error("Kunne ikke forny token:", data);
            }
          })
          .catch((err) => console.error("Fejl ved fornyelse af token:", err));
      };

      const handleActivity = () => {
        setIsActive(true);
      };

      const handleInactivity = () => {
        setIsActive(false);
        localStorage.removeItem("token");
        navigate("/");
      };

      const activityEvents = ["mousemove", "keydown", "click"];
      activityEvents.forEach((event) => {
        window.addEventListener(event, handleActivity);
      });

      const inactivityTimeout = setTimeout(handleInactivity, 600000); // 10 minutter

      const tokenRenewalInterval = setInterval(() => {
        if (isActive) {
          renewToken();
        }
      }, 300000); // 5 minutter

      return () => {
        activityEvents.forEach((event) => {
          window.removeEventListener(event, handleActivity);
        });
        clearTimeout(inactivityTimeout);
        clearInterval(tokenRenewalInterval);
      };
    }
  }, [navigate, isActive]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="layout-wrapper d-flex flex-column">
      {/* Navigation */}
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      {/* Siderne rendres her */}
      <main className="flex-grow-1 d-flex flex-column align-items-center">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
