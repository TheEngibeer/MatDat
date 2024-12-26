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
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Ikke logget ind, omdiriger til login
      navigate('/login');
    }
  }, [navigate]);

  const token = localStorage.getItem("token");

  const handleSubmit = async (status) => {
    // status er "draft" eller "published"
    const newResourceData = {
      material: material.trim(),
      category: category.trim(),
      location: location.trim(),
      quantity: parseInt(quantity, 10),
      price: parseFloat(price),
      description: description.trim(),
      image_url: imageUrl.trim() || "https://via.placeholder.com/400x200",
      status,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/resources/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(newResourceData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ukendt fejl under oprettelse af ressource");
      }

      console.log("Ressource oprettet:", data);
      navigate('/profile');
    } catch (error) {
      console.error("Fejl ved oprettelse af ressource:", error.message);
      setErrorMessage(error.message || "Noget gik galt. Prøv igen.");
    }
  };

  return (
    <div className="container my-5">
      <h1>Opret ny ressource</h1>
      <p>Udfyld felterne herunder for at oprette din ressource.</p>

      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

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
