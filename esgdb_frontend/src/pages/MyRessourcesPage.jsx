import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/MyRessourcesPage.css";

function MyResourcesPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [myResources, setMyResources] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfile = () => {
      fetch("http://127.0.0.1:5000/profile", {
        headers: { Authorization: token },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.username) {
            setUsername(data.username);
          } else {
            alert("Kunne ikke hente profilinfo, log venligst ind igen.");
            localStorage.removeItem("token");
            navigate("/login");
          }
        })
        .catch((err) => console.error(err));
    };

    const fetchResources = () => {
      fetch("http://127.0.0.1:5000/resources/myresources", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setMyResources(data);
          } else {
            console.error("Unexpected response:", data);
          }
        })
        .catch((err) => console.error(err));
    };

    fetchProfile();
    fetchResources();
  }, [navigate]);

  const handleDeleteResource = (resourceId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Du skal være logget ind for at slette en ressource.");
      return;
    }

    fetch(`http://127.0.0.1:5000/resources/${resourceId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setMyResources(myResources.filter((r) => r.id !== resourceId));
        } else if (data.error) {
          alert("Fejl: " + data.error);
        }
      })
      .catch((error) => console.error("Error deleting resource:", error));
  };

  return (
    <div className="my-resources-page">
      <nav className="nav nav-pills flex-column flex-sm-row mb-4">
        <Link className="flex-sm-fill text-sm-center nav-link" to="/dashboard">
          Dashboard
        </Link>
        <Link className="flex-sm-fill text-sm-center nav-link" to="/profile">
          Min profil
        </Link>
        <Link className="flex-sm-fill text-sm-center nav-link active" to="/myresources">
          Mine ressourcer
        </Link>
        <Link className="flex-sm-fill text-sm-center nav-link" to="/searchresources">
          Søg Ressourcer
        </Link>
        <Link className="flex-sm-fill text-sm-center nav-link" to="/subscriptions">
          Abonnementer
        </Link>
        <Link className="flex-sm-fill text-sm-center nav-link" to="/agent">
          Agent
        </Link>
      </nav>

      <h2 className="mb-4">Dine ressourcer</h2>
      {myResources.length > 0 ? (
        <div className="resources-grid">
          {myResources.map((res) => (
            <div key={res.id} className="resource-card">
              <h5>{res.material}</h5>
              <p>
                <strong>Kategori:</strong> {res.category || "Ikke angivet"}
              </p>
              <p>
                <strong>Antal:</strong> {res.quantity}
              </p>
              <p>
                <strong>Pris:</strong> {res.price} DKK
              </p>
              {res.description && (
                <p>
                  <strong>Beskrivelse:</strong> {res.description}
                </p>
              )}
              <div className="buttons">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteResource(res.id)}
                >
                  Slet
                </button>
                {res.status === "draft" && (
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => alert("Publiceringsfunktion er under udvikling!")}
                  >
                    Publicer
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p>Du har ingen ressourcer endnu. Opret en ny ressource for at komme i gang!</p>
          <Link to="/create" className="btn btn-primary">
            Opret Ressource
          </Link>
        </div>
      )}
    </div>
  );
}

export default MyResourcesPage;
