import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          window.location.href = "/profile";
        } else {
          alert("Forkert brugernavn eller kodeord");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Velkomsttekst */}
        <div className="welcome-text text-center mb-4">
          <h1>Velkommen tilbage!</h1>
          <p>Log ind for at administrere dine ressourcer og oprette nye muligheder.</p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Login-sektion */}
          <div className="col-md-6 d-flex">
            <div className="card shadow-sm flex-fill">
              <div className="card-body">
                <h2 className="h4 text-center mb-4">Log ind</h2>
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label className="form-label">
                      <FaUser className="me-2" />
                      Brugernavn
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Indtast brugernavn"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <FaLock className="me-2" />
                      Adgangskode
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Indtast adgangskode"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Log ind
                  </button>
                </form>

                <div className="mt-3 text-center">
                  <a href="#" className="forgot-password">
                    Glemt brugernavn eller adgangskode?
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Ny bruger-sektion */}
          <div className="col-md-6 d-flex">
            <div className="card shadow-sm flex-fill">
              <div className="card-body d-flex flex-column justify-content-center">
                <h2 className="h4 text-center mb-4">Ny bruger?</h2>
                <p>
                  Opret en konto og få adgang til eksklusive værktøjer, der hjælper dig med at
                  finde, administrere og optimere dine ressourcer.
                </p>
                <div className="d-grid mt-4">
                  <a href="/register" className="btn btn-outline-primary">
                    Opret en konto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer med support */}
        <div className="text-center mt-4">
          <small className="text-muted">
            Brug for hjælp? <a href="/support">Kontakt support</a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
