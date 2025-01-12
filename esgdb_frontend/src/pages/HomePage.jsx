import React from "react";
import "../styles/HomePage.css"; // Beholder den eksisterende CSS
import "../styles/Globals.css"; // Importerer de globale stilarter
import "../styles/Variables.css"; // Importerer variablerne

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-3">
                Skab værdi med <span className="highlight">Sustensive</span>
              </h1>
              <p className="lead mb-4">
                Forbind virksomheder, reducer spild og optimer bæredygtighed.
              </p>
              <div className="d-flex justify-content-start">
                <a href="/register" className="btn btn-primary btn-lg me-3">
                  Kom i gang
                </a>
                <a href="/resources" className="btn btn-outline-light btn-lg">
                  Udforsk ressourcer
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://img.freepik.com/free-photo/businessmen-shaking-hands-near-building_23-2148308575.jpg"
                alt="Glad kunde"
                className="img-fluid rounded hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pain, Agitate, Solution Section */}
      <div className="problem-section section py-5 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="video-placeholder">[Video kommer senere]</div>
            </div>
            <div className="col-md-6">
              <p>
                <strong>Mange virksomheder står tilbage med overskudsmateriale fra produktionen. </strong> 
                Det er i sidste ende noget, man skal tage stilling til, hvad enten det er at smide det ud, lagre det, eller finde en løsning. Ofte ender det med at blive spildt, hvilket både koster tid og penge og skaber et negativt indtryk af virksomheden i et stadig mere bæredygtighedsorienteret marked.
              </p>
              <p>
                <strong>Dette skaber både økonomiske og miljømæssige tab. </strong>
                Når materialer ikke genbruges eller genanvendes, resulterer det i tabte ressourcer, øgede omkostninger og en negativ påvirkning af virksomhedens ESG-mål. Samtidig kan spild føre til en stigning i affaldshåndteringsomkostninger og en forringelse af virksomhedens image blandt miljøbevidste kunder og investorer.
              </p>
              <p>
                <strong>Sustensive er løsningen. </strong>
                Ved at forbinde virksomheder gennem vores platform, hjælper Sustensive dig med at finde nye partnere, der kan udnytte dine overskudsmaterialer. Dette betyder, at materialer, der tidligere ville være gået til spilde, nu kan skabe værdi – økonomisk, miljømæssigt og strategisk – samtidig med at du styrker din virksomheds bæredygtighedsprofil.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section section py-5 text-center">
        <div className="container">
          <h2>Fordele ved Sustensive</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="benefit-card">
                <i className="bi bi-people"></i>
                <h3>Find virksomheder</h3>
                <p>Gør det nemt at finde nye partnere som kan hjælpe med en grønnere profil.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefit-card">
                <i className="bi bi-recycle"></i>
                <h3>Frem ESG-målene</h3>
                <p>Bidrag til en grønnere fremtid ved at reducere CO2-aftryk.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefit-card">
                <i className="bi bi-cash-stack"></i>
                <h3>Øg indtjening</h3>
                <p>Få værdi fra dit produktionsspild ved at gøre affald til et produkt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section section">
        <div className="container">
          <h2>Funktioner</h2>
          <div className="features-grid">
            <div className="feature-column">
              <ul>
                <li>Nem oprettelse af ressourcer</li>
                <li>Søgeværktøjer til materialer</li>
                <li>Notifikationssystem</li>
                <li>ESG-integration</li>
                <li>Dashboard med statistik</li>
              </ul>
            </div>
            <div className="feature-column">
              <ul>
                <li>Brugeranmeldelser</li>
                <li>Sikker betaling</li>
                <li>Dataanalyser</li>
                <li>Støtte til flere sprog</li>
                <li>Support 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section section py-5">
        <div className="container text-center">
          <h2>Hvad siger vores brugere?</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="testimonial-card">
                <blockquote className="testimonial-quote">
                  "Sustensive har hjulpet os med at reducere spild og finde nye
                  partnere. Vi er ekstremt tilfredse med platformen."
                </blockquote>
                <div className="testimonial-info d-flex align-items-center justify-content-center">
                  <img
                    src="https://via.placeholder.com/70"
                    alt="Maria"
                    className="testimonial-image"
                  />
                  <div className="testimonial-text">
                    <p className="testimonial-name">Maria, GrønTech</p>
                    <div className="testimonial-stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <blockquote className="testimonial-quote">
                  "Vi fandt hurtigt en partner til vores materialer. Sustensive
                  har virkelig gjort en forskel."
                </blockquote>
                <div className="testimonial-info d-flex align-items-center justify-content-center">
                  <img
                    src="https://via.placeholder.com/70"
                    alt="Jens"
                    className="testimonial-image"
                  />
                  <div className="testimonial-text">
                    <p className="testimonial-name">Jens, BygSpar</p>
                    <div className="testimonial-stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <blockquote className="testimonial-quote">
                  "Platformen er enkel og intuitiv. Vi har reduceret vores
                  miljøaftryk markant takket være Sustensive."
                </blockquote>
                <div className="testimonial-info d-flex align-items-center justify-content-center">
                  <img
                    src="https://via.placeholder.com/70"
                    alt="Sarah"
                    className="testimonial-image"
                  />
                  <div className="testimonial-text">
                    <p className="testimonial-name">Sarah, Miljøven ApS</p>
                    <div className="testimonial-stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Call-to-Action */}
      <div className="cta-section section py-5 text-center bg-primary text-white">
        <h2>Klar til at gøre din virksomhed grønnere?</h2>
        <a href="/register" className="btn btn-light btn-lg">
          Kom i gang i dag
        </a>
      </div>
    </>
  );
}

export default HomePage;
