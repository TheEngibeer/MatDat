import React from "react";
import "../styles/AboutPage.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import MathiasImage from "../assets/images/Mathias.jpg";
import DennisImage from "../assets/images/Dennis.jpg";

function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')",
        }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">Om Sustensive</h1>
          <p className="hero-subtitle">
            Vi skaber forbindelse mellem virksomheder og fremmer bæredygtighed.
          </p>
        </div>
      </div>

      {/* Mission og Vision */}
      <div className="section mission-vision-section">
        <div className="content">
          <div className="text">
            <h2>Vores Mission</h2>
            <p>
              At gøre bæredygtighed og cirkulær økonomi tilgængeligt og let for virksomheder. Vi hjælper
              virksomheder med at reducere spild og skabe økonomisk værdi gennem genbrug.
            </p>
          </div>
          <div className="image">
            <img
              src="https://plus.unsplash.com/premium_photo-1734448809926-d92929d667cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mission"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="section team-section bg-light">
        <h2 className="text-center">Mød Teamet</h2>
        <div className="team-grid">
          {/* Mathias */}
          <div className="team-card">
            <img
              src={MathiasImage}
              alt="Mathias B. Madsen"
              className="img-fluid rounded-circle mb-3"
            />
            <h5>Mathias B. Madsen</h5>
            <p>CEO & Grundlægger</p>
            <p>
              Mathias har en passion for bæredygtighed og en stærk vision for at hjælpe virksomheder med at
              opnå deres ESG-mål gennem innovation og samarbejde.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" /> <span>mathias@sustensive.com</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" /> <span>+45 1234 5678</span>
              </div>
            </div>
          </div>

          {/* Dennis */}
          <div className="team-card">
            <img
              src={DennisImage}
              alt="Dennis B. Madsen"
              className="img-fluid rounded-circle mb-3"
            />
            <h5>Dennis B. Madsen</h5>
            <p>COO</p>
            <p>
              Dennis har mange års erfaring med operationel ledelse og sikrer, at Sustensive fungerer optimalt
              og leverer værdi til vores kunder hver dag.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" /> <span>dennis@sustensive.com</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" /> <span>+45 1234 5678</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="section cta-section text-center bg-primary text-white">
        <h2>Vil du være en del af vores rejse?</h2>
        <a href="/register" className="btn btn-light btn-lg">
          Opret en konto i dag
        </a>
      </div>
    </div>
  );
}

export default AboutPage;
