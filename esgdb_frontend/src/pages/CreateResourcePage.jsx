import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateResourcePage() {
  const navigate = useNavigate();
  const [material, setMaterial] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Ikke logget ind, omdiriger til login
      navigate('/login');
    }
  }, [navigate]);

  const token = localStorage.getItem("token");

  const handleSubmit = (status) => {
    // status er "draft" eller "published"
    const newResourceData = {
      material,
      quantity: parseInt(quantity, 10),
      price: parseFloat(price),
      description,
      category,
      location,
      image_url: imageUrl || "https://via.placeholder.com/400x200",
      status
    };

    fetch("http://127.0.0.1:5000/resources/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify(newResourceData)
    })
    .then(res => res.json())
    .then(data => {
      if (data.id) {
        // Succesfuld oprettelse
        // Omdiriger tilbage til "Min database"
        navigate('/profile');
      } else {
        alert("Kunne ikke oprette ressource: " + (data.error || "Ukendt fejl"));
      }
    })
    .catch(error => console.error("Error creating resource:", error));
  };

  return (
    <div className="container my-5">
      <h1>Opret ny ressource</h1>
      <p>Udfyld felterne herunder for at oprette din ressource.</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label className="form-label">Materiale</label>
          <input
            type="text"
            className="form-control"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Kategori</label>
          <input
            type="text"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Lokation</label>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Antal</label>
          <input
            type="number"
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Pris (DKK)</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Beskrivelse</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Billede URL</label>
          <input
            type="text"
            className="form-control"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-secondary" onClick={() => handleSubmit("draft")}>Gem som kladde</button>
          <button className="btn btn-success" onClick={() => handleSubmit("published")}>Publicer</button>
        </div>
      </form>
    </div>
  );
}

export default CreateResourcePage;
