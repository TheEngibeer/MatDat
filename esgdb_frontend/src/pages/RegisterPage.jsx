import React, { useState } from 'react';

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Adgangskoder stemmer ikke overens!");
      return;
    }

    fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
      if (data.message) {
        // Succes! Omdiriger til login eller vis en besked
        alert("Bruger oprettet! Log ind for at fortsætte.");
        window.location.href = "/login";
      } else if (data.error) {
        alert(data.error);
      }
    })
    .catch(err => console.error(err));
  };

  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <div className="py-4 mb-4 border-bottom" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <h1 className="h3">Opret en konto</h1>
        </div>
      </div>

      <div className="container" style={{ maxWidth: "400px" }}>
        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="h4 text-center mb-4">Ny bruger</h2>
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label className="form-label">Brugernavn</label>
                <input 
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Vælg et brugernavn"
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
                  placeholder="Vælg en adgangskode"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Bekræft adgangskode</label>
                <input 
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Gentag adgangskode"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Opret konto</button>
            </form>
            <div className="mt-3 text-center">
              <a href="/login" className="text-decoration-none">Har du allerede en konto? Log ind</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
