import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [myResources, setMyResources] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }

        // Hent brugerinfo
        fetch("http://127.0.0.1:5000/profile", {
            headers: {
                Authorization: token,
            },
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

        // Hent brugerens ressourcer
        fetch("http://127.0.0.1:5000/resources/myresources", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
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
    }, [navigate]);

    const handleDeleteResource = (resourceId) => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Du skal være logget ind for at slette en ressource.");
            return;
        }

        fetch(`http://127.0.0.1:5000/resources/${resourceId}`, {
            method: "DELETE",
            headers: {
                Authorization: token,
            },
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
        <div className="container my-5">
            <h1 className="mb-4">Min Database</h1>
            <p>
                <strong>Brugernavn:</strong> {username}
            </p>
            <p>Her kan du oprette og se dine ressourcer:</p>
            <button
                onClick={() => navigate("/create")}
                className="btn btn-primary mb-3"
            >
                Opret ny ressource
            </button>

            <h2>Dine ressourcer</h2>
            {myResources.length > 0 ? (
                <ul className="list-group">
                    {myResources.map((res) => (
                        <li
                            key={res.id}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            <div>
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
                            </div>
                            <div className="d-flex flex-column align-items-end">
                                <button
                                    className="btn btn-danger btn-sm mb-2"
                                    onClick={() => handleDeleteResource(res.id)}
                                >
                                    Slet
                                </button>
                                {res.status === "draft" && (
                                    <button
                                        className="btn btn-success btn-sm"
                                        onClick={() =>
                                            alert("Publiceringsfunktion er under udvikling!")
                                        }
                                    >
                                        Publicer
                                    </button>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Du har ingen ressourcer endnu. Opret en ny ressource for at komme i gang!</p>
            )}
        </div>
    );
}

export default ProfilePage;
