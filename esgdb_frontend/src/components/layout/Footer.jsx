import React from "react";
import '../../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Firmaoplysninger */}
          <div className="col-md-4">
            <h5>Sustensive</h5>
            <p>
              Din platform til deling af overskydende materialer. Vi hjælper
              virksomheder med at blive mere bæredygtige.
            </p>
          </div>

          {/* Hurtige links */}
          <div className="col-md-4">
            <h5>Hurtige links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-white">
                  Om os
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="/terms" className="text-white">
                  Vilkår og betingelser
                </a>
              </li>
            </ul>
          </div>

          {/* Sociale medier */}
          <div className="col-md-4 text-center">
            <h5>Følg os</h5>
            <div className="d-flex justify-content-center">
              <a href="https://facebook.com" className="text-white me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" className="text-white me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://linkedin.com" className="text-white">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-light" />
        <div className="text-center">
          <p className="mb-0">© 2024 Sustensive - Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
