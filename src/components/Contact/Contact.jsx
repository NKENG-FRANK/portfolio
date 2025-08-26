import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        submitting: false,
        error: false,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          submitting: false,
          error: false,
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section className="contact-form-container">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2>Get In Touch</h2>
          <p>
            Have a project in mind or want to collaborate? I'd love to hear from
            you! Reach out using the form or connect with me on social media.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-card">
            <h4 className="contact-name">Contact Information</h4>

            {/* Email */}
            <div className="contact-info-item mb-4">
              <div className="contact-avatar">
                <FaEnvelope />
              </div>
              <div>
                <h6 className="contact-name">Email</h6>
                <a
                  href="mailto:contact@example.com"
                  className="contact-info-item"
                  style={{ color: "#2563eb", textDecoration: "none" }}
                >
                  contact@example.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-info-item mb-4">
              <div className="contact-avatar">
                <FaPhone />
              </div>
              <div>
                <h6 className="contact-name">Phone</h6>
                <a
                  href="tel:+1234567890"
                  className="contact-info-item"
                  style={{ textDecoration: "none" }}
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="contact-info-item mb-4">
              <div className="contact-avatar">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h6 className="contact-name">Location</h6>
                <p className="contact-info-item">
                  San Francisco, California
                  <br />
                  United States
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-4">
              <h6 className="contact-name mb-3">Connect With Me</h6>
              <div className="contact-actions">
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0",
                  }}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="btn btn-secondary"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0",
                    background: "#374151",
                    color: "white",
                  }}
                >
                  <FaGithub />
                </a>
                <a
                  href="#"
                  className="btn btn-secondary"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0",
                    background: "#0ea5e9",
                    color: "white",
                  }}
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form" style={{ gridColumn: "span 2" }}>
            <h4 className="contact-name mb-4">Send Me a Message</h4>
            <form onSubmit={handleSubmit}>
              <div
                className="contact-grid"
                style={{
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="form-submit"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane style={{ marginRight: "0.5rem" }} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>

            {formStatus.submitted && (
              <div className="alert alert-success mt-4">
                <FaCheckCircle style={{ marginRight: "0.5rem" }} />
                <span>Your message has been sent. Thank you!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
