import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";
import MyRessourcesPage from "./pages/MyRessourcesPage";
import ProfilePage from "./pages/ProfilePage";
import CreateResourcePage from "./pages/CreateResourcePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./components/common/ProtectedRoute";
import DashboardLayout from "./components/layout/DashboardLayout";

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Offentlige Ruter */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* Beskyttede Ruter */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="myresources" element={<MyRessourcesPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="create" element={<CreateResourcePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
