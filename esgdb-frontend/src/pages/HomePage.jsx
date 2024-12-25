import React from "react";
import CountUp from "react-countup";
import "../styles/HomePage.css";


function HomePage() {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Tekstindhold */}
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-3">
                Velkommen til <span className="highlight">Sustensive</span>
              </h1>
              <p className="lead mb-4">
                Gør bæredygtighed enkelt. Find og del overskydende materialer i dag.
              </p>
              <div className="d-flex justify-content-start">
                <a href="/resources" className="btn btn-primary btn-lg me-3">
                  Udforsk ressourcer
                </a>
                <a href="/register" className="btn btn-outline-light btn-lg">
                  Opret konto
                </a>
              </div>
            </div>

            {/* Hero Billede */}
            <div className="col-md-6">
              <div
                className="hero-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1596097198305-e4844a56ddb8?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>



      {/* Om sektionen */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>sustensive's mission</h2>
            <p>
            Hos Sustensive har vi en klar mission: at gøre bæredygtighed nemt og værdiskabende for virksomheder.
            Vi skaber en platform, der:
            </p>
            <ul>
              <li>Forbinder virksomheder med ressourcer og muligheder.</li>
              <li>Reducerer spild gennem genbrug og optimering.</li>
              <li>Hjælper virksomheder med at opnå deres ESG-mål.</li>
            </ul>
            <p>
            Ved at fremme cirkulær økonomi og gennemsigtige data, vil vi bygge en grønnere og mere ansvarlig fremtid – én virksomhed ad gangen.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src=""
              alt="Bæredygtighed"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* Statistik-sektion */}
      <div className="statistics-section py-5 text-center">
        <div className="container">
          <h2 className="mb-4">Platformens impact</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="stat-card shadow-sm">
                <i className="bi bi-people-fill stat-icon"></i>
                <h3>
                  <CountUp end={1200} duration={0.5} suffix="+" />
                </h3>
                <p>Registrerede brugere</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-card shadow-sm">
                <i className="bi bi-box-seam stat-icon"></i>
                <h3>
                  <CountUp end={8500} duration={0.5} suffix="+" />
                </h3>
                <p>Delte ressourcer</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-card shadow-sm">
                <i className="bi bi-recycle stat-icon"></i>
                <h3>
                  <CountUp end={20000} duration={0.5} suffix=" tons" />
                </h3>
                <p>Genbrugte materialer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial-sektion */}
      <div className="testimonials-section py-5">
        <div className="container text-center">
          <h2>Hvad siger vores brugere?</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <blockquote>
                "ESG Database har gjort det muligt for os at reducere vores spild
                og finde nye partnere. En fantastisk platform!"
              </blockquote>
              <p className="text-muted">- Maria, GrønTech</p>
            </div>
            <div className="col-md-4">
              <blockquote>
                "Vi fandt en leverandør til vores genbrugsmaterialer inden for få
                dage. Tak for denne løsning!"
              </blockquote>
              <p className="text-muted">- Jens, BygSpar</p>
            </div>
            <div className="col-md-4">
              <blockquote>
                "Det er nemt at bruge ESG Database, og vi bidrager nu til en mere
                bæredygtig fremtid."
              </blockquote>
              <p className="text-muted">- Sarah, Miljøven ApS</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ-sektion */}
      <div className="faq-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center">Ofte stillede spørgsmål</h2>
          <div className="accordion mt-4" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Hvordan fungerer ESG Database?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  ESG Database giver dig mulighed for at dele og finde
                  overskydende ressourcer. Du kan oprette en konto, uploade
                  ressourcer og kontakte andre virksomheder.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Er det gratis at bruge platformen?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Det er gratis at oprette en konto og søge efter ressourcer.
                  Nogle funktioner kan kræve et abonnement.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </>
  );
}

export default HomePage;
