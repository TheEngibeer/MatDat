import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "/Profile";
      } else {
        alert("Forkert brugernavn eller kodeord");
      }
    })
    .catch(err => console.error(err));
  };

  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Topsektion - kan justeres efter behov */}
      <div className="container" style={{ maxWidth: "900px" }}>
        <div className="row">
          {/* Login-kolonnen */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="h4 text-center mb-4">Log ind på din konto</h2>
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label className="form-label">Brugernavn</label>
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
                    <label className="form-label">Adgangskode</label>
                    <input 
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Indtast adgangskode"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Log ind</button>
                </form>

                <div className="mt-3 text-center">
                  <a href="#" className="text-decoration-none">Glemt brugernavn eller adgangskode?</a>
                </div>
              </div>
            </div>
          </div>

          {/* Ny bruger-kolonnen */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column justify-content-center">
                <h2 className="h4 text-center mb-4">Ny bruger?</h2>
                <p>
                  Er du ny hos os? Opret en konto og få adgang til at oprette og dele ressourcer. 
                  Det er nemt og hurtigt at komme i gang.
                </p>
                <p>
                  Når du har oprettet en konto, kan du logge ind og se dine egne ressourcer, kontakte andre virksomheder og udnytte bæredygtige partnerskaber.
                </p>
                <div className="d-grid">
                  <a href="/register" className="btn btn-outline-primary">Opret en konto</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default LoginPage;
