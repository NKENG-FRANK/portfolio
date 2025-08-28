import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../logo_navbar.png";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation and menu closing
  const handleNavClick = (href) => {
    // Navigate to the section first
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    // Close the mobile menu - multiple approaches for reliability
    const closeMenu = () => {
      const navbarCollapse = document.getElementById("navbarSupportedContent");
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        // Method 1: Try Bootstrap's collapse API
        if (window.bootstrap && window.bootstrap.Collapse) {
          const bsCollapse =
            window.bootstrap.Collapse.getInstance(navbarCollapse) ||
            new window.bootstrap.Collapse(navbarCollapse, { toggle: false });
          bsCollapse.hide();
        } else {
          // Method 2: Simulate toggle button click
          const toggleButton = document.querySelector(".navbar-toggler");
          if (toggleButton) {
            toggleButton.click();
          } else {
            // Method 3: Manual class removal
            navbarCollapse.classList.remove("show");
          }
        }
      }
    };

    // Small delay to ensure navigation happens first
    setTimeout(closeMenu, 100);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-scrolled" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "#050d1a" : "transparent",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img src={Logo} alt="Logo" className="me-2 rounded" />
          <span className="text-white fw-bold">DevPortfolio</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#home");
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#about");
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#skills");
                }}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#experience");
                }}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#footer"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#footer");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
