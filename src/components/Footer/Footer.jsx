// src/components/Footer/Footer.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./Footer.css"; // ← IMPORTANT: import the CSS
import logo from "../../logo_navbar.png"; // adjust path if needed

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: plug into your backend / service
    alert("Thanks for subscribing!");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + About */}
        <section className="footer-section about">
          <div className="logo-row">
            <img src={logo} alt="My Portfolio logo" className="footer-logo" />
            <span className="footer-title">My Portfolio</span>
          </div>

          <p className="footer-copy">
            Creating innovative software solutions that help businesses thrive
            in the digital world. Let's build something amazing together.
          </p>

          <nav className="social-icons" aria-label="Social links">
            <a
              href="https://www.linkedin.com/in/nkeng-frank-b01a96306"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/NKENG-FRANK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://x.com/FrankNkeng"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://wa.me/237693791276?text=Salut%2C%20je%20viens%20de%20ton%20portfolio%20!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </nav>
        </section>

        {/* Contact Info */}
        <section className="footer-section contact">
          <h3 className="footer-heading">Contact Info</h3>
          <ul className="contact-list">
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="icon email" />
              <a href="mailto:fnkeng52@gmail.com">fnkeng52@gmail.com</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="icon phone" />
              <a href="tel:+237693791276">+237 (693) 791-276</a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="icon location"
              />
              <span>Yaounde, Cameroon / United States</span>
            </li>
          </ul>
        </section>

        {/* Newsletter */}
        <section className="footer-section newsletter">
          <h3 className="footer-heading">Stay Updated</h3>
          <p className="footer-copy">
            Subscribe to my newsletter for the latest projects, tech insights,
            and opportunities.
          </p>

          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Your email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {currentYear} DevPortfolio. All rights reserved.</p>
        <ul className="policy-links">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Cookie Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
