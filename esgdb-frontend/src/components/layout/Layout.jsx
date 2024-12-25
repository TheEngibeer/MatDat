import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Import af Navbar
import Footer from './Footer'; // Import af Footer

function Layout() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Siderne rendres her */}
      <main className="container my-4">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Layout;
